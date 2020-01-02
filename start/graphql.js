'use strict'

const Gql = use('Gql')

// Gql.directive('deprecated', 'DeprecatedDirective')

// Here it has to be exactly that of the file defined in app/Schemas
Gql.schema('Post')

Gql.query('Post', 'Queries/PostController')
Gql.mutation('Post', 'Mutations/PostController')

// Maybe you prefer to organize more.

Gql.schema('Post', () => {
  Gql.query('Queries/PostController')
  Gql.mutation('Mutations/PostController')
})//.middleware(['auth'])
