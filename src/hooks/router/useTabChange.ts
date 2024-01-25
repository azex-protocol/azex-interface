import { useCallback } from 'react'

import useSearchParams, { ChangeRouterStrategy } from './useSearchParams'

const getTab = (searchParams: URLSearchParams, defaultTab: string, tabKey?: string) =>
  (searchParams.get(tabKey ?? 'tab') as string) || defaultTab

const useTabChange = ({
  defaultTab,
  tabKey,
  strategy,
}: {
  defaultTab: string
  tabKey?: string
  strategy?: ChangeRouterStrategy
}) => {
  const { searchParams, updateSearchParams } = useSearchParams()
  const tab = getTab(searchParams, defaultTab, tabKey)
  const changeTab = useCallback(
    (t: string, additionalParams: { [key: string]: string | null } = {}) => {
      updateSearchParams(
        {
          [tabKey ?? 'tab']: t,
          ...additionalParams,
        },
        { strategy }
      )
    },
    [updateSearchParams, tabKey, strategy]
  )
  return { tab, changeTab }
}

export default useTabChange
