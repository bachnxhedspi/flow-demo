import { IChart } from '../../src'

export const chartSimple: IChart = {
  offset: {
    x: 0,
    y: 0,
  },
  nodes: {
    node1: {
      id: 'node1',
      type: 'output-only',
      position: {
        x: 300,
        y: 100,
      },
      ports: {
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
      },
    },
  },
  links: {},
  selected: {},
  hovered: {},
}
