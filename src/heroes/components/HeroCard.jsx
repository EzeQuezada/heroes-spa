import { Link } from "react-router-dom"

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroeImagesUrl =  `/heroes/${ id }.jpg`
  const charactersByHero = (<p className="card-text mb-1">{ characters }</p>)

  return (
    <div className="col">
      <div className="card h-100 animate__animated animate__fadeIn shadow-sm bg-body-secondary">
        <div className="row g-0 h-100">
          <div className="col-4">
            <img 
              src={heroeImagesUrl} 
              className="card-img h-100 w-100 object-fit-cover" 
              alt={superhero}
              style={{ borderRadius: '4px 0 0 4px' }}
            />
          </div>
          <div className="col-8">
            <div className="card-body d-flex flex-column h-100">
              <h5 className="card-title fw-bold mb-2">{superhero}</h5>
              <p className="card-text mb-1">{alter_ego}</p>
              {
                (alter_ego !== characters) && charactersByHero
              }
              <p className="card-text mt-auto">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link 
                to={`/hero/${id}`}
                className="btn btn-outline-primary btn-sm mt-2"
              >
                More info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
