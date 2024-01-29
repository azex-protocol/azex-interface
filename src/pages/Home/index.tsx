import Container from 'components/@ui/Container'
import { Box, Flex } from 'theme/base'

import ActionContainer from './ActionContainer'
import TradingViewChart from 'components/TradingViewChart'
import TokenStatistics from './TokenStatistics'

export default function Home() {
  return (
    <Flex p={2}>
      <Box width={'100%'}>
        <Container sx={{ margin: 2 }}>
          <TokenStatistics />
        </Container>
        <Container sx={{ margin: 2 }}>
          <TradingViewChart />
        </Container>
      </Box>
      <Container sx={{ margin: 2, maxWidth: '600px', minWidth: '420px' }}>
        <ActionContainer />
      </Container>
    </Flex>
  )
}
