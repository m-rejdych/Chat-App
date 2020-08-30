import { createMuiTheme } from '@material-ui/core';
import { cyan, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: amber,
  },
  typography: {
    fontFamily: '"Roboto Slab", "Roboto", "sans-serif"',
  },
});

export default theme;
