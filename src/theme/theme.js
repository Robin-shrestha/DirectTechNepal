import { createMuiTheme } from "@material-ui/core/styles";
import "./fonts.css";

const theme = createMuiTheme({
  typography: {
    h3: {
      fontFamily: "'Righteous', cursive, 'Roboto', 'Helvetica', 'Arial'",
    },
    h4: {
      fontFamily: "'Raleway','Roboto', sans-serif;",
    },
    h5: {
      fontFamily: "'Raleway','Roboto', sans-serif;",
    },
    h6: {
      fontFamily: "'Acme','Roboto', sans-serif;",
    },
    body1: {
      fontFamily: "'Baloo Bhai 2', cursive, 'Roboto','Arial'",
    },
    body2: {
      fontFamily: "'Source Sans Pro', sans-serif, 'Roboto','Arial'",
    },
  },
});

export default theme;
