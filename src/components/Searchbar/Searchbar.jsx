import { useContext } from 'react';
import { toast } from 'react-toastify';
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
  const { query, setQuery } = useContext(queryParams);
  //  const navigate = useNavigate();
  console.log(query);

  const handleSubmit = e => {
    e.preventDefault();
    const { input } = e.target.elements;
    if (input.value === '') {
      return toast.error('Ви нічого не ввели для пошуку');
    }
    if (query === input.value.toLowerCase()) {
      return toast.error(`Ви вже дивитесь результати пошуку  '${input.value}'`);
    }

    setQuery(input.value);
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
          placeholder="Оберіть місто"
          name="input"
          // value={query1}
          // onChange={handleQueryChange}
        />
      </SearchForm>
    </SearchbarBox>
  );
};
