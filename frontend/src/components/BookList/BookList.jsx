import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import {
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
    selectTitleFilter,
} from '../../redux/slices/filterSlice';
import './BookList.scss';

function BookList() {
    const books = useSelector((state) => state.books);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesFavorite;
    });
    return (
        <section className="book-list block">
            <h2 className="title-2">Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul className="book-list__list">
                    {filteredBooks.map((book, index) => (
                        <li className="book-list__list-item" key={book.id}>
                            <div className="book-list__info">
                                {++index}. {book.title} by{' '}
                                <strong>{book.author}</strong>
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
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default BookList;
