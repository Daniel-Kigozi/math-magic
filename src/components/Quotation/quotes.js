import { useState, useEffect } from 'react';
import './quote.css';

const MyQuotation = () => {
  const [myQuotation, setMyQuotation] = useState('');
  const [authorOfquote, setAuthorOfquote] = useState('');
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
      } catch (error) {
        setQuoteError('');
      }
    };
    setTimeout(() => {
      fetchQuotes();
    }, 2000);
  }, []);
  return (
    <>
      <center>
        <div className="myQuotation">
          <p className="quotes">{myQuotation}</p>
          <p className="authorQuotes">{authorOfquote}</p>
          {quoteError && <p className="error">{quoteError}</p>}
        </div>
      </center>
    </>
  );
};
export default MyQuotation;
