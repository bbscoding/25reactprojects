import './App.css'
import Accordion from './components/accordion'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import menus from './components/tree-view/data'
import TreeView from './components/tree-view/index'

function App() {

  return (
    <>
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} page={"1"} limit={"10"} /> */}

      {/* Load More Products Component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component / menu UI component / recursive navigation menu  */}
      <TreeView menus={menus} />
    </>
  )
}

export default App
