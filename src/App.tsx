import './App.css';
import DetailMovie from './components/DetailMovie';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
    return (
        <div className="grid grid-cols-12 bg-black mx-2 ">
            <Nav />
            <main className="col-span-10 ml-8">
                <Header />
                {/* <Main /> */}
                <DetailMovie />
            </main>
        </div>
    );
}

export default App;
