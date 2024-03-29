import checkEdgeVisibility from '../../../utils/networkGraphOptions/checkEdgeVisibility'
import store from '../../../store'
import { ALGO_TYPE_FULL } from '../../../constants/algorithms'
import { objectPropertiesFromApi } from '../../fixtures/objectPropertiesFromApi'

const currentGraph = 'graph-0'

const commonState = {
  currentGraph,
  objectPropertiesFromApiBackup: objectPropertiesFromApi,
}

describe('checkEdgeVisibility', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should work correctly if subclass not visible and is subclass', async () => {
    const edgeId = '12'

    store.getState = jest.fn().mockImplementation(() => ({
      ...commonState,
      graphData: {
        'graph-0': {
          label: 'Main',
          noDelete: true,
          type: ALGO_TYPE_FULL,
          isUpperOntologyVisible: false,
          isSubClassEdgeVisible: false,
          isDatasetVisible: false,
          hiddenEdgesProperties: {}
        }
      },
    }))

    const output = await checkEdgeVisibility({
      edgeId
    })

    expect(output).toEqual(false)
  })

  it('should work correctly if subclass not visible and is not subclass', async () => {
    const edgeId = '11'

    store.getState = jest.fn().mockImplementation(() => ({
      ...commonState,
      graphData: {
        'graph-0': {
          label: 'Main',
          noDelete: true,
          type: ALGO_TYPE_FULL,
          isUpperOntologyVisible: false,
          isSubClassEdgeVisible: false,
          isDatasetVisible: false,
          hiddenEdgesProperties: {}
        }
      },
    }))

    const output = await checkEdgeVisibility({
      edgeId
    })

    expect(output).toEqual(true)
  })

  it('should work correctly if subclass visible and hiddenEdgesProperties', async () => {
    const edgeId = '12'

    store.getState = jest.fn().mockImplementation(() => ({
      ...commonState,
      graphData: {
        'graph-0': {
          label: 'Main',
          noDelete: true,
          type: ALGO_TYPE_FULL,
          isUpperOntologyVisible: false,
          isSubClassEdgeVisible: true,
          isDatasetVisible: false,
          hiddenEdgesProperties: {
            0: {
              type: 'and',
              properties: {
                0: {
                  property: 'rdfsLabel',
                  operation: 'equal',
                  value: 'Governed by'
                }
              }
            }
          }
        }
      },
    }))

    const output = await checkEdgeVisibility({
      edgeId
    })

    expect(output).toEqual(false)
  })

  it('should work correctly if subclass visible and is subclass', async () => {
    const edgeId = '12'

    store.getState = jest.fn().mockImplementation(() => ({
      ...commonState,
      graphData: {
        'graph-0': {
          label: 'Main',
          noDelete: true,
          type: ALGO_TYPE_FULL,
          isUpperOntologyVisible: false,
          isSubClassEdgeVisible: true,
          isDatasetVisible: false,
          hiddenEdgesProperties: {}
        }
      },
    }))

    const output = await checkEdgeVisibility({
      edgeId
    })

    expect(output).toEqual(true)
  })
})
