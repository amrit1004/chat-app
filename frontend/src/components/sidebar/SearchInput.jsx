import React from 'react'
 import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='rounded input input-bordered-full'/>
        <button type='submit' className='text-white btn btn-circle bg-sky-500'>
            
 				<IoSearchSharp className='w-6 h-6 outline-none' />
     </button>
    </form>
  )
}

export default SearchInput