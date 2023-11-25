import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
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
                id: uuidv4(),
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        }
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
                <button type="submit">Add Book</button>
            </form>
        </section>
    );
}

export default BookForm;
