import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert, { AlertProps } from './alert'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: AlertProps = {
  alertType: 'error',
  className: 'klass'
}

describe('测试 alert 组件', () => {
  // it === test
  it('测试是否能生成组件', () => {
    const wrapper = render(<Alert {...defaultProps}>test</Alert>)
    const element = wrapper.getByText('test') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element).toHaveClass('alert alert-info')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('测试error type', () => {
    const wrapper = render(<Alert {...testProps}>error</Alert>)
    const element = wrapper.getByText('error') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('DIV')
    expect(element).toHaveClass('alert alert-error')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})
