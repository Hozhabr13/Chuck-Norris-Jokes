import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import JokesList from './index';
import { JokeListType } from 'types/jokeList';
import { BrowserRouter } from 'react-router-dom';
import { JokesCountEnum } from 'constants/enums';

// Mock the required props
const mockJokes: JokeListType[] = [
  { id: '1', value: 'Joke 1', url: 'https://api.chucknorris.io/jokes1', find: () => JokesList },
  { id: '2', value: 'Joke 2', url: 'https://api.chucknorris.io/jokes2', find: () => JokesList },
];
const syncFavoritePageMock = jest.fn();
const fallbackText = 'No jokes found';

describe('JokesList', () => {
  test('renders the list of jokes', async () => {
    waitFor(() => {
    // Check if the jokes are rendered
    const jokeElements = screen.getAllByRole('link');
    expect(jokeElements).toHaveLength(mockJokes.length);

    // Check if the fallback text is not rendered
    const fallbackElement = screen.queryByText(fallbackText);
      expect(fallbackElement).not.toBeInTheDocument();
    })
  });

  test('calls syncFavoritePage when favorites change', async () => {
    <BrowserRouter>
      render(<JokesList jokes={mockJokes} />);
    </BrowserRouter>

    // Simulate favorite button click
    waitFor(() => {
      const favoriteButton = screen.getAllByTestId('favorite-joke-item')[0] as HTMLElement
      fireEvent.click(favoriteButton)

      // Check if syncFavoritePage is called with the updated favorites
      expect(syncFavoritePageMock).toHaveBeenCalledWith([mockJokes[0]]);
    })
  });

  test('displays fallback text when no jokes are present', () => {
    // Rerender the component with empty jokes array
    render(<JokesList jokes={[]} fallbackText={fallbackText} />);

    // Check if the fallback text is rendered
    const fallbackElement = screen.getByText(fallbackText);
    expect(fallbackElement).toBeInTheDocument();
  });

  test(`limits favorite joke list length to 10 ${JokesCountEnum.MAX_COUNT}`, async () => {
    // Render the component with mock jokes
    <BrowserRouter>
      render(<JokesList jokes={mockJokes} />);
    </BrowserRouter>
  
    waitFor(() => {
      // Find the favorite star elements for all jokes
      const favoriteStarElements = screen.getAllByTestId('favorite-star') as any
    
      // Click on the favorite star elements to mark jokes as favorites
      for (let i = 1; i <= JokesCountEnum.MAX_COUNT; i++) {
        fireEvent.click(favoriteStarElements[i])
      }
    
      // Find the alert element
      const alertElement = screen.getByRole('alert');
    
      // Assert that the alert message is displayed
      expect(alertElement).toHaveTextContent('favorite list is full');
    
      // Assert that only 10 jokes are in the favorite list
      const favoriteJokeElements = screen.getAllByTestId('favorite-joke-item');
        expect(favoriteJokeElements.length).toBe(10);
    })
  });
});
