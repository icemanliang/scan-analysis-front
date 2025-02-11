import React from 'react';
import { FileSearchOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse, List } from 'antd';

const Detail: React.FC = () => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <FileSearchOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const ListArea  = (list: {name: string, score: number, total: number}[]) => {
    return (
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item style={{ height: '32px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <div>{item.name}</div>
              <div>{item.score} / {item.total}</div>
            </div>
          </List.Item>
        )}
      />
    )
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '代码规范',
      children: ListArea([
        {name: 'ES代码规范合规', score: 10.7, total: 18},
        {name: 'ES缺陷波及检测', score: 10.7, total: 18},
        {name: 'CSS代码规范合规', score: 10.7, total: 18},
        {name: 'CSS缺陷波及检测', score: 10.7, total: 18},
        {name: 'CSS缺陷波及检测', score: 10.7, total: 18},
      ]),
      extra: genExtra(),
    },
    {
      key: '2',
      label: '调用优化',
      children: ListArea([{name: 'ES代码规范合规', score: 10.7, total: 18}, {name: 'ES缺陷波及检测', score: 10.7, total: 18}, {name: 'CSS代码规范合规', score: 10.7, total: 18}, {name: 'CSS缺陷波及检测', score: 10.7, total: 18}]),
      extra: genExtra(),
    },
    {
      key: '3',
      label: '工程规范',
      children: ListArea([{name: 'ES代码规范合规', score: 10.7, total: 18}, {name: 'ES缺陷波及检测', score: 10.7, total: 18}, {name: 'CSS代码规范合规', score: 10.7, total: 18}, {name: 'CSS缺陷波及检测', score: 10.7, total: 18}]),
      extra: genExtra(),
    },
    {
      key: '4',
      label: '冗余优化',
      children: ListArea([{name: 'ES代码规范合规', score: 10.7, total: 18}, {name: 'ES缺陷波及检测', score: 10.7, total: 18}, {name: 'CSS代码规范合规', score: 10.7, total: 18}, {name: 'CSS缺陷波及检测', score: 10.7, total: 18}]),
      extra: genExtra(),
    },
    {
      key: '5',
      label: '依赖安全',
      children: ListArea([{name: 'ES代码规范合规', score: 10.7, total: 18}, {name: 'ES缺陷波及检测', score: 10.7, total: 18}, {name: 'CSS代码规范合规', score: 10.7, total: 18}, {name: 'CSS缺陷波及检测', score: 10.7, total: 18}]),
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        ghost
        expandIconPosition={'start'}
        items={items}
      />
    </>
  );
};

export default Detail;
