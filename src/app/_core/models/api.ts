export interface Pagination {
  total: number;
  per_page: number;
  current: number;
}

export interface QueryResponse<T> {
    pagination: Pagination;
    results: T[];
}