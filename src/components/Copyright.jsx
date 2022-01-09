import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        EspressoDialIn.com
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
