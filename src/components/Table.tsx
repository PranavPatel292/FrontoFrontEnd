import { SkeletonTable } from "./SkeletonTable";
import { getCustomers } from "../requests/customer";
import { useQuery } from "react-query";
import { DataTable } from "./DataTable";
import { Error } from "./Error";

export const Table = ({}) => {
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["customer"],
    getCustomers,
    { staleTime: 60000 }
  );

  if (isError || error) return <Error />;

  return (
    <>
      {isLoading && <SkeletonTable />}
      {!isLoading && isSuccess && <DataTable data={data.properties} />}
    </>
  );
};
