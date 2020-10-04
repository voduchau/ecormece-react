import React, { useContext, useEffect } from 'react';
import './DashBoardScreen.css'
import MenuDashBoard from '../../components/admin/MenuDashBoard';
import { GetItemContext } from '../../context/GetItemContext';

const DashBoardProducts = () => {
    const { item } = useContext(GetItemContext)

    useEffect(() => {

    }, [])

    const renderItem = () => {
        return item.products.map(product => {
            return (
                <tr>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.saleof}%</td>
                    <td className="table__action">
                        <button className="table__action-delete">delete</button>
                        <button className="table__action-view">view</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="dashboard">
            <MenuDashBoard active={0} />
            <div className="dashboard__products">
                <input className="dashboard__products_search" placeholder="search" />
                <button className="dashboard__products__add">Add new</button>
                <table>
                    <tr>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>sale of</th>
                        <th>Action</th>
                    </tr>
                    {
                        renderItem()
                    }
                </table>
            </div>
        </div>
    );
}

export default DashBoardProducts;
