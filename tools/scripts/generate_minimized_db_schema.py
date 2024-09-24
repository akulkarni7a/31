"""
This script generates a minimized db schema (either user or global databases) for schema
sanity check and puts it either in rotkehlchen/db/minimized_schema.py or
rotkehlchen/globaldb/minimized_schema.py depending on the mode.
The mode is selected by passing either --db-name user or --db-name global.
"""

import argparse
import datetime
import re
from pathlib import Path
from typing import Literal

from rotkehlchen.db.checks import db_script_normalizer
from rotkehlchen.db.schema import DB_SCRIPT_CREATE_TABLES as USER_DB_CREATE_TABLES
from rotkehlchen.globaldb.schema import DB_SCRIPT_CREATE_TABLES as GLOBAL_DB_CREATE_TABLES
from rotkehlchen.utils.misc import get_system_spec

p = argparse.ArgumentParser()
p.add_argument(
    '--db-name',
    help='Type of the db for which to generate minimized schema',
    type=str,
    choices=['user', 'global'],
    required=True,
)
p.add_argument(
    '--author',
    help='Who is running this script? Used just for informational purposes',
    type=str,
    required=True,
)
args = p.parse_args()
db_name: Literal['user', 'global'] = args.db_name

# Make dictionary of table_name: table_properites. Without whitespaces. For example:
# this {"ens_mappings": "CREATETABLEIFNOTEXISTSens_mappings(addressTEXTNOTNULLPRIMARYKEY,ens_nameTEXTUNIQUE,last_updateINTEGERNOTNULL);"}  # noqa: E501
db_script = USER_DB_CREATE_TABLES if db_name == 'user' else GLOBAL_DB_CREATE_TABLES
regexp_result = re.findall(
    pattern=r'createtableifnotexists(.+?)\((.+?)\);',
    # Replacing new lines and white spaces since they may vary if by an accident code of a
    # db upgrade was a bit different from the one that creates new tables
    string=db_script_normalizer(db_script),
)

lines = [
    '# This file contains minimized db schema and it should not be touched manually but only '
    'generated by tools/scripts/generate_minimized_db_schema.py',
]

created_at = datetime.datetime.now(tz=datetime.UTC).strftime('%Y-%m-%d %H:%M:%S')
rotki_version = get_system_spec()['rotkehlchen']
lines.extend((
    f'# Created at {created_at} UTC with rotki version {rotki_version} by {args.author}',
    f'MINIMIZED_{db_name.upper()}_DB_SCHEMA = {{',
))
for name, properties in regexp_result:
    lines.append(f'    "{name}": "{properties}",')
lines.append('}')

# Save to the file
db_module = 'db' if db_name == 'user' else 'globaldb'
Path(f'rotkehlchen/{db_module}/minimized_schema.py').write_text('\n'.join(lines) + '\n', encoding='utf8')  # noqa: E501
