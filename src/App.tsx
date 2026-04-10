import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PHome from './pages/PHome/PHome'
import PLogin from './components/PLogin/PLogin'
import PListagemAluno from './pages/PListagem/PListagemAluno/PListagemAluno'
import PLivros from './pages/PLivros/PLivros'
import PEmprestimos from './pages/PEmprestimos/PEmprestimos'
import Navegacao from './components/Navegacao/Navegacao'
import Rodape from './components/Rodape/Rodape'

function App() {

  return (
    <BrowserRouter>
      <Navegacao />
      <Routes>
        <Route path='/' element={<PHome />} />
        <Route path='/login' element={<PLogin />} />
        <Route path='/lista/aluno' element={<PListagemAluno />} />
        <Route path='/livros' element={<PLivros />} />
        <Route path='/emprestimos' element={<PEmprestimos />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
