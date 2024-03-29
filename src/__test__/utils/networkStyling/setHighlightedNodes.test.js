import setHighlightedNodes from '../../../utils/networkStyling/setHighlightedNodes'
import updateNodes from '../../../utils/nodesEdgesUtils/updateNodes'
import getNode from '../../../utils/nodesEdgesUtils/getNode'
import store from '../../../store'

jest.mock('../../../utils/nodesEdgesUtils/updateNodes')
jest.mock('../../../utils/nodesEdgesUtils/getNode')

describe('setHighlightedNodes', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should work correctly', async () => {
    getNode.mockImplementationOnce(() => ([{
      id: 'node-123'
    }]))

    store.getState = jest.fn().mockImplementation(() => ({
      highlightedNodes: ['node-123'],
      globalNodeStyling: { stylingNodeHighlightBackgroundColor: '#000' },
      userDefinedNodeStyling: { stylingNodeHighlightBackgroundColor: '#000' },
    }))

    await setHighlightedNodes()

    expect(updateNodes).toHaveBeenCalledWith({
      color: {
        background: '#000',
      },
      id: 'node-123',
    })
  })
})
