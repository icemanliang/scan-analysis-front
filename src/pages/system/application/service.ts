import { request } from '@umijs/max';
import type { ApplicationItem, CommonResult } from './data.d';

// 获取应用列表
export async function queryList(): Promise<{ data: { count: number, data: ApplicationItem[] } }> {
  return request('/api/application/list', {
    method: 'POST',
  });
}

// 删除应用
export async function deleteApplication(id: string): Promise<CommonResult> {
  return request('/api/application/remove', {
    method: 'POST',
    data: { id },
  });
}

// 新增应用
export async function addApplication(data: any): Promise<CommonResult> {
  return request('/api/application/add', {
    method: 'POST',
    data,
  });
}

// 更新应用
export async function updateApplication(data: any): Promise<CommonResult> {
  return request('/api/application/update', {
    method: 'POST',
    data,
  });
}
