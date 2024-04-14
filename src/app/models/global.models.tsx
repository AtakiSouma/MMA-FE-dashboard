export interface MetaData {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}
export interface PaginationParams {
  page: number;
  limit: number;
  search: string;
}
