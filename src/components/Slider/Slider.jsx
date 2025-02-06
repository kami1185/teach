import { imagesEvenLoop } from "../../data/imagesEventLoop"
import ImageSlider from "./ImageSlider"

const Slider = () => {
  return (
    <>
        <ImageSlider images={imagesEvenLoop}/>
    </>
  )
}

export default Slider