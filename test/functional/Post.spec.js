'use strict'

require('../../start/graphql')
require('../../start/gqlKernel')

const { test, trait } = use('Test/Suite')('Post')

trait('Test/ApiClient')

test('get list of posts', async ({ client, assert }) => {
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

  response.assertStatus(200)
  assert.exists(response.body.data)
  assert.exists(response.body.data.posts)
  assert.equal(response.body.data.posts.length, 9)
})
