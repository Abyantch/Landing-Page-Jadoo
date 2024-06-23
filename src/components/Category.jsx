import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia  from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';



const cards =[
  {
    tittle:"Calculated Weather",
    description:"Buil wicket longer admire do barton vanity itself do in it",
    image:"/Group 48.png"
  },
  {
    tittle:"Best Flights",
    description:"Engrossed Listening. Park Gate sell they west hard for the.",
    image:"/Group 51.png"
  },
  {
    tittle:"Local Events",
    description:"Barton vanity itself do in it. Prefered to men it engrossed listening",
    image:"/Group 50.png"
  },
  {
    tittle:"Customization",
    description:"We deliver outsourced aviation services for military customers",
    image:"/Group 49.png"
  },


]


export default function Category() {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      marginX={1}
      sx={{
        backgroundColor: "#fffff",
        paddingBottom: { xs: 8, md: 12 },
        marginBottom: { xs: 8, md: 12 },
        paddingTop: {xs:8, md:8},
      }}
    >
      <Box
        id='category'
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={0}
        mt={0}
        sx={{
          borderRadius: { xs: 5, md: 10 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h6" paragraph>
          Category
        </Typography>
        <Typography variant="h2" gutterBottom>
          We Offer Best Service
        </Typography>
      </Box>
      <Box 
      width="100%"
      p={2}
      px={10}
      my={5}
      >
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card   
              sx={{
              boxShadow:'0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
              height: 300, // Atur tinggi kartu sesuai kebutuhan
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              }}>
                <CardMedia component='image'
                sx={{ 
                  marginTop:0,
                  paddingTop:0,
                  height: 300,
                  width:'100%',
                  objectFit:'contain',
                  objectPosition:'center',
                  transform: 'scale(0.4)'
                }}
                image={card.image}
                title={card.tittle}
                />
                <CardContent
                sx={{
                  padding:3,
                  margin:0,
                  marginTop:-10,
                  flexDirection:'column',
                  display:'flex', 
                  textAlign:'center',
                  alignItems:'center',
                  justifyContent:'center',
                  width:'100%'
                }}> 
                  <Typography variant="h5" component="div" sx={{ width:'100%'}}>
                    {card.tittle}
                  </Typography>
                  <Typography variant="body2">
                    {card.description}.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
