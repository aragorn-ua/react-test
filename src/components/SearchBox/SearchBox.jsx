const SearchBox = ({filteredContact, handleChange}) => {
return (
<>
<input type="text" value={filteredContact} onChange={handleChange} />
<p>Filter: {filteredContact}</p>
</>

)
}

export default SearchBox;