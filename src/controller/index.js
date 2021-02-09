import cheerio from 'cheerio'

import { baseUrl, rootUrl } from '../constant'
import Service from '../service'

const fetchData = (req, res, response) => {
  try {
    const $ = cheerio.load(response.data)
    const element = $('.indt-container')

    let title, thumb, desc, key
    let destinationHighlights = []

    element.find('.no-gutters')
    element.find('.col-high-dest').each((i, e) => {
      title = $(e).find('.new-hhd-body').text()
      thumb = $(e)
        .find('.new-hhd-card')
        .css('background-image')
        .replace('url(', rootUrl)
        .replace(')', '')
      desc = $(e).find('.hd-description').text()
      key = $(e).find('h2').text().toLowerCase().replace(' ', '-')

      destinationHighlights.push({
        title,
        key,
        thumb,
        desc,
      })
    })

    res.send({
      method: req.method,
      status: true,
      result: destinationHighlights,
    })
  } catch (error) {
    return error
  }
}

const Controller = {
  getHighlights: async (req, res) => {
    try {
      const response = await Service.fetchService(`${baseUrl}`)
      return fetchData(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default Controller
