import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Icons from '../components/Icons'
import ImageIcons from '../components/ImageIcons'
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../App'
import { useNavigate } from "react-router-dom";


const Topic = () => {
  const { id } = useParams();
  const { theme, data } = useContext(ThemeContext)
  const selectTopic = data.quizzes[id]
  const [questionNo, setQuestionNo] = useState(0)
  const [selectQuestion, setSelectQuestion] = useState()
  const [showError, setShowError] = useState(false)
  const [check, setCheck] = useState("")
  const [result, setResult] = useState(0)
  const navigate = useNavigate();

  const checkQuestion = (selected) => {


    setShowError(false)
    if (selected === selectTopic.questions[questionNo].answer) {
      setCheck("1")
      setResult(pre => pre + 1)

    }
    else {
      setCheck("0")
    }
  }

  const getquestion = () => {
    setQuestionNo(pre => pre + 1)
    setSelectQuestion()
    setCheck("")
  }

  const startQuiz = () => {
    return navigate(`/`);
  }

  return (
      <div className='lg:max-w-7xl lg:mx-auto  px-5 md:px-14 lg:px-0 '>

        <div className='flex flex-col h-screen justify-center'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-x-36'>
            <div className='mb-10 md:my-0'>
              {questionNo < selectTopic.questions.length && <p className={` text-[#626C7F] text-[14px] md:text-[20px] font-normal italic`}>{`Frage ${questionNo + 1} von ${selectTopic.questions.length}`}</p>}
              {questionNo < selectTopic.questions.length ? <h1 className={`text-[#313E51] text-[20px] md:text-[36px] font-medium mt-10`}>{selectTopic.questions[questionNo].question}</h1> : <h1 className={`text-[#313E51] text-[40px] md:text-[64px] font-light`}>Quiz abgeschlossen<br /><span className='font-medium'>Dein Ergebnis...</span></h1>}
            </div>


            {questionNo < selectTopic.questions.length ?
            
            <div className=''>
              {selectTopic.questions[questionNo].options.map((item, index) => /** need to look at data.json and get answer to show correct option if user chooses false option */
                <Button onClick={() => !check && setSelectQuestion(item)} key={index} className={`p-3 select-none text-[#3B4D66] bg-white hover:bg-[#F6E7FF] border-[3px]  ${selectQuestion === item ? check === "1" ? "border-[#26D782]" : check === "0" ? "border-[#EE5454]" : "border-[#A729F5]" : item === selectTopic.questions[questionNo].answer && check !== "" ? "border-[#26D782]" : ""}`}>
                  <Icons bgcolor={` ${selectQuestion === item ? check === "1" ? "bg-[#26D782]" : check === "0" ? "bg-[#EE5454]" : " bg-[#A729F5] " : "bg-[#F4F6FA]"}  px-4 py-2`}>
                    <p className={`${selectQuestion === item ? " text-white " : "text-[#626C7F]"} text-[28px]  font-medium`}>{index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}</p>
                  </Icons>
                  {item}
                  <ImageIcons src={`${process.env.PUBLIC_URL}/images/icon-correct.svg`} className={`${selectQuestion === item ? check === "1" ? "block" : "hidden" : "hidden"} ml-auto`} />
                  <ImageIcons src={`${process.env.PUBLIC_URL}/images/icon-incorrect.svg`} className={`${selectQuestion === item ? check === "0" ? "block" : "hidden" : "hidden"} ml-auto`} />
                </Button>)}
              {!check && <Button onClick={() => selectQuestion ? checkQuestion(selectQuestion) : setShowError(true)} className="p-3 bg-[#A729F5] hover:bg-[#a729f5b1] text-white justify-center select-none">Auflösen</Button>}
              {check && <Button onClick={() => getquestion()} className="p-3 bg-[#A729F5] hover:bg-[#a729f5b1] text-white justify-center select-none">Nächste Frage</Button>}
              {showError && <div className='flex justify-center items-center'>
                <img src={`${process.env.PUBLIC_URL}/images/icon-incorrect.svg`} alt='' className=' mx-2' />
                <p className='text-[#EE5454] text-[24px] font-normal'>Bitte wähle eine Antwort</p>
                </div>}
            </div>


              :


              <div>
                <div className='bg-white shadow-2xl rounded-2xl w-full p-10 '>
                  <div className='flex justify-center items-center'>
                    <div className='text-[#313E51] font-medium text-[28px]'>{selectTopic.title}</div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <h1 className='text-[144px] text-[#313E51] font-medium'>{result}</h1>
                  </div>
                  <p className='text-[24px] font-normal text-[#626C7F] text-center'>von {selectTopic.questions.length}</p>
                </div>
                <Button onClick={() => startQuiz()} className="p-3 bg-[#A729F5] hover:bg-[#a729f5b1] text-white justify-center select-none">Zurück zur Startseite</Button>
              </div>}
          </div>
        </div>
      </div>
  )

}

export default Topic