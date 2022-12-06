import { Box } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SliderImg1 from "../asests/Images/Sliderimg1.jpg";
import SliderImg2 from "../asests/Images/Sliderimg2.jpg";
import SliderImg3 from "../asests/Images/Sliderimg3.jpg";

const images = [
  { url: SliderImg1, caption: "Something" },
  { url: SliderImg2, caption: "Something" },
  { url: SliderImg3, caption: "Something" },
];

const Imageslider = () => {
  return (
    <Box sx={{ marginLeft: "173px" }}>
      <SimpleImageSlider
        width={1722}
        height={820}
        images={images}
        showBullets={true}
        slideDuration={1}
        autoPlay={true}
      />
      {/* <Slide>
        {images.map((item, index) => (
          <Box key={index}>
            <Box sx={{ backgroundImage: `url${item.url}` }}>
              <Typography>{item.caption}</Typography>
            </Box>
          </Box>
        ))}
      </Slide> */}
    </Box>
  );
};

export default Imageslider;
