import { Link } from 'react-router-dom'
// import images from '../../constant/images'
import { FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

    <footer className=" bg-sec-color border-t">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            {/* <img src="/assets/Abaad Ali.png" className="mr-9 w-[120px] h-[30px]" alt="Logo" /> */}
            <h2 style={{color:"white", fontSize:"25px"}}>Abaad Ali</h2>

          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">Home</Link>
            </li>
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
              <Link to="/contact" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
            </li>

          </ul>

          <div className="flex gap-3">
            <Link to="https://www.linkedin.com/in/abaad-ali-aaabb1229/" target='_blank'
            className="w-[30px] h-[30px] bg-slate-300 rounded-full flex justify-center items-center ">
              <FaLinkedin className='hover:text-sky-500 text-xl' />
            </Link>

            <Link to="https://leetcode.com/abaadali899/" target='_blank'
            className="w-[30px] h-[30px] bg-slate-300 rounded-full flex justify-center items-center ">
            <SiLeetcode className='hover:text-teal-600 text-xl' />
            </Link>

            <Link to="https://github.com/abaadali899" target='_blank'
            className="w-[30px] h-[30px] bg-slate-300 rounded-full flex justify-center items-center ">
            <AiFillGithub className='hover:text-blue-800  text-[24px]' />
            </Link>

            
            
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">© {currentYear} <Link to="" target='_blank' className="hover:underline">Abaad Ali™</Link>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default Footer