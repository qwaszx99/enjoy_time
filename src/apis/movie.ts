import { MovieListItem, MovieMenuItem } from 'types/movie'
import Fetch from 'utils/fetch'
import { parseHome, parseMovies } from 'utils/parse'

export function getMovieCategories(): Promise<MovieMenuItem[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Fetch.get('/api/movie/types')
      const data = parseHome(res)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export function getMoviesByPage(path: string): Promise<MovieListItem[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Fetch.get(`/api/movie/list?path=${encodeURIComponent(path)}`)
      const data = parseMovies(res)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
