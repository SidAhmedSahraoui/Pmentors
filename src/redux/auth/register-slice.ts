//import axios, { AxiosError, AxiosResponse } from "axios";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { AppThunk, RootState } from "../store";
import { NewUser } from "../../types/types";

const initialState: NewUser = {
  id: "",
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  phone: "",
  password: "",
  accept: false,
  isLoading: false,
  errorMessage: "",
  isValid: false,
  isExist: false,
  formValid: false,
};

export const registerUserSlice = createSlice({
  name: "register-user",
  initialState,
  reducers: {
    resetState: () => initialState,
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    changeFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    changeLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    changePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  
    validateEmail: (state) => {
      // We clear errors
      state.errorMessage = "";

      // Then we validate the form
      const { email } = current(state);

      // Validating the email
      if (!email) {
        state.errorMessage = "Email can't be empty";
        return;
      } else {
        if (email === "admin@admin.com") {
          state.isExist = true;
          state.isValid = false;
          return;
        } else {
          state.isExist = false;
          state.isValid = true;
        }
      }
    },
    validateForm: (state) => {
      // We clear errors
      state.errorMessage = "";

      // Then we validate the form
      const { username, email, firstName, lastName, phone, password } = current(state);

      // Validating the email
      if (!username || !email || !firstName || !lastName || !phone || !password) {
        state.errorMessage = "Veuillez remplir tous les champs";
        state.formValid = false;
        return;
      } else {
        if (password.length < 8) {
          state.errorMessage = "le mot de passe doit contenir au moins 8 caractères";
          state.formValid = false;
        } else {
          state.formValid = true;
        }
      }
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      state.errorMessage = "";
      state.isLoading = false;
      state.accept = true;
    },
    createUserFail: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  resetState,
  changeEmail,
  changeFirstName,
  changeLastName,
  changePhone,
  changeUserName,
  changePassword,
  validateEmail,
  validateForm,
  setLoading,
  createUserSuccess,
  createUserFail,
} = registerUserSlice.actions;

export const selectCreateUser = (state: RootState) => state.create;

export const registerUser = (): AppThunk => async (dispatch, getState) => {

  const { isValid, isExist, formValid } =
    selectCreateUser(getState());

  // If the form is valid, we send a request to the api
  if (isValid && !isExist && formValid) {
    dispatch(setLoading());
    dispatch(createUserSuccess(uuidv4()))
  } else {
    dispatch(createUserFail("Somthing wrong!"))
  }
};

export default registerUserSlice.reducer;
