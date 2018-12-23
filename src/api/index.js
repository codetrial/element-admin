import { delay, checkCode } from '@/utils/request'

/* start of mocking user */
const users = {
  admin: {
    id: 100001,
    name: 'Administrator',
    roles: ['USER', 'ADMIN']
  },
  codetrial: {
    id: 100001,
    name: 'Codetrial',
    roles: ['USER']
  }
}

export async function getUser(username) {
  await delay(200)

  const user = users[username]
  const response = user
    ? {
      status: '1',
      data: user
    }
    : {
      status: '1100',
      message: 'Wrong user or password'
    }

  return Promise.resolve(response).then(checkCode)
}
/* end of mocking user */

/* start of mocking example list */
const exampleSource = Array(235)
  .fill(1)
  .map((element, index) => {
    const personal = index % 2 === 0
    return {
      id: index + 10000,
      name: `Example - ${index} - ${personal ? 'felixpy' : 'codetrial'}`,
      type: personal ? 1 : 2,
      status: index % 5 === 0 ? 0 : 1,
      url: personal ? 'https://felixpy.com' : 'https://codetrial.github.io',
      createUser: 100001,
      createUserName: 'Felix Yang',
      updateUser: 100001,
      updateUserName: 'Felix Yang',
      createTime: '2018-12-22 11:00:00',
      updateTime: '2018-12-22 11:00:00'
    }
  })

export async function getExampleList({ filter = {}, page = {} }) {
  const { pageNo = 1, pageSize = 20 } = page
  const offset = (pageNo - 1) * pageSize
  let list = exampleSource
  let total = exampleSource.length

  // filter
  Object.keys(filter).forEach(key => {
    const filterValue = filter[key]
    if (filterValue != null && filterValue.length) {
      list = list.filter(item => {
        if (Array.isArray(filterValue)) {
          return filterValue.map(String).indexOf(String(item[key])) > -1
        }
        return String(item[key]) === String(filterValue)
      })
    }
  })

  total = list.length

  // sort
  list = list.sort((a, b) => {
    const { order, orderBy } = page

    if (!order || !orderBy) {
      return
    }

    const diff = (order === 'descending' ? -1 : 1) * (a[orderBy] - b[orderBy])
    return diff > 0 ? 1 : -1
  })

  // pagination
  list = list.slice(offset, offset + pageSize)

  await delay(1000)

  return Promise.resolve({
    status: '1',
    data: {
      list,
      page: {
        ...page,
        total
      }
    }
  }).then(checkCode)
}
/* end of mocking example list */
