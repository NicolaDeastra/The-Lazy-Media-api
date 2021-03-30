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

      return res.send(media)
    } catch (error) {
      return error
    }
  },

  detail: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)

      const elementHeader = $('.td-post-header')
      const elementPost = $('.td-post-content')

      let object = {}
      let title
      let thumb
      let author
      let date
      let categories = []
      let content = []
      let figure = []

      title = elementHeader.find('.entry-title').text()
      thumb = elementHeader.find('.td-post-featured-image a img').attr('src')
      author = elementHeader.find('.td-post-author-name a').text()
      date = elementHeader.find('.td-post-date time').text()

      elementHeader.find('.td-category .entry-category').each((i, e) => {
        let text = $(e).find('a').text()

        categories.push(text)
      })

      elementPost.find('div').each((i, e) => {
        let text = $(e).text()
        let image = $(e).find('a img').attr('src')

        content.push(text, image)
      })

      elementPost.find('figure').each((i, e) => {
        let figureImg = $(e).find('img').attr('src')

        figure.push(figureImg)
      })

      elementPost.find('p').each((i, e) => {
        let text = $(e).text()
        let heading = $(e).find('h5').text()

        let image = $(e).find('a img').attr('src')
        let img = $(e).find('img').attr('src')

        let iframe = $(e).find('iframe').attr('src')

        content.push(text, image, img, heading, iframe)
      })

      object.title = title
      object.thumb = thumb
      object.author = author
      object.date = date
      object.categories = categories
      object.figure = figure
      object.content = content.filter((x) => x)

      return res.send({
        method: req.method,
        status: true,
        results: object,
      })
    } catch (error) {
      return error
    }
  },
}

export default Load
