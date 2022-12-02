import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Couter} from '../../Context/counter'
import {getRating} from '../../api/paymentApi'
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


export default function TextRating({id}){
  const value = 0;
  
  const [listRating,setListRating] =useState([])

      //react-hooks/exhaustive-deps
  useEffect( () => {
    async function Fetch(){

      const Rate = await getRating(id); 
    if(Rate){
       console.log(Rate[0]?.rt)
       setListRating(Rate[0]?.rt);
    }
     

  }
  Fetch();
    
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value = {listRating||0}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
