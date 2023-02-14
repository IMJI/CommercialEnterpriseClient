import React from 'react';
import DateFormatter from '../../utils/DateFormatter';
import Icon from '../icons/Icon';
import Checkbox from '../inputs/Checkbox';
import Status from '../status/Status';
import classes from './Table.module.css';

function Table() {
    const data = [
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) },
        { product: { name: 'Черные брюки', category: { name: 'Одежда' } }, tax: { name: 'Акцизный налог', value: 0.07 }, status: { status: 'Доставлен' }, date: new Date(), count: Math.round(Math.random() * 1000), cost: Math.round(Math.random() * 10000) }
    ];

    return (
        <table className={classes.table}>
            <thead className={classes.header}>
                <tr>
                    <th>
                        <Checkbox name='checkAll' onChange={() => {}} checked />
                    </th>
                    <th>ТОВАР</th>
                    <th>НАЛОГ</th>
                    <th>СТАТУС</th>
                    <th>ДАТА ПРОДАЖИ</th>
                    <th>КОЛИЧЕСТВО</th>
                    <th>СТОИМОСТЬ</th>
                    <th>
                        <div className={classes.moreButton}>
                            <Icon name='more' size={24} color='#8B83BA' stroke={2} outlined />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className={classes.body}>
                {data.map((row, i) => {
                    return (
                        <tr key={i} className={classes.tableRow}>
                            <td>
                                <Checkbox name={`row-${i}`} onChange={() => { console.log(i) }} />
                            </td>
                            <td>
                                <div className={classes.multilineCell}>
                                    <span className={classes.topLine}>{row.product.name}</span>
                                    <span className={classes.bottomLine}>{row.product.category.name}</span>
                                </div>
                            </td>
                            <td>
                                <div className={classes.multilineCell}>
                                    <span className={classes.topLine}>{row.tax.name}</span>
                                    <span className={classes.bottomLine}>{row.tax.value}</span>
                                </div>
                            </td>
                            <td>
                                <div className={classes.multilineCell}>
                                    <Status type='success' status='Доставлен' />
                                </div>
                            </td>
                            <td>{DateFormatter.toTableFormat(row.date)}</td>
                            <td>{row.count} шт.</td>
                            <td>{row.cost}$</td>
                            <td>
                                <div className={classes.moreButton}>
                                    <Icon name='more' size={24} color='#8B83BA' stroke={2} outlined />
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;