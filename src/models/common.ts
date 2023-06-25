export interface TimeStamp {
  createdAt: string;
  deletedAt: null | string;
  updatedAt: string;
}

export interface ListResult<T> {
  count: number;
  rows: T[];
}

export interface Filter<T> {
  limit: number;
  offset: number;
  desc?: keyof T;
  asc?: keyof T;
}

export interface OptionItems {
  value: string;
  label: string;
}
