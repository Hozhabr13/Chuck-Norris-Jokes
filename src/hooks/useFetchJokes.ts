import { useDispatch, useSelector } from 'react-redux';
import { getChuckNorrisJokes } from 'store/ChuckNorrisJokes';
import { ThunkDispatchType } from 'types/thunkDispatch';

const useFetchJokes = () => {
  const dispatch: ThunkDispatchType = useDispatch()
  /**
     Since Chuck Norris Api does not support https://api.chucknorris.io/jokes/search?query=10 structure to get 10 item in one request so I had to call this  times
    **/
  const fetchJokesByApi = async(count: number) => {            
    for(let i =1; i<=count; i++) {
      await dispatch(getChuckNorrisJokes())
    }    
  }
  const jokes = useSelector((state: any) => state.ChuckNorrisJokes.data)
    
  return {jokes, fetchJokesByApi}
}
export default useFetchJokes