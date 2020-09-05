import React, { createContext, useReducer, useEffect } from 'react';
import firebaseApp from '../firebase/firebaseApp';
// import uid from "uid";
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
        default:
            return state;
    }
}
const GetItemProvider = (props) => {
    const [item, dispatch] = useReducer(reducer, initItem);
    useEffect(() => {
        // firebaseApp.database().ref("categorys/").set([
        //     {
        //         cateID: 1,
        //         cateName: "Fresh Fruit",
        //         img: "https://firebasestorage.googleapis.com/v0/b/ecormece-3cb01.appspot.com/o/images%2Fcategory%2Fcat-1.jpg?alt=media&token=fe23a1c4-ae62-4458-acb5-dce00f97cbf6",
        //     },
        //     {
        //         cateID: 2,
        //         cateName: "Dried Fruit",
        //         img: "https://firebasestorage.googleapis.com/v0/b/ecormece-3cb01.appspot.com/o/images%2Fcategory%2Fcat-2.jpg?alt=media&token=cb5b25b4-c84d-4fd8-8bb8-cd3452060c53",
        //     },
        //     {
        //         cateID: 3,
        //         cateName: "Vegetable",
        //         img: "https://firebasestorage.googleapis.com/v0/b/ecormece-3cb01.appspot.com/o/images%2Fcategory%2Fcat-3.jpg?alt=media&token=435952dc-115f-46d4-88a5-7a95c15398da",
        //     },
        //     {
        //         cateID: 4,
        //         cateName: "Drink Fruit",
        //         img: "https://firebasestorage.googleapis.com/v0/b/ecormece-3cb01.appspot.com/o/images%2Fcategory%2Fcat-4.jpg?alt=media&token=0d6d383c-7e44-4740-8e11-007f9325adb4",
        //     },

        // ])

        // get all products
        firebaseApp.database().ref("products/").on("value", async (snapshot) => {
            await dispatch({
                type: "GET_PRODUCT",
                payload: snapshot.val()
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
        <GetItemContext.Provider value={{ item }}>
            {props.children}
        </GetItemContext.Provider>
    )
}
export default GetItemProvider;
