import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const initialTestimonials = [
  {
    name: "Yusuf Muhammad",
    occupation: "Designer",
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    name: "Mukhlis",
    occupation: "Lead Product Designer",
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    name: "Cweto",
    occupation: "CTO",
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = React.useState(initialTestimonials);

  const [newTestimonial, setNewTestimonial] = React.useState({
    name: "",
    occupation: "",
    testimonial: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTestimonial = () => {
    setTestimonials((prev) => [
      ...prev,
      {
        avatar: (
          <Avatar alt={newTestimonial.name} src={newTestimonial.avatar} />
        ),
        ...newTestimonial,
      },
    ]);
    setNewTestimonial({ name: "", occupation: "", testimonial: "" });
  };

  return (
    <Container
      sx={{
        pt: { xs: 100, sm: 150, md: 8 },
        pb: { xs: 4, sm: 8 },
        mx: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        id="testimonials"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h2" sx={{ color: "text.primary" }}>
          Testimonials
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", sm: "50%" },
          mb: 4,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          value={newTestimonial.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Occupation"
          name="occupation"
          value={newTestimonial.occupation}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Testimonial"
          name="testimonial"
          value={newTestimonial.testimonial}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
          sx={{ height: "100px" }}
        />
        <Button variant="contained" onClick={handleAddTestimonial}>
          Add Testimonial
        </Button>
      </Box>
      <Grid container spacing={2}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
