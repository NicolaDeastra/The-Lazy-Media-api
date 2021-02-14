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

  getConsole: async (req, res) => {
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

  getESport: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/e-sports/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getGameNews: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/news/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getLazyTalk: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/lazy-talk/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getPc: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/pc-games/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getGameReview: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/games/game-review/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
