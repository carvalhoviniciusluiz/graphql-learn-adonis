'use strict'

class Auth {
  async gqlHandle (resolve, root, args, ctx, info) {
    const result = await resolve(root, args, ctx, info)
    return result
  }
}

module.exports = Auth
