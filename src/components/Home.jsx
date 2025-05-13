import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='myhomepage'>
            <main className='main-section'>
                <div className="content">
                    <h1>Discover the World</h1>
                    <p>Explore the most beatiful, mysterious, historic, and thrilling places around the globe</p>
                    <div>
                        <Link to={'/catg'}><button className='Ex-btn'>Explore</button></Link>
                        <Link to={'/add-place'}><button className='addbtn1'>+ Add Place</button></Link>
                    </div>

                </div>
                <div className="image-card">

                </div>
            </main>
        </div>
    )
}

export default Home