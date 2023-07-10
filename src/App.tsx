import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
    return (
        <div className="grid grid-cols-12 bg-black mx-2 ">
            <Nav />
            <main className="col-span-10 ml-8">
                <Header />
                <Main />
            </main>
        </div>
    );
}

export default App;
