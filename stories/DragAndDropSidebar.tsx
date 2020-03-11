import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '../src'
import { Content, Page, Sidebar, SidebarItem } from './components'
import {PortCustom} from './CustomPort'
import { chartSimple } from './misc/emptyChartState'

const Message = styled.div`
margin: 10px;
padding: 10px;
background: rgba(0,0,0,0.05);
`


export const DragAndDropSidebar = () => (
  <Page>
    <Content>
      <FlowChartWithState initialValue={chartSimple} Components={{Port: PortCustom}}/>
    </Content>
    <Sidebar>
      <Message>
        Drag and drop these items onto the canvas.
      </Message>
      <SidebarItem
        type="Node"
        ports={ {
          port1: {
            id: 'port1',
            type: 'left',
            properties: {
              custom: 'property',
              value: 'input',
            },
          },
          port2: {
            id: 'port2',
            type: 'right',
            properties: {
              custom: 'property',
              value: 'output',
            },
          },
        }}
      />
    </Sidebar>
  </Page>
)
