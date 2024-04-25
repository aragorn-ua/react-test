import css from "./SearchBox.module.css"
const SearchBox = ({filteredContact, handleChange}) => {
return (
<div>
<input type="text" className={css.filtered} value={filteredContact} onChange={handleChange} />
</div>
)
}

export default SearchBox;