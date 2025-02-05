import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={false}
      links={[
        {
          key: 'Ant Design Pro',
          title: '《前端架构课：研发治理平台化实战》',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/icemanliang',
          blankTarget: true,
        }
      ]}
    />
  );
};

export default Footer;
