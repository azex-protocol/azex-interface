import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { QUERY_KEYS } from 'utils/config/keys'
import { get24hPricesApi } from 'apis/pythApis'
import dayjs from 'dayjs'

export function use24hPriceDelta(tokenSymbol?: string) {
  const to = dayjs().utc()
  const from = to.subtract(1, 'day')
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.GET_24H_PRICES, tokenSymbol],
    () =>
      get24hPricesApi({
        symbol: tokenSymbol ?? '',
        from: from.unix(),
        to: to.unix(),
      }),
    {
      retry: 0,
      refetchInterval: 30 * 1000,
      enabled: !!tokenSymbol,
    }
  )

  const priceDelta = useMemo(() => {
    if (!data || data.t.length === 0) {
      return
    }
    const tokenDelta = {
      time: data.t[0] * 1000,
      low: data.l[0],
      high: data.h[0],
      open: data.o[0],
      close: data.c[0],
    }

    const deltaPrice = tokenDelta.close - tokenDelta.open
    const deltaPercentage = (deltaPrice * 100) / tokenDelta.open
    const deltaPercentageStr =
      deltaPercentage > 0 ? `+${deltaPercentage.toFixed(2)}%` : `${deltaPercentage.toFixed(2)}%`

    return {
      ...tokenDelta,
      deltaPrice,
      deltaPercentage,
      deltaPercentageStr,
    }
  }, [data])

  return { priceDelta, isLoading }
}
