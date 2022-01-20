import React, { useContext, memo } from 'react'
import { StoreContext, StoreValue } from '../store'
import { Switch } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { TABLET } from '../types'

const SwitchSection: any = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  span {
    margin-right: 10px;
  }
  ${TABLET} {
    display: none;
  }
`

const SwitchIcon = (): JSX.Element => {
  const {
    printStyle: [styleOption, setStyleOption],
  } = useContext<StoreValue>(StoreContext)
  const handleChange = (checked: boolean): void => {
    setStyleOption(checked)
  }

  return (
    <SwitchSection>
      <span>{styleOption ? 'PDF' : 'Icon'}</span>
      <Switch checked={styleOption} onChange={handleChange} />
    </SwitchSection>
  )
}

export default memo(SwitchIcon)
