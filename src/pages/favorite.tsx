import { useState } from "react";
import JokesList from "components/jokeList"
import { JokeListType } from "types/jokeList";

const Favorites = () => {
  const [favoriteJokes, setfavoriteJokes] = useState<JokeListType[]>([]);

  return (
    <>
      <JokesList jokes={favoriteJokes} data-testid="jokes-list" syncFavoritePage={(data: JokeListType[]) => setfavoriteJokes(data)} fallbackText="There is no favorite joke!" />
    </>
  )
}

export default Favorites