import { Box, Flex, Type } from 'theme/base'
import useGetUsdPrices from 'hooks/helpers/useGetUsdPrices'
import { use24hPriceDelta } from 'hooks/helpers/use24PriceDelta'
import { formatNumber } from 'utils/helpers/format'
import { SignedText } from 'components/@ui/DecoratedText/SignedText'

export default function TokenStatistics() {
  const { prices } = useGetUsdPrices()
  const { priceDelta } = use24hPriceDelta('ETHUSD')

  return (
    <Flex>
      <Type.Large>ETH/USD</Type.Large>
      <Box ml={55}>
        <Box>
          <Type.Body>${formatNumber(prices['ETHUSD'], 2, 2)}</Type.Body>
        </Box>
        <Box width={90}>
          <Type.Caption color={'neutral3'}>${formatNumber(prices['ETHUSD'], 2, 2)}</Type.Caption>
        </Box>
      </Box>
      <Box ml={3}>
        <Box>
          <Type.Caption color={'neutral3'}>24h Change</Type.Caption>
        </Box>
        <Box>
          <Type.Body>
            <SignedText value={priceDelta?.deltaPercentage} suffix={'%'} showPlus fontInherit />
          </Type.Body>
        </Box>
      </Box>
      <Box ml={3}>
        <Box>
          <Type.Caption color={'neutral3'}>24h High</Type.Caption>
        </Box>
        <Box>
          <Type.Body>${formatNumber(priceDelta?.high, 2, 2)}</Type.Body>
        </Box>
      </Box>
      <Box ml={3}>
        <Box>
          <Type.Caption color={'neutral3'}>24h Low</Type.Caption>
        </Box>
        <Box>
          <Type.Body>${formatNumber(priceDelta?.low, 2, 2)}</Type.Body>
        </Box>
      </Box>
    </Flex>
  )
}
