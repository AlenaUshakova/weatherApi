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
import { languageContext } from '../../context/LanguageContext';

export const Searchbar = () => {
  const { query, setQuery } = useContext(queryParams);
  const { value } = useContext(languageContext);

  const handleSubmit = e => {
    e.preventDefault();
    const { input } = e.target.elements;
    if (input.value === '') {
      return toast.error(
        value === 'en'
          ? 'You have not entered anything to search'
          : 'Ви нічого не ввели для пошуку'
      );
    }
    if (query === input.value.toLowerCase()) {
      return toast.error(
        value === 'en'
          ? `You are already viewing search results for '${input.value}'`
          : `Ви вже дивитесь результати пошуку '${input.value}'`
      );
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
          placeholder={`${value === 'en' ? 'Select city' : 'Оберіть місто'}`}
          name="input"
        />
      </SearchForm>
    </SearchbarBox>
  );
};
