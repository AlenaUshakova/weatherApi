import { useContext } from 'react';
// import { toast } from 'react-toastify';
import { queryParams } from 'context/QueryParams';

import {
  SearchbarBox,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
// import { useNavigate } from 'react-router-dom';

export const Searchbar = () => {
 
  const { setQuery } = useContext(queryParams);
  //  const navigate = useNavigate();

   const handleSubmit = e => {
     e.preventDefault();
     const { input } = e.target.elements;
     setQuery(input.value);
    //  navigate(`/home?querySearch=${input.value}`);
     
     e.target.reset();
   };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search cityes"
          name="input"
          // value={query1}
          // onChange={handleQueryChange}
        />
      </SearchForm>
    </SearchbarBox>
  );
};

