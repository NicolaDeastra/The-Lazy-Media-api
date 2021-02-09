import axios from 'axios'

class Service {
  static fetchService = async (url, res) => {
    try {
      const response = await axios(url)

      return await response
    } catch (error) {
      res.send({
        status: false,
        code: 404,
        message: 'You got Error',
      })

      throw error
    }
  }
}

export default Service
