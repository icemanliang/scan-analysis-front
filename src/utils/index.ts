import { isNil } from 'lodash';
import { message } from 'antd';

interface AppListItem {
  /** 主键 */
  id: number;
  /** 应用名 */
  appName: string;
  /** 应用描述 */
  appDesc: string;
  /** 应用开发人员 */
  appDevelopers: string[];
  /** 应用负责人 */
  appOwner: string;
  /** 应用仓库或gitlab地址 */
  appRepo: string;
  /** 应用状态 */
  appStatus: boolean;
  /** 类型 */
  appTags: string[];
  /** 应用扫描配置 */
  appConfig: string;
  /** 归属部门ID */
  deptId: number;
  /** 归属部门名 */
  deptName: string;
  /** 归属部门编码 */
  deptCode: string;
}

/**
 * 跳转gitlab
 */
export function jumpGitlab({
  appId,
  commitId,
  filepath,
  startRow,
  endRow,
}: {
  appId: number;
  commitId: string;
  filepath?: string;
  startRow?: number;
  endRow?: number;
}) {
  const appList: AppListItem[] = [];
  if (!appId || !appList.length || !commitId) return;
  const appInfo = appList.find((n: AppListItem) => n.id === appId);

  if (!appInfo || !appInfo.appRepo) return;

  const repository = appInfo.appRepo
    .replace(':', '/')
    .replace('git@', 'https://')
    .replace('.git', '');
  const rowRange = !isNil(startRow) ? `#L${startRow}${!isNil(endRow) ? '-' + endRow : ''}` : '';

  let url = '';
  if (filepath) {
    url = `${repository}/-/blob/${commitId}/${filepath}${rowRange}`;
  } else {
    url = `${repository}/-/commit/${commitId}`;
  }
  window.open(url, '_blank');
}

/**
 * 跳转到eslint规则介绍
 */
export function jumpEslintDoc(rule: string) {
  if (!rule) return;
  window.open(`https://eslint.org/docs/latest/${rule}`, '_blank');
}

/**
 * 复制文本到剪贴板
 * @param text
 * @returns
 */
export function copyText(text: string) {
  if (!text) {
    message.error('当前没有选中文本');
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        message.success('已复制到剪贴板');
      })
      .catch((err) => {
        message.error('复制文本失败：', err);
      });
  } else {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.classList.add('hidden');
    document.body.appendChild(tempTextArea);
    tempTextArea.value = text;
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    message.success('已复制到剪贴板');
  }
}
