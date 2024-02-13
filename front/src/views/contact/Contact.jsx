import styles from './Contact.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function Contact() {
    const form = useRef();
    const [ alert, setAlert ] = useState(false);
    console.log(alert);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_nj056ju', 'template_2otfdki', form.current, {
                publicKey: 'wAP7xJSGcVsGOFKSt',
            })
            .then(
                () => {
                    setAlert(true);
                    console.log(alert);
                    setTimeout(() => {
                        setAlert(false);
                        renderAlert();
                    }, 3000)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    function renderAlert(){
        if (alert){
    return (<div className = {styles.alertTrans}><Alert variant="filled" severity="success" sx = {{
        transition: 'all 2s ease-in-out',
    }}>
                            Email sent correctly.
                    </Alert></div>)
        }
    }
    return (
        <div className={styles.contactContainer}>
            <NavBar />
            <div className={styles.divOne}>
                <img src = 'https://res.cloudinary.com/dphpu225t/image/upload/v1707771308/Mines_rhya6h.jpg' alt = 'me' className = {styles.img}/>
                <div className = {styles.info}>
                <h1 className = {styles.infoTitle}>Hi, I'm Leo</h1>
                <p className = {styles.infoText}>I'm a Full Stack Web Developer from Henry Web BootCamp. Bachelor's in Business Engineering from Peruvian Private Northern University (UPN). I have experience developing web applications that are responsive and scalable. My ability of understanding and speaking English has allowed me to improve my skills on teamwork, also, my software developing skills allow my applications to support business processes with ease. I am also a very proactive person who's always taking new goals in order to improve my capabilities as much as I can, as an individual and as a group member. I have several projects where I've worked in UX / UI design, front-End & back-End. Please feel free to send me an email so we can start working on your next project.</p>
                </div>
                

            </div>
            <div className={styles.divContactForm}>
                <h1 className = {styles.divFormTitle}>Contact Form</h1>
                <form ref={form} onSubmit={sendEmail} className = {styles.form}>
                    <div className = {styles.field}>
                    <label className= {styles.label}>Name</label>
                    <input type="text" name="user_name" className= {styles.input} placeholder='Your name'/>
                    </div>
                    <div className = {styles.field}>
                    <label className= {styles.label}>Email</label>
                    <input type="email" name="user_email" className= {styles.input} placeholder='Your email'/>
                    </div>
                    <div className = {styles.field}>
                    <label className= {styles.label} >Message</label>
                    <textarea name="message" className= {styles.inputM} placeholder='Send me a message'/>
                    </div>
                    {/* <button type="submit" value="Send" className = {styles.sendBtn}>Send</button> */}
                    <Button variant="contained" color="success" value="Send" type="submit" sx = {{
                        padding: '1vh',
                        margin: '1vh',
                        width: '100px',
                        fontSize: '18px',
                        fontWeight: '500'
                    }}>Send</Button>
                    <div className = {styles.alert}>
                    {alert && renderAlert()}
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}