import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: amber[400],
    },
  },
});
