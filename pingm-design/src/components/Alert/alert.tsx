import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

interface BaseAlertProps {
  className?: string;
  alertType: AlertType;
  children: React.ReactNode;
}

type AlertProps = Partial<BaseAlertProps & React.HTMLAttributes<HTMLElement>>
// type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// export type AlertProps = Partial<NativeAlertProps>

const Alert: React.FC<AlertProps> = props => {
  const {
    className,
    alertType,
    children,
    ...resetProps
  } = props

  // btn, btn-lg, btn-sm, btn-primary, btn-default ...
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })

  return (
    <div
      className={classes}
      {...resetProps}
    >{ children }</div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Info
}

export default Alert
