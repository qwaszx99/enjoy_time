import { MovieListItem, MovieMenuItem } from 'types/movie'

export function parseHome(data: string): MovieMenuItem[] {
  const DomParser = require('react-native-html-parser').DOMParser
  const doc = new DomParser().parseFromString(data.replace(/nav1000/g, 'navtest'), 'text/html')
  const list = doc.querySelect('.navtest a', true)
  const types = []

  for (const item of list) {
    const type: MovieMenuItem = {
      title: '',
      link: ''
    }
    type.title = item.textContent;
    type.link = item.attributes[0].value
    types.push(type)
  }

  return types
}

export function parseMovies(data: string): MovieListItem[] {
  const DomParser = require('react-native-html-parser').DOMParser
  const doc = new DomParser().parseFromString(data.replace(/box-shadow/g, 'boxshadow'), 'text/html')
  const list = doc.querySelect('.boxshadow')
  const movies = []
  for (const item of list) {
    const movie: MovieListItem = {
      id: '',
      coverUrl: '',
      movieName: '',
      stars: '',
      year: '',
      area: '',
      progress: ''
    }
    movie.coverUrl = item.querySelect('img')?.[0]?.attributes?.[0]?.value
    movie.progress = item.querySelect('em')?.[0]?.textContent
    const titleEle = item.querySelect('.title a')?.[0]
    movie.movieName = titleEle?.textContent
    movie.id = titleEle?.attributes?.[0]?.value
    const labels = item.querySelect('label')
    movie.stars = labels?.[0]?.nextSibling?.textContent?.trim()
    movie.area = labels?.[1]?.nextSibling?.textContent?.trim()
    movie.year = labels?.[2]?.nextSibling?.textContent?.trim()
    movies.push(movie)
  }
  return movies
}