import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
import './BookForm.scss';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {
            const book = {
                title,
                author,
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        }
    };

    return (
        <div className="book-form block">
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
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default BookForm;
