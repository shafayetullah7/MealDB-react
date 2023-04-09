import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Category from './Category';
import Demo from './Demo';

const Categories = () => {
    // const {categories,error} = useLoaderData();
    let {categories}= useLoaderData();
    categories = categories.categories;
    // console.log(categories)

    return (
        <div>
            <Outlet></Outlet>
            <div className='my-20 mx-2 md:mx-20 border border-rose-100 rounded-xl p-5'>
                <h2 className='text-3xl font-bold text-rose-500'>Categories</h2>
                <div className='h-[40rem] p-5 overflow-x-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-7 mt-10 w-fit mx-auto'>
                    {categories.map(category => <Category key={category.idCategory} category={category}></Category>)}
                </div>
            </div>
        </div>
    );
};
export default Categories;

export const loadCategories = async ()=>{
    let res;
    let error;

    try{
        res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    }
    catch(e){
        error = e;
    }
    let categories = await res.json();
    return {categories,error};
}