interface TablePros {
    id: number;
    address: string;
    valuation: number;
    hidden: boolean;
    createdAt: Date;
}

export const Table = (data: TablePros) => {
  return (
    <>
        <div className="flex flex-col">
            <table className="table-auto">
                <tr>
                    <th>ID</th>
                    <th>Address</th>
                    <th>Valuation</th>
                </tr>
            </table>

        </div>
    </>
  )
}