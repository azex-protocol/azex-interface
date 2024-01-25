'use client'

// eslint-disable-next-line no-restricted-imports
import { Trans } from '@lingui/macro'
import { Wallet } from '@phosphor-icons/react'
import { useInkathon } from '@scio-labs/use-inkathon'
// import { useInkathon } from '@scio-labs/use-inkathon'
import { useState } from 'react'

import ButtonWithIcon from 'theme/Buttons/ButtonWithIcon'
import Modal from 'theme/Modal'

const LOGIN_BUTTON_ID = 'login_button__id'

const LoginAction = () => {
  const {
    activeChain,
    switchActiveChain,
    connect,
    disconnect,
    isConnecting,
    activeAccount,
    accounts,
    setActiveAccount,
  } = useInkathon()
  const [opening, setOpening] = useState(false)
  // const [browserWallets] = useState([
  //   ...allSubstrateWallets.filter((w) => w.platforms.includes(SubstrateWalletPlatform.Browser) && isWalletInstalled(w)),
  //   ...allSubstrateWallets.filter(
  //     (w) => w.platforms.includes(SubstrateWalletPlatform.Browser) && !isWalletInstalled(w)
  //   ),
  // ])
  return (
    <>
      <ButtonWithIcon
        id={LOGIN_BUTTON_ID}
        width={220}
        variant="ghostPrimary"
        type="button"
        // isLoading={isConnecting}
        // disabled={isConnecting}
        onClick={() => setOpening(true)}
        icon={<Wallet />}
      >
        <Trans>Connect Wallet</Trans>
      </ButtonWithIcon>
      {opening && (
        <Modal isOpen={opening} title="Connect Wallet" hasClose onDismiss={() => setOpening(false)}>
          {/* {browserWallets.map((w) =>
            isWalletInstalled(w) ? (
              <Button
                key={w.id}
                className="cursor-pointer"
                onClick={() => {
                  connect?.(undefined, w)
                }}
              >
                {w.name}
              </Button>
            ) : (
              <Button key={w.id} className="opacity-50">
                <a href={w.urls.website}>
                  <div className="align-center flex justify-start gap-2">
                    <p>{w.name}</p>
                    <ArrowSquareUpRight size={16} />
                  </div>
                  <p>Not installed</p>
                </a>
              </Button>
            )
          )} */}
          avc
        </Modal>
      )}
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
