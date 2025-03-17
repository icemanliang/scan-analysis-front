import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    analysisNumber: {
      fontSize: '24px',
      color: '#1890ff',
      marginTop: '8px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    analysisDesc: {
      fontSize: '14px',
      color: token.colorTextSecondary,
      textAlign: 'center',
      marginTop: '20px'
    },
    popArea: {
      position: 'absolute',
      top: '10px',
      right: '30px',
      padding: '20px 20px',
      width: '150px',
      height: '90px',
      borderRadius: '4px',
      textAlign: 'center',
      boxShadow: '0 0 20px 0 rgb(0 0 0 / 15%)',
    },
    top5Rate: {
      marginTop: '15px',
      fontSize: '16px',
      color: 'red',
    },
    top5Time: {
      marginTop: '15px',
      fontSize: '12px',
    }
  };
});

export default useStyles;
