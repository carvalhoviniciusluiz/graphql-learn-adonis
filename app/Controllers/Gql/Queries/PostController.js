'use strict'

const posts = require('../../../../data')

class PostController {
  async posts(parent, arg, ctx) {
    return arg.id
      ? posts.filter(post => Number(post.id) === Number(arg.id))
      : posts
  }

  // static middlewares () {
  //   return {
  //     posts: ['auth']
  //   }
  // }
}

module.exports = PostController
