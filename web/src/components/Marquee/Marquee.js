import { useEffect, useState } from 'react'

const Marquee = () => {
  const [articles, setArticles] = useState()

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = () => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?token=d2fdc6b85ca756dab460f983273a3e8b&lang=en`
    )
      .then((response) => response.json())
      .then((json) => setArticles(json.articles))
  }
  return (
    <div className="marquee fixed bottom-0">
      {!articles && (
        <p className="marquee__item text-2xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores magnam placeat cum, totam, nostrum ipsum at voluptate, amet eum impedit quas. Labore maxime et fugiat officia nulla. Aliquam, esse.
          {/* {articles.map((x) => x.title + ' ' + x.description + ' |||||||||||| ')} */}
        </p>
      )}
    </div>
  )
}

export default Marquee
