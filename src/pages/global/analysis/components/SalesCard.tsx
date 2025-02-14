import { Card, Tabs } from 'antd';
import useStyles from '../style.style';
import CodeArea from './CodeArea';

const rankingListData: {
  title: string;
  total: number;
}[] = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `管理系统 ${i} 号`,
    total: 323234,
  });
}

const SalesCard = ({
  loading,
}: {
  loading: boolean;
}) => {
  const { styles } = useStyles();
  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{
        padding: 0,
      }}
    >
      <div className={styles.salesCard}>
        <Tabs
          size="large"
          tabBarStyle={{
            marginBottom: 24,
          }}
          items={[
            {
              key: 'sales',
              label: '全应用ES规范',
              children: (
                <CodeArea />
              ),
            },
            {
              key: 'views',
              label: '全应用CSS规范',
              children: (
                <CodeArea />
              ),
            }
          ]}
        />
      </div>
    </Card>
  );
};
export default SalesCard;
