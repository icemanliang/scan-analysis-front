export type CommonResult = {
  code: number;
  message: string;
  data: any;
};

export type TaskItem = {
  id: number;
  task_code: string;
  apps: { name: string; value: number }[];
  plugins: { name: string; value: number }[];
  task_status: number;
  task_log: string;
  task_date: string;
  cost_time: number;
};
