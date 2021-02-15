import baseUrl from '../../constant'
import fetchService from '../../service'
import Load from '../../utils'

const Tech = {
  getTech: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getCrankyLounge: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/cranky-lounge/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getTechNews: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/tech-news/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getSetup: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/setup/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getRecommend: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/rekomendasi-tech/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getReview: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/tech-review/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },

  getTechTip: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/category/tech/tech-tips/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Tech
