import { MovieTypeItem } from 'types/movie'

export function parseHome(data: string): MovieTypeItem[] {
  const DomParser = require('react-native-html-parser').DOMParser
  const doc = new DomParser().parseFromString(data.replace(/nav1000/g, 'navtest'), 'text/html')
  const list = doc.querySelect('.navtest a', true)
  const types = []

  for (const item of list) {
    const type: MovieTypeItem = {
      title: '',
      link: ''
    }
    type.title = item.textContent;
    type.link = item.attributes[0].value
    types.push(type)
  }

  return types
}