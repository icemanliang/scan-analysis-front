import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Detail: React.FC = () => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '代码规范',
      children: <div><div>ES代码规范合规  10.7 / 18  周涨幅 10%</div><div>ES缺陷波及检测  10.7 / 18  周涨幅 10%</div><div>CSS代码规范合规  10.7 / 18  周涨幅 10%</div><div>CSS缺陷波及检测  10.7 / 18  周涨幅 10%</div></div>,
      extra: genExtra(),
    },
    {
      key: '2',
      label: '调用优化',
      children: <div><div>ES代码规范合规  10.7 / 18  周涨幅 10%</div><div>ES缺陷波及检测  10.7 / 18  周涨幅 10%</div><div>CSS代码规范合规  10.7 / 18  周涨幅 10%</div><div>CSS缺陷波及检测  10.7 / 18  周涨幅 10%</div></div>,
      extra: genExtra(),
    },
    {
      key: '3',
      label: '工程规范',
      children: <div><div>ES代码规范合规  10.7 / 18  周涨幅 10%</div><div>ES缺陷波及检测  10.7 / 18  周涨幅 10%</div><div>CSS代码规范合规  10.7 / 18  周涨幅 10%</div><div>CSS缺陷波及检测  10.7 / 18  周涨幅 10%</div></div>,
      extra: genExtra(),
    },
    {
      key: '4',
      label: '冗余优化',
      children: <div><div>ES代码规范合规  10.7 / 18  周涨幅 10%</div><div>ES缺陷波及检测  10.7 / 18  周涨幅 10%</div><div>CSS代码规范合规  10.7 / 18  周涨幅 10%</div><div>CSS缺陷波及检测  10.7 / 18  周涨幅 10%</div></div>,
      extra: genExtra(),
    },
    {
      key: '5',
      label: '依赖安全',
      children: <div><div>ES代码规范合规  10.7 / 18  周涨幅 10%</div><div>ES缺陷波及检测  10.7 / 18  周涨幅 10%</div><div>CSS代码规范合规  10.7 / 18  周涨幅 10%</div><div>CSS缺陷波及检测  10.7 / 18  周涨幅 10%</div></div>,
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
