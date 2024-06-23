import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/traveler1.png'
import Bg from '../assets/bg.png'
import Airplane from '../assets/plane.png'

export default function Hero() {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginX={1}
      sx={{ 
        backgroundColor: '#fffff', 
        paddingBottom:{xs:8, md:12},
        paddingTop:{xs:12, md:16},
        marginBottom:{xs:8, md:12}, 
        marginTop:{xs:20, md:0}

      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth="90%"
        height="auto"
        p={2}
        my={5}       
        sx={{
          borderRadius: '20px', 
          boxShadow:'0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
          backgroundImage: `url(${Bg})`, // Menambahkan gambar latar belakang
          backgroundSize: 'cover', // Mengatur ukuran gambar latar belakang
          backgroundPosition: 'center', // Mengatur posisi gambar latar belakang
          backgroundRepeat:'no-repeat',
          width:'auto',
          height:'auto',
          flexDirection:{xs:'column', md:'row'},
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={7}
          sx={{ 
            borderRadius: {xs:5, md:10},      
            order:{xs:2, md:1},
            textAlign:{xs:'center', md:'left'}    
          }}
        >
          <Typography variant="h2" gutterBottom>
            Travel, enjoy and live a new and full life.
          </Typography>
          <Typography variant="h6" paragraph>
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.          </Typography>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={() => scrollToSection('features')}
          sx={{
            p:{sm:1, md:2},
            alignItems:'flex'
        }}>
            Find Out More
          </Button>
        </Box>
        <Box
          component="img"
          src={Logo}
          alt="Hero Image"
          sx={{ 
            maxWidth:  {xs:'80%', md:'35%'}, 
            height: 'auto', 
            borderRadius: '8px', 
            order:{xs:1, md:2},
            mb:{xs:4, md:0}, 
            transition:'transform 0.3s ease-in-out',
            '&:hover':{
              transform:'scale(1.2)',
            }
          }}
        />
        <Box
        component='img'
        src={Airplane}
        alt='Airplane'
        sx={{
          position:'absolute',
          right:{xs:'70%', md:'30%'},
          top:{xs:'20%', md:'30%'},
          width:{xs:'50px', md:'100px'},
          transform:'rotate(10deg)',
        }}
        />
      </Box>
    </Box>
  );
}
