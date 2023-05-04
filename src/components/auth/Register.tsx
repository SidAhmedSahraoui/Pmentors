import React from "react";
import useStyles from "./style";
import  Link  from "next/link";
import {
  Input,
  Grid,
  Typography,
  Button,
  FormHelperText,
  Checkbox,
  Icon,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  changeEmail,
  changePassword,
  changeFirstName,
  changeLastName,
  changePhone,
  changeUserName,
  validateEmail,
  validateForm,
  registerUser,
  resetState,
} from "../../redux/auth/register-slice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import colors from "../styling/colors";

// app layout
import { CardBox } from "../layout/CardBox";

const Register: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    email,
    username,
    firstName,
    lastName,
    phone,
    password,
    accept,
    isValid,
    isExist,
    formValid,
    errorMessage,
  } = useAppSelector((state) => state.create);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeEmail(value));
  };
  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeUserName(value));
  };
  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeFirstName(value));
  };
  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeLastName(value));
  };
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changePhone(value));
  };
  const handlechangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changePassword(value));
  };

  const CustomInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiSvgIcon-root": {
      top: "12px !important",
    },
    "& .MuiInputBase-input": {
      width: "300px",
      height: "40px !important",
      borderRadius: "4px",
      backgroundColor: "#fcfcfb",
      border: `2px solid ${colors.gray}`,
      fontSize: "14px",
      fontWeight: 400,
      color: colors.gray,
      padding: "0px",
      margin: "auto",
      marginBottom: "24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "8px",
      "&:focus": {
        borderRadius: "4px",
        border: `2px solid ${colors.gray}`,
      },
    },
  }));

  return (
    <>
      <div className={classes.root}>
          <br/>
          <br/>
        <h2>Rejoignez Une Nouvelle Expérience De Préparation Aux Entretiens</h2>
          <br/>
            <CardBox>
              <Typography className="title reg-title" variant="h4" mb={3}>
                Sign Up
              </Typography>
              <Typography
                sx={{ margin: "12px !important", textAlign: "center" }}
                className="sub-title"
                variant="h6"
                mb={3}>
                {'Crée un compte'}
              </Typography>

              <form className="form">
                <Grid item xs={12} mb={3}>
                  <Input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    disableUnderline
                    placeholder="Email"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${colors.gray}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} mb={3}>
                  <Input
                    type="text"
                    value={username}
                    onChange={handleChangeUserName}
                    disableUnderline
                    placeholder="Username"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${colors.gray}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} mb={3}>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={handleChangeFirstName}
                    disableUnderline
                    placeholder="Nom"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${colors.gray}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} mb={3}>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={handleChangeLastName}
                    disableUnderline
                    placeholder="Prénom"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${colors.gray}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} mb={3}>
                  <Input
                    type="number"
                    value={phone}
                    onChange={handleChangePhone}
                    disableUnderline
                    placeholder="Téléphone"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${colors.gray}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} mb={3}>
                  <Input
                    type="password"
                    value={password}
                    onChange={handlechangePassword}
                    disableUnderline
                    placeholder="Mot de passe"
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#fcfcfb",
                      border: `2px solid ${colors.gray}`,
                      fontSize: "14px",
                      fontWeight: 400,
                      width: "344px",
                      height: "40px",
                      padding: "10px 8px",
                    }}
                  />
                </Grid>

              </form>
              <Grid>
              <Button
                  variant="text"
                  disableElevation
                  sx={{
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,
                    padding: "14px auto",
                    border: "1px solid",
                    lineHeight: 1.5,
                    borderColor: colors.blue,
                    width: "344px",
                    marginBottom: "24px",
                    "&:hover": {
                      backgroundColor: colors.blue,
                      color: colors["text-gray-100"],
                      borderColor: colors.blue,
                      boxShadow: "none",
                    },
                  }}
                  name="next"
                  onClick={() => dispatch(registerUser())}>
                  Crée un compte
                </Button>
              </Grid>
            <Link className="log-link" href="/login">
              Go to login page
            </Link>
            </CardBox>
      
      </div>
    </>
  );
};

export default Register;
