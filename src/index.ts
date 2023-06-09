import rssHub from 'rsshub'

rssHub.init()

rssHub.request('/bilibili/bangumi/media/9192')
  .then((data: any) => {
    console.log(data)
  })
  .catch((e: any) => {
    console.log(e)
  })
