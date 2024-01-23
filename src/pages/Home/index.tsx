import Container from 'components/@ui/Container'
import { Box, Flex, Type } from 'theme/base'

import ActionContainer from './ActionContainer'

export default function Home() {
  return (
    <Flex p={2}>
      <Box width={'100%'}>
        <Container sx={{ margin: 2 }}>
          <Flex>
            <Type.Large>ETH/USD</Type.Large>
          </Flex>
        </Container>
        <Container sx={{ margin: 2 }}>
          <Type.Caption>Chart</Type.Caption>
        </Container>
      </Box>
      <Container sx={{ margin: 2, maxWidth: '600px', minWidth: '420px' }}>
        <ActionContainer />
      </Container>
    </Flex>
  )
}
