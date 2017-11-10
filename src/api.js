export function getSite (id = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(oneSite)
    }, 1000)
  })
}

const oneSite = {
  type: 'site',
  name: 'lego site',
  config: {
    color: 'tomato'
  },
  children: [
    {
      type: 'page',
      name: 'Home page',
      children: [
        {
          type: 'section',
          config: {},
          children: [
            {
              type: 'paragraph',
              config: {},
              content: {
                title: '大标题',
                subTitle: '副标题',
                detail: ''
              }
            }
          ]
        }
      ]
    }
  ]
}