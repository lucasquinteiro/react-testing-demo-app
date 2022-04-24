import { useState, forwardRef, useImperativeHandle, ForwardedRef } from 'react'

import classes from './Toast.module.scss'

export type Props = {
  type: 'success' | 'error'
  message: string
}

const Toast = ({}, ref: ForwardedRef<any>) => {
  const [message, setMessage] = useState<string>('')
  const [visible, setVisible] = useState<boolean>()
  const [type, setType] = useState('success')

  const handleOpenToast = ({ message, type }: Props) => {
    setMessage(message)
    setType(type)
    setVisible(true)
    setTimeout(() => setVisible(false), 2000)
  }

  useImperativeHandle(ref, () => ({
    openToast: (toast: Props) => handleOpenToast(toast)
  }))

  return visible ? (
    <div
      className={`${classes['toast__container']} ${
        classes[
          type === 'success'
            ? 'toast__container--success'
            : 'toast__container--error'
        ]
      }`}
      role="alert"
    >
      <div className={classes['toast__content']} data-testid={`${type}-toast`}>
        {message}
      </div>
    </div>
  ) : null
}

export default forwardRef(Toast)
