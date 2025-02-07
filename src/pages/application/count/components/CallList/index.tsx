// import cls from 'classnames';
import { Card, Radio } from 'antd';
// import useStyles from './style.style';

export default function CallList() {

  // const { styles } = useStyles();

  return (
    <Card
      title="调用分布详情"
      style={{ marginTop: 24 }}
      extra={
        <div>
          <Radio.Group defaultValue="all">
            <Radio.Button value="all">缺失类型函数分布</Radio.Button>
            <Radio.Button value="progress">Class类组件分布</Radio.Button>
            <Radio.Button value="waiting">Generator函数分布</Radio.Button>
          </Radio.Group>
        </div>
      }
    >
      <div>提交信息违规</div>
    </Card>
  );
}
