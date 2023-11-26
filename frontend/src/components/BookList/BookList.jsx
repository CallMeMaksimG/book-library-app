import { useDispatch } from 'react-redux';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import './BookList.scss';

function BookList() {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };
    return (
        <section className="book-list block">
            <h2 className="title-2">Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul className="book-list__list">
                    {books.map((book, index) => (
                        <li className="book-list__list-item" key={book.id}>
                            <div className="book-list__info">
                                {++index}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            
                            {/* <div className="book-list__actions"> */}
                                <button
                                    onClick={() =>
                                        handleToggleFavorite(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar className="star-icon" />
                                    )}
                                </button>
                                <button
                                    className="book-list__delete-btn"
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Delete
                                </button>
                            {/* </div> */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default BookList;
