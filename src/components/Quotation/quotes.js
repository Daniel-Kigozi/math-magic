import { useState, useEffect } from 'react';
import Image from './Loading.gif';
import './quote.css';

const MyQuotation = () => {
  const [myQuotation, setMyQuotation] = useState('');
  const [authorOfquote, setAuthorOfquote] = useState('');
  const [quoteLoading, setLoadingQuote] = useState(true);
  const [quoteError, setQuoteError] = useState('');
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': '7TnMGWTJ/v4mF6ldXBpdeQ==eOfKZOCEaday2H3l',
            },
          },
        );
        const data = await response.json();
        setMyQuotation(data[0].quote);
        setAuthorOfquote(data[0].author);
        setLoadingQuote(false);
      } catch (error) {
        setQuoteError('');
      }
    };
    setTimeout(() => {
      fetchQuotes();
    }, 1000);
  }, []);
  return (
    <>
      <center>
        <div className="myQuotation">
          {quoteLoading && <img src={Image} alt="Loading..." className="images" />}
          <p className="quotes">{myQuotation}</p>
          <p className="authorQuotes">{authorOfquote}</p>
          {quoteError && <p className="error">{quoteError}</p>}
        </div>
      </center>
    </>
  );
};
export default MyQuotation;
