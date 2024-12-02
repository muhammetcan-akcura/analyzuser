'use client'

import React, { useState } from 'react'
import { read, utils } from 'xlsx'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Button,
  Paper,
  Tabs,
  Tab
} from '@mui/material'

const DataAnalyzer = () => {
  const [analysisReport, setAnalysisReport] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [activeMonthTab, setActiveMonthTab] = useState(0)
  const [activeServiceTab, setActiveServiceTab] = useState(0)

  const analyzeExcelData = (file) => {
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

      const report = generateComprehensiveReport(rows)
      setAnalysisReport(report)
      setOpenModal(true)
    }
    reader.readAsBinaryString(file)
  }

  const generateComprehensiveReport = (data) => {
    const monthlyServiceData = {}
    data.forEach(item => {
      const itemDate = new Date(item.Created)
      const monthKey = `${itemDate.getFullYear()}-${itemDate.getMonth() + 1}`

      if (!monthlyServiceData[monthKey]) {
        monthlyServiceData[monthKey] = {
          services: new Set(),
          serviceDetails: {}
        }
      }

      monthlyServiceData[monthKey].services.add(item.Service)

      if (!monthlyServiceData[monthKey].serviceDetails[item.Service]) {
        monthlyServiceData[monthKey].serviceDetails[item.Service] = {
          quantity: 0,
          totalCharge: 0,
          users: new Set(),
          providers: new Set()
        }
      }
      const serviceDetail = monthlyServiceData[monthKey].serviceDetails[item.Service]
      serviceDetail.quantity += 1
      serviceDetail.totalCharge += item.Charge || 0
      serviceDetail.users.add(item.User)
      serviceDetail.providers.add(item.Provider)
    })

    const sortedMonths = Object.keys(monthlyServiceData).sort()
    const monthlyComparison = []

    let accumulatedPreviousServices = new Set()

    for (let i = 1; i < sortedMonths.length; i++) {
      const currentMonth = sortedMonths[i]
      const currentMonthServices = monthlyServiceData[currentMonth].services

      const comparisonReport = {
        currentMonth: currentMonth,
        newServices: [],
        discontinuedServices: []
      }

      comparisonReport.newServices = [...currentMonthServices]
        .filter(service => !accumulatedPreviousServices.has(service))

      comparisonReport.discontinuedServices = [...accumulatedPreviousServices]
        .filter(service => !currentMonthServices.has(service))

      accumulatedPreviousServices = new Set([...accumulatedPreviousServices, ...currentMonthServices])

      monthlyComparison.push(comparisonReport)
    }

    return monthlyComparison
  }

  const renderServiceList = (services) => (
    <ul className="list-disc pl-5">
      {services.map((service, index) => (
        <li key={index} className="mb-1">
          <Typography variant="body1">{service}</Typography>
        </li>
      ))}
    </ul>
  )

  return (
    <Box className="container mx-auto p-6">
      <Paper elevation={3} className="p-6 text-center">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={(e) => e.target.files && analyzeExcelData(e.target.files[0])}
          className="mb-4"
        />
      </Paper>

      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle className="bg-blue-50 border-b">
          <Typography variant="h4" className="font-bold text-blue-800">
            Aylık Servis Kullanım Raporu
          </Typography>
        </DialogTitle>
        <DialogContent>
          {analysisReport && (
            <Box>
              <Tabs
                value={activeMonthTab}
                onChange={(e, newValue) => setActiveMonthTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
              >
                {analysisReport.map((monthReport, index) => (
                  <Tab
                    key={index}
                    label={`${monthReport.currentMonth} Raporu`}
                  />
                ))}
              </Tabs>

              {analysisReport.map((monthReport, monthIndex) => (
                activeMonthTab === monthIndex && (
                  <Box key={monthIndex} className="mt-4">
                    <Tabs
                      value={activeServiceTab}
                      onChange={(e, newValue) => setActiveServiceTab(newValue)}
                    >
                      <Tab label="Kullanılmaya Başlanan Servisler" />
                      <Tab label="Kullanılmayı Bırakılan Servisler" />
                    </Tabs>

                    {activeServiceTab === 0 && (
                      <Paper elevation={3} className="p-4 mt-4">
                        <Typography variant="h6">
                          Kullanılmaya Başlanan Servisler
                        </Typography>
                        {renderServiceList(monthReport.newServices)}
                      </Paper>
                    )}

                    {activeServiceTab === 1 && (
                      <Paper elevation={3} className="p-4 mt-4">
                        <Typography variant="h6">
                          Kullanılmayı Bırakılan Servisler
                        </Typography>
                        {renderServiceList(monthReport.discontinuedServices)}
                      </Paper>
                    )}
                  </Box>
                )
              ))}
            </Box>
          )}
        </DialogContent>
        <Box className="p-4 bg-gray-100 flex justify-end">
          <Button
            onClick={() => setOpenModal(false)}
            variant="contained"
            color="primary"
          >
            Kapat
          </Button>
        </Box>
      </Dialog>
    </Box>
  )
}

export default DataAnalyzer