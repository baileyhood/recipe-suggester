/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      recipes {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipeIngredients = /* GraphQL */ `
  query GetRecipeIngredients($id: ID!) {
    getRecipeIngredients(id: $id) {
      id
      ingredient {
        id
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      recipe {
        id
        name
        image
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipeIngredientss = /* GraphQL */ `
  query ListRecipeIngredientss(
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeIngredientss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ingredient {
          id
          name
          createdAt
          updatedAt
        }
        recipe {
          id
          name
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      image
      ingredients {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        ingredients {
          items {
            ingredient {
              name
              id
            }
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFavoriteRecipe = /* GraphQL */ `
  query GetFavoriteRecipe($id: ID!) {
    getFavoriteRecipe(id: $id) {
      id
      title
      recipeID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFavoriteRecipes = /* GraphQL */ `
  query ListFavoriteRecipes(
    $filter: ModelFavoriteRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        recipeID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
