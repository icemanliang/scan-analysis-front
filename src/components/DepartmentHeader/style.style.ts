import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    pageHeaderContent: {
      display: 'flex',
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        display: 'block',
      },
      marginBottom: '14px'
    },
    content: {
      position: 'relative',
      marginRight: '25px',
      top: '4px',
      color: token.colorTextSecondary,
      lineHeight: '22px',
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        marginLeft: '0',
      },
    },
    contentTitle: {
      // marginBottom: '24px',
      color: token.colorTextHeading,
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '28px',
      display: 'flex'
    }
  };
});

export default useStyles;
