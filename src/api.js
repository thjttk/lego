export function getSite (id = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(oneSite)
    }, 200)
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
          type: 'the-section',
          config: {},
          children: [
            {
              type: 'paragraph',
              config: {
                showSubTitle: true
              },
              content: {
                title: '大标题',
                subTitle: '副标题',
                detail: 'abc'
              }
            }
          ]
        }
      ]
    }
  ]
}
