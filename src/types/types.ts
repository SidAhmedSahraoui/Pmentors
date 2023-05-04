// User
export interface User {
    id: string;
    email: string;
    password: string;
    isLoading: boolean;
    errorMessage: string;
    isValid: boolean
  }
  
  // NewUser
  export interface NewUser {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    accept: boolean;
    isLoading: boolean;
    errorMessage: string;
    isValid: boolean;
    isExist: boolean;
    formValid: boolean;
  }

// Category
export interface Category {
  id: number,
  title: string ;
  description: string ;
  space: string ;
}


// Categories
export interface Categories {
  categories: Array<Category>
}