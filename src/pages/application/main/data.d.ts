export type AppRequest = {
  app_id: number;
  task_id: number;
  keys: {
    name: string;
    props: string[];
  }[];
};

export type TrendRequest = {
  app_id: number;
  start_date: string;
  end_date: string;
  keys: {
    name: string;
    props: string[];
  }[];
};

export type AppResult = {
  baseInfo: {
    commitId: string;
    owner: string;
  };
  qualityInfo: {
    [key: string]: any;
  };
};

export type AppTrend = {
  date: string;
  info: {
    qualityInfo: {
      [key: string]: any;
    }
  }
}[];
