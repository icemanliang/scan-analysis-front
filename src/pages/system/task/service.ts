import { request } from '@umijs/max';
import type { TaskItem, CommonResult } from './data.d';

// 获取任务列表
export async function queryList(): Promise<{ data: { count: number, data: TaskItem[] } }> {
  return request('/api/task/list', {
    method: 'POST',
  });
}

// 废弃任务
export async function deleteTask(id: string): Promise<CommonResult> {
  return request('/api/task/remove', {
    method: 'POST',
    data: { id },
  });
}

// 新增任务
export async function addTask(data: any): Promise<CommonResult> {
  return request('/api/task/add', {
    method: 'POST',
    data,
  });
}

