export type CommonResult = {
  code: number;
  msg: string;
  data: any;
};

export type DepartmentItem = {
  id: number;
  dept_name: string;
  dept_code: string;
  apps: {
    name: string;
    value: number;
  }[];
};
