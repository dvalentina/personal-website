import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: amber[300],
      dark: amber[500],
    },
  },
});
