import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilters,
    setAuthorFilter,
    selectAuthorFilter,
} from '../../redux/slices/filterSlice';
import './Filter.scss';

function Filter() {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    }

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="filter block">
            <div className="filter-group">
                <div className="input-wrapper filter-group__input-wrapper">
                    <input
                        type="text"
                        value={titleFilter}
                        placeholder="Filter by title..."
                        onChange={handleTitleFilterChange}
                    />
                </div>
                <div className="input-wrapper filter-group__input-wrapper">
                    <input
                        type="text"
                        value={authorFilter}
                        placeholder="Filter by author..."
                        onChange={handleAuthorFilterChange}
                    />
                </div>
                <button type='button' onClick={handleResetFilters}>Reset filters</button>
            </div>
        </div>
    );
}

export default Filter;
