import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    analysisNumber: {
      fontSize: '36px',
      color: '#1890ff',
      marginTop: '22px',
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
