// eslint-disable-next-line no-restricted-imports
import { Trans } from '@lingui/macro'
import React, { useState } from 'react'

import { Button } from 'theme/Buttons'
import { NAVBAR_HEIGHT } from 'utils/config/constants'
import ButtonWithIcon from "../../theme/Buttons/ButtonWithIcon";
import {Wallet} from "@phosphor-icons/react";

const LOGIN_BUTTON_ID = 'login_button__id'

const LoginAction = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openRegisterModal, setOpenRegisterModal] = useState(false)
  const [openResetModal, setOpenResetModal] = useState(false)
  const [isVerifyOTP, setIsVerifyOTP] = useState(false)

  return (
    <>
      <ButtonWithIcon
        id={LOGIN_BUTTON_ID}
        width={220}
        variant="ghostPrimary"
        type="button"
        onClick={() => setOpenLoginModal(true)}
        icon={<Wallet />}
      >
        <Trans>Connect Wallet</Trans>
      </ButtonWithIcon>
    </>
  )
}

export default LoginAction

export function useClickLoginButton() {
  const handleClickLogin = () => {
    const loginButton = document.getElementById(LOGIN_BUTTON_ID)
    if (!loginButton) return
    loginButton.click()
  }
  return handleClickLogin
}
