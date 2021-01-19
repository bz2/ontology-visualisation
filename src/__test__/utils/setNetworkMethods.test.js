import setNetworkMethods from '../../utils/setNetworkMethods'

const setStoreState = jest.fn()
const addToArray = jest.fn()

describe('setNetworkMethods', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should work correctly', async () => {
    const fit = jest.fn()
    const stabilize = jest.fn()
    const once = jest.fn()
    const on = jest.fn()

    const network = {
      fit,
      stabilize,
      once,
      on
    }

    await setNetworkMethods({
      setStoreState,
      network,
      addToArray,
    })

    expect(on).toHaveBeenCalled()
    expect(once).toHaveBeenCalled()
    expect(stabilize).toHaveBeenCalledWith(2000)
    expect(fit).toHaveBeenCalled()
  })
})