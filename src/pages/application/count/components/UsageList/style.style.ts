import { createStyles } from 'antd-style';

const useStyles = createStyles(() => ({
  LI: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  LIStretch: {
    flex: 1,
    width: 1,
    marginRight: 20,
  },
  LINoStretch: {
    flexShrink: 0,
    display: 'flex',
  },
  LIInfoBox: {
    display: 'flex',
    marginRight: 10,

    '&:last-child': {
      marginRight: 0,
    }
  },
  errorFile: {
    flex: 1,
    marginRight: 20,
    flexGrow: 1,
    width: 100,
    display: 'inline-block',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    }
  },
  infoTitle: {
    fontSize: 12,
    marginRight: 6,
  },
  infoValue: {
    fontSize: 12,
    display: 'inline-block',
    fontWeight: 'bold',
    minWidth: '30px',
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;
