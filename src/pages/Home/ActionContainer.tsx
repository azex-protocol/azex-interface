import { ArrowBendDoubleUpLeft, ArrowDownLeft, ArrowUpLeft } from '@phosphor-icons/react'

import useTabHandler from 'hooks/router/useTabHandler'
import Tabs, { TabPane } from 'theme/Tab'
import { Box, Flex } from 'theme/base'

export enum TabKeyEnum {
  Long = 'long',
  Short = 'short',
  Swap = 'swap',
}

export default function ActionContainer() {
  const { tab, handleTab } = useTabHandler(TabKeyEnum.Long)

  return (
    <Tabs
      defaultActiveKey={tab}
      onChange={handleTab}
      fullWidth
      headerSx={{ bg: 'background3', px: 16, width: '100%', mb: 0, borderRadius: 4, border: 0 }}
      tabItemSx={{
        flex: [1, 1, 1],
        pb: 10,
        fontSize: 16,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TabPane
        tab={
          <Flex sx={{ alignItems: 'center', gap: 2 }}>
            <ArrowUpLeft size={24} />
            <Box as="span">LONG</Box>
          </Flex>
        }
        key={TabKeyEnum.Long}
      >
        <div></div>
      </TabPane>
      <TabPane
        tab={
          <Flex sx={{ alignItems: 'center', gap: 2 }}>
            <ArrowDownLeft size={24} />
            <Box as="span">SHORT</Box>
          </Flex>
        }
        key={TabKeyEnum.Short}
      >
        <div></div>
      </TabPane>
      <TabPane
        tab={
          <Flex sx={{ alignItems: 'center', gap: 2 }}>
            <ArrowBendDoubleUpLeft size={24} />
            <Box as="span">SWAP</Box>
          </Flex>
        }
        key={TabKeyEnum.Swap}
      >
        <div></div>
      </TabPane>
    </Tabs>
  )
}
