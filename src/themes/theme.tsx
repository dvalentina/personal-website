import { createTheme } from '@mui/material';
import { amber, orange, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: amber[400],
      dark: orange[400],
    },
  },
});
