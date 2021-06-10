export type GlobalSetting = {
  theme: GlobalTheme;
};

export type PageConfig = {
  limit: number;
  skip: number;
  fields?: any;
  sort?: any;
};

export type GlobalTheme = 'light' | 'dark';
