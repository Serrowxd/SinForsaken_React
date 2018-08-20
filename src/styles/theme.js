import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: red,
  },
});

// This isn't quite doing what I expected. Will return to it later.
