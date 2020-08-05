/* eslint-env jest */
import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { Hello, Greet } from '../Hello'

describe('Hello Components', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Greet />)
    expect(wrap.find('p').text()).toBe('Hello, *Your name here*!')
    expect(wrap.find('p').text()).toMatch(/Hello/)
  })

  it('should render the persons name', function () {
    const wrap = mount(<Hello name='Testy' />)
    expect(wrap.find('p').text()).toBe('Hello, Testy')
  })

  it('should shallow the persons name', function () {
    const name = 'Testy McTestface'
    const wrap = shallow(<Hello name={name} />)
    expect(wrap.find('p').text()).toMatch(`Hello, ${name}`)
  })
})
