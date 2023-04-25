import { useState } from 'react';
import {
  SearchForm,
  FormButton,
  FormInput,
  Icon,
} from '../styles/SearchBar.styled';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <FormInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
      />
      <FormButton type="submit">
        <Icon />
      </FormButton>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;