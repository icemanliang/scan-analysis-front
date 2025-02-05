import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  analysisCard: {
    padding: '20px',
    textAlign: 'center',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  analysisTitle: {
    fontSize: '16px',
    color: token.colorTextSecondary,
    marginBottom: '16px',
  },
  analysisNumber: {
    fontSize: '36px',
    color: token.colorText,
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  analysisDesc: {
    fontSize: '14px',
    color: token.colorTextSecondary,
  },
  checkItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: `1px solid ${token.colorBorderSecondary}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}));

export default useStyles;
