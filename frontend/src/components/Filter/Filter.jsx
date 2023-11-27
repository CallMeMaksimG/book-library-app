import './Filter.scss';

function Filter() {
    return (
        <div className="filter block">
            <div className="filter-group">
                <div className="input-wrapper filter-group__input-wrapper"><input type="text" placeholder="Filter by title..." /></div>
            </div>
        </div>
    );
}

export default Filter;
