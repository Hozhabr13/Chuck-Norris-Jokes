import { favoriteType } from "types/favorite"

const favoriteStar = ({ favoriteHandler,id, isActive, ...rest }: favoriteType) => {
    
  return (
    <span className={`favorite-star ${isActive && 'active'}`} onClick={() => favoriteHandler(id)} {...rest}>
      &#9733;
    </span>
  )
}

export default favoriteStar