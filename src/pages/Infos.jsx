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
      
      <div className='flex flex-row w-screen flex-wrap justify-center gap-2 items-center mb-10'>
        <div onClick={() => scrollToSection('1')} className='p-1 m-1 bg-green-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-green-800 bg-green-400 p-1 rounded-lg">school</span><span className="">Bildungsmöglichkeiten</span></div>
        <div onClick={() => scrollToSection('2')} className='p-1 m-1 bg-red-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-red-800 bg-red-400 p-1 rounded-lg">euro_symbol</span><span className="">Ausgaben</span></div>
        <div onClick={() => scrollToSection('3')} className='p-1 m-1 bg-blue-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-blue-800 bg-blue-400 p-1 rounded-lg">sentiment_dissatisfied</span><span className="">Spürbare Ungerechtigkeiten</span></div>
        <div onClick={() => scrollToSection('4')} className='p-1 m-1 bg-yellow-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-yellow-800 bg-yellow-400 p-1 rounded-lg">emoji_objects</span><span className="">Lösungsansätze</span></div>
      </div>

      <section id="section-1" className='h-screen w-screen bg-green-500 text-white'>Bildungsmöglichkeiten</section>
      <section id="section-2" className='h-screen w-screen bg-red-500 text-white'>Ausgaben</section>
      <section id="section-3" className='h-screen w-screen bg-blue-500 text-white'>Spürbare Ungerechtigkeiten</section>
      <section id="section-4" className='h-screen w-screen bg-yellow-500 text-white'>Lösungsansätze</section>
    </>
  );
}

export default Infos;