import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Filter from './components/Filter/Filter';
import Error from './components/Error/Error';
import './App.scss';


function App() {
    return (
        <>
            <div className="container">
                <header className="header">
                    <h1>Book Library App</h1>
                </header>
                <main className="main">
                    <div className="main-left">
                        <BookForm />
                    </div>
                    <div className="main-right">
                        <Filter />
                        <BookList />
                    </div>
                </main>
                <Error />
            </div>
        </>
    );
}

export default App;
