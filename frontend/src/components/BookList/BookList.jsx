import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import './BookList.scss';

function BookList() {
    const books = useSelector((state) => state.books);
    return (
        <section className="book-list block">
            <h2 className='title-2'>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>
                            <div className="book-list__info">
                                {++index}. {book.title} by <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default BookList;
