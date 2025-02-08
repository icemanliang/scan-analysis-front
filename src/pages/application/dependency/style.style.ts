import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    analysisNumber: {
      fontSize: '24px',
      color: token.colorText,
      marginTop: '8px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    analysisDesc: {
      fontSize: '14px',
      color: token.colorTextSecondary,
      textAlign: 'center',
    },
  };
});

export default useStyles;
