import '../App.css';
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {ThemeContext} from '../App'
import { useLocation, Link } from 'react-router-dom';
import TypeWriterText from '../components/TypeWriterText';

function Infos() {
  const navigate = useNavigate();
  const {theme,setTopic} = useContext(ThemeContext)

  // Define the function
  const scrollToSection = (SectionID) => {
    const element = document.getElementById(`section-${SectionID}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='w-screen flex justify-center my-10 items-center'>
        <p className={`lg:text-9xl md:text-8xl text-7xl text-[#313E51]  font-black`}><TypeWriterText inputText={"Infos"}></TypeWriterText></p>
      </div>
      <div className='w-screen flex justify-center items-center mb-10'>
        <Link to="/" className='border border-[#313E51] text-[#313E51] p-1 rounded-md select-none'>Zurück zur Startseite</Link>
      </div>
      
      <p onClick={() => scrollToSection('1')} className='p-1 m-1 border border-gray-500 rounded-lg cursor-pointer'>Scroll to 1</p>
      <p onClick={() => scrollToSection('2')} className='p-1 m-1 border border-gray-500 rounded-lg cursor-pointer'>Scroll to 2</p>
      <p onClick={() => scrollToSection('3')} className='p-1 m-1 border border-gray-500 rounded-lg cursor-pointer'>Scroll to 3</p>
      <p onClick={() => scrollToSection('4')} className='p-1 m-1 border border-gray-500 rounded-lg cursor-pointer'>Scroll to 4</p>
      <p onClick={() => scrollToSection('5')} className='p-1 m-1 border border-gray-500 rounded-lg cursor-pointer'>Scroll to 5</p>

      <section id="section-1" className='h-screen w-screen bg-green-500 text-white'>Section 1</section>
      <section id="section-2" className='h-screen w-screen bg-red-500 text-white'>Section 2</section>
      <section id="section-3" className='h-screen w-screen bg-blue-500 text-white'>Section 3</section>
      <section id="section-4" className='h-screen w-screen bg-yellow-500 text-white'>Section 4</section>
      <section id="section-5" className='h-screen w-screen bg-purple-500 text-white'>Section 5</section>
    </>
  );
}

export default Infos;