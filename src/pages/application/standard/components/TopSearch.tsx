import { Card, List, Typography, Tag } from 'antd';
import {
  CopyOutlined,
} from '@ant-design/icons';
import type { DataItem } from '../data.d';

const TopSearch = ({
  loading,
  visitData,
}: {
  loading: boolean;
  visitData: DataItem[];
}) => {

  return (
    <Card
      loading={loading}
      bordered={false}
      title="缺陷分布详情"
    >
      <List
      pagination={{ position: 'bottom', align: 'center', pageSize:5 }}
      dataSource={visitData}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text><CopyOutlined /> {item.filePath}</Typography.Text>
          <Typography.Text><Tag bordered={false} color="red">{'error: ' + item.errorsCount}</Tag></Typography.Text>
        </List.Item>
      )}
    />
    </Card>
  );
};
export default TopSearch;
