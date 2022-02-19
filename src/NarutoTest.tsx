import React from "react";
import {QuestionType, VariantType} from "./App";

type PropsType = {
    actualQuestion: QuestionType
    title: string
    image: string
    name: string
    variants: Array<VariantType>
    chooseAnswer: (answer: string) => void
}


function NarutoTest(props: PropsType) {
    return (
        <div className={'naruto-test'}>
            <div className={'main-display'}>
                <img src={props.image} alt=""/>
            </div>
            <h2>{props.name}</h2>
            <h3>{props.title}</h3>

            <div className={'questions'}>
                {props.variants.map(v => {
                    const chooseAnswer = () => {
                        props.chooseAnswer(v.answer)
                    }
                    return(
                        <button key={v.id} onClick={chooseAnswer} className={'answer'}>{v.title}</button>
                    )
                })}
            </div>
        </div>
    )
}


export default NarutoTest

