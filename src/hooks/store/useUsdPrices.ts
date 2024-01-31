import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface UsdPrices {
  [key: string]: number | undefined
}
interface BalancesState {
  prices: UsdPrices
  setPrices: (prices: UsdPrices) => void
  setPrice: ({ address, price }: { address: string; price: number }) => void
}

const useUsdPricesStore = create<BalancesState>()(
  immer((set) => ({
    prices: {},
    setPrices: (prices) =>
      set((state) => {
        state.prices = prices
      }),
    setPrice: ({ address, price }: { address: string; price: number }) =>
      set((state) => {
        if (state.prices[address]) {
          state.prices[address] = price
        }
        console.log('state.prices', state.prices, address, price)
      }),
  }))
)
export const useRealtimeUsdPricesStore = create<
  BalancesState & { isReady: boolean; setIsReady: (isReady: boolean) => void }
>()(
  immer((set) => ({
    prices: {},
    isReady: false,
    setIsReady: (isReady) =>
      set((state) => {
        state.isReady = isReady
      }),
    setPrices: (prices) =>
      set((state) => {
        state.prices = prices
      }),
    setPrice: ({ address, price }: { address: string; price: number }) =>
      set((state) => {
        state.prices[address] = price
      }),
  }))
)

export default useUsdPricesStore
