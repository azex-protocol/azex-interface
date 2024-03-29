import { useRealtimeUsdPricesStore } from 'hooks/store/useUsdPrices'

const streamingUrl = 'https://benchmarks.pyth.network/v1/shims/tradingview/streaming'
const channelToSubscription = new Map()

export default function useTVStreaming({ tokenSymbol }: { tokenSymbol?: string }) {
  const { setPrice } = useRealtimeUsdPricesStore()

  function startStreaming(retries = 3, delay = 3000) {
    fetch(streamingUrl)
      .then((response) => {
        const reader = response?.body?.getReader()

        function streamData() {
          reader
            ?.read()
            .then(({ value, done }) => {
              if (done) {
                console.error('[stream] Streaming ended.')
                return
              }

              // Assuming the streaming data is separated by line breaks
              const dataStrings = new TextDecoder().decode(value).split('\n')
              dataStrings.forEach((dataString) => {
                const trimmedDataString = dataString.trim()
                if (trimmedDataString) {
                  try {
                    const jsonData = JSON.parse(trimmedDataString)
                    handleStreamingData(jsonData)
                  } catch (e) {
                    console.error('Error parsing JSON:', e.message)
                  }
                }
              })

              streamData() // Continue processing the stream
            })
            .catch((error) => {
              console.error('[stream] Error reading from stream:', error)
              attemptReconnect(retries, delay)
            })
        }

        streamData()
      })
      .catch((error) => {
        console.error('[stream] Error fetching from the streaming endpoint:', error)
      })
    function attemptReconnect(retriesLeft: any, delay: any) {
      if (retriesLeft > 0) {
        console.log(`[stream] Attempting to reconnect in ${delay}ms...`)
        setTimeout(() => {
          startStreaming(retriesLeft - 1, delay)
        }, delay)
      } else {
        console.error('[stream] Maximum reconnection attempts reached.')
      }
    }
  }

  function handleStreamingData(data: any) {
    const { id, p, t } = data

    const tradePrice = p
    const tradeTime = t * 1000 // Multiplying by 1000 to get milliseconds

    const channelString = id
    const subscriptionItem = channelToSubscription.get(channelString)

    if (!subscriptionItem) {
      return
    }

    const lastDailyBar = subscriptionItem.lastDailyBar
    const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time)

    let bar: any
    if (tradeTime >= nextDailyBarTime) {
      bar = {
        time: nextDailyBarTime,
        open: tradePrice,
        high: tradePrice,
        low: tradePrice,
        close: tradePrice,
      }
      console.log('[stream] Generate new bar', bar)
    } else {
      bar = {
        ...lastDailyBar,
        high: Math.max(lastDailyBar.high, tradePrice),
        low: Math.min(lastDailyBar.low, tradePrice),
        close: tradePrice,
      }
      console.log('[stream] Update the latest bar by price', tradePrice)
    }

    subscriptionItem.lastDailyBar = bar
    console.log('tokenSymbol', tokenSymbol, tradePrice)
    if (tokenSymbol) {
      setPrice({ address: tokenSymbol, price: tradePrice })
    }

    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach((handler: any) => handler.callback(bar))
    channelToSubscription.set(channelString, subscriptionItem)
  }

  function subscribeOnStream(
    symbolInfo: any,
    resolution: any,
    onRealtimeCallback: any,
    subscriberUID: any,
    onResetCacheNeededCallback: any,
    lastDailyBar: any
  ) {
    const channelString = symbolInfo.ticker
    const handler = {
      id: subscriberUID,
      callback: onRealtimeCallback,
    }
    let subscriptionItem = channelToSubscription.get(channelString)
    subscriptionItem = {
      subscriberUID,
      resolution,
      lastDailyBar,
      handlers: [handler],
    }
    channelToSubscription.set(channelString, subscriptionItem)
    console.log('[subscribeBars]: Subscribe to streaming. Channel:', channelString, subscriptionItem)

    // Start streaming when the first subscription is made
    startStreaming()
  }

  function unsubscribeFromStream(subscriberUID: any) {
    // Find a subscription with id === subscriberUID
    for (const channelString of channelToSubscription.keys()) {
      const subscriptionItem = channelToSubscription.get(channelString)
      const handlerIndex = subscriptionItem.handlers.findIndex((handler: any) => handler.id === subscriberUID)

      if (handlerIndex !== -1) {
        // Unsubscribe from the channel if it is the last handler
        console.log('[unsubscribeBars]: Unsubscribe from streaming. Channel:', channelString)
        channelToSubscription.delete(channelString)
        break
      }
    }
  }

  return { subscribeOnStream, unsubscribeFromStream }
}

function getNextDailyBarTime(barTime: number) {
  const date = new Date(barTime)
  date.setDate(date.getDate() + 1)
  return date.getTime()
}
