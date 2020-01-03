'use strict'

const posts = require('../../../../data')

class PostController {
  async addPost(parent, arg, ctx) {
    const post = arg.post
    post.id = Math.floor(Math.random() * 1000)
    posts.push(post)
    return post
  }

  deletePost(parent, arg, ctx) {
    const id = arg.id
    const post = posts.find(post => Number(post.id) === Number(id))
    if (!post) {
      return false
    }
    posts.splice(posts.indexOf(post), 1)
    return true
  }
}

module.exports = PostController
