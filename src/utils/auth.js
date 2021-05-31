import store from '@/store'

export const getToken = () => {
  let {token} = store.state.userInfo
  return token
}