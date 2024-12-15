'use client'

import React, { useState, useEffect } from 'react'
import { CreditCard, DollarSign, ArrowRightLeft } from 'lucide-react'
import { Box, Card, CardContent, Typography } from '@mui/material'


export default function DataSummary({ data }) {
    const [totals, setTotals] = useState({
        totalCharge: 0,
        totalCost: 0,
        totalDifference: 0,
    })

    const calculateTotals = (data) => {
        // Charge ve Cost değerlerini kontrol et ve sayısal olmayanları 0 kabul et
        const totalCharge = data.reduce((sum, item) => {
            return sum + (isNaN(item.Charge) ? 0 : item.Charge)
        }, 0)
        const totalCost = data.reduce((sum, item) => {
            return sum + (isNaN(item.Cost) ? 0 : item.Cost)
        }, 0)
        const totalDifference = totalCharge - totalCost

        setTotals({
            totalCharge,
            totalCost,
            totalDifference,
        })
    }

    useEffect(() => {
        calculateTotals(data)
    }, [data])

    return (
        <Card className="max-w-4xl mx-auto shadow-xl mb-2">
            <CardContent>
                <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SummaryItem
                        icon={<CreditCard className="h-8 w-8 text-blue-500" />}
                        title="Total Charge"
                        value={totals.totalCharge.toFixed(2)}
                        color="bg-blue-100"
                    />
                    <SummaryItem
                        icon={<DollarSign className="h-8 w-8 text-green-500" />}
                        title="Total Cost"
                        value={totals.totalCost.toFixed(2)}
                        color="bg-green-100"
                    />
                    <SummaryItem
                        icon={<ArrowRightLeft className="h-8 w-8 text-purple-500" />}
                        title="Difference"
                        value={totals.totalDifference.toFixed(2)}
                        color="bg-purple-100"
                    />
                </Box>
            </CardContent>
        </Card>
    )
}


function SummaryItem({ icon, title, value, color }) {
    return (
        <Box className={`${color} rounded-lg p-4 flex flex-col items-center justify-center`}>
            {icon}
            <Typography variant="h6" className="mt-2 text-gray-700">
                {title}
            </Typography>
            <Typography variant="h5" className="font-bold text-gray-900">
                {value}
            </Typography>
        </Box>
    )
}
