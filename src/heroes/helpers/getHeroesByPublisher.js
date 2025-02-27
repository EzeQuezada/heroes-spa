import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const vaLidPublisher = ["DC Comics", "Marvel Comics"];
  if (!vaLidPublisher.includes(publisher)) {
    throw new Error(`${publisher}is not a valid publisher`);
    
  }

  return heroes.filter(heroe=>heroe.publisher === publisher)
}
