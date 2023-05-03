import { createUseStyles } from "react-jss";
import colors from "../styling/colors";

const useStyles = createUseStyles({
  root: {
    background: `linear-gradient(180deg, ${colors["text-gray-100"]} 0%, ${colors.blue} 100%)`,
    padding: "0px",
    margin: "0px",
    width: "100%",
    height: "100vh",
    "& h2": {
      margin: "auto",
      width: "45%",
      height: "48px",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "6px",
      textAlign: "center",
      color: "#4C84FF",
    },
    "& .title": {
      height: "20px",
      width: "80%",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "0px",
      margin: "40px auto !important",
    },
    "& .reg-title": {
      marginBottom: "16px !important",
    },
    "& .sub-title": {
      padding: "0px",
      margin: '0px',
      display: "inline-block",
      color: "#5A6171",
      width: "fit",
      fontWeight: 400,
      fontSize: "14px",
      paddingTop: "12px",
    },
    "& .down-title": {
      margin: "auto",
      marginTop: "36px",
      color: "#5A6171",
      width: "80%",
      height: "52px",
      fontWeight: 400,
      fontSize: "18px",
    },
    "& .log-link": {
      margin: "auto",
      display: "inline-block",
      marginTop: "66px",
      textDecoration: "none",
      color: " #4C84FF",
      width: "80%",
      fontWeight: 400,
      fontSize: "14px",
    },
    "& .alert-grid": {
      "& .alert": {
        background: "#F4F6FC",
        color: "#FD5461",
        width: "344px",
        margin: "auto",
        textAlign: "left",
        alignItems: "center",
      },
      "& .alert-success": {
        background: "#F4F6FC",
        color: "#29C293",
        width: "344px",
        margin: "auto",
        textAlign: "left",
        alignItems: "center",
      },
    },
    "& .verif-alert": {
      color: "#FD5461",
      fontSize: "11px",
      fontWeight: 400,
      "& p": {
        width: "220px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
    },
    "& .form": {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      "& .check": {
        display: "flex",
        width: "344px",
        margin: "auto",
        flexDirection: "row",
        alignItems: "center",
      },
      "& .link": {
        textDecoration: "none",
        paddingTop: "12px",
        "& span": {
          color: colors.blue,
          fontSize: "14px",
          fontWeight: 400
        },
      },
      "& .links": {
        width: "344px",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "18px",
        marginBottom: "27px",
        "& .link": {
          textDecoration: "none",
          "& span": {
            color: colors.blue,
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },
  },
});

export default useStyles;
