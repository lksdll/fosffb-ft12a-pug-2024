import React, { useContext } from 'react'
import Icons from './Icons'
import { ThemeContext } from '../App';
import { Switch } from 'antd';


const Header = ({id}) => {

  const {theme,settheme,data} = useContext(ThemeContext)
  const selectTopic = data.quizzes[id]

  return (
    <div className={`flex justify-between items-center p-5 text-[#313E51] w-full`}>
       <div className='flex justify-center items-center'>
          {selectTopic?.icon&&<Icons bgcolor={`bg-[#F4F6FA]`}><img src={selectTopic?.icon} alt="" className={`${selectTopic?.icon&&"w-10"}`}/></Icons>}
          <div className={`text-[#313E51] font-medium text-[28px]`}>{selectTopic?.title}</div>
      </div>
      <div className='flex items-center'>
      <img className='select-none'  src={`${process.env.PUBLIC_URL}/images/icon-moon-dark.svg`} alt='' />
        {/* <button onClick={()=>settheme()} className="mx-5 cursor-pointer"> */}
        <Switch defaultChecked onChange={settheme} colorPrimary="#EE5454" className='mx-3 bg-[#EE5454]'/>
        {/* </button> */}
        <img className='select-none' src={`${process.env.PUBLIC_URL}/images/icon-sun-dark.svg`} alt='' />
        
      </div>
    </div>
  )
}

export default Header