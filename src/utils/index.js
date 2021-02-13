import cheerio from 'cheerio'

const Load = {
  articles: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.td-ss-main-content')

      let title
      let thumb
      let tag
      let author
      let time
      let href
      let desc
      let key
      let media = []

      element.find('.td_module_wrap').each((i, e) => {
        title = $(e).find('.item-details h3').text()
        thumb = $(e).find('.td-module-thumb a img').attr('src')
        tag = $(e).find('.td-module-meta-info .td-post-category').text()
        author = $(e).find('.td-module-meta-info .td-post-author-name a').text()
        time = $(e).find('.td-module-meta-info .td-post-date time').text()
        desc = $(e).find('.item-details .td-excerpt').text().trim()
        href = $(e).find('.td-module-thumb a').attr('href').split('/')
        key = href.slice(3, 7).join('/')

        media.push({
          title,
          thumb,
          author,
          tag,
          time,
          desc,
          key,
        })
      })

      return res.send({
        method: req.method,
        status: true,
        result: media,
      })
    } catch (error) {
      return error
    }
  },

  //   detail: async (req, res, response) => {
  //     try {

  //     } catch (error) {}
  //   },
}

export default Load
