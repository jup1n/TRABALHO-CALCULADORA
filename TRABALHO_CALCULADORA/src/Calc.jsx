//import Botoes from './Botoes'
import style from './Calc.module.css'

export default function Calculadora(){
    return(
        <div className={style.calculadora}>
            <p className={style.name}>Calculadora</p>
            <div className={style.result}>
                <p>9 * 9 = 81</p>
            </div>
        </div>
    )
}