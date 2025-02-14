import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    LI: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
    },
    redundancyFileList: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      width: 'calc(100% - 100px)',
      overflowX: 'scroll',
    },

    redundancyFile: {
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: 400,
      marginRight: 20,

      '&:last-child': {
        marginRight: 0,
      }
    },

    redundancyLineInfo: {
      display: 'flex',
      width: '100%',
      fontSize: 12,
      color: 'rgb(153, 157, 168)',
    },

    redundancyLineItem: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 10,
      textAlign: 'left',

      '&:first-child': {
        marginLeft: 0,
      }
    },

    redundancyTotalData: {
      display: 'flex',
      flexDirection: 'column',
      width: 100,
      marginRight: 20,
    },

    redundancyLineNum: {
      flex: 1,
    },

    redundancyFileNum: {
      flex: 1,
    },
    infoTitle: {
      fontSize: 12,
      marginRight: 6,
    },
    infoValue: {
      fontSize: 12,
      display: 'inline-block',
      fontWeight: 'bold',
      minWidth: '30px',
      whiteSpace: 'nowrap',
      color: 'red',
    },
    infoValueLine: {
      fontSize: 12,
      display: 'inline-block',
      fontWeight: 'bold',
      minWidth: '30px',
      whiteSpace: 'nowrap',
      color: '#1890ff',
    }
  };
});

export default useStyles;
