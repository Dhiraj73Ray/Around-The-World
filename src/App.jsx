import './assets/css/home.css'
import './assets/css/categories.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import Navbar from './components/Common/Navbar' // Assuming you're using a navbar component
import Footer from './components/Common/Footer'
import CategoryPage from './components/CategoryPage';
import Gallery from './components/Gallery'
import PlaceDetail from './components/PlaceDetail'
import About from './components/About'
import Contact from './components/Contact'
import AddPlaceForm from './components/Forms/AddPlaceForm'
import Demo from './components/Demo'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={<Home />} />
        <Route path="/catg" element={<Categories />} />
        <Route path="/catg/:categoryId" element={<CategoryPage />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/galy" element={<Gallery />} />
        <Route path="/abt" element={<About />} />
        <Route path="/cont" element={<Contact />} />
        <Route path="/add-place" element={<AddPlaceForm />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
