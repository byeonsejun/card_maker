import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'sejun',
            company: 'Samsung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'qustpwns93@gmail.com',
            message: 'go for it',
            fileName: 'sejun',
            fileURL: null,
        },
        {
            id: '2',
            name: 'sejun2',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'qustpwns93@gmail.com',
            message: 'go for it',
            fileName: 'sejun',
            fileURL: 'sejun.png',
        },
        {
            id: '3',
            name: 'sejun3',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'qustpwns93@gmail.com',
            message: 'go for it',
            fileName: 'sejun',
            fileURL: null,
        }

    ])
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(!user) {
                navigate("/");
            }
        });
    });

    const addCard = card => {
        const updated = [...cards, card];
        setCards(updated);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;