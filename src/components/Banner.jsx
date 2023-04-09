import React, { useState } from 'react';
import foodTable from '../assets/foodTable-min.jpg';
import { BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate()

    const handleSearch = () =>{
        if(searchText){
            navigate(`/search/${searchText}`);
            setSearchText('');
        }
    }
    return (
        <div className='h-[25rem] relative'>
            <img className='w-full h-full object-cover object-bottom' src={foodTable} alt="FoodTable" />
            <div className='absolute inset-0 bg-black bg-opacity-70'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='w-fit flex items-center gap-3 mx-auto'>
                        <input className='py-3 px-6 w-[250px] border-2 border-rose-500 rounded-full' type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} placeholder='Search Recipes Here'/>
                        <BiSearch className='text-white text-5xl p-3 bg-rose-500 border-2 border-white rounded-full cursor-pointer active:border-black active:outline active:outline-white active:bg-white active:text-rose-500 duration-200' onClick={handleSearch}></BiSearch>
                    </div>
                    <h1 className='font-pacifico mt-16 text-4xl text-white text-center'>Don't feel like cooking? We've got you covered!</h1>
                    <p className='mt-5 text-gray-400 text-sm text-center'>Our delivery service is available at a competitive price, making it an affordable option for those who want to enjoy restaurant-quality meals without breaking the bank.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;