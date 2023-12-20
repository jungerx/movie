import React from 'react'
import MovieRows from './MovieRows'
const movies=[
    "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
  "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
  "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
  "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
  "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
  "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
  "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
  "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
  "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
 ];

function Content(props) {
  return (
    <div>
        <MovieRows movies={movies} title="NetFlix Originals" isNetflix={true}/>
        <MovieRows movies={movies} title="Trending Movies"/>
        <MovieRows movies={movies} title="Top Rate Movies"/>
        <MovieRows movies={movies} title="Actions Movies"/>
        <MovieRows movies={movies} title="Comedy Movies"/>
        <MovieRows movies={movies} title="Horror Movies"/>
        <MovieRows movies={movies} title="Romance Movies"/>
        <MovieRows movies={movies} title="Documentaries Movies"/>
        
    </div>
  )
}

export default Content