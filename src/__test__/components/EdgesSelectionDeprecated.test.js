import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EdgesSelectionDeprecated from '../../components/EdgesSelectionDeprecated'
import { OwlObjectProperties } from '../fixtures/test-ontology-object-properties'

const setup = () => {
  const props = {
    resetSelectedEdges: jest.fn(),
    removeFromArray: jest.fn(),
    objectPropertiesFromApi: OwlObjectProperties,
    selectedEdges: ['http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM']
  }

  const component = shallow(<EdgesSelectionDeprecated {...props} />)

  return {
    component,
    props
  }
}

describe('EdgesSelectionDeprecated', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match snapshot ', () => {
    const {
      component
    } = setup()

    expect(toJson(component)).toMatchSnapshot()
  })
})
