import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import AI_1 from '../../Asset/AI_1.png';
import Ai_2 from '../../Asset/Ai_2.png';
import Sap_1 from '../../Asset/Sap_1.png';
const users = [
    { id: 1, name: 'Alice Johnson', education: 'B.Sc. Computer Science', experience: '5 years in software development', img: AI_1 },
    { id: 2, name: 'Bob Smith', education: 'M.Sc. Information Technology', experience: '3 years in web development', img: Ai_2 },
    { id: 3, name: 'Charlie Brown', education: 'B.E. Mechanical Engineering', experience: '4 years in product design', img: Sap_1 },
    { id: 4, name: 'Diana Prince', education: 'B.A. in Graphic Design', experience: '6 years in digital marketing', img: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Ethan Hunt', education: 'M.Sc. Data Science', experience: '2 years in data analysis', img: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Fiona Apple', education: 'B.A. in English Literature', experience: '4 years in content writing', img: 'https://via.placeholder.com/150' },
    { id: 7, name: 'George Lucas', education: 'BFA in Film Production', experience: '5 years in video editing', img: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Hannah Montana', education: 'B.Com. Business Management', experience: '3 years in sales', img: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Irene Adler', education: 'M.A. in Sociology', experience: '4 years in community outreach', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Jack Sparrow', education: 'B.S. in Marine Biology', experience: '2 years in marine research', img: 'https://via.placeholder.com/150' },
  ];
  

const About = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const nextSlide = () => {
    if (currentStartIndex < users.length - 4) {
      setCurrentStartIndex(currentStartIndex + 4);
    }
  };

  const prevSlide = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - 4);
    }
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '1000px', gap: 2 }}>
        {users.slice(currentStartIndex, currentStartIndex + 4).map(user => (
          <Card key={user.id} sx={{ width: '200px', transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 3 } }}>
            <CardMedia component="img" height="140" image={user.img} alt={user.name} />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2">Education: {user.education}</Typography>
              <Typography variant="body2">Experience: {user.experience}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: -20}}>
        <IconButton onClick={prevSlide} disabled={currentStartIndex === 0}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={nextSlide} disabled={currentStartIndex >= users.length - 5}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default About;
