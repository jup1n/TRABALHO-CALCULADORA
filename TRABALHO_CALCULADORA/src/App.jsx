import Botoes from "./Botoes"
import Calculadora from "./Calc"
import style from './Principla.module.css'


function App() {

  return (
    <main className={style.main}>
      <div className={style.section}>
        <Calculadora/>
        <Botoes/>
      </div>
    </main>
  )
}

export default App
