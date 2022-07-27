import './App.css'
import SchoolProfile from './Modules/School/profile'
import Navbar from './Commons/Components/moleculs/Navbar'
import UserProfile from './Modules/Student/profile'
import Feed from './Modules/Feed'
import Home from './Modules/Home'
import List from './Modules/School/list'
import Router from './Commons/Routes'
import Footer from './Commons/Components/moleculs/Footer'

function App() {
  return (
    <div className="content">
      <Navbar />
     <div className=' container  m20 b-gray-100  pt-20'>
      <Router/>
     </div>
     <Footer/>
    </div>
  )
}

export default App
