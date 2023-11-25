import './App.scss';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Filter from './components/Filter/Filter';

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
            </div>
        </>
    );
}

export default App;
