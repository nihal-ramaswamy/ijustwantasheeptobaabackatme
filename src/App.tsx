import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/navbar/navbar.component'
import About from './components/about/about.component'
import Contact from './components/contact/contact.compponent'
import SheepGoBaa from './components/sheep/sheepGoBaa.component'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<About />} />
          <Route path="/sheep" element={<SheepGoBaa />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
