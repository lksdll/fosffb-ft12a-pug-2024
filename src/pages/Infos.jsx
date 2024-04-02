import React from 'react';

function Infos() {
  // Define the function
  const scrollToSection = (SectionID) => {
    const element = document.getElementById(`section-${SectionID}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

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
      {/* Rest of your component */}
    </>
  );
}

export default Infos;