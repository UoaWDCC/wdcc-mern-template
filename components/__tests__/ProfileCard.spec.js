/* eslint-env jest */
import * as React from 'react'
import { mount } from 'enzyme'
import { ProfileCard } from '../ProfileCard'

const user = {
  name: 'Testy McTestface',
  nickname: 'testy',
  picture: 'https://example.com/picture.png'
}
describe('ProfileCard Component', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(
      <ProfileCard user={user}>
        <span>Extra texta</span>
      </ProfileCard>
    )
    console.log(wrap.debug())
    expect(wrap.find('h4').text()).toBe(user.name)
    expect(wrap.find('p').text()).toBe(user.nickname)
    expect(wrap.find('span').text()).toBe('Extra texta')
  })
})
