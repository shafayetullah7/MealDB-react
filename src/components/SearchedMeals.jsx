import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Meal from './Meal';
import {MdKeyboardBackspace } from "react-icons/md";

const SearchedMeals = () => {
    const {searchText} = useParams();
    const {meals} = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='my-20 mx-2 md:mx-20 border border-orange-100 rounded-xl p-5 bg-gray-200'>
            <div className='flex items-center gap-5'>
                <MdKeyboardBackspace className='text-orange-500 text-3xl cursor-pointer rounded-md duration-300 hover:text-black hover:border-black active:scale-50' onClick={()=>navigate('/')}></MdKeyboardBackspace>
                <h2 className='text-3xl font-bold text-orange-500'>{searchText} Items</h2>
            </div>
            
            <div className='h-[40rem] p-5 overflow-x-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-7 mt-10 w-fit mx-auto'>
                {meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)}
            </div>
        </div>
    );
};

export default SearchedMeals;

export const searchMeals = async ({params})=>{
    console.log(params);
    console.log(params.searchText);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchText}`);
    console.log('res',res);
    return res;
    // return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchText}`);
}
