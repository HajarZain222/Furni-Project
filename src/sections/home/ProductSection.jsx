import { Box, Grid, Container, Typography, Link } from "@mui/material";
import product_1 from "../../assets/product-1.png"; 
import product_2 from "../../assets/product-2.png";
import product_3 from "../../assets/product-3.png";

export default function ProductSection() {
  const products = [
    { title: "Nordic Chair", img: product_1 },
    { title: "Kruzo Aero Chair", img: product_2 },
    { title: "Ergonomic Chair", img: product_3 },
  ];

  return (
    <Box sx={{ bgcolor: "#EFF2F1", py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                
                <Box
                  sx={{
                    position: "relative",
                    width: "120px",
                    height: "120px",
                    flexShrink: 0,
                    bgcolor: "#dce2e0", 
                    borderRadius: "20px", 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "visible",
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: "100px",
                      height: "auto",
                      zIndex: 1,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600", color: "#2f2f2f", mb: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#6a6a6a", mb: 1, lineHeight: 1.5, maxWidth: "220px" }}
                  >
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                  </Typography>
                  <Link
                    href="#"
                    sx={{
                      color: "#2f2f2f",
                      fontWeight: "600",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      "&:hover": { color: "#3b5d50" },
                    }}
                  >
                    Read More
                  </Link>
                </Box>

              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}