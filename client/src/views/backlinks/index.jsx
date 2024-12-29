import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table';

function ExcelUploadAndDisplay() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const binaryStr = event.target.result;
            const wb = XLSX.read(binaryStr, { type: 'binary' });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(ws);
            console.log("json", jsonData)
            setColumns([{
                Header: "Source url",
                accessor: "Source url",
            }]);

            setData(jsonData);
        };

        reader.readAsBinaryString(file);
    };

    // Handle copy action
    const handleCopySourceUrls = () => {
        const sourceUrls = data.map(row => row['Source url']).join('\n');
        navigator.clipboard.writeText(sourceUrls).then(() => {
            alert('Source URLs copied to clipboard!');
        }).catch((err) => {
            alert('Failed to copy: ' + err);
        });
    };

    // Use react-table hooks
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state: { globalFilter }
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    );

    return (
        <div>
            <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
            {data.length > 0 && (
                <div>
                    {/* Search input */}
                    <input
                        value={globalFilter || ''}
                        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
                        placeholder="Search all columns"
                        style={{ margin: '10px 0', padding: '5px' }}
                    />

                    {/* Button to copy all source URLs */}
                    <button onClick={handleCopySourceUrls} style={{ marginBottom: '10px' }}>
                        Copy All Source URLs
                    </button>

                    <table {...getTableProps()} border="1">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ExcelUploadAndDisplay;
