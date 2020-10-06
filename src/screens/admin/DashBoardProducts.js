import React, { useContext, useEffect, useRef } from 'react';
import './DashBoardScreen.css'
import MenuDashBoard from '../../components/admin/MenuDashBoard';
import { GetItemContext } from '../../context/GetItemContext';
import FormAddProduct from '../../components/admin/FormAddProduct';

const DashBoardProducts = () => {
    const productModal = useRef(null);

    const { item } = useContext(GetItemContext)

    useEffect(() => {

    }, [])

    const renderItem = () => {
        console.log(item,'this itme')
        // return item.products && item.products.map(product => {
        //     return (
        //         <tr>
        //             <td>{product.productName}</td>
        //             <td>{product.price}</td>
        //             <td>{product.saleof}%</td>
        //             <td className="table__action">
        //                 <button className="table__action-delete">delete</button>
        //                 <button className="table__action-view">view</button>
        //             </td>
        //         </tr>
        //     )
        // })
    }

    const handleShowModal = () => {
        productModal.current.style.display = "flex"
    }
    const handleCloseModal = () => {
        productModal.current.style.display = "none"
    }

    return (
        <div className="dashboard">
            <MenuDashBoard active={0} />
            <div className="dashboard__products">
                <input className="dashboard__products_search" placeholder="search" />
                <button onClick={() => handleShowModal()} id="addBtn" className="dashboard__products__add">Add new</button>

                <div ref={productModal} id="ProductModal" className="modal_product fadeIn">
                    <div className="modalContent">
                        <div className="modalContent-text">
                            <FormAddProduct />
                        </div>
                            <span onClick={() => handleCloseModal()} className="close">&times;</span>
                        </div>
                    </div>

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
