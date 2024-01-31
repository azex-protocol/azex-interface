import pythRequester from './pythRequester'

export async function get24hPricesApi({
  symbol,
  from,
  to,
}: {
  symbol: string
  from: number
  to: number
}): Promise<any> {
  return pythRequester
    .get(`/history`, {
      params: {
        symbol,
        from,
        to,
        resolution: '1D',
      },
    })
    .then((res: any) => res.data)
}
