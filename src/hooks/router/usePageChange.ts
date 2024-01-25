import useSearchParams, { ChangeRouterStrategy } from 'hooks/router/useSearchParams'
import { DEFAULT_LIMIT } from 'utils/config/constants'

const getValue = (searchParams: URLSearchParams, key: string, defaultValue: number = 0) => {
  const value = searchParams.get(key) as string
  if (!value) return defaultValue
  const parsedNumber = Number(value)
  if (isNaN(parsedNumber)) return defaultValue
  return parsedNumber
}

export default function usePageChange({
  pageKey = 'page',
  callback,
  strategy,
}: {
  pageKey?: string
  callback?: () => void
  strategy?: ChangeRouterStrategy
}) {
  const { searchParams, updateSearchParams } = useSearchParams()
  const currentPage = getValue(searchParams, pageKey, 1)
  const changeCurrentPage = (page: number) => {
    callback && callback()
    updateSearchParams({ [pageKey]: page.toString() }, { strategy })
  }
  return { currentPage, changeCurrentPage }
}
export function usePageChangeWithLimit({
  pageKey = 'page',
  limitKey = 'limit',
  defaultLimit = DEFAULT_LIMIT,
  callback,
  strategy = 'push',
  scroll,
}: {
  pageKey?: string
  limitKey?: string
  defaultLimit?: number
  callback?: (args?: { page?: number; limit?: number }) => void
  strategy?: ChangeRouterStrategy
  scroll?: boolean
}) {
  const { searchParams, updateSearchParams } = useSearchParams()
  const currentPage = getValue(searchParams, pageKey, 1)
  const currentLimit = getValue(searchParams, limitKey, defaultLimit)

  const changeCurrentPage = (page: number) => {
    callback && callback({ page, limit: currentLimit })
    updateSearchParams({ [pageKey]: page.toString() }, { strategy, scroll })
  }
  const changeCurrentLimit = (limit: number) => {
    callback && callback({ limit, page: 1 })
    updateSearchParams({ [limitKey]: limit.toString(), [pageKey]: '1' }, { strategy, scroll })
  }
  return {
    currentPage,
    changeCurrentPage,
    currentLimit,
    changeCurrentLimit,
  }
}
