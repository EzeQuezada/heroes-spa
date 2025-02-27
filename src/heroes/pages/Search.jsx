import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";

import { getHerooByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHerooByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  return (
    <div className="row  ">
      <h1 className="mt-3">Search</h1>
      <hr />
      <div className="col-5 mt-3">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            autoComplete="off"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
          />
        </form>
        <button className="btn btn-outline-primary mt-2">Search</button>
      </div>
      <div className="col-7 mt-3">
        <h4>Result</h4>
        <hr />

        {/* {
           (q === "")
          ? <div className="alert alert-primary">Search a Hero</div>
          :( heroes.length===0 )
           && <div className="alert alert-danger">No hero with <b>{q}</b></div>

        } */}

        <div
          className="alert alert-primary animate__animated animate__fadeIn"
          style={{ display: showSearch ? "" : "none" }}
        >
          Search a hero
        </div>

        <div
          className="alert alert-danger animate__animated animate__fadeIn"
          style={{ display: showError ? "" : "none" }}
        >
          No hero with <b>{q}</b>
        </div>

        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
        {/* <HeroCard/> */}
      </div>
    </div>
  );
};
