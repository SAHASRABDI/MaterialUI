import { makeStyles } from "@material-ui/core";

//create a hook
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: "20px 0",
  },
  cardMedia: {
    padding: "56.25%", //16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 10px",
    textAlign: "center",
  },
}));
//We are creating a hook as useStyles that is equal to the function call as makeStlyes
//Inside the function call we pass in a callback function ()=> which returns an object
// which contains all the styles
//access theme for additional styling
export default useStyles;
