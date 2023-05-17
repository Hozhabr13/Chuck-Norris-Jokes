import { JokesCountEnum, StorageKey } from "constants/enums"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { JokeListType } from "types/jokeList"
import FavoriteStar from "../favoriteStar"
import '../../assets/styles.scss'

const JokesList = ({ jokes, syncFavoritePage, fallbackText }: { jokes: JokeListType[], syncFavoritePage?: (data: JokeListType[]) => void, fallbackText?: string }) => {
    const [favorites, setfavorite] = useState<JokeListType[]>([])

    /**
     * Fetching jokes from persistence data source, here is localstorage
     */
    useEffect(() => {
        initiateData()
    }, [])

    /**
     * Sync current favorites jokes with localstorage after each change
     */
    useEffect(() => {        
        saveToStorage(favorites)
        syncFavoritePage && syncFavoritePage(favorites) 
    }, [favorites])

    /**
     * initiate data by fetching data from storage and set that to local data as initiate state
     */
    const initiateData = ()=> {
        const favoritesStorage = localStorage.getItem(StorageKey.JOKES)
        let concatedfavoriteStorage: JokeListType[] = []
        if(favoritesStorage !== null) {
            concatedfavoriteStorage = [...JSON.parse(favoritesStorage) , ...favorites]
        } else {
            concatedfavoriteStorage = [...favorites]
        }        
        
        setfavorite((prevValue: JokeListType[]) => [...prevValue, ...concatedfavoriteStorage])
        saveToStorage(concatedfavoriteStorage)
    }

    /**
     * save to storage to make this as persistence data
     * @param favoriteItems 
     */
    const saveToStorage = (favoriteItems: JokeListType[]) => {
        localStorage.setItem(StorageKey.JOKES, JSON.stringify(favoriteItems))
    }

    /**
     * Find favorite jokes info by id in jokes list to set that as a favorite item 
     * @param id 
     */
    const favoriteHandler = (id: string) => {
        if (!hasfavorite(id)) {
            if (favorites.length === JokesCountEnum.MAX_COUNT) {
                alert(`favorite list is full, The max is ${JokesCountEnum.MAX_COUNT}`)
            } else {
                const desiredJoke = jokes?.find((item: JokeListType) => item.id === id)           
                desiredJoke && setfavorite((prevState: JokeListType[]) => [...prevState, desiredJoke])
            }
            
        } else{
            setfavorite((prevState: JokeListType[]) => prevState.filter((item: JokeListType) => item.id !==id)) 
        }
    }

    /**
     * check has favorite or not
     * @param id
     * @returns boolean
     */
    const hasfavorite = (id: string): boolean => {        
        return favorites.some((item: JokeListType) => item.id === id);
    }

    return (
        <div className="list-wrapper">
            {jokes.length ? jokes.map((joke: JokeListType, index: number) => {
                const {id, value, url} = joke;
                return (
                <div key={'favorite' + id + index}  className="list-wrapper__item">
                <div className="list-wrapper__favorite-icon" data-testid="favorite-joke-item">
                        <FavoriteStar id={id} favoriteHandler={(jokeID: string) => favoriteHandler(jokeID)} isActive={hasfavorite(id)} />
                </div>
                <Link to={url} target="_blank">
                    <h5>
                        {value}
                    </h5>
                </Link>
                </div>
                )
            }) : 
            (
                <div className="list-fallback">
                    {fallbackText}
                </div>
            )
                
}
        </div>
    )
}

export default JokesList