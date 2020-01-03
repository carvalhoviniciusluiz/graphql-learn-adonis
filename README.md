# graphql-learn-adonis &middot; [![mit license](https://img.shields.io/badge/license-MIT-50CB22.svg)](https://opensource.org/licenses/MIT)

## Install

```bash
yarn
```
or
```bash
npm install
```

## Run Server

```bash
adonis serve --dev
```

## Test

```
http://localhost:3333/graphiql
```

## GraphQl

Fetch all
```js
query {
  posts {
    id
    title
    content
  }
}
```

Fetch one
```js
query {
  posts(id: 9) {
    id
    title
    content
  }
}
```

Add new post
```js
mutation {
  addPost(post:{title: "xxx", content: "yyy"}) {
    id
  }
}
```

Remove post
```js
mutation {
  deletePost(id:567)
}
```

## License

MIT License

Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
