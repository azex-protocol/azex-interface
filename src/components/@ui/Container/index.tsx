import { Box } from 'theme/base'

export default function Container({ children, sx = {} }: { children: JSX.Element | JSX.Element[]; sx?: any }) {
  return (
    <Box
      p={3}
      bg={'background2'}
      sx={{
        ...sx,
        borderRadius: 4,
      }}
    >
      {children}
    </Box>
  )
}
