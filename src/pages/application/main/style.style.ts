import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    activitiesList: {
      padding: '0 24px 8px 24px',
    },
    username: {
      color: token.colorText,
    },
    event: {
      fontWeight: 'normal',
    },
    members: {
      a: {
        display: 'block',
        height: '24px',
        margin: '12px 0',
        color: token.colorText,
        transition: 'all 0.3s',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        marginBottom: '0',
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        marginBottom: '0',
      },
    },
    member: {
      marginLeft: '12px',
      fontSize: token.fontSize,
      lineHeight: '24px',
      verticalAlign: 'top',
    },
    projectList: {
      '.ant-card-meta-description': {
        height: '44px',
        overflow: 'hidden',
        color: token.colorTextSecondary,
        lineHeight: '22px',
      },
    },
    cardTitle: {
      fontSize: '0',
      a: {
        display: 'inline-block',
        height: '24px',
        marginLeft: '12px',
        color: token.colorTextHeading,
        fontSize: token.fontSize,
        lineHeight: '24px',
        verticalAlign: 'top',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
    },
    projectGrid: {
      width: '33.33%',
      [`@media screen and (max-width: ${token.screenMD}px)`]: { width: '50%' },
      [`@media screen and (max-width: ${token.screenXS}px)`]: { width: '100%' },
    },
    projectItemContent: {
      display: 'flex',
      height: '20px',
      marginTop: '8px',
      overflow: 'hidden',
      fontSize: '12px',
      gap: 'epx',
      lineHeight: '20px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      a: {
        display: 'inline-block',
        flex: '1 1 0',
        color: token.colorTextSecondary,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
    },
    datetime: {
      flex: '0 0 auto',
      float: 'right',
      color: token.colorTextDisabled,
    },
    activeCard: {
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        marginBottom: '24px',
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        marginBottom: '24px',
      },
    },
  };
});

export default useStyles;
