import baseUrl from '../constant'
import fetchService from '../service'
import Load from '../utils'

const Controller = {
  getGreet: async (req, res) => {
    try {
      return res.send({
        hallo: 'Hallo 👋',
        message: 'visit link on bellow for documentation 👇',
        documentation: 'https://github.com/NicolaDonoastro/The-Lazy-Media-api',
      })
    } catch (error) {
      return error
    }
  },

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

  getSearch: async (req, res) => {
    const { search = '' } = req.query

    try {
      const response = await fetchService(`${baseUrl}/?s=${search}`, res)

      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
