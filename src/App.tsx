
import './App.scss'
import {Route,BrowserRouter, Routes} from "react-router-dom"
import SharedLayOut from './sharedLayout'
import Home from './pages/home';
import Destination from './pages/destination';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
