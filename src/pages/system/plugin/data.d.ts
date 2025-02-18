export type CommonResult = {
  code: number;
  msg: string;
  data: any;
};

export type PluginItem = {
  id: number;
  plugin_config: string;
  plugin_desc: string;
  plugin_name: string;
  plugin_status: number;
};
