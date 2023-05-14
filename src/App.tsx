import React, {useEffect, useState} from 'react';
import './App.css';
import NarutoTest from "./NarutoTest";
import {v1} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {chooseAnswerAC, MemberType, resetMembersValuesAC, sortMembersArrayAC} from "./narutoReducer";
import img1 from './images/attack.jpg'
import img2 from './images/kakashi.jpg'
import img3 from './images/sakuraHealing.png'
import img4 from './images/narutoKid.jpg'
import img5 from './images/reading.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/konoha.jpg'


export type AnswerType = {
    id: number
    title: string
}
export type QuestionType = {
    image: string,
    variants: Array<VariantType>
    name: number,
    title: string
}
export type VariantType = {
    id: string
    title: string
    answer: string
}

function App() {

    const dispatch = useDispatch()
    const testMembers = useSelector<AppRootStateType, Array<MemberType>>(state => state.testMembers)
    const actualQuestionCounterValue = useSelector<AppRootStateType, number>(state => state.actualQuestionCounter.value)


    let questions: Array<QuestionType> = [
        {
            name: 1,
            title: 'На деревню напали! Твои действия?',
            image: img1,
            variants: [
                {id: v1(), title: 'Убежать', answer: 'Minato'},
                {id: v1(), title: 'Обоссаться', answer: 'Nagato'},
                {id: v1(), title: 'Драться', answer: 'Naruto'},
                {id: v1(), title: 'Обоссаться и убежать', answer: 'Sasuke'},
            ]
        },
        {
            name: 2,
            title: 'Вилкой в глаз или...',
            image: img2,
            variants: [
                {id: v1(), title: 'За Коноху можно и в жопу раз', answer: 'Naruto'},
                {id: v1(), title: 'В жопу 2 раза', answer: 'Madara'},
                {id: v1(), title: 'Вилкой в глаз', answer: 'Kakashi'},
                {id: v1(), title: 'Вилкой в жопу', answer: 'Shisui'},
            ]
        },
        {
            name: 3,
            title: 'Вы проходите практику в клинике. ' +
                'В кабинет вваливается пациент с раной на ноге, воспалённой от неизвестной инфекции.' +
                ' Инфекция распространяется с пугающей скоростью, но доктор ненадолго вышел. Ваши действия?',
            image: img3,
            variants: [
                {
                    id: v1(),
                    title: 'Ампутировать ногу, пока инфекция не распространилась дальше.',
                    answer: 'Naruto'
                },
                {
                    id: v1(),
                    title: 'Громко звать на помощь.',
                    answer: 'Shisui'
                },
                {
                    id: v1(),
                    title: 'Обработать заражённую область медикаментами, насколько вы умеете.',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Зафиксировать пациента и спокойно наблюдать за распространением инфекции',
                    answer: 'Naruto'
                },
            ]
        },
        {
            name: 4,
            title: 'Вы находите маленького потерявшегося мальчика. ' +
                'Он голоден и напуган, но, кажется, у него с собой краденая вещь. Ваши действия?',
            image: img4,
            variants: [
                {
                    id: v1(),
                    title: 'Обнять мальчика и сказать ему, что всё будет хорошо.',
                    answer: 'Sakura'
                },
                {
                    id: v1(),
                    title: 'Силой конфисковать краденое и в наказание оставить мальчика там, где нашли.',
                    answer: 'Madara'
                },
                {
                    id: v1(),
                    title: 'Залезть к мальчику в карман, вытащить краденое и предоставить его самому себе.',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Отвести мальчика в безопасное место, затем доложить о нём.',
                    answer: 'Sasuke'
                },
            ]
        },
        {
            name: 5,
            title: 'У другого жителя деревни есть редкий выпуск комикса. Вы очень хотите его заполучить. Как лучше всего это сделать?',
            image: img5,
            variants: [
                {
                    id: v1(),
                    title: 'Выменять комикс на какое-нибудь ваше имущество поценнее.',
                    answer: 'Obito'
                },
                {
                    id: v1(),
                    title: 'Отобрать комикс силой.',
                    answer: 'Madara'
                },
                {
                    id: v1(),
                    title: 'Прокрасться в квартиру жителя и стащить комикс со стола.',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Подсыпать жителю в рамен быстродействующее снотворное и забрать книжку, пока он валяется в отключке',
                    answer: 'Sasuke'
                },
            ]
        },
        {
            name: 6,
            title: 'Вас порой очень глубоко трогают музыка, книги и другие произведения искусства?',
            image: img6,
            variants: [
                {
                    id: v1(),
                    title: 'Вообще не про меня',
                    answer: 'Madara'
                },
                {
                    id: v1(),
                    title: 'Полностью про меня',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Лишь иногда',
                    answer: 'Sakura'
                },
                {
                    id: v1(),
                    title: 'От части (50% на 50%)',
                    answer: 'Sasuke'
                },
            ]
        },
        {
            name: 7,
            title: 'В день рождения вы получили подарок — вазу для цветов. Она вам не нравится. Что вы сделаете?',
            image: img7,
            variants: [
                {
                    id: v1(),
                    title: 'Подарите другому',
                    answer: 'Madara'
                },
                {
                    id: v1(),
                    title: 'Уберете подальше, чтобы не видеть',
                    answer: 'Naruto'
                },
                {
                    id: v1(),
                    title: 'Дадите понять гостю, принесшему подарок, что он мог бы выбрать и получше',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Выбросите подарок в помойку',
                    answer: 'Sasuke'
                },
            ]
        },
        {
            name: 8,
            title: 'В парке мальчишки мучают птичку с перебитым крылом. Как вы прореагируете на это?',
            image: img8,
            variants: [
                {
                    id: v1(),
                    title: 'Прогоните мальчишек',
                    answer: 'Jiraya'
                },
                {
                    id: v1(),
                    title: 'Не обращая внимания, продолжите путь',
                    answer: 'Shisui'
                },
                {
                    id: v1(),
                    title: 'Присоединитесь к мучителям',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Дождетесь, пока обидчики уйдут и поможете птице',
                    answer: 'Sasuke'
                },
            ]
        },
        {
            name: 9,
            title: 'Ваш друг пригласил Вас к себе на день рождения. Какой подарок он получит?',
            image: img9,
            variants: [
                {
                    id: v1(),
                    title: 'Подарю шутливый подарок, который больше похож на издёвку, чем на проявление любезности',
                    answer: 'Jiraya'
                },
                {
                    id: v1(),
                    title: 'Подарю то, чего действительно хотел мой друг (в пределах разумного)',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Подарю деньги (пусть сам решает, что ему нужнее)',
                    answer: 'Sakura'
                },
                {
                    id: v1(),
                    title: 'Ничего не подарю',
                    answer: 'Naruto'
                },
            ]
        },
        {
            name: 10,
            title: 'У Вас возникла навязчивая идея уничтожения всего человечества. Способен ли кто-то заставить Вас отказаться от неё?',
            image: img10,
            variants: [
                {
                    id: v1(),
                    title: 'Начну с того, кто попытается это сделать',
                    answer: 'Madara'
                },
                {
                    id: v1(),
                    title: 'Только близкие мне люди, которым я могу полностью доверять',
                    answer: 'Sasuke'
                },
                {
                    id: v1(),
                    title: 'Мама сказала, что убивать людей - нехорошо? Ландно, не буду',
                    answer: 'Sakura'
                },
                {
                    id: v1(),
                    title: 'Только я сам, взвесив все мнения одинаково',
                    answer: 'Obito'
                },
            ]
        },
        {
            name: 11,
            title: 'Вы забыли сделать то, о чем Вас просил Ваш друг. Как будете обьясняться?',
            image: img11,
            variants: [
                {
                    id: v1(),
                    title: 'Скажу правду, что забыл и попрошу прощения',
                    answer: 'Hinata'
                },
                {
                    id: v1(),
                    title: 'Скажу, что огромный метеорит упал на мой дом, по этому я выполнить просьбу было невозможно',
                    answer: 'Naruto'
                },
                {
                    id: v1(),
                    title: 'Скажу, что не хотел ему помогать и, вообще, пошел он на##й',
                    answer: 'Shisui'
                },
                {
                    id: v1(),
                    title: 'Навсегда перестану общаться с другом, чтобы избежать неловкого разговора',
                    answer: 'Sakura'
                },
            ]
        },
        {
            name: 12,
            title: ' С чего начинается твоё утро?',
            image: img12,
            variants: [
                {
                    id: v1(),
                    title: 'Стакана воды',
                    answer: 'Hinata'
                },
                {
                    id: v1(),
                    title: 'Чтения книги',
                    answer: 'Kakashi'
                },
                {
                    id: v1(),
                    title: 'Зарядки',
                    answer: 'Sakura'
                },
                {
                    id: v1(),
                    title: 'Опоздания',
                    answer: 'Obito'
                },
            ]
        },

        {
            name: 13,
            title: 'Конец',
            image: img5,
            variants: []
        }
    ]


    let actualQuestion = questions[actualQuestionCounterValue]


    function chooseAnswer(answer: string) {
        dispatch(chooseAnswerAC(answer))
        dispatch(sortMembersArrayAC())
        console.log(testMembers)
    }

    function resetMembersValues() {
        dispatch(resetMembersValuesAC())
        chooseAnswer('Home')
    }

    return (
        <div className="App">
            <h1>Кто ты из Наруто?</h1>
            {actualQuestionCounterValue === 12 //                  CHANGE    CHANE    CHANGE
                ? <>
                    <NarutoTest
                        actualQuestion={actualQuestion}
                        name={`Поздравляем, вы ${testMembers[0].name}`}
                        title={testMembers[0].description}
                        image={testMembers[0].image}
                        variants={actualQuestion.variants}
                        chooseAnswer={chooseAnswer}
                    />
                    <button className={'answer'} onClick={resetMembersValues}>Вернуться в начало</button>
                </>

                : <NarutoTest
                    actualQuestion={actualQuestion}
                    name={actualQuestion.name.toString()}
                    title={actualQuestion.title}
                    image={actualQuestion.image}
                    variants={actualQuestion.variants}
                    chooseAnswer={chooseAnswer}
                />}
        </div>
    )
}


export default App;
