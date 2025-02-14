import { createStyles } from 'antd-style';

const useStyles = createStyles(() => ({
  LI: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    cursor: 'pointer',
  },
  LITips: {
    width: '100%',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.45)',
  },
  riskPkgMainContent: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  riskPkgInfoBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: 1,
    width: 100,
  },
  riskPkgName: {
    flex: 1,
    width: 100,
    marginRight: 10,
  },
  riskPkgInfo: {
    display: 'flex',

    '&:first-of-type': {
      marginLeft: 10,
    },

    '&:not(:last-of-type)': {
      marginRight: 10,
    }
  },
  riskPkgInfoTag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    minWidth: 30,
    height: 24,
    padding: '0 6px',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 12,
    borderRadius: 4,
    fontWeight: 'bold',
  },

  riskPkgInfoIcon: {
    marginRight: 6,
    color: '#1890ff',
  }
}));

export default useStyles;
