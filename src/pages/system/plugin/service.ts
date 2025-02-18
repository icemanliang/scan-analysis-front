import { request } from '@umijs/max';
import type { PluginItem, CommonResult } from './data.d';

// 获取插件列表
export async function queryList(): Promise<{ data: { count: number, data: PluginItem[] } }> {
  return request('/api/plugin/list', {
    method: 'POST',
  });
}

// 删除插件
export async function deletePlugin(id: string): Promise<CommonResult> {
  return request('/api/plugin/remove', {
    method: 'POST',
    data: { id },
  });
}

// 新增插件
export async function addPlugin(data: any): Promise<CommonResult> {
  return request('/api/plugin/add', {
    method: 'POST',
    data,
  });
}

// 更新插件
export async function updatePlugin(data: any): Promise<CommonResult> {
  return request('/api/plugin/update', {
    method: 'POST',
    data,
  });
}
