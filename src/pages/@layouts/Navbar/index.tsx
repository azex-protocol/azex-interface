import { Trans } from '@lingui/macro'
import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

import { LogoText } from 'components/@ui/Logo'
import LoginAction from 'components/LoginAction'
// import { useAuthContext } from 'hooks/web3/useAuth'
import { Box, Flex, LinkUnderline } from 'theme/base'
import { NAVBAR_HEIGHT } from 'utils/config/constants'
import ROUTES from 'utils/config/routes'
import routes from 'utils/config/routes'

import Menu from './Menu'
import { LogoWrapper, Main, Wrapper } from './styled'

const Navbar = ({ height }: { height: number }): ReactElement => {
  // const { profile } = useAuthContext()
  const profile = false //
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)

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
                borderLeft: 'small',
                borderRight: 'small',
                borderColor: 'neutral4',
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

            <Box flex="0 0 fit-content" sx={{ alignItems: 'center' }}>
              {profile ? <>Connected success</> : <LoginAction />}
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
