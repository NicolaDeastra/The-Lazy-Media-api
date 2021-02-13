import baseUrl from '../constant'
import fetchService from '../service'
import Load from '../utils'

const Controller = {
  getGame: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(`${baseUrl}/games/page/${page}`, res)
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getGameConsole: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/games/console-game/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
