import React, { createContext, useReducer, useEffect } from 'react';
import firebaseApp from '../firebase/firebaseApp';


export const GetItemContext = createContext();

const initItem = {
    products: [],
    categories: [],
    featured: [],
    blog: [],
    latestProduct: [],
    banner: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return { ...state, products: action.payload };
        case 'GET_CATEGORY':
            return { ...state, categories: action.payload };
        case 'GET_FEATURED':
            return { count: state.count - 1 };
        case 'GET_BLOG':
            return { count: state.count - 1 };
        case 'FILTER_PRICE':
            return { ...state, filterProducts: action.payload };
        default:
            return state;
    }
}
const GetItemProvider = (props) => {
    const [item, dispatch] = useReducer(reducer, initItem);

    const FilterItem = (value, ...param) => {
        console.log('run')
        if (param[0]) {
            let temp = []
            item.products.map(item1 => {
                if (item1.productName.toLowerCase().includes(param[0].toLowerCase())) {
                    temp.push(item1)
                }
            })
            dispatch({
                type: "FILTER_PRICE",
                payload: temp
            })
        }
        else {
            let temp = []
            item.products.map(item1 => {
                if (value[0] <= item1.price && item1.price <= value[1]) {
                    temp.push(item1)
                }
            })
            dispatch({
                type: "FILTER_PRICE",
                payload: temp
            })
        }
    }
    const GetAllProducts = () => {
        firebaseApp.database().ref("products/").on("value", async (snapshot) => {
            const tempProduct = []
            console.log(snapshot.val(),'this snapshot')
            for(const key in snapshot.val()){
                tempProduct.push(snapshot.val()[key])
            }
            await dispatch({
                type: "GET_PRODUCT",
                payload: tempProduct
            })
        })
    }
    useEffect(() => {
        // get all products
        firebaseApp.database().ref("products/").on("value", async (snapshot) => {
            const tempProduct = []
            console.log(snapshot.val(),'trong effect')
            for(const key in snapshot.val()){
                tempProduct.push(snapshot.val()[key])
            }
            console.log(tempProduct,'temp')
            await dispatch({
                type: "GET_PRODUCT",
                payload: tempProduct
            })
        })

        // get all categorys
        firebaseApp.database().ref("categorys/").on("value", async (snapshot) => {
            await dispatch({
                type: "GET_CATEGORY",
                payload: snapshot.val()
            })
        })
    }, [])
    return (
        <GetItemContext.Provider value={{ item, FilterItem, GetAllProducts }}>
            {props.children}
        </GetItemContext.Provider>
    )
}
export default GetItemProvider;
