import { RowData } from "./RowData";

export interface Customer {
  id: number;
  address: string;
  valuation: number;
  hidden: boolean;
  created_at: string;
}
interface TablePros {
  data: Array<Customer>;
}

export const DataTable = (data: TablePros) => {
  let sum = 0;
  const response = data.data;
  const numberFormatter = Intl.NumberFormat("en-AU");

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {response.map((ele) => {
            if (!ele.hidden) {
              sum += ele.valuation;
              return <RowData data={ele} />;
            } else {
              return <></>;
            }
          })}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td />
            <td />
            <td />
            <td className="px-6 py-4">$ {numberFormatter.format(sum)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
