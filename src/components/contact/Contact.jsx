import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_wwj6yjj', 'template_klxiw8n', formRef.current, 'G4QWXsLJ5EcAwTQyJ')
        .then((result) => {
            console.log(result.text);
            console.log('성공')
            setDone(true)
        }, (error) => {
            console.log(error.text);
            console.log('실패')
        });
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="휴대폰" className="c-icon" />
                        +82 010-2052-4821
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="이메일" className="c-icon" />
                        mirrorright@naver.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="주소" className="c-icon" />
                        경기도 안산시 상록구 충장로 533 11단지 아파트
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your stroy?</b> Get in touch. Always freelacing if the right project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}
                >
                    <input type="text" style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} placeholder='Name' name='user_name' />
                    <input type="text" style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} placeholder='Subject' name='user_subject' />
                    <input type="text" style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} row="5" placeholder='Message' name='message' />
                    <button>Submit</button>
                    {done && "감사합니다!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
