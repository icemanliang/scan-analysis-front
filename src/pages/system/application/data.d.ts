export type CommonResult = {
  code: number;
  msg: string;
  data: any;
};

export type ApplicationItem = {
  id: number;
  app_branch: string;
  app_config: {
    codeDir: string;
    buildDir: string;
    aliasConfig: {
      [key: string]: string[];
    };
  };
  app_desc: string;
  app_name: string;
  app_owner: string;
  app_repo: string;
  app_status: boolean;
  app_tags: string[];
};
