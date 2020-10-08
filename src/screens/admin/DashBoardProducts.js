import React, { useContext, useEffect, useRef, useState } from 'react';
import './DashBoardScreen.css'
import MenuDashBoard from '../../components/admin/MenuDashBoard';
import { GetItemContext } from '../../context/GetItemContext';
import FormAddProduct from '../../components/admin/FormAddProduct';
import firebaseApp from '../../firebase/firebaseApp';
import FormViewProduct from '../../components/admin/FormViewProduct';

const DashBoardProducts = () => {
    const productModal = useRef(null);
    const modalView = useRef(null);
    const [out, setOut] = useState(false)
    const { item } = useContext(GetItemContext)

    useEffect(() => {

    }, [])

    const handleDelete = async (productID) => {
        console.log(productID, 'id')
        await firebaseApp.database().ref('products/').on('value', async (snapshot) => {
            for (let key in snapshot.val()) {
                if (snapshot.val()[key].productID === productID) {
                    await firebaseApp.database().ref('products/' + key).remove();
                }
            }
        })
    }

    const handleView = (productID) => {
        modalView.current.style.display = "flex"
    }
    const handleCloseModalView = () => {
        modalView.current.style.display = "none"
    }

    const renderItem = () => {
        return item.products && item.products.map(product => {
            return (
                <tr>
                    <td>{product.productName}</td>
                    <td className="product__price"><span>$</span>{product.price}</td>
                    <td className="product__sale">{product.saleof}%</td>
                    <td className="table__action">
                        <button onClick={() => handleDelete(product.productID)} className="table__action-delete">delete</button>
                        <button onClick={() => handleView(product.productID)} className="table__action-view">view</button>
                    </td>
                </tr>
            )
        })
    }

    const handleShowModal = () => {
        productModal.current.style.display = "flex"
    }
    const handleCloseModal = () => {
        // setOut(true)
        productModal.current.style.display = "none"
    }

    return (
        <div className="dashboard">
            <MenuDashBoard active={0} />
            <div className="dashboard__products">
                <input className="dashboard__products_search" placeholder="search" />
                <button onClick={() => handleShowModal()} id="addBtn" className="dashboard__products__add">Add new</button>

                <div ref={productModal} id="ProductModal" className={`modal_product`}>
                    <div className="modalContent">
                        <div className="modalContent-text">
                            <FormAddProduct handleCloseModal={handleCloseModal} />
                        </div>
                        <span onClick={() => handleCloseModal()} className="close">&times;</span>
                    </div>
                </div>

                {/* modal view detail */}
                <div ref={modalView} id="modalView" className="modal_view">
                    <div className="modal_view_content">
                        <div className="modal_form_view">
                            <FormViewProduct handleCloseModalView={handleCloseModalView} />
                        </div>
                        <span onClick={() => handleCloseModalView()} className="closeView">&times;</span>
                    </div>
                </div>
                {/* end modal view detail */}

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
