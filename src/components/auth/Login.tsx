import React, { useEffect } from "react";
import useStyles from "./style";
import {Input, Grid, Typography, Button, Alert} from "@mui/material";
import { changeEmail, changePassword, loginUser } from "../../redux/auth/auth-slice";
import { resetState } from "../../redux/auth/register-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import colors from "../styling/colors";
import  Link  from "next/link";
// app layout
import { CardBox } from "../layout/CardBox";


const Login: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {  email, password, errorMessage } =
    useAppSelector((state) => state.auth);
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeEmail(value));
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changePassword(value));
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className={classes.root}>
        <br/>
        <br/>
        <h2>La Solution Optimale Pour Une Meilleure Préparation Des Entretiens</h2>
        <br/>

        <CardBox>
          <Typography sx={{margin: "12px !important", textAlign: "center"}} className="title" variant="h5" mb={3}>
            Login
          </Typography>
        
          {errorMessage && (
          <Grid className="alert-grid" item xs={12} mb={4}>
            <Alert className="alert" variant="filled" severity="warning">
              {errorMessage}
            </Alert>
          </Grid>
        )}
          <form className="form">
          <Grid item xs={12} mb={3}>
            <Input
              type="Email"
              value={email}
              onChange={handleChangeEmail}
              disableUnderline
              placeholder="Email"
              sx={{
                borderRadius: "4px",
                backgroundColor: '#fcfcfb',
                border: `2px solid ${colors.gray}`,
                fontSize: "14px",
                fontWeight: 400,
                width: '344px',
                height:"40px",
                padding: '10px 8px',
                
              }}
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <Input
            type="Password"
              value={password}
              placeholder="Password"
              disableUnderline
              onChange={handleChangePassword}
              sx={{
                borderRadius: "4px",
                backgroundColor: '#fcfcfb',
                border: `2px solid ${colors.gray}`,
                fontSize: "14px",
                fontWeight: 400,
                width: '344px',
                height:"40px",
                padding: '10px 8px',
                
              }}
            />
          </Grid>
          <Grid className="button">
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
                  onClick={() => dispatch(loginUser())}>
                  Login
                </Button>
          </Grid>
          <Grid className="links">
          <Typography
                className="sub-title"
                variant="h6"
                mb={3}>
                {'Je n\'ai pas de compte?'}
              </Typography>
            <Link onClick={() => null} className="link" href="/signup">
              <span>
                {'Crée un compte'}
              </span>
            </Link>
          </Grid>
          </form>
        </CardBox>
      </div>
    </>
  );
};

export default Login;
