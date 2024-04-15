import { useEffect } from "react";
import { PaginationParams } from "../models/global.models";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchAllUserAsync } from "../redux/slice/userSlice";

export default function useUser() {
  const {
    currentPage,
    searchValue,
    userAdaptersByPage,
    pageCount,
    userLoading,
  } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const input: PaginationParams = {
    limit: 6,
    page: currentPage,
    search: searchValue,
  };

  useEffect(() => {
    if (!userLoading) {
      dispatch(fetchAllUserAsync(input));
    }
  }, [userLoading, dispatch]);
  return {
    userLoading,
    pageCount,
    currentPage,
    searchValue,
    userAdaptersByPage,
  };
}
