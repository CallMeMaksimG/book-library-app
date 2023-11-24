import { useState } from 'react';
import './BookForm.scss';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {
            //dispath action
            console.log(title, author);
            setTitle('');
            setAuthor('');
        }
    };

    return (
        <div className="book-form block">
            <h2>Add a New Book</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default BookForm;
