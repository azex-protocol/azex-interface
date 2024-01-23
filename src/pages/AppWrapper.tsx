import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <ToastContainer theme="dark" limit={3} autoClose={5000} />
    </div>
  )
}

export default AppWrapper
