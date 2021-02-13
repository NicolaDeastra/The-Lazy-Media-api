import axios from 'axios'

const fetchService = async (url, res) => {
  try {
    const response = await axios.get(url)

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

export default fetchService
