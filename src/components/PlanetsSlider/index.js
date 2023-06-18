import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log(props)
  return (
    <div className="app-container" data-testid="planets">
      <h1 className="container-heading">PLANETS</h1>
      <Slider className="slider" {...settings}>
        {planetsList.map(planet => (
          <PlanetItem key={planet.id} planet={planet} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetSlider
