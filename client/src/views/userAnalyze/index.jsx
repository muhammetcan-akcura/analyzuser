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
  const [username, setUsername] = useState('')
  const [provider, setProvider] = useState('')
  const [services, setServices] = useState([])
  const [userServices, setUserServices] = useState([])
  const [userDoughnotServices, setDoughnotUserServices] = useState([])
  const [userServicesID, setUserServicesID] = useState(null)
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
    if (!file) return;
    
    setIsLoading(true)
    setLoadingProgress(0)
    setLoadingMessage('Processing file...')

    const reader = new FileReader()
    reader.onload = (evt) => {
      try {
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
        const uniqueNames = [...new Set(rows.map((item) => item.User))]
        const uniqueProviders = [...new Set(rows.map((item) => item.Provider))]
        setUsernames(uniqueNames)
        setProviders(uniqueProviders)

        const maxCreatedDate = rows.length > 0 
          ? new Date(Math.max(...rows.map((item) => new Date(item.Created))))
          : null
        setMaxDate(maxCreatedDate)

        setIsLoading(false)
        setLoadingMessage('')
        setLoadingProgress(100)
      } catch (error) {
        console.error('File processing error:', error)
        setIsLoading(false)
        setLoadingMessage('Error processing file')
        setLoadingProgress(0)
      }
    }
    

    reader.onerror = (error) => {
      console.error('File reading error:', error)
      setIsLoading(false)
      setLoadingMessage('Error reading file')
      setLoadingProgress(0)
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
    const filteredOrders = data.filter((item) => {
      let matches = true
      if (provider && item.Provider !== provider) matches = false
      if (username && item.User !== username) matches = false
      if (chargeFilter && parseFloat(item.Charge) < parseFloat(chargeFilter)) matches = false
      if (quantityFilter && parseFloat(item.Quantity) < parseFloat(quantityFilter)) matches = false
      return matches
    })
    setFilteredOrders(filteredOrders)

    const servicesMap = filteredOrders.reduce((acc, item) => {
      const serviceId = item.Service_ID?.toString()
      if (!serviceId) return acc

      if (!acc.has(serviceId)) {
        acc.set(serviceId, {
          Service_ID: serviceId,
          Service: item.Service,
          totalCost: parseFloat(item.Cost) || 0,
          totalCharge: parseFloat(item.Charge) || 0,
          quantity: 1,
          latestCreated: item.Created,
        })
      } else {
        const existingService = acc.get(serviceId)
        existingService.totalCost += parseFloat(item.Cost) || 0
        existingService.totalCharge += parseFloat(item.Charge) || 0
        existingService.quantity += 1

        if (new Date(item.Created) > new Date(existingService.latestCreated)) {
          existingService.latestCreated = item.Created
        }
      }
      return acc
    }, new Map())

    setServices([...servicesMap.values()])
  }, [username, provider, chargeFilter, quantityFilter, data])
  const latestEntry = data && data.length > 0
  ? data.reduce((latest, current) => {
      return new Date(current.Created) > new Date(latest.Created) ? current : latest;
    })
  : null; 

  
  console.log(latestEntry?.Created)
  useEffect(() => {
    if (userServicesID !== null) {
      const filteredOrders = data.filter((item) => {
        const matchUsername = !username || item.User === username
        const matchProvider = !provider || item.Provider === provider
        return matchUsername && matchProvider
      })

      const serviceFiltered = filteredOrders.filter(
        (item) => item.Service_ID?.toString() === userServicesID.toString()
      )

      setUserServices(
        serviceFiltered.map(({ Created, Charge, Status, Service, User, Provider }) => ({
          Created,
          Charge: parseFloat(Charge),
          Status,
          Service,
          User,
          Provider,
        }))
      )

      setDoughnotUserServices(
        serviceFiltered.map(({ Created, Charge, Status }) => ({
          Created,
          Charge: parseFloat(Charge),
          Status,
        }))
      )
    }
  }, [userServicesID, username, provider, data])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSort = (column) => {
    const direction =
      sortConfig.key === column && sortConfig.direction === 'asc'
        ? 'desc'
        : 'asc'
    setSortConfig({ key: column, direction })
  }

  const sortedServices = [...services].sort((a, b) => {
    const isAscending = sortConfig.direction === 'asc'
    switch (sortConfig.key) {
      case 'totalCharge':
        return isAscending ? a.totalCharge - b.totalCharge : b.totalCharge - a.totalCharge
      case 'quantity':
        return isAscending ? a.quantity - b.quantity : b.quantity - a.quantity
      case 'latestCreated':
        const dateA = new Date(a.latestCreated)
        const dateB = new Date(b.latestCreated)
        return isAscending ? dateA - dateB : dateB - dateA
      default:
        return 0
    }
  })

  const openChartModal = (serviceId) => {
    setUserServicesID(serviceId)
    setOpenModal(true)
  }

  const closeChartModal = () => {
    setOpenModal(false)
    setUserServicesID(null)
  }

  return (
    <Box className="container mx-auto py-10">
      {!data.length ? (
        <Paper className="mb-8 p-6">
          <Box className="flex items-center justify-center w-full">
            {isLoading ? (
              <Box className="flex flex-col items-center justify-center">
                <MUILoader progress={loadingProgress} />
                <Typography variant="body1" className="mt-4">
                  {loadingMessage}
                </Typography>
              </Box>
            ) : (
              <label 
                htmlFor="dropzone-file" 
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
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
                  onChange={(e) => handleFileUpload(e.target.files?.[0])}
                />
              </label>
            )}
          </Box>
        </Paper>
      ) : null}

      {!isLoading && data.length > 0 && (
        <>
          <Box className="flex space-x-4 mb-8">
            <FormControl className="w-1/2">
              <InputLabel id="username-select-label">Username</InputLabel>
              <Select
                labelId="username-select-label"
                value={username}
                label="Username"
                onChange={(e) => setUsername(e.target.value || '')}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {usernames.map((item) => (
                  <MenuItem key={item} value={item}>
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
                onChange={(e) => setProvider(e.target.value || '')}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {providers.map((item) => (
                  <MenuItem key={item} value={item}>
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
                  <TableCell 
                    onClick={() => handleSort('totalCharge')} 
                    style={{ cursor: 'pointer' }}
                  >
                    Total Charge
                  </TableCell>
                  <TableCell 
                    onClick={() => handleSort('quantity')} 
                    style={{ cursor: 'pointer' }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell 
                    onClick={() => handleSort('latestCreated')} 
                    style={{ cursor: 'pointer' }}
                  >
                    Latest Created
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
  {sortedServices
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      // Satırdaki tarih (string formatında)
      const latestCreatedDate = new Date(row.latestCreated);

      // latestEntry.Created ile karşılaştırıyoruz
      const isOlderThan3Days = latestEntry?.Created && 
        (new Date(latestEntry.Created).getTime() - latestCreatedDate.getTime()) >= (3 * 24 * 60 * 60 * 1000);

      // Eğer son tarih 3 günden eskiyse, satırı kırmızı yap
      const rowStyle = isOlderThan3Days 
        ? { backgroundColor: '#ffcccc', color: 'black' } 
        : {};  // Eski değilse herhangi bir stil uygulama

      return (
        <TableRow
          onClick={() => openChartModal(row.Service_ID)}
          key={row.Service_ID}
          className='cursor-pointer'
          style={rowStyle}  // Burada satırın stilini uyguluyoruz
        >
          <TableCell>{row.Service_ID}</TableCell>
          <TableCell>{row.Service}</TableCell>
          <TableCell>
            {new Intl.NumberFormat('en-US', { 
              style: 'currency', 
              currency: 'USD' 
            }).format(row.totalCharge)}
          </TableCell>
          <TableCell>{row.quantity}</TableCell>
          <TableCell>
            {new Date(row.latestCreated).toLocaleDateString()}
          </TableCell>
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

          <Dialog 
            open={openModal} 
            onClose={closeChartModal} 
            maxWidth="xl" 
            fullWidth
          >
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