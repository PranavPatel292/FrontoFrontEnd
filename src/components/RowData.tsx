import dayjs from "dayjs";
import { Customer } from "./DataTable";

interface RowDataProps {
  data: Customer;
}
export const RowData = (props: RowDataProps) => {
  const numberFormatter = Intl.NumberFormat("en-AU");
  return (
    <tr
      key={props.data.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="px-6 py-4">{props.data.id}</td>
      <td className="px-6 py-4">{props.data.address}</td>
      <td className="px-6 py-4">
        {dayjs(props.data.created_at).format("DD/MM/YYYY hh:mm:ss (UTCZ)")}
      </td>
      <td className="px-6 py-4">
        $ {numberFormatter.format(props.data.valuation)}
      </td>
    </tr>
  );
};
