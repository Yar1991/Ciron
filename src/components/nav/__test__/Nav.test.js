import { render, screen } from '@testing-library/react';
import Nav from '../Nav';


test('renders a logo', async ()=> {

  render(<Nav/>);
  const logo = await screen.findByText(/ciron/i);
  expect(logo).toBeInTheDocument();

});

