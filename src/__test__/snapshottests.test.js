import { render } from '@testing-library/react';
import Home from '../components/home';
import MyQuotation from '../components/Quotation/quotes';

describe('Snapshot for Calculator and Home', () => {
  it('Snapshot should match component render', () => {
    const homepage = render(<Home />);
    expect(homepage).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const quoterender = render(<MyQuotation />);
    expect(quoterender).toMatchSnapshot();
  });
});