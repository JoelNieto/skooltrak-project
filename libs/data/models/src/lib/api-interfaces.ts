export interface EntityBase {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PaginationQuery {
  pageSize: number;
  currentPage: number;
}

export interface PaginatedData<T> {
  count: number;
  page: number;
  pageSize: number;
  items: T[];
}
