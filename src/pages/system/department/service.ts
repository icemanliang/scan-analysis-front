import { request } from '@umijs/max';
import type { DepartmentItem, CommonResult } from './data.d';

// 获取部门列表
export async function queryList(): Promise<{ data: { count: number, data: DepartmentItem[] } }> {
  return request('/api/department/list', {
    method: 'POST',
  });
}

// 删除部门
export async function deleteDepartment(id: string): Promise<CommonResult> {
  return request('/api/department/delete', {
    method: 'POST',
    data: { id },
  });
}

// 新增部门
export async function addDepartment(data: any): Promise<CommonResult> {
  return request('/api/department/add', {
    method: 'POST',
    data,
  });
}

// 更新部门
export async function updateDepartment(data: any): Promise<CommonResult> {
  return request('/api/department/update', {
    method: 'POST',
    data,
  });
}
