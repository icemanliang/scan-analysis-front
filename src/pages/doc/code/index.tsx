
import { GridContent } from '@ant-design/pro-components';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

import useStyles from './index.style';
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';  // 导入默认的 GitHub 风格代码高亮样式


export default () => {
  const { styles } = useStyles();
  const [content, setMarkdon] = useState('');

  useEffect(()=>{
    fetch('/md/content.md').then(res => res.text()).then(text => setMarkdon(text))
  })

  return (
    <GridContent>
      <Card bordered={false}>
        <div className={styles.code}>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
        </div>
      </Card>
    </GridContent>
  );
};
