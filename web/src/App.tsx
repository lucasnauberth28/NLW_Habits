// Arquivos gerais
import { useState } from 'react'
import reactLogo from './assets/react.svg'

// Components
import { Habit } from './components/Habit'
// Styles
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={5} />
    </div>
   
  )
}

export default App


// Componente é o item criado para reaproveitar/isolar um item X
// Propriedade uma informação para alterar x ou y