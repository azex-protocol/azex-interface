// eslint-disable-next-line no-restricted-imports
import { Trans } from '@lingui/macro'
import { Wallet } from '@phosphor-icons/react'
import { alephzeroTestnet, nightlyConnect, useInkathon } from '@scio-labs/use-inkathon'
import { useState } from 'react'

import ButtonWithIcon from '../../theme/Buttons/ButtonWithIcon'

const LOGIN_BUTTON_ID = 'login_button__id'

const LoginAction = () => {
  const { connect } = useInkathon()
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    setIsLoading(true)

    await connect?.(alephzeroTestnet, nightlyConnect)
    setIsLoading(false)
  }

  return (
    <>
      <ButtonWithIcon
        id={LOGIN_BUTTON_ID}
        width={220}
        variant="ghostPrimary"
        type="button"
        isLoading={isLoading}
        disabled={isLoading}
        onClick={handleConnect}
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
