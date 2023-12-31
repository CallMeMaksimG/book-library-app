import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import {
    addBook,
    fetchBook,
    selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.scss';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
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
        dispatch(fetchBook('http://localhost:4000/random-book'));
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

                    <button
                        onClick={handleAddRandomBookViaAPI}
                        type="button"
                        disabled={isLoadingViaAPI}
                    >
                        {isLoadingViaAPI ? (
                            <>
                                <span>Loading Book...</span>
                                <FaSpinner className="spinner" />
                            </>
                        ) : (
                            'Add Random via API'
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default BookForm;
