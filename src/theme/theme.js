import { createMuiTheme } from "@material-ui/core/styles";
import "./fonts.css";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "'Righteous', cursive, 'Roboto', 'Helvetica', 'Arial'",
    },
    h2: {
      fontFamily: "'Raleway','Roboto', sans-serif;",
    },
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
      fontSize: "1.25rem",
    },
    body2: {
      fontFamily: "'Source Sans Pro', sans-serif, 'Roboto','Arial'",
      fontSize: "1rem",
    },
  },
  palette: {},
});

export default theme;
