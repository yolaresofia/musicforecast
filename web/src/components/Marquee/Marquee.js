import { useEffect, useState } from 'react'

const Marquee = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = () => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?token=a3ded48ed315b33cd348bc7f8fcbf1e9&lang=en`
    )
      .then((response) => response.json())
      .then((json) => setArticles(json.articles))
  }
  return (
    <div className="marquee fixed bottom-0">
      {articles && (
        <p className="marquee__item text-2xl">
          {articles.map((x) => x.title + ' ' + x.description + ' |||||||||||| ')}
        </p>
      )}
    </div>
  )
}

export default Marquee
