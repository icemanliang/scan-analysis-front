import { Card } from 'antd';
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
      title="全应用 BrowserAPI 调用"
      loading={loading}
      bordered={false}
      bodyStyle={{
        padding: 0,
      }}
    >
      <div className={styles.salesCard}>
        <CodeArea />
      </div>
    </Card>
  );
};
export default SalesCard;
