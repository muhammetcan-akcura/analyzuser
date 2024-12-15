import React, { useState, useEffect } from 'react';
import profit from './profit';
import rates from './rates';
import * as XLSX from 'xlsx';

const Index = () => {
    const [filteredServices, setFilteredServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [debug, setDebug] = useState({
        profitLength: 0,
        ratesLength: 0,
        allServicesLength: 0,
        matchedServicesLength: 0
    });
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' - artan, 'desc' - azalan

    useEffect(() => {
        try {
            const ratesMap = new Map();
            rates.forEach(rate => {
                ratesMap.set(String(rate.service_id), rate);
            });

            let allServices = [];
            profit.forEach(item => {
                if (item.services && Array.isArray(item.services)) {
                    item.services.forEach(service => {
                        const matchedRate = ratesMap.get(String(service.id));

                        if (matchedRate) {
                            const servicePrice = parseFloat(service.price) || 0;
                            const providerRate = parseFloat(service.provider_rate) || 0;
                            const ratePrice = parseFloat(matchedRate.price) || 0;
                            const ratePercent = parseFloat(matchedRate.percent) || 0;

                            let calculatedPrice;
                            if (ratePercent === 1) {
                                calculatedPrice = (ratePrice * servicePrice) / 100;
                            } else {
                                calculatedPrice = ratePrice;
                            }

                            const percentageDifference = providerRate > 0
                                ? ((providerRate - calculatedPrice) / providerRate) * 100
                                : 0;
                            allServices.push({
                                id: service.id,
                                service_name: matchedRate.service_name,
                                provider_rate: providerRate,
                                original_price: servicePrice,
                                rates_price: ratePrice,
                                calculatedPrice: calculatedPrice,
                                percentageDifference: percentageDifference
                            });
                        }
                    });
                }
            });

            setDebug({
                profitLength: profit.length,
                ratesLength: rates.length,
                allServicesLength: allServices.length,
                matchedServicesLength: allServices.length
            });

            setFilteredServices(allServices);
        } catch (error) {
            console.error('Veri işleme hatası:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const exportToExcel = () => {
        const excelData = filteredServices.map(service => ({
            'Service ID': service.id,
            'Service Name': service.service_name,
            'Provider Rate': service.provider_rate,
            'Original Price (%)': service.original_price,
            'Rates Price': service.rates_price,
            'Calculated Price': service.calculatedPrice,
            'Difference (%)': service.provider_rate > service.calculatedPrice ? "-" + Math.abs(service.percentageDifference.toFixed(1)) : Math.abs(service.percentageDifference.toFixed(1))
        }));

        const ws = XLSX.utils.json_to_sheet(excelData);

        const columnWidths = [
            { wch: 10 },
            { wch: 30 },
            { wch: 15 },
            { wch: 15 },
            { wch: 15 },
            { wch: 15 },
            { wch: 15 }
        ];
        ws['!cols'] = columnWidths;

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Services');

        XLSX.writeFile(wb, 'startlab.xlsx');
    };

    const handleSortByDifference = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc'; // sıralama yönünü değiştir
        setSortDirection(newDirection);

        const sortedServices = [...filteredServices].sort((a, b) => {
            if (newDirection === 'asc') {
                return a.percentageDifference - b.percentageDifference;
            } else {
                return b.percentageDifference - a.percentageDifference;
            }
        });
        setFilteredServices(sortedServices);
    };

    return (
        <div className="p-4">
            {isLoading ? (
                <p>Yükleniyor...</p>
            ) : (
                <>
                    <div className="mb-4 p-4 bg-gray-100 rounded">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold mb-2">Debug Bilgileri:</h3>
                                <p>Profit Veri Sayısı: {debug.profitLength}</p>
                                <p>Rates Veri Sayısı: {debug.ratesLength}</p>
                                <p>İşlenen Servis Sayısı: {debug.allServicesLength}</p>
                                <p>Eşleşen Servis Sayısı: {debug.matchedServicesLength}</p>
                            </div>
                            <button
                                onClick={exportToExcel}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>Excel'e Aktar</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Service ID</th>
                                    <th className="border border-gray-300 px-4 py-2">Service Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Provider Rate</th>
                                    <th className="border border-gray-300 px-4 py-2">Original Price (%)</th>
                                    <th className="border border-gray-300 px-4 py-2">Rates Price</th>
                                    <th className="border border-gray-300 px-4 py-2">Calculated Price</th>
                                    <th className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={handleSortByDifference}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            Difference (%)
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredServices.length > 0 ? (
                                    filteredServices.map(service => {
                                        const isProviderRateHigher = service.provider_rate > service.calculatedPrice;
                                        const isInLoss = service.percentageDifference < 0;

                                        return (
                                            <tr
                                                key={service.id}
                                                className={`hover:bg-gray-50 ${isProviderRateHigher ? 'bg-red-200' : ''} ${service.provider_rate === 0 ? 'bg-blue-700' : ""}   ${isInLoss ? 'hover:bg-transparent' : ''}`}
                                            >
                                                <td className="border border-gray-300 px-4 py-2">{service.id}</td>
                                                <td className="border border-gray-300 px-4 py-2">{service.service_name}</td>
                                                <td className="border border-gray-300 px-4 py-2">{service.provider_rate}</td>
                                                <td className="border border-gray-300 px-4 py-2">{service.original_price}</td>
                                                <td className="border border-gray-300 px-4 py-2">{service.rates_price}</td>
                                                <td className="border border-gray-300 px-4 py-2">{service.calculatedPrice}</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {isProviderRateHigher ? "-" : ""}  {Math.abs(service.percentageDifference.toFixed(1))}%
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="border border-gray-300 px-4 py-2 text-center">
                                            Eşleşen servis bulunamadı
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default Index;
