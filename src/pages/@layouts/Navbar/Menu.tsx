import { Trans } from '@lingui/macro'
import { XCircle } from '@phosphor-icons/react'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

// import Dropdown, { DropdownItem } from 'components/Dropdown'
import Logo from 'components/@ui/Logo'
// import { useAuthContext } from 'hooks/web3/useAuth'
import { Button } from 'theme/Buttons'
import { Box, Flex } from 'theme/base'
import routes from 'utils/config/routes'

import { CloseBtn, MenuWrapper } from './styled'

interface Props {
  visible: boolean
  onClose?: () => void
}

const Content = () => {
  return (
    <Flex>
      {/* {MENU_LINKS.map((menuItem, i) => {
        return (
          <Dropdown
            menuSx={{
              width: 'max-content',
            }}
            isHovered
            key={i}
            menu={
              <>
                {menuItem.content.map((item, j) => (
                  <div key={j}>
                    <DropdownItem>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <Flex alignItems="center">
                          <Box color="neutral2">{item.title}</Box>
                        </Flex>
                      </a>
                    </DropdownItem>
                  </div>
                ))}
              </>
            }
            hasArrow={false}
            buttonSx={{
              border: 'none',
              py: 1,
              '&:hover,&:focus,&:active': {
                bg: 'neutral7',
              },
            }}
            direction="left"
          >
            {menuItem.label}
          </Dropdown>
        )
      })} */}
    </Flex>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu?: () => void }) => {
  // const { account, openModal } = useAuthContext()
  return (
    <Flex alignItems="flex-start" flexDirection="column">
      {/* {MENU_LINKS.map((menuItem, i) => {
        return (
          <Flex flexDirection="column" key={i} mb={5}>
            <Type.CaptionBold mb={2}>{menuItem.label}</Type.CaptionBold>
            {menuItem.content.map((item, j) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={j}>
                <Box color="neutral3" mb={2}>
                  {item.title}
                </Box>
              </a>
            ))}
          </Flex>
        )
      })} */}
      {false ? (
        <Link to={'/'}>
          <Button variant="primary" size="sm" onClick={() => closeMenu && closeMenu()}>
            <Trans>List Collection</Trans>
          </Button>
        </Link>
      ) : (
        <Flex flexDirection="column">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              if (closeMenu) closeMenu()
              // openModal(true)
            }}
          >
            <Trans>Connect Wallet</Trans>
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

const Menu = ({ visible, onClose }: Props): ReactElement => {
  return (
    <MenuWrapper visible={visible}>
      <Flex justifyContent="space-between" display={{ md: 'none !important' }}>
        <Link to={routes.HOME.path} onClick={onClose}>
          <Logo />
        </Link>
        <CloseBtn onClick={onClose}>
          <XCircle size={24} />
        </CloseBtn>
      </Flex>
      <Box display={{ md: 'none' }}>
        <MobileMenu closeMenu={onClose} />
      </Box>
    </MenuWrapper>
  )
}

Menu.displayName = 'Menu'
export default Menu
