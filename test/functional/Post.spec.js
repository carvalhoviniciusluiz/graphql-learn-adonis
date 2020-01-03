'use strict'

const { test, trait } = use('Test/Suite')('Post')

trait('Test/ApiClient')

test('get list of posts', async ({ client }) => {
  const data = {
    query: `
      {
        posts {
          id
          title
          content
        }
      }
    `
  }

  const response = await client.post('/').send(data).end()

  console.log(response)
})
