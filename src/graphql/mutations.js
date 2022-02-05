/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
export const createRecipeIngredients = /* GraphQL */ `
  mutation CreateRecipeIngredients(
    $input: CreateRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    createRecipeIngredients(input: $input, condition: $condition) {
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
export const updateRecipeIngredients = /* GraphQL */ `
  mutation UpdateRecipeIngredients(
    $input: UpdateRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    updateRecipeIngredients(input: $input, condition: $condition) {
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
export const deleteRecipeIngredients = /* GraphQL */ `
  mutation DeleteRecipeIngredients(
    $input: DeleteRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    deleteRecipeIngredients(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createFavoriteRecipe = /* GraphQL */ `
  mutation CreateFavoriteRecipe(
    $input: CreateFavoriteRecipeInput!
    $condition: ModelFavoriteRecipeConditionInput
  ) {
    createFavoriteRecipe(input: $input, condition: $condition) {
      id
      title
      recipeID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFavoriteRecipe = /* GraphQL */ `
  mutation UpdateFavoriteRecipe(
    $input: UpdateFavoriteRecipeInput!
    $condition: ModelFavoriteRecipeConditionInput
  ) {
    updateFavoriteRecipe(input: $input, condition: $condition) {
      id
      title
      recipeID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFavoriteRecipe = /* GraphQL */ `
  mutation DeleteFavoriteRecipe(
    $input: DeleteFavoriteRecipeInput!
    $condition: ModelFavoriteRecipeConditionInput
  ) {
    deleteFavoriteRecipe(input: $input, condition: $condition) {
      id
      title
      recipeID
      createdAt
      updatedAt
      owner
    }
  }
`;
