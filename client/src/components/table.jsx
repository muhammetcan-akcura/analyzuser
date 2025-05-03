// src/components/OrdersTable.js
import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const OrdersTable = ({ ordersData }) => {
    // Tablo için gerekli verileri ve kolonları tanımlıyoruz
    const columns = React.useMemo(
        () => [
            {
                Header: 'Order ID',
                accessor: 'id', // Bu field, datadaki id'yi gösterecek
            },
            {
                Header: 'External ID',
                accessor: 'external_id',
            },
            {
                Header: 'User',
                accessor: 'user',
            },
            {
                Header: 'Service Name',
                accessor: 'service_name',
            },
            {
                Header: 'Charge',
                accessor: 'charge.formatted',
            },
            {
                Header: 'Provider',
                accessor: 'provider',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Created At',
                accessor: 'created',
            },
        ],
        []
    );

    // react-table hook'u ile tabloyu yapılandırıyoruz
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        pageIndex,
        pageSize,
        setPageSize,
    } = useTable(
        {
            columns,
            data: ordersData,
            initialState: { pageIndex: 0 },
        },
        useSortBy,  // Sorting functionality
        usePagination  // Pagination functionality
    );

    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table {...getTableProps()} className="min-w-full table-auto">
                <thead className="bg-gray-800 text-white">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="px-6 py-3 text-left cursor-pointer"
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="text-gray-700">
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-t hover:bg-gray-50">
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()} className="px-6 py-4">
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-2">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        {'<'}
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        {'>'}
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {'>>'}
                    </button>
                </div>

                <div className="flex items-center space-x-2">
                    <span>Page {pageIndex + 1} of {pageCount}</span>
                    <select
                        className="px-3 py-2 border rounded"
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                    >
                        {[10, 20, 30, 50].map(size => (
                            <option key={size} value={size}>
                                Show {size}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default OrdersTable;
