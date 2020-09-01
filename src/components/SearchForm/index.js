import React, { useCallback } from "react";
import { useLocation } from "wouter";
import css from "./SearchForm.module.css"
import useForm from "./hook";
import Button from "components/Button";


const RATINGS = ["g", "pg", "pg-13", "r"];


function SearchForm({ initialKeyword = '', initialRating= 'g' }) {

  const [, pushLocation] = useLocation();

  const { keyword, rating, updateKeyword, updateRating } = useForm({initialKeyword, initialRating})
  

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      pushLocation(`/search/${keyword}/${rating}`);
    },
    [keyword, rating, pushLocation]
  );

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  };

  const handleChangeRating = evt => {
    updateRating(evt.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <Button>Buscar</Button>
      <input
        className={css["c-search-input"]}
        onChange={handleChange}
        type="text"
        value={keyword}
        placeholder="Search Gifs..."
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>
          Rating:
        </option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
    </>
  );
}

export default React.memo(SearchForm);
