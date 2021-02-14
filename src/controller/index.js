import baseUrl from '../constant'
import fetchService from '../service'
import Load from '../utils'

const Controller = {
  getDetail: async (req, res) => {
    const { year, month, day, key } = req.params

    try {
      const response = await fetchService(
        `${baseUrl}/${year}/${month}/${day}/${key}`,
        res,
      )

      return Load.detail(req, res, response)
    } catch (error) {
      return error
    }
  },

  getGame: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getGameConsole: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/console-game/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
