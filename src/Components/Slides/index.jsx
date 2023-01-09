import React from "react";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import '../../Assets/Styles/Slide.scss'



const index = () => {
  return (
    <div className="slide-show">
      <Slide arrows={false} duration={3000}>
        <div className="each-slide">
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/05151017-652b-42fc-a337-16161959f193.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/75b0a89c-f291-46f9-b271-b1a9796b12ed.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/e6b1bfc1-6be1-400d-a620-7489dc089279.png" />
        </div>
        <div className="each-slide">
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/05151017-652b-42fc-a337-16161959f193.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/2614a10a-bd2b-4066-9a9b-9f389cbe815b.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/f5aee4ab-e978-4714-bcde-0ebca9808d48.png" />
        </div>
        <div className="each-slide">
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/05151017-652b-42fc-a337-16161959f193.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/f5aee4ab-e978-4714-bcde-0ebca9808d48.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/12c273ea-d05b-4ac3-8e6e-3dd6594725e2.png" />

        </div>

        <div className="each-slide">
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/05151017-652b-42fc-a337-16161959f193.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/75b0a89c-f291-46f9-b271-b1a9796b12ed.png" />
          <img src="https://ik.imagekit.io/curefoods/tr:w-622,ar-480:200//image/vm/12c273ea-d05b-4ac3-8e6e-3dd6594725e2.png" />

        </div>
      </Slide>








    </div>
  )
}

export default index

