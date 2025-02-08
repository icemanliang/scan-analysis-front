import { request } from '@umijs/max';

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  return request('/api/project/notice');
}
