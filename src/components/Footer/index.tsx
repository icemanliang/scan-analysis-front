import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
        marginTop: '-50px'
      }}
      copyright={false}
      links={[
        {
          key: 'Ant Design Pro',
          title: '《前端架构课：研发治理平台化实战》',
          href: 'https://github.com/icemanliang',
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
