import cls from 'classnames';
import { Card, List } from 'antd';
import Text from '@/components/Text';
import { jumpGitlab } from '@/utils';
import useStyles from './style.style';

const fakeData = [
    {
        "files": [
            {
                "endLine": 412,
                "startLine": 1,
                "name": "src/pages/config/rtx/jsx/handle.jsx"
            },
            {
                "endLine": 412,
                "startLine": 1,
                "name": "src/pages/config/cost/jsx/handle.jsx"
            },
            {
                "endLine": 412,
                "startLine": 1,
                "name": "src/pages/config/sla/jsx/handle.jsx"
            }
        ],
        "tokens": 2,
        "lines": 412
    },
    {
        "files": [
            {
                "endLine": 432,
                "startLine": 24,
                "name": "src/component/service/check/part/business.jsx"
            },
            {
                "endLine": 431,
                "startLine": 23,
                "name": "src/component/group/check/part/change.jsx"
            }
        ],
        "tokens": 2,
        "lines": 409
    },
    {
        "files": [
            {
                "endLine": 423,
                "startLine": 26,
                "name": "src/component/lmds/declare-rule/rule-test/left-side.jsx"
            },
            {
                "endLine": 423,
                "startLine": 26,
                "name": "src/pages/board/stab/components/fourt/side.jsx"
            }
        ],
        "tokens": 2,
        "lines": 398
    },
    {
      "files": [
          {
              "endLine": 73,
              "startLine": 16,
              "name": "src/components/main/api/detail/jsx/index.jsx"
          },
          {
              "endLine": 74,
              "startLine": 17,
              "name": "src/components/home/detail/apiParsing.jsx"
          }
      ],
      "tokens": 2,
      "lines": 58
  },
  {
    "files": [
        {
            "endLine": 183,
            "startLine": 1,
            "name": "src/pages/excep/check/components/fourt/echarts.jsx"
        },
        {
            "endLine": 183,
            "startLine": 1,
            "name": "src/pages/board/stab/components/fourt/echarts.jsx"
        }
    ],
    "tokens": 2,
    "lines": 183
},
{
  "files": [
      {
          "endLine": 75,
          "startLine": 1,
          "name": "src/layout/components/market.jsx"
      },
      {
          "endLine": 75,
          "startLine": 1,
          "name": "src/layout/components/info.jsx"
      }
  ],
  "tokens": 2,
  "lines": 75
}
];

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

export default function RedundancyFileList(props: IProps) {
  const { appId, appInfo, data = [], loading } = props;
  const { styles } = useStyles();
  console.log(styles);

  return (
    <Card title="冗余片段分布" style={{ marginTop: 24 }}>
      <List
        dataSource={fakeData}
        loading={loading}
        style={{
          height: 350, // 设置高度为 300px
          overflowY: 'auto', // 开启垂直滚动
        }}
        renderItem={(item, index) => {
          const { files, lines } = item;
          return (
            <List.Item>
              <div key={index} className={styles.LI}>
                <div className={styles.redundancyTotalData}>
                  <div className={styles.redundancyLineNum}>
                    <span className={styles.infoTitle}>{'冗余行数'}</span>
                    <span className={cls(styles.infoValue, 'warning')}>{lines}</span>
                  </div>
                  <div className={styles.redundancyFileNum}>
                    <span className={styles.infoTitle}>{'冗余文件数'}</span>
                    <span className={cls(styles.infoValue, 'warning')}>{files.length}</span>
                  </div>
                </div>
                <div className={styles.redundancyFileList}>
                  {files.map(({ key, name, startLine, endLine }: Record<string, any>) => (
                    <div className={styles.redundancyFile} key={key}>
                      <Text
                        text={name}
                        hoverShowFull
                        onClick={() =>
                          appId &&
                          jumpGitlab({
                            appId,
                            commitId: appInfo.commitId,
                            filepath: name,
                            startRow: startLine,
                            endRow: endLine,
                          })
                        }
                      />
                      <div className={styles.redundancyLineInfo}>
                        <div className={styles.redundancyLineItem}>
                          <span className={styles.infoTitle}>{'起始行：'}</span>
                          <span className={cls(styles.infoValueLine, 'tips')}>{startLine}</span>
                        </div>
                        <div className={styles.redundancyLineItem}>
                          <span className={styles.infoTitle}>{'结束行：'}</span>
                          <span className={cls(styles.infoValueLine, 'tips')}>{endLine}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </List.Item>
          );
        }}
      />
    </Card>
  );
}
