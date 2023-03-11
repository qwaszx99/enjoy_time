import { MovieListItem, MovieMenuItem } from 'types/movie'

export function parseHome(): MovieMenuItem[] {
  const types: MovieMenuItem[] = [
    { title: '电视剧', link: '/dianshiju' },
    { title: '喜剧片', link: '/xijupian' },
    { title: '动作片', link: '/dongzuopian' },
    { title: '爱情片', link: '/aiqingpian' },
    { title: '科幻片', link: '/kehuanpian' },
    { title: '恐怖片', link: '/kongbupian' },
    { title: '剧情片', link: '/juqingpian' },
    { title: '战争片', link: '/zhanzhengpian' },
    { title: '纪录片', link: '/jilupian' },
    { title: '动画片', link: '/donghuapian' }
  ]

  return types
}

export function parseMovies(data: string): MovieListItem[] {
  const DomParser = require('react-native-html-parser').DOMParser
  const doc = new DomParser().parseFromString(data.replace(/post_hover/g, 'posthover').replace(/entry_post/g, 'entrypost'), 'text/html')
  const list = doc.querySelect('.posthover')

  const movies = []
  for (const item of list) {
    const movie: MovieListItem = {
      id: '',
      coverUrl: '',
      movieName: '',
      info: '',
      link: ''
    }
    movie.coverUrl = item.querySelect('img')?.[0]?.attributes?.[0]?.value
    const titleEle = item.querySelect('.article a')?.[0]
    const info = item.querySelect('.entrypost')?.[0]
    movie.info = info.textContent?.trim()
    const attributes = titleEle.attributes || []
    movie.link = attributes?.[0]?.value
    movie.movieName = attributes?.[2]?.value
    movie.id = movie.link.replace(/[^\d]/g, '')
    movies.push(movie)
  }
  return movies
}