import { RESPONSE_STATUS } from '@/constants'

export function delay(t = 500, resolved = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolved ? resolve() : reject(new Error('delay error'))
    }, t)
  })
}

export function checkCode(response) {
  if (RESPONSE_STATUS.SUCCESS === response.status) {
    return response.data
  } else {
    const { status = 0, message = 'request failed' } = response
    throw new Error(`Error ${status}: ${message}`)
  }
}
