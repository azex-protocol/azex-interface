import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { Box, Flex } from 'theme/base'
import { FOOTER_HEIGHT, NAVBAR_HEIGHT } from 'utils/config/constants'

import Footer from './@layouts/Footer'
import Navbar from './@layouts/Navbar'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flexDirection="column" width="100vw" height="100vh" margin="0px auto" maxHeight="100%">
      <Navbar height={NAVBAR_HEIGHT} />
      <Box id="app_main__wrapper" width="100%" flex="1" sx={{ position: 'relative', overflowY: 'auto' }}>
        {children}
        <ToastContainer theme="dark" limit={3} autoClose={5000} />
      </Box>
      <Footer height={FOOTER_HEIGHT} />
    </Flex>
  )
}

export default AppWrapper
