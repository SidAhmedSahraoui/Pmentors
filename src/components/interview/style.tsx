import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "30px auto",
    "@media screen and (max-width: 1268px)": {
      width: "90%",
    },
    "& nav": {
      display: "flex",
      justifyContent: "space-between",
      "& h1": {
        fontSize: "24px",
        fontWeight: 400,
        fontFamily: "Rubik",
      },
      "& .icons": {
        width: "80px",
        display: "flex",
        justifyContent: "space-between",
      },
    },
  }})

  export default useStyles