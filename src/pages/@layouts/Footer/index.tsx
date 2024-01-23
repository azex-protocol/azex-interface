import { Trans } from '@lingui/macro'

// import useMyProfile from 'hooks/store/useMyProfile'
import DiscordIcon from 'theme/Icons/DiscordIcon'
import TelegramIcon from 'theme/Icons/TelegramIcon'
import TwitterIcon from 'theme/Icons/TwitterIcon'
import { Box, Flex, Type } from 'theme/base'
import { LINKS } from 'utils/config/constants'

const Footer = ({ height }: { height: number }) => {
  // const { myProfile } = useMyProfile()
  return (
    <Box
      as="footer"
      height={height}
      display="block"
      px={3}
      sx={{
        borderTop: 'small',
        borderColor: 'neutral4',
        '& a': {
          color: 'inherit',
          '&:hover': {
            color: 'neutral1',
          },
        },
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          gap: 3,
          height: '100%',
          width: ['fit-content', 'fit-content', '100%'],
        }}
      >
        <Type.Caption color="neutral3" display={['none', 'none', 'block']}>
          <Trans>© 2023 Copin. All rights reserved.</Trans>
        </Type.Caption>
        <Flex flex="1" sx={{ alignItems: 'center', justifyContent: 'end', gap: 3 }}>
          <Flex
            sx={{
              gap: 3,
            }}
            color="neutral3"
          >
            <a
              href={LINKS.website}
              target="_blank"
              rel="noreferrer"
              style={{
                lineHeight: '16px',
                fontSize: '13px',
              }}
            >
              <Trans>Landing Page</Trans>
            </a>
            <a
              href={LINKS.docs}
              target="_blank"
              rel="noreferrer"
              style={{
                lineHeight: '16px',
                fontSize: '13px',
              }}
            >
              <Trans>Docs</Trans>
            </a>
            <a
              href={LINKS.policy}
              target="_blank"
              rel="noreferrer"
              style={{
                lineHeight: '16px',
                fontSize: '13px',
              }}
            >
              <Trans>Terms & Policy</Trans>
            </a>
          </Flex>
          <Box sx={{ width: '1px', height: '24px', bg: 'neutral4' }} />
          <Flex color="neutral3" sx={{ alignItems: ['flex-start', 'center'], gap: [12, 20] }}>
            <Box as="a" href={LINKS.discord} target="_blank" sx={{ lineHeight: 0 }}>
              <DiscordIcon variant="Bold" size={20} />
            </Box>
            <Box as="a" href={LINKS.telegram} target="_blank" sx={{ lineHeight: 0 }}>
              <TelegramIcon variant="Bold" size={20} />
            </Box>
            <Box as="a" href={LINKS.twitter} target="_blank" sx={{ lineHeight: 0 }}>
              <TwitterIcon variant="Bold" size={20} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/* Links */}
    </Box>
  )
}

export default Footer
