import { render } from '@testing-library/react';
import FavoriteStar from './index';

describe('FavoriteStar', () => {

  it('Check has favorite class when isActive is true', () => {
    const { container } = render(
      <FavoriteStar isActive = {true} />
    );

    const favoriteStar = container.querySelector('.favorite-star');
    expect(favoriteStar).toHaveClass('active');
  });

  it('Check has not favorite class when isActive is false', () => {
    const { container } = render(
      <FavoriteStar isActive={false} />
    );

    const favoriteStar = container.querySelector('.favorite-star');
    expect(favoriteStar).not.toHaveClass('active');
  });
});
