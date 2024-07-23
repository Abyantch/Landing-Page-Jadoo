import React from 'react';
import Image1 from "../assets/Image.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faHotel, faPassport } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";

export default function EasyandFast() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      id="easyandfast"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      paddingX={{ xs: 7, sm: 5, md: 20 }}
      sx={{
        backgroundColor: isDarkMode ? "#000000" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        marginBottom: { xs: 8, md: 12 },
        paddingBottom: { xs: 8, md: 12 },
        paddingTop: { xs: 60, md: 5 },
        marginTop: { xs: 60, md: 5 },
      }}
    >
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Typography variant="h6" paragraph>
            Easy and Fast
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 36 } }} gutterBottom>
            Book Your Next Trip <br />
            In 3 Easy Steps
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                icon: faPlane,
                title: "Choose Destination",
                description: "Find the perfect destination for your next adventure.",
                color: 'blue'
              },
              {
                icon: faHotel,
                title: "Select Date",
                description: "Choose your travel dates to match your schedule.",
                color: 'red'
              },
              {
                icon: faPassport,
                title: "Book and Enjoy",
                description: "Complete your booking and get ready for the trip.",
                color: 'orange'
              },
            ].map((step, index) => (
              <Grid item xs={12} key={index}>
                <Box display="flex" alignItems="center">
                  <FontAwesomeIcon
                    icon={step.icon}
                    size="2x"
                    style={{ marginRight: 16, color: step.color }}
                  />
                  <Box>
                    <Typography variant="h6" component="div">
                      {step.title}
                    </Typography>
                    <Typography variant="body2">{step.description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Card
            sx={{
              boxShadow: "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
              marginBottom: { xs: 4, md: 0 },
            }}
          >
            <CardMedia
              component="img"
              alt="Trip Image"
              height="auto"
              image={Image1}
              title="Trip Image"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
