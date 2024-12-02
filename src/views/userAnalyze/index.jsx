import React, { useState, useCallback, useEffect } from 'react'
import { read, utils } from 'xlsx'
import {
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { CloudUpload } from '@mui/icons-material'
import MUILineChart from '../../components/lineCharts'
import DataSummary from '../../components/charged'
import MUIDoughnutChart from '../../components/doughnut'
import MUILoader from '../../components/loader'

const ExcelProcessor = () => {
  const [usernames, setUsernames] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [providers, setProviders] = useState([])
  const [username, setUsername] = useState("")
  const [provider, setProvider] = useState("")
  const [services, setServices] = useState([])
  const [userServices, setUserServices] = useState([])
  const [userDoughnotServices, setDoughnotUserServices] = useState([])
  const [userServicesID, setUserServicesID] = useState(0)
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' })
  const [maxDate, setMaxDate] = useState(null)

  const [chargeFilter, setChargeFilter] = useState('')
  const [quantityFilter, setQuantityFilter] = useState('')

  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [loadingProgress, setLoadingProgress] = useState(0)

  const updateLoadingProgress = (progress) => {
    setLoadingProgress(progress)
  }

  const handleFileUpload = useCallback((file) => {
    setIsLoading(true)
    setLoadingProgress(0)
    const reader = new FileReader()
    reader.onload = (evt) => {
      const bstr = evt.target.result
      const wb = read(bstr, { type: 'binary' })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data = utils.sheet_to_json(ws, { header: 1 })

      const headers = data[0]
      const rows = data.slice(1).map((row) =>
        headers.reduce((obj, header, index) => {
          obj[header] = row[index]
          return obj
        }, {})
      )
      setData(rows)
      const uniqueNames = [...new Set(rows.map(item => item.User))]
      const uniqueProviders = [...new Set(rows.map(item => item.Provider))]
      setUsernames(uniqueNames)
      setProviders(uniqueProviders)

      // Find the maximum date in the dataset
      const maxCreatedDate = new Date(Math.max(
        ...rows.map(item => new Date(item.Created))
      ))
      setMaxDate(maxCreatedDate)

      setIsLoading(false)
      setLoadingMessage('')
      setLoadingProgress(100)
    }
    reader.onprogress = (evt) => {
      if (evt.lengthComputable) {
        const percentLoaded = Math.round((evt.loaded / evt.total) * 100)
        updateLoadingProgress(percentLoaded)
      }
    }
    reader.readAsBinaryString(file)
  }, [])

  useEffect(() => {
    const filteredOrders = data.filter(item => {
      let matches = true
      if (provider && item.Provider !== provider) {
        matches = false
      }
      if (username && item.User !== username) {
        matches = false
      }
      if (chargeFilter && item.Charge < chargeFilter) {
        matches = false
      }
      if (quantityFilter && item.Quantity < quantityFilter) {
        matches = false
      }
      return matches
    })
    setFilteredOrders(filteredOrders)

    const servicesMap = filteredOrders.reduce((acc, item) => {
      if (!acc.has(item.Service_ID)) {
        acc.set(item.Service_ID, {
          Service_ID: item.Service_ID,
          Service: item.Service,
          totalCost: item.Cost,
          totalCharge: item.Charge,
          quantity: 1,
          latestCreated: item.Created
        })
      } else {
        const existingService = acc.get(item.Service_ID)
        existingService.totalCost += item.Cost
        existingService.totalCharge += item.Charge
        existingService.quantity += 1

        if (new Date(item.Created) > new Date(existingService.latestCreated)) {
          existingService.latestCreated = item.Created
        }
      }
      return acc
    }, new Map())

    setServices([...servicesMap.values()])
  }, [username, provider, chargeFilter, quantityFilter, data])

  useEffect(() => {
    if (userServicesID !== 0) {
      const filteredOrders = data.filter(item => {
        if (provider && username) {
          return item.User === username && item.Provider === provider
        } else if (provider && !username) {
          return item.Provider === provider
        } else if (!provider && username) {
          return item.User === username
        }
        return true
      })
      setUserServices(filteredOrders.filter(item => item.Service_ID === userServicesID).map(({ Created, Charge, Status, Service, User, Provider }) => ({ Created, Charge, Status, Service, User, Provider })))
      setDoughnotUserServices(filteredOrders.filter(item => item.Service_ID === userServicesID).map(({ Created, Charge, Status }) => ({ Created, Charge, Status })))
    }
  }, [userServicesID])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSort = (column) => {
    const direction = sortConfig.key === column && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    setSortConfig({ key: column, direction })
  };

  const sortedServices = [...services].sort((a, b) => {
    const isAscending = sortConfig.direction === 'asc';
    if (sortConfig.key === 'totalCharge') {
      return isAscending
        ? a.totalCharge - b.totalCharge
        : b.totalCharge - a.totalCharge;
    }
    if (sortConfig.key === 'quantity') {
      return isAscending
        ? a.quantity - b.quantity
        : b.quantity - a.quantity;
    }
    if (sortConfig.key === 'latestCreated') {
      const dateA = new Date(a.latestCreated)
      const dateB = new Date(b.latestCreated)
      return isAscending ? dateA - dateB : dateB - dateA
    }
    return 0;
  });

  const openChartModal = () => {
    setOpenModal(true)
  }

  const closeChartModal = () => {
    setOpenModal(false)
  }

  return (
    <Box className="container mx-auto py-10">
      {
        !data.length ? (
          <Paper className="mb-8 p-6 ">
            <Box className="flex items-center justify-center w-full">
              {isLoading ? (
                <Box className="flex flex-col items-center justify-center">
                  <MUILoader progress={loadingProgress} />
                  <Typography variant="body1" className="mt-4">{loadingMessage}</Typography>
                </Box>
              ) : !data.length ? (
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <Box className="flex flex-col items-center justify-center pt-5 pb-6">
                    <CloudUpload className="w-10 h-10 mb-4 text-gray-500" />
                    <Typography variant="body1" className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </Typography>
                    <Typography variant="body2" className="text-xs text-gray-500">
                      XLSX or XLS
                    </Typography>
                  </Box>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".xlsx, .xls"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                  />
                </label>
              ) : null}
            </Box>
          </Paper>
        ) : null
      }

      {!isLoading && data.length > 0 && (
        <>
          <Box className="flex space-x-4 mb-8">
            <FormControl className="w-1/2">
              <InputLabel id="username-select-label">Username</InputLabel>
              <Select
                labelId="username-select-label"
                value={username}
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {usernames.map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className="w-1/2">
              <InputLabel id="provider-select-label">Provider</InputLabel>
              <Select
                labelId="provider-select-label"
                value={provider}
                label="Provider"
                onChange={(e) => setProvider(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {providers.map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <div>
            <DataSummary data={filteredOrders} />
          </div>

          <TableContainer component={Paper} sx={{ maxHeight: 400, overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service ID</TableCell>
                  <TableCell>Service</TableCell>
                  <TableCell onClick={() => handleSort('totalCharge')} style={{ cursor: 'pointer' }}>
                    Total Charge
                  </TableCell>
                  <TableCell onClick={() => handleSort('quantity')} style={{ cursor: 'pointer' }}>
                    Quantity
                  </TableCell>
                  <TableCell onClick={() => handleSort('latestCreated')} style={{ cursor: 'pointer' }}>
                    Latest Created
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedServices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    // Calculate if the row should be highlighted
                    const latestCreatedDate = new Date(row.latestCreated);
                    const isOlderThan3Days = maxDate && 
                      ((maxDate.getTime() - latestCreatedDate.getTime()) / (1000 * 3600 * 24)) >= 3;

                    const rowStyle = isOlderThan3Days 
                      ? { backgroundColor: '#ffcccc', color: 'black' } 
                      : {};

                    return (
                      <TableRow
                        onClick={() => {
                          setUserServicesID(row.Service_ID);
                          openChartModal();
                        }}
                        key={row.Service_ID}
                        className='cursor-pointer'
                        style={rowStyle} 
                      >
                        <TableCell>{row.Service_ID}</TableCell>
                        <TableCell>{row.Service}</TableCell>
                        <TableCell>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.totalCharge)}</TableCell>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{new Date(row.latestCreated).toLocaleDateString()}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100, 1000]}
            component="div"
            count={sortedServices.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

          <Dialog open={openModal} onClose={closeChartModal} maxWidth="xl" fullWidth>
            <DialogTitle>Service Data Overview</DialogTitle>
            <DialogContent>
              <Box className="flex">
                <Box className="flex-1" style={{ flex: 2 }}>
                  <MUILineChart data={userServices} />
                </Box>
                <Box className="flex-1" style={{ flex: 1 }}>
                  <MUIDoughnutChart data={userDoughnotServices} />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeChartModal} color="primary">Close</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Box>
  )
}

export default ExcelProcessor