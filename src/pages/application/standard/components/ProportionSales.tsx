import { Pie } from '@ant-design/plots';
import { Card } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';

const ProportionSales = ({
  loading,
  salesPieData,
}: {
  loading: boolean;
  salesPieData: DataItem[];
}) => {
  return (
    <Card
      loading={loading}
      bordered={false}
      title="缺陷规则占比"
    >
      <div>
        <Pie
          height={295}
          radius={0.8}
          innerRadius={0.5}
          angleField="y"
          colorField="x"
          data={salesPieData as any}
          legend={false}
          label={{
            position: 'spider',
            text: (item: { x: number; y: number }) => {
              return `${item.x}: ${numeral(item.y).format('0,0')}`;
            },
          }}
        />
      </div>
    </Card>
  );
};
export default ProportionSales;
