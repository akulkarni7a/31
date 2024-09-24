/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/address-book-manager/': RouteRecordInfo<'/address-book-manager/', '/address-book-manager', Record<never, never>, Record<never, never>>,
    '/api-keys/': RouteRecordInfo<'/api-keys/', '/api-keys', Record<never, never>, Record<never, never>>,
    '/api-keys/exchanges/': RouteRecordInfo<'/api-keys/exchanges/', '/api-keys/exchanges', Record<never, never>, Record<never, never>>,
    '/api-keys/external/': RouteRecordInfo<'/api-keys/external/', '/api-keys/external', Record<never, never>, Record<never, never>>,
    '/api-keys/premium/': RouteRecordInfo<'/api-keys/premium/', '/api-keys/premium', Record<never, never>, Record<never, never>>,
    '/asset-manager/': RouteRecordInfo<'/asset-manager/', '/asset-manager', Record<never, never>, Record<never, never>>,
    'asset-manager-custom': RouteRecordInfo<'asset-manager-custom', '/asset-manager/custom', Record<never, never>, Record<never, never>>,
    'asset-manager-managed': RouteRecordInfo<'asset-manager-managed', '/asset-manager/managed', Record<never, never>, Record<never, never>>,
    'asset-manager-more': RouteRecordInfo<'asset-manager-more', '/asset-manager/more', Record<never, never>, Record<never, never>>,
    'asset-manager-cex-mapping': RouteRecordInfo<'asset-manager-cex-mapping', '/asset-manager/more/cex-mapping', Record<never, never>, Record<never, never>>,
    'asset-manager-newly-detected': RouteRecordInfo<'asset-manager-newly-detected', '/asset-manager/more/newly-detected', Record<never, never>, Record<never, never>>,
    '/assets/[identifier]': RouteRecordInfo<'/assets/[identifier]', '/assets/:identifier', { identifier: ParamValue<true> }, { identifier: ParamValue<false> }>,
    'accounts-balances': RouteRecordInfo<'accounts-balances', '/balances', Record<never, never>, Record<never, never>>,
    'accounts-balances-blockchain': RouteRecordInfo<'accounts-balances-blockchain', '/balances/blockchain/:tab?', { tab?: ParamValueZeroOrOne<true> }, { tab?: ParamValueZeroOrOne<false> }>,
    'accounts-balances-exchange': RouteRecordInfo<'accounts-balances-exchange', '/balances/exchange/:exchange?', { exchange?: ParamValueZeroOrOne<true> }, { exchange?: ParamValueZeroOrOne<false> }>,
    'accounts-balances-manual': RouteRecordInfo<'accounts-balances-manual', '/balances/manual', Record<never, never>, Record<never, never>>,
    'accounts-balances-non-fungible': RouteRecordInfo<'accounts-balances-non-fungible', '/balances/non-fungible', Record<never, never>, Record<never, never>>,
    '/calendar/': RouteRecordInfo<'/calendar/', '/calendar', Record<never, never>, Record<never, never>>,
    'dashboard': RouteRecordInfo<'dashboard', '/dashboard', Record<never, never>, Record<never, never>>,
    '/defi': RouteRecordInfo<'/defi', '/defi', Record<never, never>, Record<never, never>>,
    '/defi/airdrops/': RouteRecordInfo<'/defi/airdrops/', '/defi/airdrops', Record<never, never>, Record<never, never>>,
    'defi-deposits': RouteRecordInfo<'defi-deposits', '/defi/deposits', Record<never, never>, Record<never, never>>,
    '/defi/deposits/liquidity/[[location]]': RouteRecordInfo<'/defi/deposits/liquidity/[[location]]', '/defi/deposits/liquidity/:location?', { location?: ParamValueZeroOrOne<true> }, { location?: ParamValueZeroOrOne<false> }>,
    '/defi/deposits/liquidity/balancer/': RouteRecordInfo<'/defi/deposits/liquidity/balancer/', '/defi/deposits/liquidity/balancer', Record<never, never>, Record<never, never>>,
    '/defi/deposits/liquidity/sushiswap/': RouteRecordInfo<'/defi/deposits/liquidity/sushiswap/', '/defi/deposits/liquidity/sushiswap', Record<never, never>, Record<never, never>>,
    '/defi/deposits/liquidity/uniswap-v2/': RouteRecordInfo<'/defi/deposits/liquidity/uniswap-v2/', '/defi/deposits/liquidity/uniswap-v2', Record<never, never>, Record<never, never>>,
    '/defi/deposits/liquidity/uniswap-v3/': RouteRecordInfo<'/defi/deposits/liquidity/uniswap-v3/', '/defi/deposits/liquidity/uniswap-v3', Record<never, never>, Record<never, never>>,
    'defi-deposits-protocols': RouteRecordInfo<'defi-deposits-protocols', '/defi/deposits/protocols', Record<never, never>, Record<never, never>>,
    'defi-liabilities': RouteRecordInfo<'defi-liabilities', '/defi/liabilities', Record<never, never>, Record<never, never>>,
    'defi-overview': RouteRecordInfo<'defi-overview', '/defi/overview', Record<never, never>, Record<never, never>>,
    'history': RouteRecordInfo<'history', '/history', Record<never, never>, Record<never, never>>,
    'deposits-withdrawals': RouteRecordInfo<'deposits-withdrawals', '/history/deposits-withdrawals', Record<never, never>, Record<never, never>>,
    'trades': RouteRecordInfo<'trades', '/history/trades', Record<never, never>, Record<never, never>>,
    'history-events': RouteRecordInfo<'history-events', '/history/transactions', Record<never, never>, Record<never, never>>,
    'import': RouteRecordInfo<'import', '/import', Record<never, never>, Record<never, never>>,
    '/locations/[identifier]': RouteRecordInfo<'/locations/[identifier]', '/locations/:identifier', { identifier: ParamValue<true> }, { identifier: ParamValue<false> }>,
    'nfts': RouteRecordInfo<'nfts', '/nfts', Record<never, never>, Record<never, never>>,
    'playground': RouteRecordInfo<'playground', '/playground', Record<never, never>, Record<never, never>>,
    'price-manager': RouteRecordInfo<'price-manager', '/price-manager', Record<never, never>, Record<never, never>>,
    'price-manager-historic': RouteRecordInfo<'price-manager-historic', '/price-manager/historic', Record<never, never>, Record<never, never>>,
    'price-manager-current': RouteRecordInfo<'price-manager-current', '/price-manager/latest', Record<never, never>, Record<never, never>>,
    '/reports/': RouteRecordInfo<'/reports/', '/reports', Record<never, never>, Record<never, never>>,
    '/reports/[id]': RouteRecordInfo<'/reports/[id]', '/reports/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/reports/wrapper': RouteRecordInfo<'/reports/wrapper', '/reports/wrapper', Record<never, never>, Record<never, never>>,
    '/settings': RouteRecordInfo<'/settings', '/settings', Record<never, never>, Record<never, never>>,
    '/settings/accounting/': RouteRecordInfo<'/settings/accounting/', '/settings/accounting', Record<never, never>, Record<never, never>>,
    '/settings/data-security/': RouteRecordInfo<'/settings/data-security/', '/settings/data-security', Record<never, never>, Record<never, never>>,
    '/settings/general/': RouteRecordInfo<'/settings/general/', '/settings/general', Record<never, never>, Record<never, never>>,
    '/settings/modules/': RouteRecordInfo<'/settings/modules/', '/settings/modules', Record<never, never>, Record<never, never>>,
    '/staking/[[location]]': RouteRecordInfo<'/staking/[[location]]', '/staking/:location?', { location?: ParamValueZeroOrOne<true> }, { location?: ParamValueZeroOrOne<false> }>,
    'statistics': RouteRecordInfo<'statistics', '/statistics', Record<never, never>, Record<never, never>>,
    '/user/': RouteRecordInfo<'/user/', '/user', Record<never, never>, Record<never, never>>,
    '/user/create/': RouteRecordInfo<'/user/create/', '/user/create', Record<never, never>, Record<never, never>>,
    '/user/login/': RouteRecordInfo<'/user/login/', '/user/login', Record<never, never>, Record<never, never>>,
  }
}
