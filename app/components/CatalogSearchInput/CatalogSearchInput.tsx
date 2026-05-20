"use client"
import { SearchIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'

const CatalogSearchInput = () => {
    const [text, setText] = useState<string>("")
  return (
    <div className='pr-14 relative flex items-center'>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} className='w-[420px] h-[65px]  border-2 border-gray-200 outline-[#5939F5]'/>
        <div className='absolute right-[15%] text-[#5939F5]'><XIcon/><SearchIcon/></div>
    </div>
  )
}

export default CatalogSearchInput