// type primary default warning danger link
// size normal small medium large
// disabled
// 支持原生的属性

import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Warning = 'warning',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  style?: object;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  target?: string;
  download?: boolean;
}

// 只有将 原生类型添加为props，组件才能执行原生事件
// 类型别名  交叉类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement> // a链接
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // Partial 修饰props为可选

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    size,
    href,
    children,
    ...resetProps
  } = props

  // btn, btn-lg, btn-sm, btn-primary, btn-default ...
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if (btnType === ButtonType.Link) {
    return (
      <a
        className={classes}
        href={href}
        {...resetProps}
      >{ children }</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...resetProps}
      >{ children }</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
