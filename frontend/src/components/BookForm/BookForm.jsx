import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBook } from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.scss';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];
        dispatch(addBook(createBookWithID(randomBook, 'random')));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {
            dispatch(addBook(createBookWithID({ title, author }, 'manual')));
            setTitle('');
            setAuthor('');
        } else {
            dispatch(setError('You must fill title and author!'));
        }
    };

    const handleAddRandomBookViaAPI = () => {
        dispatch(fetchBook());
    };

    return (
        <section className="book-form block">
            <h2 className="book-form__title title-2">Add a New Book</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <div className="book-form__input-wrapper input-wrapper">
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <div className="book-form__input-wrapper input-wrapper">
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                </div>
                <div className="book-form__buttons-wrapper">
                    <button type="submit">Add Book</button>
                    <button type="button" onClick={handleAddRandomBook}>
                        Add Random
                    </button>
                    <button onClick={handleAddRandomBookViaAPI} type="button">
                        Add Random via API
                    </button>
                </div>
            </form>
        </section>
    );
}

export default BookForm;
