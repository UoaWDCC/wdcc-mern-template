/* eslint-env jest */
import fetch from 'node-fetch'
import { fetchUser, useFetchUser } from '../user'
import { mount } from 'enzyme'

jest.mock('node-fetch')

const testy = {
  name: 'Testy McTestface',
  nickname: 'testy',
  picture: 'https://example.com/picture.png'
}

it('runs fetchUser', async () => {
  fetch.mockResolvedValue({ // faking a fetch response
    ok: true,
    json: () => testy
  })

  const me = await fetchUser()
  // console.log(me)
  expect(me).toEqual(testy)
})

it('runs useFfetchUser', async () => {
  fetch.mockResolvedValue({ // faking a fetch response
    ok: true,
    json: () => testy
  })

  const TestComponent = () => {
    // set required to true to force the page to require login.
    const { user, loading } = useFetchUser({ required: false })
    return (
      <div>
        <p>{user.nickname}</p>
        <p>{loading ? 'loading' : 'loaded'}</p>
      </div>
    )
  }

  const wrap = mount(<TestComponent />)
  console.log(wrap.debug())
  expect(wrap.find('p').first().text()).toBe('testy')
  expect(wrap.find('p').last().text()).toBe('loaded')
})
