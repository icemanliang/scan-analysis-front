import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    code: {
      li : {
        listStyle: 'disc'
      },
    },
    'head-title': {
      marginBottom: '20px',
      color: token.colorTextHeading,
      fontWeight: '500px',
      fontSize: '16px',
    },
  };
});

export default useStyles;
