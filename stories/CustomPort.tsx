import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState, IPortDefaultProps } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const PortDefaultOuter = styled.div`
  width: 24px;
  height: 24px;
  background: cornflowerblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PortCustom = (props: IPortDefaultProps) => (
  <PortDefaultOuter>
    { props.port.properties && props.port.properties.value === 'input' && (
      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
        <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    )}
    { props.port.properties && props.port.properties.value === 'output' && (
      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 20 20">
        <path fill="white" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )}
    { !props.port.properties && (
      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
        <path fill="white" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    )}
  </PortDefaultOuter>
)

export const CustomPortDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        Components={ {
          Port: PortCustom,
        }}
      />
    </Page>
  )
}
