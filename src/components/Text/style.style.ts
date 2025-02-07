import { createStyles } from 'antd-style';

const useStyles = createStyles(({ }) => {
  return {
    textContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: '100%',
    },

    operateBoxIcon: {
      padding: 2,
      color: '#000',
      cursor: 'pointer',
      marginRight: 4,

      '&:hover': {
        color: '#000',
      }
    },

    textWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: 'calc(100% - 20px)',
    },

    hoverTextContent: {
      minWidth: 200,
      maxWidth: 600,
      padding: 6,
      wordBreak: 'break-all',
    },

    stretchEllipsisText: {
      // flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      flex: '1 0 1px',
      display: 'inline-block',
    },

    hoverable: {
      cursor: 'pointer',
    },

    clickable: {
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  };
});

export default useStyles;
