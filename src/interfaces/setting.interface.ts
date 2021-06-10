/**
 * Blog 设置
 *
 */
export interface ISetting {
  state: ISettingState;

  props: ISettingProps;
}

export interface PaginationConfig {
  page: number;
  count: number;
}

export interface ISettingState {
  // 服务器地址
  serverUrl: string;
  // 语言
  language: string;
  // 主题
  theme: string;
}

export interface ISettingProps {}
