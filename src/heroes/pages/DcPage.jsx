import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <div className="row">
        <div className="container mt-4 mb-4">
          <h1>Dc Page</h1>
          <hr />
          <HeroList publisher="DC Comics" />
        </div>
      </div>
    </>
  );
};
