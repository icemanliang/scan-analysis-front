import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    pageHeaderContent: {
      display: 'flex',
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        display: 'block',
      },
    },
    content: {
      position: 'relative',
      top: '4px',
      flex: '1 1 auto',
      marginLeft: '5px',
      marginBottom: '5px',
      color: token.colorTextSecondary,
      lineHeight: '22px',
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        marginLeft: '0',
      },
    },
    contentTitle: {
      marginBottom: '12px',
      color: token.colorTextHeading,
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '28px',
    },
    statItem: {
      position: 'relative',
      display: 'inline-block',
      padding: '0 32px',
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
    },
    extraContent: {
      zoom: '1',
      '&::before, &::after': { display: 'table', content: "' '" },
      '&::after': {
        clear: 'both',
        height: '0',
        fontSize: '0',
        visibility: 'hidden',
      },
      float: 'right',
      whiteSpace: 'nowrap',
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        marginLeft: '-44px',
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        float: 'none',
        marginRight: '0',
      },
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        marginLeft: '-16px',
      },
    },
    iconGroup: {
      'span.anticon': {
        marginLeft: '16px',
        color: token.colorTextSecondary,
        cursor: 'pointer',
        transition: 'color 0.32s',
        '&:hover': {
          color: token.colorText,
        },
      },
    },
    rankingList: {
      margin: '25px 0 0',
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
    salesExtra: {
      display: 'inline-block',
      marginRight: '24px',
      a: {
        marginLeft: '24px',
        color: token.colorText,
        '&:hover': {
          color: token.colorPrimary,
        },
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        display: 'none',
      },
    },
    currentDate: {
      color: token.colorPrimary,
    },
    salesBar: {
      padding: '0 0 32px 32px',
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        padding: '16px',
      },
    },
    salesRank: {
      padding: '0 32px 32px 72px',
    },
    salesCard: {
      '.ant-tabs-bar, .ant-tabs-nav-wrap': {
        paddingLeft: '16px',
        '.ant-tabs-nav .ant-tabs-tab': {
          paddingTop: '16px',
          paddingBottom: '14px',
          lineHeight: '24px',
        },
      },
      '.ant-tabs-extra-content': { paddingRight: '24px', lineHeight: '55px' },
      '.ant-card-head': { position: 'relative' },
      '.ant-card-head-title': { alignItems: 'normal' },
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        padding: '16px',
      },
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        '.ant-tabs-content': {
          paddingTop: '30px',
        },
      },
    },
    salesCardExtra: {
      height: 'inherit',
    },
    salesTypeRadio: {
      position: 'absolute',
      right: '54px',
      bottom: '12px',
    },
    offlineCard: {
      '.ant-tabs-ink-bar': { bottom: 'auto' },
      '.ant-tabs-bar': { borderBottom: 'none' },
      '.ant-tabs-nav-container-scrolling': {
        paddingRight: '40px',
        paddingLeft: '40px',
      },
      '.ant-tabs-tab-prev-icon::before': { position: 'relative', left: '6px' },
      '.ant-tabs-tab-next-icon::before': { position: 'relative', right: '6px' },
      '.ant-tabs-tab-active h4': { color: token.colorPrimary },
    },
    trendText: {
      marginLeft: '8px',
      color: token.colorTextHeading,
    },
    rankingTitle: {
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        marginTop: '16px',
      },
    },
    salesExtraWrap: {
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        display: 'none',
      },
    },
  };
});

export default useStyles;
