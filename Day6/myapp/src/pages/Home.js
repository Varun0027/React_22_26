import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../Assets/Css/Style.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Home = () => {
  const data = [
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    },
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    },
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    },
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    },
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    },
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    },
    {
      img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
      title: 'Title :'
    }
  ]

  console.log(data)

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            {
              data.map((content,index) => (
                < Grid item xs={3} key={index} sx={{my:2}}>
                  <Card sx={{ maxWidth: '100%' }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={content.img}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {content.title}  {index+1}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </div >
    </>
  )
}

export default Home