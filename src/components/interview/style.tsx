import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "10px auto",
    "@media screen and (max-width: 1268px)": {
      width: "90%",
    },
  }})

  export default useStyles