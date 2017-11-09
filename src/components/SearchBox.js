import React from 'react';

const SearchBox = (submitHandler) => (

    <form name="searchForm" onSubmit={(e) => submitHandler(e)}>
      <input type="text" name="searchbox" placeholder="Search" className="form-control"
                  onSubmit={(e) => submitHandler(e)} />
    </form>

)

export default SearchBox;
