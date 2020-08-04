import Slider from './node_modules/react-animated-slider';
import './node_modules/react-animated-slider/build/horizontal.css';
 
const slides = [
  { title: 'First item', description: 'Lorem ipsum'}
  { title: 'Second item', description: 'Lorem ipsum'}
];
 
<Slider>
  {slides.map((slide, index) => <div key={index}>
    <h2>{slide.title}</h2>
    <div>{slide.description}</div>
  </div>)}
</Slider>