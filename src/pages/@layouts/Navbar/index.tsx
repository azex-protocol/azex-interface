import { Trans } from '@lingui/macro'
import { SignOut } from '@phosphor-icons/react'
import { useInkathon } from '@scio-labs/use-inkathon'
import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

import { LogoText, AzLogo } from 'components/@ui/Logo'
import LoginAction from 'components/LoginAction'
import IconButton from 'theme/Buttons/IconButton'
import Loading from 'theme/Loading'
// import { useAuthContext } from 'hooks/web3/useAuth'
import { Box, Flex, LinkUnderline, Type } from 'theme/base'
import { NAVBAR_HEIGHT } from 'utils/config/constants'
import ROUTES from 'utils/config/routes'
import routes from 'utils/config/routes'
import { shortenAddress } from 'utils/helpers/format'

import Menu from './Menu'
import { LogoWrapper, Main, Wrapper } from './styled'

const Navbar = ({ height }: { height: number }): ReactElement => {
  const { activeAccount, isConnecting, disconnect } = useInkathon()
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)

  console.log('activeAccount', activeAccount)

  return (
    <Box as="header" sx={{ zIndex: [101, 101, 101, 4], bg: '#0A0B0D' }}>
      <Wrapper height={height}>
        <Menu visible={activeMobileMenu} onClose={() => setActiveMobileMenu(false)} />
        <Main>
          <Flex alignItems="center" sx={{ gap: 2 }}>
            <Link to={routes.HOME.path}>
              <LogoWrapper>
                <LogoText size={20} />
              </LogoWrapper>
            </Link>
          </Flex>

          <Box alignItems="center" display={{ _: 'flex', md: 'flex' }}>
            <Box
              sx={{
                height: '100%',
                width: 100,
                textAlign: 'center',
                lineHeight: `${NAVBAR_HEIGHT - 1}px`,
              }}
            >
              <LinkUnderline
                sx={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  '&:hover': {
                    color: 'neutral2',
                  },
                }}
                color="neutral1"
                hoverHasLine
                href={ROUTES.DOCS.path}
                target="_blank"
                rel="noreferrer"
              >
                <Trans>Docs</Trans>
              </LinkUnderline>
            </Box>
            <Box
              sx={{
                height: '100%',
                width: 200,
                textAlign: 'center',
              }}
            >
              <AzLogo />
            </Box>

            <Box flex="0 0 fit-content" sx={{ alignItems: 'center' }}>
              {isConnecting ? (
                <Box px={3}>
                  <Loading size={16} />
                </Box>
              ) : (
                <>
                  {activeAccount?.address ? (
                    <Flex px={3} alignItems="center">
                      <Type.Caption>{shortenAddress(activeAccount.address)}</Type.Caption>
                      <IconButton
                        variant="ghost"
                        width={32}
                        height={32}
                        icon={<SignOut />}
                        onClick={() => disconnect?.()}
                      />
                    </Flex>
                  ) : (
                    <LoginAction />
                  )}
                </>
              )}
            </Box>
          </Box>
        </Main>
        {/* </Container> */}
      </Wrapper>
    </Box>
  )
}

Navbar.displayName = 'Header'
export default Navbar
