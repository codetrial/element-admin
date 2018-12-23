import * as api from '@/api'

export async function getUser(username) {
  return api.getUser(username)
}

export async function getExampleList(param) {
  const TYPES = {
    '1': '个人',
    '2': '组织'
  }

  const STATUS = {
    '0': '离线',
    '1': '在线'
  }

  return api.getExampleList(param).then(data => {
    return {
      ...data,
      list: data.list.map(item => {
        return {
          ...item,
          typeText: TYPES[item.type],
          statusText: STATUS[item.status]
        }
      })
    }
  })
}
