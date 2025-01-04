import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <div className="row">
        <div className="container mt-4 mb-4">
          <h1>Marvel Page</h1>
          <hr />
          <HeroList publisher="Marvel Comics" />
        </div>
      </div>
    </>
  );
};
