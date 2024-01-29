import { Box, Flex, Type } from 'theme/base'

export default function TokenStatistics() {
  return (
    <Flex>
      <Type.Large>ETH/USD</Type.Large>
      <Box ml={55}>
        <Box>
          <Type.Body>$2,565.48</Type.Body>
        </Box>
        <Box>
          <Type.Caption color={'neutral3'}>$2,565.48</Type.Caption>
        </Box>
      </Box>
      <Box ml={3}>
        <Box>
          <Type.Caption color={'neutral3'}>24h Change</Type.Caption>
        </Box>
        <Box>
          <Type.Body>$2,565.48</Type.Body>
        </Box>
      </Box>
      <Box ml={3}>
        <Box>
          <Type.Caption color={'neutral3'}>24h High</Type.Caption>
        </Box>
        <Box>
          <Type.Body>$2,565.48</Type.Body>
        </Box>
      </Box>
      <Box ml={3}>
        <Box>
          <Type.Caption color={'neutral3'}>24h Low</Type.Caption>
        </Box>
        <Box>
          <Type.Body>$2,565.48</Type.Body>
        </Box>
      </Box>
    </Flex>
  )
}
