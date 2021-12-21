import { useEffect, useState } from "react";
import axios from "axios";



var NewsFeed = () => {
  const [article, setArticle] = useState(null);

    useEffect(() => {
      
    var options = {
    method: 'GET',
    url: 'http://localhost:8000/news'
    
  };

  axios.request(options).then( (response) => {
	  console.log(response.data);
    setArticle(response.data);
}).catch((error) => {
	console.error(error);
});
      
    }, [])

    console.log(article);

    const first = article?.slice(0,7);

    return (
      <div className='news-feed'>
        <h2>News Feed </h2>
        {first?.map((article, _index) => (
        <div key = {_index}>
          <a href={article.url}><p>{article.title}</p></a>
          </div>))}

      </div>
    );
  }
  
  export default NewsFeed;