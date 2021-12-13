import { MovieTypeItem } from 'types/movie'
import Fetch from 'utils/fetch'
import { parseHome } from 'utils/parse'

export function getMovieCategories(): Promise<MovieTypeItem[]> {
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
