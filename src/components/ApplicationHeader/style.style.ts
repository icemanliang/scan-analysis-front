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
    },
    statItem: {
      position: 'relative',
      display: 'inline-block',
      padding: '0 32px',
      '.title': {
        color: 'rgba(0,0,0,0.45)',
        marginBottom: '6px',
        textAlign: 'center'
      },
      '.value': {
        fontSize: '16px',
        marginTop: '10px',
        textAlign: 'center',
        color: '#000'
      },
      '> p:first-child': {
        marginBottom: '4px',
        color: token.colorTextSecondary,
        fontSize: token.fontSize,
        lineHeight: '22px',
      },
      '> p': {
        margin: '0',
        color: token.colorTextHeading,
        fontSize: '30px',
        lineHeight: '38px',
        '> span': {
          color: token.colorTextSecondary,
          fontSize: '20px',
        },
      },
      '&::after': {
        position: 'absolute',
        top: '8px',
        right: '0',
        width: '1px',
        height: '40px',
        backgroundColor: token.colorSplit,
        content: "''",
      },
      '&:last-child': {
        paddingRight: '0',
        '&::after': {
          display: 'none',
        },
      },
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        padding: '0 16px',
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        padding: '0 16px',
        textAlign: 'left',
        '&::after': {
          display: 'none',
        },
      },
      [`@media screen and (max-width: ${token.screenSM}px)`]: { float: 'none' },
    }
  };
});

export default useStyles;
