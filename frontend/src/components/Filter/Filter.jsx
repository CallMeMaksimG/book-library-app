import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilters,
    setAuthorFilter,
    selectAuthorFilter,
    setOnlyFavoriteFilter,
    selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';
import './Filter.scss';

function Filter() {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter());
    };

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
                <div className="filter-group__button-wrapper">
                    <div className='filter-group__checkbox-wrapper'>
                        <input
                            checked={onlyFavoriteFilter}
                            onChange={handleOnlyFavoriteFilterChange}
                            type="checkbox"
                            id="filter__favorite"
                        ></input>
                        <label htmlFor="filter__favorite">Only Favorite</label>
                    </div>
                    <button type="button" onClick={handleResetFilters}>
                        Reset filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
