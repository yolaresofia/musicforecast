import { useEffect, useState } from 'react'

const Marquee = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=33866b5c9f044e8c8c56cbe29297a55f`
    )
      .then((response) => response.json())
      .then((json) => setArticles(json.articles))
  }
  return (
    <div className="marquee">
      {articles && (
        <p className="marquee__item text-2xl">
          {articles.map((x) => x.title + ' ' + x.description + ' |||||||||||| ')}
        </p>
      )}
    </div>
  )
}

export default Marquee
