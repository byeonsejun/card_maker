import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3': {
            id: '3',
            name: 'sejun3',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'qustpwns93@gmail.com',
            message: 'go for it',
            fileName: 'sejun',
            fileURL: null,
        },
    });




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

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;