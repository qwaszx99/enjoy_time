import { APP } from 'config'
import { MovieListItem } from 'types/movie'
import Fetch from 'utils/fetch'
import { parseMovies } from 'utils/parse'

export function getMoviesByPage(path: string): Promise<MovieListItem[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Fetch.get(APP.apiUrl + `/movie/list?path=${encodeURIComponent(path)}`)
      const data = parseMovies(res)
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
