import { List } from 'antd';
import Text from '@/components/Text';
import { jumpGitlab } from '@/utils';
import useStyles from './style.style';

interface IProps {
  /** 应用ID */
  appId?: number;
  /** 应用信息 */
  appInfo: Record<string, any>;
  /** 数据 */
  data: Record<string, any>[];
  /** loading 状态 */
  loading?: boolean;
}

export default function UsageList(props: IProps) {
  const { appId, appInfo, data = [], loading } = props;
  const { styles } = useStyles();

  return (
    <List
      dataSource={data}
      loading={loading}
      renderItem={(item, index) => {
        const { file, line } = item;
        return (
          <div key={index} className={styles.LI}>
            <div className={styles.LIStretch}>
              <div className={styles.errorFile}>
                <Text
                  text={file}
                  hoverShowFull
                  onClick={() =>
                    appId &&
                    jumpGitlab({
                      appId,
                      commitId: appInfo.commitId,
                      filepath: file,
                      startRow: line,
                    })
                  }
                />
              </div>
            </div>
            <div className={styles.LINoStretch}>
              <div className={styles.LIInfoBox}>
                <span className={styles.infoTitle}>{'所在行:'}</span>
                <span className={styles.infoValue}>{line}</span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
