import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useTheme } from "@mui/material/styles";

const cards = [
  {
    place: "Bromo",
    price: "Rp 1.200.000",
    time: "3 Days Trip",
    image:
      "https://images.unsplash.com/photo-1587651687979-77cf05d1b841?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Labuan Bajo",
    price: "Rp 5.000.000",
    time: "7 Days Trip",
    image:
      "https://images.unsplash.com/photo-1623916729476-03c4eda4ce2b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Malioboro",
    price: "Rp 1.000.000",
    time: "3 Days Trip",
    image:
      "https://images.unsplash.com/photo-1631002164998-d2eac6f83fea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TopSelling() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

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
        paddingBottom: { xs: 60, md: 2 },
        marginBottom: { xs: 60, md: 2 },
        paddingTop: { xs: 60, md: 0.1 },
        marginTop: { xs: 45, md: 0.1 },
        paddingX: { xs: 10, md: 0 },
      }}
    >
      <Box
        id="topselling"
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
          Top Selling
        </Typography>
        <Typography variant="h2" gutterBottom>
          Top Destination
        </Typography>
      </Box>
      <Box width="100%">
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card
                sx={{
                  height: 370, // Atur tinggi kartu sesuai kebutuhan
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow:
                      "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    margin: 0,
                    padding: 0,
                    height: 300,
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  image={card.image}
                  place={card.place}
                />
                <CardContent
                  sx={{
                    padding: 1,
                    margin: 0,
                    flexDirection: "column",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: isDarkMode ? "gray[900]" : "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      textAlign: "start",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {card.place}
                    </Typography>
                    <Typography variant="body2">{card.price}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      textAlign: "start",
                      mt: 1, // Margin top untuk memberi jarak antara dua Box
                    }}
                  >
                    <NearMeIcon sx={{ fontSize: 15, mr: 0.5 }} />
                    <Typography variant="body2">{card.time}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
