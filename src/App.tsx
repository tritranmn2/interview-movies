import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Manager from './pages/Manager';
import Profile from './pages/Profile';

function App() {
    return (
        <div className="app ">
            <div className=" grid grid-cols-12 bg-black mx-2">
                <Nav />
                <main className="col-span-10 ml-8">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie-detail/:title" element={<MovieDetail />} />
                        <Route path="/watching/:title" element={<MovieDetail />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/manager" element={<Manager />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
