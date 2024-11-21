import React, { useState, useCallback } from 'react';
import { 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography,
  Box,
  TablePagination,
  styled,
  Modal,
  Fade,
  Backdrop
} from '@mui/material';
import { CloudUpload, Download, Delete } from '@mui/icons-material';
import { read, utils, write } from 'xlsx';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const primaryColor = '#5D87FF';
const deleteColor = '#FF5D5D';
const downloadColor = '#5DFF7F';

const DropZone = styled(Box)(({ theme }) => ({
  border: `2px dashed ${primaryColor}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(93, 135, 255, 0.05)',
  '&:hover': {
    backgroundColor: 'rgba(93, 135, 255, 0.1)',
    transform: 'scale(1.02)',
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
}));

const StyledTableHead = styled(TableHead)({
  backgroundColor: primaryColor,
});

const StyledTableCell = styled(TableCell)({
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    cursor: 'pointer',
    backgroundColor: 'rgba(93, 135, 255, 0.05)',
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(93, 135, 255, 0.1)',
  },
});

const ActionButton = styled(Button)({
  margin: '10px',
  padding: '10px 20px',
  fontWeight: 'bold',
});

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 800,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

const ExcelProcessor = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: 'countSum', direction: 'asc' });
  
    // Excel dosyasından veri yükleme
    const handleFileUpload = useCallback((file) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target?.result;
        const wb = read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = utils.sheet_to_json(ws, { header: 1 });
  
        if (data.length > 0) {
          const headers = data[0];
          const rows = data.slice(1).map((row) =>
            headers.reduce((obj, header, index) => {
              obj[header] = row[index];
              return obj;
            }, {})
          );
  
          const aggregatedData = rows.reduce((acc, obj) => {
            if (!acc[obj.Service_ID]) {
              acc[obj.Service_ID] = {
                name: obj.Service,
                countSum: 0,
                occurrences: 0,
                data: [],
              };
            }
            acc[obj.Service_ID].countSum += Number(obj.Charge.toFixed(0)) || 0;
            acc[obj.Service_ID].occurrences += 1;
            acc[obj.Service_ID].data.push(obj);
            return acc;
          }, {});
  
          const result = Object.entries(aggregatedData).map(
            ([id, { name, countSum, occurrences, data }]) => ({
              id: Number(id),
              name,
              countSum,
              occurrences,
              data,
            })
          );
          setColumns([
            { id: 'id', label: 'ID' },
            { id: 'name', label: 'Name' },
            { id: 'countSum', label: 'Total Count' },
            { id: 'occurrences', label: 'Occurrences' },
          ]);
          setData(result);
        }
      };
      reader.readAsBinaryString(file);
    }, []);
  
    // Veri sıralama işlevi
    const handleSort = (columnKey) => {
      let direction = 'asc';
      if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
  
      setSortConfig({ key: columnKey, direction });
  
      const sortedData = [...data].sort((a, b) => {
        if (a[columnKey] < b[columnKey]) return direction === 'asc' ? -1 : 1;
        if (a[columnKey] > b[columnKey]) return direction === 'asc' ? 1 : -1;
        return 0;
      });
  
      setData(sortedData);
    };
  
    // Son tarihleri kontrol et ve renkli gösterim ekle
    const getRowStyle = (row) => {
      const lastDate = row.data[row.data.length - 1]?.Created;
      const today = new Date();
      const threeDaysAgo = new Date(today.setDate(today.getDate() - 3));
      return new Date(lastDate) < threeDaysAgo ? { backgroundColor: '#FFCDD2', color: 'white' } : {};
    };
  
    const handleDownload = useCallback(() => {
      const ws = utils.json_to_sheet(data, { header: columns.map(col => col.id) });
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Sheet1");
      
      const fileName = 'processed_data.xlsx';
      const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, [columns, data]);
  
    const handleDeleteData = useCallback(() => {
      setData([]);
      setColumns([]);
    }, []);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleRowClick = (row) => {
      setSelectedData(row);
      setModalOpen(true);
      console.log(row)
    };
    
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    const getChartData = (rowData) => {
      if (!rowData || !rowData.data) return null;
  
      const groupedData = rowData.data.reduce((acc, item) => {
        const date = new Date(item.Created).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = { chargeSum: 0, count: 0 };
        }
        acc[date].chargeSum += item.Charge;
        acc[date].count += 1;
        return acc;
      }, {});
  
      const dates = Object.keys(groupedData);
      const charges = dates.map(date => groupedData[date].chargeSum);
      const counts = dates.map(date => groupedData[date].count);
  
      return {
        labels: dates,
        datasets: [
          {
            label: 'Charge',
            data: charges,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Occurrences',
            data: counts,
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ]
      };
    };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Charge Over Time',
        color: primaryColor,
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(93, 135, 255, 0.1)',
        },
      },
      y: {
        grid: {
          color: 'rgba(93, 135, 255, 0.1)',
        },
      },
    },
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {data.length === 0 ? (
        <DropZone
          onDrop={(e) => {
            e.preventDefault();
            handleFileUpload(e.dataTransfer.files[0]);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            accept=".xlsx, .xls"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
          />
          <label htmlFor="raised-button-file">
            <ActionButton
              variant="contained"
              component="span"
              startIcon={<CloudUpload />}
              sx={{ backgroundColor: primaryColor, '&:hover': { backgroundColor: '#4D77EF' } }}
            >
              Upload Excel
            </ActionButton>
          </label>
          <Typography variant="body1" sx={{ marginTop: 2, color: 'text.secondary' }}>
            Drag and drop your Excel file here, or click to selec
          </Typography>
        </DropZone>
      ) : (
        <>
          <StyledTableContainer component={Paper}>
            <Table>
              <StyledTableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <StyledTableRow key={row.id} onClick={() => handleRowClick(row)} style={getRowStyle(row)}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.countSum}</TableCell>
                    <TableCell>{row.occurrences}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <ActionButton
              variant="contained"
              onClick={handleDownload}
              startIcon={<Download />}
              sx={{ backgroundColor: downloadColor, color: 'white', '&:hover': { backgroundColor: '#4DEF6F' } }}
            >
              Download Excel
            </ActionButton>
            <ActionButton
              variant="contained"
              onClick={handleDeleteData}
              startIcon={<Delete />}
              sx={{ backgroundColor: deleteColor, '&:hover': { backgroundColor: '#EF4D4D' } }}
            >
              Delete Data
            </ActionButton>
          </Box>

          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalOpen}>
              <ModalContent>
                <Typography variant="h5" sx={{ marginBottom: 3, color: primaryColor, fontWeight: 'bold' }}>
                {selectedData?.name}
                </Typography>
                <Line data={getChartData(selectedData)} options={chartOptions} />
              </ModalContent>
            </Fade>
          </Modal>
        </>
      )}
    </Box>
  );
};

export default ExcelProcessor;

