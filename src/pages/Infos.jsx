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
        <div onClick={() => scrollToSection('1')} className='select-none p-1 m-1 bg-green-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-green-800 bg-green-400 p-1 rounded-lg">school</span><span className="">Bildungsmöglichkeiten</span></div>
        <div onClick={() => scrollToSection('2')} className='select-none p-1 m-1 bg-red-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-red-800 bg-red-400 p-1 rounded-lg">euro_symbol</span><span className="">Ausgaben</span></div>
        <div onClick={() => scrollToSection('3')} className='select-none p-1 m-1 bg-blue-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-blue-800 bg-blue-400 p-1 rounded-lg">sentiment_dissatisfied</span><span className="">Spürbare Ungerechtigkeiten</span></div>
        <div onClick={() => scrollToSection('4')} className='select-none p-1 m-1 bg-yellow-500 text-white rounded-lg cursor-pointer flex justify-center items-center gap-1'><span className="material-symbols-outlined text-yellow-800 bg-yellow-400 p-1 rounded-lg">emoji_objects</span><span className="">Lösungsansätze</span></div>
      </div>


      <section id="section-1" className='h-screen w-screen border-8 border-green-500 flex flex-wrap flex-col gap-2 justify-center items-center'>
        <div className='rounded-lg text-white p-2 bg-green-500'>Bildungsmöglichkeiten</div>

        <ul className=''>
          <li>
          1. Schulen
            <ol>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen'>https://www.lra-ffb.de/bildung-wirtschaft/schulen</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/gymnasien'>Gymnasien</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/realschulen'>Realschulen</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/berufliche-schulen'>Berufliche Schulen</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/foerderschulen'>Sonderpädagogische Förderzentren</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/grund-und-mittelschulen'>Grund und Mittelschulen</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/privatschulen'>Privatschulen</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/medienzentrum'>Medienzentrum</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/musikschulen'>Musikschulen</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/bildung-wirtschaft/schulen/erwachsenenbildung'>Erwachsenenbildung</a></li>
            </ol>
          </li>
        </ul>

      </section>

      <section id="section-2" className='h-screen w-screen border-8 border-red-500 text-white flex flex-wrap justify-center items-center'>
        <div className='rounded-lg p-2 bg-red-500'>Ausgaben</div>
      </section>
      
      <section id="section-3" className='h-screen w-screen border-8 border-blue-500 text-white flex flex-wrap justify-center items-center'>
        <div className='rounded-lg p-2 bg-blue-500'>Spürbare Ungerechtigkeiten</div>
      </section>

      <section id="section-4" className='h-screen w-screen border-8 border-yellow-500  flex flex-wrap justify-center items-center flex-col gap-2'>
        <div className='rounded-lg p-2 bg-yellow-500 text-white'>Lösungsansätze</div>
        
        <ul className=''>
          <li>
          1. Bildungspaket
            <ol>
              <li><a className='underline' href='https://www.lra-ffb.de/gesundheit-soziales-asyl/kinder-jugendliche-und-familien/bildung-und-teilhabe'>https://www.lra-ffb.de/gesundheit-soziales-asyl/kinder-jugendliche-und-familien/bildung-und-teilhabe</a></li>
              <li><a className='underline' href='https://www.lra-ffb.de/gesundheit-soziales-asyl/kinder-jugendliche-und-familien/bildung-und-teilhabe/leistungen-des-bildungspaketse'>https://www.lra-ffb.de/gesundheit-soziales-asyl/kinder-jugendliche-und-familien/bildung-und-teilhabe/leistungen-des-bildungspaketse</a></li>
            </ol>
          </li>

          <li>2.Finanzielle Unterstützung
            <ol>
              <li>
              <a className='underline' href='https://www.lra-ffb.de/gesundheit-soziales-asyl/kinder-jugendliche-und-familien/finanzielle-unterstuetzung'>https://www.lra-ffb.de/gesundheit-soziales-asyl/kinder-jugendliche-und-familien/finanzielle-unterstuetzung</a>
              </li>
            </ol>
          </li>
        </ul>

      </section>
    </>
  );
}

export default Infos;