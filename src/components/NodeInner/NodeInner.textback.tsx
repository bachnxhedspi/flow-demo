import {Button} from '@storybook/react/demo'
import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 40px 30px;
`

export const NodeInnerDefault = ({ node }: INodeInnerDefaultProps) => {
  return (
    <Outer>
      <h3>Node 1</h3>
      <span>Node was created at</span>
      <h4>Keyword</h4>
      <em>Enter keywords separated by comma</em><br/>
      <input type="text"/>
      <h4>Intent</h4>
      <em>If no keyword is triggered, our AI will detect intent instead</em><br/>
      <form>
        <input type="checkbox" />
        <label htmlFor="vehicle1">About self question</label><br/>
        <input type="checkbox" />
        <label htmlFor="vehicle2"> About self response</label><br/>
        <input type="checkbox" />
        <label htmlFor="vehicle3"> Apology</label><br/><br/>
      </form>

      <h4>Message</h4>
      <em>Message should be spintax</em><br/>
      <input type="text"/>
      <div style={{float:'right', marginTop:'15px'}}>
        <Button>Save</Button>
        <Button>Add child</Button>
        <Button>Delete</Button>
      </div>
    </Outer>
  )
}
