'use client'
import { useState } from 'react';

const columnMappings: Record<string, string> = {
    "active": "status",
    "updatedAt": "updated at",
    "publishedAt": "published at",
    "createdAt": "created at"
}

const columnRenderers: Record<string, (value: any) => string> = {
    "active": (value) => value ? 'Active' : 'Inactive',
    "updatedAt": (value) => new Date(value).toLocaleString(),
    "publishedAt": (value) => new Date(value).toLocaleString(),
    "createdAt": (value) => new Date(value).toLocaleString(),
    "options": (obj: { [key: string]: any }): string => {
        let renderArr = [];
        for (const [key, value] of Object.entries(obj)) renderArr.push(key + ': ' + value);
        return renderArr.join(', ');
    }
}

const Modal = () => {

    return (
        <div className={`fixed inset-0`}>
            <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
                <div className="bg-gray-800 p-6 rounded-lg w-96 relative">
                    <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => { }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-xl font-bold text-white mb-4">Edit</h2>
                    <input
                        type="text"
                        className="border border-gray-600 rounded px-3 py-2 w-full mb-4 bg-gray-700 text-white placeholder-gray-400"
                        placeholder="Enter Value"
                    />
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => { }}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Card({
    //     title,
    //     value,
    //     type,
    // }: {
    //     title: string;
    //     value: number | string;
    //     type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([
        {
            "id": 14381328,
            "name": "id quis voluptate nostrud",
            "options": {
                "size": "XL",
                "amount": 100
            },
            "active": true,
            "createdAt": "1985-08-09T02:10:18.0Z"
        },
        {
            "id": 26785188,
            "name": "esse elit",
            "options": {
                "size": "S",
                "amount": 10
            },
            "active": true,
            "createdAt": "1956-03-20T08:59:40.0Z"
        },
    ]);



    const headers = Object.keys(data[0]) as Array<keyof typeof data[0]>
    console.log('%c⧭', 'color: #ff0000', headers);

    return (
        <div>

            <div className="flex mb-4">
                <select
                    className="border border-gray-600 rounded px-3 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400"
                    // onChange={handleColumnChange}
                    // value={selectedColumn}
                >
                    {/* <option value="" className="bg-gray-800 text-white">Select Column</option> */}
                    {headers.map((header) => (
                        <option key={header} value={header} className="bg-gray-800 text-white">{header}</option>
                    ))}
                </select>
                <input
                    type="text"
                    className="border border-gray-600 rounded px-3 py-2 mb-4 bg-gray-700 text-white placeholder-gray-40"
                    placeholder="Enter Value to Filter"
                    // value={filterValue}
                    // onChange={handleFilterValueChange}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    // onClick={handleFilter}
                >
                    Filter
                </button>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headers.map((header) => <th key={header} className="uppercase px-6 py-4">
                            {columnMappings[header] ?? header}
                        </th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {headers.map((header) => {
                                const cellValue = row[header];
                                return <td key={header} className="px-6 py-4">
                                    {columnRenderers[header]?.(cellValue) ?? cellValue}
                                </td>
                            })}
                            <td>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && <Modal />}
        </div>
    );
}
