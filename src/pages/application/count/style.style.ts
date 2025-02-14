import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  gitFileStats: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  gitFileGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    '&:not(:last-child)': {
      borderRight: '1px solid rgb(232, 235, 240)',
    }
  },
  gitFileGroupType: {
    width: '100%',
    height: '22px',
    textAlign: 'center',
    color: 'blue',
  },
  gitFileGroupContent: {
    flex: 1,
    display: 'flex',
  },
  gitFile: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gitFileType: {
    width: '100%',
    height: '22px',
    textAlign: 'center',
    color: 'blue',
  },
  gitFileCount: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginTop: '8px',
  },
  gitFileCountUnit: {
    marginLeft: '2px',
    fontSize: '10px',
    color: 'rgb(102, 108, 124)',
  },
  gitFileTotal: {
    display: 'flex',
    padding: '0 10px',
    fontSize: '12px',
    borderTop: '1px solid rgb(232, 235, 240)',
    paddingTop: '8px',
  },
  tips: {
    color: 'rgb(102, 108, 124)',
  },
  analysisCard: {
    padding: '4px',
    textAlign: 'center',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  analysisTitle: {
    fontSize: '16px',
    color: token.colorTextSecondary,
    marginBottom: '16px',
  },
  analysisNumber: {
    fontSize: '24px',
    color: token.colorText,
    marginTop: '8px',
    fontWeight: 'bold',
    color: '#1890ff',
  },
  analysisDesc: {
    fontSize: '14px',
    color: token.colorTextSecondary,
  },
  checkItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: `1px solid ${token.colorBorderSecondary}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}));

export default useStyles;
