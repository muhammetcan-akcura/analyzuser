'use client'

import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader } from '@mui/material'

export default function StatusRatioChart({ data }) {

    // Renkler her statüye göre dinamik olarak ayarlanabilir
    const COLORS = {
        "Completed": '#7BC043', // Yeşil
        "Cancel": '#EE4035',    // Kırmızı
        "In progress": '#FC913A', // Turuncu
        "Partial": '#6A4C93',    // Mor
        "Pending": '#F1C40F',    // Sarı
        "Processing": '#2C3E50', // Mavi
        "Fail": '#BDC3C7'       // Gri
    }

    // Status'lara göre sayıları hesapla
    const statusCounts = useMemo(() => {
        const counts = {}
        data.forEach(item => {
            counts[item.Status] = (counts[item.Status] || 0) + 1
        })
        return Object.entries(counts).map(([name, value]) => ({ name, value }))
    }, [data])

    const total = statusCounts.reduce((sum, item) => sum + item.value, 0)

    return (

        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={statusCounts}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {statusCounts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#8884d8'} />
                        ))}
                    </Pie>
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload
                                const percentage = ((data.value / total) * 100).toFixed(2)
                                return (
                                    <div className="bg-white border border-gray-200 p-2 rounded shadow">
                                        <p className="font-bold">{data.name}</p>
                                        <p>Sayı: {data.value}</p>
                                        <p>Oran: {percentage}%</p>
                                    </div>
                                )
                            }
                            return null
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex flex-wrap justify-center">
                {statusCounts.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center mr-4 mb-2">
                        <div
                            className="w-4 h-4 mr-2"
                            style={{ backgroundColor: COLORS[entry.name] || '#8884d8' }}
                        ></div>
                        <span>{entry.name}: {entry.value} ({((entry.value / total) * 100).toFixed(2)}%)</span>
                    </div>
                ))}
            </div>
        </div>


    )
}
