/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useEffect } from 'react';
import { checkRating, submitRating } from '../../api/ApiResult';
import { Couter } from '../../Context/counter';
import { useSnackbar } from "notistack";
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

export default function HoverRating({Id}) {
  const { enqueueSnackbar } = useSnackbar();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(2);
  const {checkUser}= React.useContext(Couter);
 //console.log("danhgia" :value)
 //truyền SpId, userId -> database -> check xem đã mua hàng chưa( check số dòng) - >  Nếu chưa mua thì thôi, còn mua rồi thì truyền  rating, SpID,userId database
     //react-hooks/exhaustive-deps
useEffect( ()=>{
  async function Fetch(){
    const data = {
      Id,
      User:checkUser
    } ;
   console.log(data)
      const res = await checkRating(data);
      console.log(res)
      if (res===true) {
        localStorage.setItem('rating', res)// có hóa đơn
      }
      else {
        localStorage.setItem('rating', res)// chưa có hoa đơn
      }

     
    
}
Fetch();

},[])
  
  const [hover, setHover] = React.useState(-1);
  const OnChange= async(e)=>{
    
    if (localStorage.getItem("rating") ==='false')
    {
      enqueueSnackbar("You've not bought this item yet!", { variant: "error" });
      console.log("No rating");
    
    }
    else{
      console.log("Rating")
      enqueueSnackbar("Thank for your feedback!", { variant: "success" });
      
      await submitRating(Id,checkUser,e.target.value);
      localStorage.removeItem("rating");
      
    }
    
  }
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        size="large"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
                   OnChange(event)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
