import { APP } from 'config'

export default class Fetch {
  static get(path: RequestInfo): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(APP.baseUrl + path)
        .then(res => res.text())
        .then(response => {
          if (!response) reject('response is null')
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

}