import cls from 'classnames';
import { CloudDownloadOutlined, PaperClipOutlined } from '@ant-design/icons';
import { Card, List, Tag } from 'antd';
import Text from '@/components/Text';
import { COLORS } from '@/constants';
import useStyles from './style.style';

interface IProps {
  /** 数据 */
  data: Record<string, any>[];
  /** loading 状态 */
  loading?: boolean;
}

const riskPackageData = [
  {
      "reason": [
          "超过 32 个月未更新代码",
          "超过 60 个月未发布新版本"
      ],
      "monthlyDownloads": 15428,
      "lastModifiedMonths": 32,
      "license": "MIT",
      "lastPublishMonths": 60,
      "latestVersion": "2.3.9",
      "name": "braft-editor",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "超过 56 个月未发布新版本；月下载量较低(55)"
      ],
      "monthlyDownloads": 55,
      "lastModifiedMonths": 3,
      "license": "MIT",
      "lastPublishMonths": 51,
      "latestVersion": "0.1.5",
      "name": "image-editor-little",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "使用了非主流开源协议(CC-BY-4.0)"
      ],
      "monthlyDownloads": 239885,
      "lastModifiedMonths": 9,
      "license": "CC-BY-4.0",
      "lastPublishMonths": 96,
      "latestVersion": "1.0.3",
      "name": "caniuse-lite",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "超过 50 个月未发布新版本"
      ],
      "monthlyDownloads": 30633081,
      "lastModifiedMonths": 9,
      "license": "MIT",
      "lastPublishMonths": 50,
      "latestVersion": "7.0.3",
      "name": "cross-env",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "超过 20 个月未更新代码",
          "超过 54 个月未发布新版本"
      ],
      "monthlyDownloads": 4056827,
      "lastModifiedMonths": 20,
      "license": "MIT",
      "lastPublishMonths": 54,
      "latestVersion": "3.3.0",
      "name": "cz-conventional-changelog",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "超过 22 个月未更新代码",
          "超过 60 个月未发布新版本"
      ],
      "monthlyDownloads": 4605434,
      "lastModifiedMonths": 22,
      "license": "MIT",
      "lastPublishMonths": 60,
      "latestVersion": "10.1.0",
      "name": "env-cmd",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "超过 32 个月未更新代码",
          "超过 74 个月未发布新版本"
      ],
      "monthlyDownloads": 4213961,
      "lastModifiedMonths": 32,
      "license": "MIT",
      "lastPublishMonths": 74,
      "latestVersion": "1.1.2",
      "name": "eslint-import-resolver-alias",
      "licenseRisk": "safe"
  },
  {
      "reason": [
          "超过 33 个月未更新代码",
          "超过 40 个月未发布新版本",
          "月下载量较低(14)"
      ],
      "monthlyDownloads": 14,
      "lastModifiedMonths": 33,
      "license": "ISC",
      "lastPublishMonths": 40,
      "latestVersion": "0.0.0-beta.0",
      "name": "eslint-plugin-i18n-check",
      "licenseRisk": "safe"
  }
];

export default function RiskPackageList(props: IProps) {
  const { data = [], loading } = props;
  const { styles } = useStyles();

  return (
    <Card title={'风险包检查'}>
      <List
        dataSource={riskPackageData}
        loading={loading}
        style={{ height: 200, overflow: 'auto' }}
        renderItem={(item, index) => {
          const {
            name,
            reason,
            latestVersion,
            monthlyDownloads,
            license,
          } = item as any;
          return (
            <List.Item key={index}>
            <div key={index} className={styles.LI}>
              <div className={styles.riskPkgMainContent}>
                <div className={styles.riskPkgInfoBox}>
                  <div className={styles.riskPkgName}>
                    <Text text={name} />
                  </div>
                  {!!monthlyDownloads && (
                    <div className={styles.riskPkgInfo}>
                      <span className={cls(styles.riskPkgInfoTag, 'tipsBox')}>
                        <CloudDownloadOutlined
                          className={styles.riskPkgInfoIcon}
                          style={{ fontSize: 14 }}
                        />
                        {`${monthlyDownloads}次`}
                      </span>
                    </div>
                  )}
                  {!!latestVersion && (
                    <div className={styles.riskPkgInfo}>
                      <span className={cls(styles.riskPkgInfoTag, 'tipsBox')}>
                        <PaperClipOutlined
                          className={styles.riskPkgInfoIcon}
                          style={{ fontSize: 14 }}
                          color={COLORS.SUCCESS_COLOR}
                        />
                        {latestVersion}
                      </span>
                    </div>
                  )}
                  {!!license && (
                    <div className={styles.riskPkgInfo}>
                      <span className={cls(styles.riskPkgInfoTag, 'tipsBox')}><Tag color="#1890ff">{license}</Tag></span>
                    </div>
                  )}
                </div>
              </div>
                <div className={styles.LITips}>{reason.join('；')}</div>
              </div>
            </List.Item>
          );
        }}
      />
    </Card>
  );
}
