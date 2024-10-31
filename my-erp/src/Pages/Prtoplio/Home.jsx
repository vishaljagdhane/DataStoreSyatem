import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import AI_1 from '../../Asset/AI_1.png';
import Ai_2 from '../../Asset/Ai_2.png';
import Sap_1 from '../../Asset/Sap_1.png';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const images = [AI_1, Ai_2, Sap_1];

  return (
    <Box sx={{ width: '100%', height: '400px', overflow: 'hidden' ,mt:2}}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} sx={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        ))}
      </Slider>
      <Container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <Typography variant="h4">Welcome to Our Company</Typography>
        <Typography variant="body1">Your success is our mission.</Typography>
      </Container>
    </Box>
  );
};

export default Home;
