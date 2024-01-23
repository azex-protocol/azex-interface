import { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import Loading from 'theme/Loading'
import { Box } from 'theme/base'
import ROUTES from 'utils/config/routes'

import AppWrapper from './AppWrapper'

const Home = lazy(() => import('./Home'))

function App() {
  return (
    <AppWrapper>
      <Suspense
        fallback={
          <Box p={4}>
            <Loading />
          </Box>
        }
      >
        <Switch>
          <Route exact path={ROUTES.HOME.path} component={Home}></Route>
          <Route path="*" component={() => <div>Not Found</div>}></Route>
        </Switch>
      </Suspense>
    </AppWrapper>
  )
}

export default App
