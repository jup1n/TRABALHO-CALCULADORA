import style from './Botoes.module.css'

export default function Botoes(){
    return(
        <div className={style.botoes}>
            <button className={style.text}>9</button>
            <button className={style.text}>.</button>
            <button className={style.text}>/</button>
            <button className={style.text}>*</button>
            <button className={style.text}>6</button>
            <button className={style.text}>7</button>
            <button className={style.text}>8</button>
            <button className={style.text}>-</button>
            <button className={style.text}>3</button>
            <button className={style.text}>4</button>
            <button className={style.text}>8</button>
            <button className={style.text}>+</button>
            <button className={style.text}>0</button>
            <button className={style.text}>1</button>
            <button className={style.text}>2</button>
            <button className={style.text}>=</button>
        </div>
    )
}