import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, Card, List, Typography, Modal, Switch } from 'antd';
import type { CardListItemDataType } from './data.d';
import { queryFakeList } from './service';
import useStyles from './style.style';
const { Paragraph } = Typography;
const CardList = () => {
  const { styles } = useStyles();
  const { data, loading } = useRequest(() => {
    return queryFakeList({
      count: 10,
    });
  });
  const list = data?.list || [];
  const nullData: Partial<CardListItemDataType> = {};
  const DeleteClick = ()=>{
    Modal.confirm({
      title: '删除插件',
      content: '确定删除该插件吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        console.log('DEL')
      },
    });
  }

  return (
    <PageContainer title={false}>
      <div className={styles.cardList}>
        <List<Partial<CardListItemDataType>>
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 4,
          }}
          dataSource={[nullData, ...list]}
          renderItem={(item) => {
            if (item && item.id) {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[<a key="option1">配置</a>,<a key="option2" onClick={
                      () => {
                        DeleteClick();
                      }
                    }>删除</a>]}
                  >
                    <Card.Meta
                      title={<div className='title'><span>{item.title}</span><Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked /></div>}
                      description={
                        <Paragraph
                          className={styles.item}
                          ellipsis={{
                            rows: 3,
                          }}
                        >
                          {item.description}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
            return (
              <List.Item>
                <Button type="dashed" className={styles.newButton}>
                  <PlusOutlined /> 新增插件
                </Button>
              </List.Item>
            );
          }}
        />
      </div>
    </PageContainer>
  );
};
export default CardList;
