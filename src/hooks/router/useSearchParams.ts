import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export type ChangeRouterStrategy = 'push' | 'replace'

const getSearchString = (path: string) => {
  const search = path.split('?')[1]
  if (!search) return ''
  return search.split('#')[0]
}

const getHashString = (path: string) => {
  const hash = path.split('#')[1]
  if (!hash) return ''
  return hash.split('?')[0]
}

type ChangeRouterOption = {
  strategy?: ChangeRouterStrategy
  scroll?: boolean
}

export default function useSearchParam() {
  const { push, replace, asPath } = useRouter()
  const pathname = usePathname()
  const searchParams = useMemo(() => new URLSearchParams(getSearchString(asPath)), [asPath])

  const changeRouter = (
    searchParams: URLSearchParams,
    { strategy = 'replace', scroll = false }: ChangeRouterOption
  ) => {
    const params = { pathname, search: searchParams.toString(), hash: getHashString(asPath) }
    return strategy === 'replace' ? replace(params, undefined, { scroll }) : push(params, undefined, { scroll })
  }

  const updateSearchParams = (params: { [key: string]: string | null }, options: ChangeRouterOption = {}) => {
    if (Object.keys(params).length === 0) return
    const urlSearchParams = new URLSearchParams(searchParams)
    for (const key in params) {
      if (!!key) {
        if (params[key]) {
          urlSearchParams.set(key, params[key] ?? '')
        } else {
          urlSearchParams.delete(key)
        }
      }
    }
    changeRouter(urlSearchParams, options)
  }

  const setSearchParams = (params: { [key: string]: string }, options: ChangeRouterOption = {}) => {
    if (Object.keys(params).length === 0) return
    const urlSearchParams = new URLSearchParams()
    for (const key in params) {
      if (!!key) urlSearchParams.set(key, params[key])
    }
    changeRouter(urlSearchParams, options)
  }

  return { searchParams, updateSearchParams, setSearchParams }
}
