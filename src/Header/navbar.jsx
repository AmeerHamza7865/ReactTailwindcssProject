import React,{useState} from 'react'



import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
export default function Navbar() {

    const [isOpen,setIsOpen] = useState(false)
const toggle = () => {
    setIsOpen(!isOpen)
}
    return(
        <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-24 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
            <ul className="hidden  md:flex">
                <li className='p-4'><a href="#">Home</a></li>
                <li className='p-4'><a href="#">About</a></li>
                <li className='p-4'><a href="#">Contact</a></li>
            </ul>
            <div onClick={toggle} className="block md:hidden">
                {!isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
               
                
            </div>
            <div className={!isOpen ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">React.</h1>
            <ul className="pt-4 uppercase">
                <li className='p-4 border-b border-r-gray-600'><a href="#">Home</a></li>
                <li className='p-4 border-b border-r-gray-600'><a href="#">About</a></li>
                <li className='p-4 border-b border-r-gray-600'><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}