import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    borderRadius: '30px',
    padding: '10px 0',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  title: {
    color: theme.palette.text.primary,
    /// ellipsis: add dots on final of large titles
    textOverflow: 'ellipsis',
    width: '180px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0',
    textAlign: 'center',
  },
}));
