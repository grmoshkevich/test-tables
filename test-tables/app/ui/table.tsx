// 'use client'

export default function Card({
    //     title,
    //     value,
    //     type,
    // }: {
    //     title: string;
    //     value: number | string;
    //     type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    const data = [
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
    ]

    const headers = Object.keys(data[0])
    console.log('%c⧭', 'color: #ff0000', headers);

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header) => <th key={header} className="capitalize">{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr key={row.id}>
                        {headers.map((header) => <td key={header}>
                            {row[header]}
                        </td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
