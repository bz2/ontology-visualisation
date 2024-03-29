import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import GraphSearchCard from '../../components/GraphSearchCard'

const setup = () => {
  const props = {
    updateStoreValue: jest.fn(),
    index: 0,
    searchResult: {
      id: '123',
      rdfsLabel: 'test',
      rdfAbout: 'http://test.test/test'
    },
  }

  const component = shallow(<GraphSearchCard {...props} />)

  return {
    component,
    props
  }
}

describe('GraphSearchCard', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match snapshot', () => {
    const {
      component
    } = setup()

    expect(toJson(component)).toMatchSnapshot()
  })
})
