import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {

    // console.log(category);
    const navigate = useNavigate();

    const viewCategory = ()=>{
        navigate(`/category/${category.strCategory}`);
    }

    return (
        <div className='border w-[15rem] h-[4rem] sm:h-[15rem] relative rounded-xl overflow-hidden cursor-pointer shadow-xl transition-all transform duration-300 ease-in-out hover:h-[15rem] sm:hover:-translate-y-3' onClick={viewCategory}>
            <img className='w-full h-full object-cover object-center' src={category.strCategoryThumb} alt="" />
            <div className='absolute inset-0 bg-black bg-opacity-70 hover:bg-opacity-20 duration-300'>
                <p className='absolute top-2 left-3 text-xl text-rose-500 font-pacifico'>{category.strCategory}</p>
            </div>
        </div>
    );
};

export default Category;