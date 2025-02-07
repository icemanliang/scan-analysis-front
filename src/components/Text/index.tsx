import cls from 'classnames';
// import { Popover } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { copyText } from '@/utils';
import useStyles from './style.style';

export interface IProps {
  /** 展示文本 */
  text: string;
  /** 是否支持复制 */
  copyable?: boolean;
  /** 是否超长省略 */
  ellipsis?: boolean;
  /** 是否hover展示完整内容 */
  hoverShowFull?: boolean;
  /** 点击事件 */
  onClick?: () => void;
}

export default function Text(props: IProps) {
  const { text, copyable = true, ellipsis = true, hoverShowFull = false, onClick } = props;
  const { styles } = useStyles();

  return (
    <div className={styles.textContainer}>
      {copyable && (
        <CopyOutlined
          className={styles.operateBoxIcon}
          onClick={() => copyText(text)}
        />
      )}
      <div className={styles.textWrapper}>
        {/* {hoverShowFull && (
          <Popover mouseEnterDelay={0.5} trigger='hover'>
            <div className={styles.hoverTextContent}>{text}</div>
          </Popover>
        )} */}
        <div
          className={cls(
            ellipsis && styles.stretchEllipsisText,
            hoverShowFull && styles.hoverable,
            onClick && styles.clickable,
          )}
          onClick={onClick}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
