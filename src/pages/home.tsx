import { useEffect, useRef } from 'react'
import JokesList from 'components/jokeList';
import { JokesCountEnum, Time } from 'constants/enums';
import useFetchJokes from 'hooks/useFetchJokes'
import Counter from 'components/counter';

const Home = () => {
  const { jokes, fetchJokesByApi } = useFetchJokes();
  const effectController = useRef(false)

  /**
   * Initiate fetching jokes by JokesCountEnum.INITIATION count
  */
  useEffect(() => {
    if (!effectController.current) {
      fetchJokesByApi(JokesCountEnum.INITIATION)
      
      return () => {
        effectController.current = true
      }
    }
    
  }, [])

  /**
   * Fetch new joke after finishing counter by JokesCountEnum.NORMAL count 
   */
  const timeIsFinished = (): void => {    
    fetchJokesByApi(JokesCountEnum.NORMAL)
  }

  return (
    <>
      <Counter time={Time.FETCHING_JOKE_INTERVAL} timeIsFinished={timeIsFinished} />
      <JokesList jokes={jokes} data-testid="jokes-list" />
    </>
  )
}

export default Home
