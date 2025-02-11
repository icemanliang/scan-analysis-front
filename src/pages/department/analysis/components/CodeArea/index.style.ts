import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    salesRank: {
      padding: '0 32px 32px 32px',
    },
    rankingList: {
      height: '190px',
      overflow: 'auto',
      margin: '0px',
      padding: '0',
      listStyle: 'none',
      li: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        zoom: '1',
        '&::before, &::after': {
          display: 'table',
          content: "' '",
        },
        '&::after': {
          clear: 'both',
          height: '0',
          fontSize: '0',
          visibility: 'hidden',
        },
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        li: {
          'span:first-child': { marginRight: '8px' },
        },
      },
    },
    rankingItemNumber: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      marginTop: '1.5px',
      marginRight: '16px',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '20px',
      textAlign: 'center',
      borderRadius: '20px',
      backgroundColor: token.colorBgContainerDisabled,
    },
    rankingItemTitle: {
      flex: '1',
      marginRight: '8px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    rankingItemNumberActive: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      marginTop: '1.5px',
      marginRight: '16px',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '20px',
      textAlign: 'center',
      borderRadius: '20px',
      color: '#fff',
      backgroundColor: token.colorBgSpotlight,
    },
  };
});

export default useStyles;
