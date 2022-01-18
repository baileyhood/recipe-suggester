/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
      id
      name
      recipes {
        items {
          id
          content
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
      id
      name
      recipes {
        items {
          id
          content
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
      id
      name
      recipes {
        items {
          id
          content
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
export const onCreateRecipeIngredients = /* GraphQL */ `
  subscription OnCreateRecipeIngredients {
    onCreateRecipeIngredients {
      id
      content
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
export const onUpdateRecipeIngredients = /* GraphQL */ `
  subscription OnUpdateRecipeIngredients {
    onUpdateRecipeIngredients {
      id
      content
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
export const onDeleteRecipeIngredients = /* GraphQL */ `
  subscription OnDeleteRecipeIngredients {
    onDeleteRecipeIngredients {
      id
      content
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
      id
      name
      ingredients {
        items {
          id
          content
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
      id
      name
      ingredients {
        items {
          id
          content
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
      id
      name
      ingredients {
        items {
          id
          content
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
