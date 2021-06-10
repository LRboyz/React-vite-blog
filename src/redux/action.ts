export declare type Actions = ResetStateAction | SetStateAction | GetStateAction;

export declare type ResetStateAction = {
  type: 'RESET_STATE';
  direction: 'RESET' | 'RESET_ALL';
  path?: string;
};

export declare type SetStateAction = {
  type: 'SET_STATE';
  path: string;
  value: any;
};

export declare type GetStateAction = {
  type: 'GET_STATE';
  path: string;
};
