import { request } from '@umijs/max';
import type { AppTrend, AppResult, AppRequest, TrendRequest } from './data';

export async function getAppResult(params: AppRequest): Promise<{ data: AppResult }> {
  return request('/api/result/app', {
    method: 'POST',
    data: params,
  });
}

export async function getAppTrend(params: TrendRequest): Promise<{ data: AppTrend[] }> {
  return request('/api/result/app-trend', {
    method: 'POST',
    data: params,
  });
}
