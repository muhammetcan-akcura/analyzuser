"use client"

import { useState, useMemo } from "react"
import Papa from "papaparse"
import {
    Box,
    Card,
    CardContent,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    CircularProgress,
    Alert,
    TextField,
    Button,
    ButtonGroup,
    Modal,
    Paper,
    Divider,
    Tabs,
    Tab,
} from "@mui/material"
import { format } from "date-fns"

// Basit bir çubuk grafik bileşeni
const SimpleBarChart = ({ data, title }) => {
    const maxValue = Math.max(...data.map((item) => item.value)) * 1.1 // %10 marj ekle

    return (
        <div className="w-full">
            <Typography variant="subtitle1" className="mb-3 font-semibold text-gray-700">
                {title}
            </Typography>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="w-full">
                        <div className="flex justify-between mb-1.5">
                            <Typography variant="body2" className="text-gray-600 font-medium">
                                {item.label}
                            </Typography>
                            <Typography variant="body2" className="font-semibold text-gray-800">
                                {item.value}
                                {item.unit}
                            </Typography>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                            <div
                                className={`h-3 rounded-full ${item.color} shadow-sm transition-all duration-500 ease-in-out`}
                                style={{ width: `${(item.value / maxValue) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function OrderSummary() {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState("")
    const [summaryTable, setSummaryTable] = useState({})
    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [fileName, setFileName] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [sortBy, setSortBy] = useState("none") // none, totalSpent, totalOrders
    const [tabValue, setTabValue] = useState(0) // 0: Tüm Servisler, 1: Sipariş Kesilmiş Servisler

    // Modal state
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCell, setSelectedCell] = useState(null)

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setLoading(true)
        setError("")
        setFileName(file.name)

        const newData = []
        const userSet = new Set()

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            step: (row) => {
                const values = row.data
                const requiredFields = ["User", "Status", "Created", "Service", "Cost"]
                const hasAllFields = requiredFields.every((field) => field in values)

                if (!hasAllFields) return
                newData.push(values)
                userSet.add(values.User)
            },
            complete: () => {
                if (newData.length === 0) {
                    setError("CSV dosyasında gerekli sütunlar eksik veya hiç geçerli veri yok.")
                } else {
                    setData(newData)
                    setUsers(Array.from(userSet))
                }
                setLoading(false)
            },
            error: () => {
                setError("Dosya okunurken bir hata oluştu.")
                setLoading(false)
            },
        })
    }

    const handleUserChange = (event) => {
        const user = event.target.value
        setSelectedUser(user)
        setSearchTerm("")
        setSortBy("none")
        setTabValue(0) // Kullanıcı değiştiğinde tab'ı ilk tab'a reset et
        const userOrders = data.filter((row) => row.User === user && row.Status === "Completed")
        const services = {}
        const allDatesSet = new Set()

        userOrders.forEach((order) => {
            const date = format(new Date(order.Created), "yyyy-MM-dd")
            const service = order.Service
            allDatesSet.add(date)
            if (!services[service]) services[service] = {}
            if (!services[service][date]) services[service][date] = { count: 0, spent: 0 }
            services[service][date].count += 1
            services[service][date].spent += Number.parseFloat(order.Cost)
        })

        const sortedDates = Array.from(allDatesSet).sort()
        setDates(sortedDates)
        setSummaryTable(services)
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    // Calculate totals for each service
    const servicesWithTotals = useMemo(() => {
        const result = []

        Object.entries(summaryTable).forEach(([service, serviceData]) => {
            let totalOrders = 0
            let totalSpent = 0
            let hasGaps = false // Bu servis için sipariş kesilmesi var mı kontrol et
            
            // Her servis için tüm günlerde sipariş var mı diye kontrol et
            if (dates.length > 0) {
                for (const date of dates) {
                    if (!serviceData[date] || serviceData[date].count === 0) {
                        hasGaps = true
                        break
                    }
                }
            }

            Object.values(serviceData).forEach((entry) => {
                totalOrders += entry.count
                totalSpent += entry.spent
            })

            result.push({
                service,
                serviceData,
                totalOrders,
                totalSpent,
                hasGaps,  // Sipariş kesilmeleri olan servisler için flag
            })
        })

        return result
    }, [summaryTable, dates])

    // Filter and sort services
    const filteredAndSortedServices = useMemo(() => {
        let result = [...servicesWithTotals]

        // Tab'a göre filtreleme yap
        if (tabValue === 1) { // Sipariş Kesilmiş Servisler
            result = result.filter(item => item.hasGaps)
        }

        // Filter by search term
        if (searchTerm) {
            result = result.filter((item) => item.service.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        // Sort by selected option
        if (sortBy === "totalSpent") {
            result.sort((a, b) => b.totalSpent - a.totalSpent)
        } else if (sortBy === "totalOrders") {
            result.sort((a, b) => b.totalOrders - a.totalOrders)
        }

        return result
    }, [servicesWithTotals, searchTerm, sortBy, tabValue])

    // Handle cell click to open modal
    const handleCellClick = (service, date, entry) => {
        if (!entry) return // Boş hücrelere tıklandığında bir şey yapma

        setSelectedCell({
            service,
            date,
            entry,
        })
        setModalOpen(true)
    }

    // Close modal
    const handleCloseModal = () => {
        setModalOpen(false)
        setSelectedCell(null)
    }

    // Add a new function to handle service click for details
    const handleServiceClick = (service, serviceData) => {
        // Prepare daily data for the charts - all dates, with 0 for missing days
        const dailyData = dates.map((date) => {
            const entry = serviceData[date] || { count: 0, spent: 0 }
            return {
                date,
                count: entry.count,
                spent: entry.spent,
                hasOrder: entry.count > 0 // Siparişi var mı yok mu
            }
        })

        setSelectedCell({
            service,
            dailyData,
            totalOrders: dailyData.reduce((sum, day) => sum + day.count, 0),
            totalSpent: dailyData.reduce((sum, day) => sum + day.spent, 0),
            // Sipariş kesilme günlerini hesapla
            gapDays: dailyData.filter(day => day.count === 0).map(day => day.date)
        })
        setModalOpen(true)
    }

    return (
        <Box className="p-8 max-w-6xl mx-auto bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg">
            <Typography variant="h5" className="mb-6 font-bold text-gray-800 flex items-center">
                <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                </svg>
                Sipariş Analizi
            </Typography>

            <div className="mb-8">
                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-blue-300 rounded-xl cursor-pointer bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <div className="mb-3 p-3 rounded-full bg-blue-50">
                            <svg
                                className="w-10 h-10 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                        </div>
                        <p className="mb-2 text-sm text-gray-700">
                            <span className="font-semibold">CSV dosyası yüklemek için tıklayın</span> veya sürükleyip bırakın
                        </p>
                        {fileName && (
                            <div className="flex items-center mt-2 px-3 py-1.5 bg-blue-50 rounded-lg">
                                <svg
                                    className="w-4 h-4 mr-2 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-blue-700 font-medium">{fileName}</p>
                            </div>
                        )}
                    </div>
                    <input id="file-upload" type="file" accept=".csv" className="hidden" onChange={handleFileUpload} />
                </label>
            </div>

            {loading && (
                <Box className="my-6 flex items-center justify-center gap-3 py-8 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="relative">
                        <CircularProgress size={40} className="text-blue-600" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-blue-800"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <Typography className="text-gray-800 font-medium">Veriler Yükleniyor</Typography>
                        <Typography className="text-gray-500 text-sm">Lütfen bekleyin...</Typography>
                    </div>
                </Box>
            )}

            {error && (
                <Alert
                    severity="error"
                    className="my-6 rounded-xl shadow-sm border-0 bg-red-50"
                    icon={
                        <svg
                            className="w-6 h-6 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                    }
                >
                    <Typography className="font-medium text-red-800">{error}</Typography>
                </Alert>
            )}

            {users.length > 0 && !loading && (
                <FormControl fullWidth margin="normal" className="my-6">
                    <InputLabel id="user-select-label" className="font-medium">
                        Kullanıcı seçin
                    </InputLabel>
                    <Select
                        labelId="user-select-label"
                        value={selectedUser}
                        label="Kullanıcı seçin"
                        onChange={handleUserChange}
                        className="bg-white rounded-lg shadow-sm"
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(59, 130, 246, 0.2)",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(59, 130, 246, 0.5)",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(59, 130, 246, 0.8)",
                            },
                        }}
                    >
                        {users.map((user) => (
                            <MenuItem key={user} value={user}>
                                {user}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}

            {selectedUser && (
                <Card className="mt-8 overflow-hidden rounded-xl shadow-lg border-0">
                    <CardContent className="p-0">
                        <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-700 border-b">
                            <Typography variant="h6" className="font-bold text-white flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    ></path>
                                </svg>
                                {selectedUser} Sipariş Özeti
                            </Typography>
                        </div>

                        {/* Tabs for filtering orders */}
                        <div className="bg-white border-b">
                            <Tabs 
                                value={tabValue} 
                                onChange={handleTabChange} 
                                variant="fullWidth"
                                className="border-b"
                                sx={{
                                    "& .MuiTab-root": {
                                        fontWeight: 500,
                                        py: 1.5,
                                    },
                                    "& .Mui-selected": {
                                        color: "rgb(37, 99, 235) !important",
                                    },
                                    "& .MuiTabs-indicator": {
                                        backgroundColor: "rgb(37, 99, 235)",
                                        height: 3,
                                    },
                                }}
                            >
                                <Tab 
                                    label={
                                        <div className="flex items-center space-x-2">
                                            <svg 
                                                className="w-5 h-5" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                ></path>
                                            </svg>
                                            <span>Tüm Servisler</span>
                                            <span className="ml-1.5 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                {servicesWithTotals.length}
                                            </span>
                                        </div>
                                    } 
                                />
                                <Tab 
                                    label={
                                        <div className="flex items-center space-x-2">
                                            <svg 
                                                className="w-5 h-5" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                ></path>
                                            </svg>
                                            <span>Sipariş Kesilmiş Servisler</span>
                                            <span className="ml-1.5 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                {servicesWithTotals.filter(item => item.hasGaps).length}
                                            </span>
                                        </div>
                                    } 
                                />
                            </Tabs>
                        </div>

                        <div className="p-5 bg-white border-b flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                            <TextField
                                label="Servis Ara"
                                variant="outlined"
                                size="small"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="min-w-[250px]"
                                InputProps={{
                                    startAdornment: (
                                        <svg
                                            className="w-4 h-4 mr-2 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    ),
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "rgba(59, 130, 246, 0.2)",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "rgba(59, 130, 246, 0.5)",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "rgba(59, 130, 246, 0.8)",
                                        },
                                    },
                                }}
                            />

                            <div>
                                <Typography variant="body2" className="mb-2 text-gray-600 font-medium">
                                    Sıralama:
                                </Typography>
                                <ButtonGroup
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        "& .MuiButton-root": {
                                            borderColor: "rgba(59, 130, 246, 0.3)",
                                            color: "rgb(59, 130, 246)",
                                            "&.Mui-disabled": {
                                                borderColor: "rgba(59, 130, 246, 0.3)",
                                            },
                                        },
                                        "& .MuiButton-contained": {
                                            backgroundColor: "rgb(59, 130, 246)",
                                            color: "white",
                                            "&:hover": {
                                                backgroundColor: "rgb(37, 99, 235)",
                                            },
                                        },
                                    }}
                                >
                                    <Button
                                        onClick={() => setSortBy("none")}
                                        variant={sortBy === "none" ? "contained" : "outlined"}
                                        className={sortBy === "none" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
                                    >
                                        Varsayılan
                                    </Button>
                                    <Button
                                        onClick={() => setSortBy("totalSpent")}
                                        variant={sortBy === "totalSpent" ? "contained" : "outlined"}
                                        className={sortBy === "totalSpent" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
                                    >
                                        En Çok Harcanan
                                    </Button>
                                    <Button
                                        onClick={() => setSortBy("totalOrders")}
                                        variant={sortBy === "totalOrders" ? "contained" : "outlined"}
                                        className={sortBy === "totalOrders" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
                                    >
                                        En Çok Sipariş
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <Table
                                sx={{
                                    "& .MuiTableCell-root": {
                                        padding: "16px",
                                    },
                                    "& .MuiTableRow-root:hover": {
                                        backgroundColor: "rgba(243, 244, 246, 0.7)",
                                    },
                                }}
                            >
                                <TableHead className="bg-gray-50">
                                    <TableRow>
                                        <TableCell className="font-semibold text-gray-700">Servis</TableCell>
                                        <TableCell align="center" className="font-semibold bg-blue-50 text-blue-800">
                                            Toplam Sipariş
                                        </TableCell>
                                        <TableCell align="center" className="font-semibold bg-green-50 text-green-800">
                                            Toplam Tutar
                                        </TableCell>
                                        {tabValue === 1 && (
                                            <TableCell align="center" className="font-semibold bg-amber-50 text-amber-800">
                                                Durum
                                            </TableCell>
                                        )}
                                        <TableCell align="center" className="font-semibold text-gray-700">
                                            Detay
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredAndSortedServices.map(({ service, serviceData, totalOrders, totalSpent, hasGaps }) => (
                                        <TableRow key={service} className="transition-colors">
                                            <TableCell className="font-medium text-gray-800">{service}</TableCell>
                                            <TableCell align="center" className="bg-blue-50">
                                                <span className="font-medium text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                                                    {totalOrders}
                                                </span>
                                            </TableCell>
                                            <TableCell align="center" className="bg-green-50">
                                                <span className="font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                                                    ${totalSpent.toFixed(2)}
                                                </span>
                                            </TableCell>
                                            {tabValue === 1 && (
                                                <TableCell align="center" className="bg-amber-50">
                                                    <span className="font-medium text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full flex items-center justify-center gap-1.5">
                                                        <svg 
                                                            className="w-4 h-4" 
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            viewBox="0 0 24 24" 
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path 
                                                                strokeLinecap="round" 
                                                                strokeLinejoin="round" 
                                                                strokeWidth="2" 
                                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                            ></path>
                                                        </svg>
                                                        Kesintili
                                                    </span>
                                                </TableCell>
                                            )}
                                            <TableCell align="center">
                                                <Button
                                                    variant="text"
                                                    onClick={() => handleServiceClick(service, serviceData)}
                                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                                    sx={{
                                                        minWidth: "auto",
                                                        textTransform: "none",
                                                    }}
                                                >
                                                    <svg
                                                        className="w-5 h-5 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        ></path>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        ></path>
                                                    </svg>
                                                    Detay
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {filteredAndSortedServices.length === 0 && (
                            <Box className="p-8 text-center">
                                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-100">
                                    <svg
                                        className="w-8 h-8 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <Typography className="text-gray-500 font-medium">
                                    Hiç servis bulunamadı
                                </Typography>
                                <Typography variant="body2" className="text-gray-400 mt-1">
                                    Filtreleri temizleyerek tüm servisleri görebilirsiniz
                                </Typography>
                            </Box>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Modal for details */}
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <Paper className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-2xl">
                    {selectedCell && selectedCell.dailyData ? (
                        // Service detail view
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <Typography variant="h6" className="font-bold text-gray-800 flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        ></path>
                                    </svg>
                                    {selectedCell.service} - Servis Detayı
                                </Typography>
                                <Button
                                    onClick={handleCloseModal}
                                    size="small"
                                    className="min-w-[24px] h-[24px] p-0 text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <Paper className="p-4 rounded-xl bg-blue-50 border border-blue-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full opacity-70"></div>
                                    <Typography variant="subtitle1" className="font-medium text-blue-800 mb-1">
                                        Toplam Sipariş
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-blue-900">
                                        {selectedCell.totalOrders}
                                    </Typography>
                                    <Typography variant="body2" className="text-blue-700 mt-1">
                                        Bu servisten toplam sipariş sayısı
                                    </Typography>
                                </Paper>

                                <Paper className="p-4 rounded-xl bg-green-50 border border-green-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full opacity-70"></div>
                                    <Typography variant="subtitle1" className="font-medium text-green-800 mb-1">
                                        Toplam Tutar
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-green-900">
                                        ${selectedCell.totalSpent.toFixed(2)}
                                    </Typography>
                                    <Typography variant="body2" className="text-green-700 mt-1">
                                        Bu servis için toplam harcama
                                    </Typography>
                                </Paper>
                            </div>

                            {selectedCell.gapDays.length > 0 && (
                                <Paper className="p-4 rounded-xl bg-amber-50 border border-amber-100 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-amber-100 rounded-lg mt-1">
                                            <svg
                                                className="w-5 h-5 text-amber-700"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" className="font-medium text-amber-800 mb-2">
                                                Sipariş Kesilme Günleri
                                            </Typography>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedCell.gapDays.map((day) => (
                                                    <span
                                                        key={day}
                                                        className="px-2 py-1 bg-amber-100 text-amber-800 rounded-md text-sm font-medium"
                                                    >
                                                        {day}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            )}

                            <Divider className="my-6" />

                            <Typography variant="subtitle1" className="font-semibold text-gray-800 mb-4">
                                Günlük Sipariş Dağılımı
                            </Typography>

                            <SimpleBarChart
                                title="Günlük Sipariş Sayısı"
                                data={selectedCell.dailyData.map((day) => ({
                                    label: day.date,
                                    value: day.count,
                                    unit: " adet",
                                    color: day.count > 0 ? "bg-blue-500" : "bg-red-400",
                                }))}
                            />

                            <div className="h-6" />

                            <SimpleBarChart
                                title="Günlük Harcama"
                                data={selectedCell.dailyData.map((day) => ({
                                    label: day.date,
                                    value: day.spent,
                                    unit: " $",
                                    color: day.spent > 0 ? "bg-green-500" : "bg-gray-300",
                                }))}
                            />
                        </div>
                    ) : selectedCell ? (
                        // Hücre detay görünümü
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <Typography variant="h6" className="font-bold text-gray-800">
                                    {selectedCell.date} - {selectedCell.service}
                                </Typography>
                                <Button
                                    onClick={handleCloseModal}
                                    size="small"
                                    className="min-w-[24px] h-[24px] p-0 text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Paper className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <Typography variant="subtitle1" className="font-medium text-blue-800 mb-1">
                                        Sipariş Sayısı
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-blue-900">
                                        {selectedCell.entry.count}
                                    </Typography>
                                </Paper>

                                <Paper className="p-4 rounded-xl bg-green-50 border border-green-100">
                                    <Typography variant="subtitle1" className="font-medium text-green-800 mb-1">
                                        Toplam Tutar
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-green-900">
                                        ${selectedCell.entry.spent.toFixed(2)}
                                    </Typography>
                                </Paper>
                            </div>
                        </div>
                    ) : null}
                </Paper>
            </Modal>
        </Box>
    )
}