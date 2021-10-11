export interface PagedResponseContent<T> {
  content: T[];
  pageNo: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}
