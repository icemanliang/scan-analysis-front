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
              <div style={{paddingLeft: '24px', color: 'grey'}}>{item.name}</div>
              <div>
                <span style={{color: 'blue'}}>{item.score}</span>
                <span style={{margin: '0 5px'}}>/</span>
                <span style={{color: 'blue'}}>{item.total}</span>
              </div>
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
        {name: 'ES缺陷波及检测', score: 2.68, total: 4},
        {name: 'CSS代码规范合规', score: 0.62, total: 4},
        {name: 'CSS缺陷波及检测', score: 1.07, total: 2},
        {name: '文件命名缺陷检测', score: 2.06, total: 3},
      ]),
      extra: genExtra(),
    },
    {
      key: '2',
      label: '调用优化',
      children: ListArea([
        {name: 'Generator函数占比', score: 0.03, total: 1},
        {name: '类组件占比', score: 2.07, total: 3},
        {name: 'TS类型缺陷检测', score: 3, total: 3},
        {name: 'TS文件覆盖率', score: 0, total: 3},
        {name: '翻译函数调用合规', score: 3.18, total: 4},
        {name: 'Bom API调用收敛', score: 3, total: 3},
        {name: 'Dom API调用收敛', score: 2.22, total: 4},
      ]),
      extra: genExtra(),
    },
    {
      key: '3',
      label: '工程规范',
      children: ListArea([
        {name: '配置文件合规占比', score: 3.04, total: 8},
        {name: 'Node版本合规', score: 1, total: 2},
        {name: 'commit提交合规', score: 0, total: 1},
        {name: 'husky配置合规', score: 1, total: 1},
        {name: 'readme内容合规', score: 0, total: 2},
        {name: 'packageJson配置合规', score: 0, total: 1},
        {name: 'npmrc配置合规', score: 1, total: 1},
        {name: 'nodeVersion配置合规', score: 1, total: 1},
        {name: '包管理器配置合规', score: 1, total: 1},
        {name: '最深目录检测', score: 0, total: 2},
        {name: '目录深度影响', score: 1.8, total: 2},
      ]),
      extra: genExtra(),
    },
    {
      key: '4',
      label: '冗余优化',
      children: ListArea([
        {name: '最长重复行检测', score: 1.51, total: 4},
        {name: '代码重复波及文件检测', score: 2.23, total: 3},
        {name: '冗余代码影响检测', score: 2.02, total: 3},
      ]),
      extra: genExtra(),
    },
    {
      key: '5',
      label: '依赖治理',
      children: ListArea([
        {name: '依赖包相似检测', score: 0, total: 1},
        {name: '依赖包风险监测', score: 1.5, total: 3},
        {name: '依赖包可升级检测', score: 0, total: 2},
      ]),
      extra: genExtra(),
    },
  ];

  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        ghost
        accordion
        expandIconPosition={'start'}
        items={items}
      />
    </>
  );
};

export default Detail;
