import { Box, Grid, Container, Typography, Button } from "@mui/material";
import product_1 from "../../assets/product-1.png";
import product_2 from "../../assets/product-2.png";
import product_3 from "../../assets/product-3.png";

export default function CraftedCollection() {
  const products = [
    { id: 1, name: "Nordic Chair", price: "$50.00", img: product_1 },
    { id: 2, name: "Kruzo Aero Chair", price: "$78.00", img: product_2 },
    { id: 3, name: "Ergonomic Chair", price: "$43.00", img: product_3 },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#EFF2F1",
        py: { xs: 8, md: 12 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="flex-start">
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h4"
              sx={{
                color: "#2f2f2f",
                fontWeight: "600",
                mb: 3,
                fontSize: { xs: "1.75rem", md: "2rem" },
                lineHeight: 1.2,
              }}
            >
              Crafted with <br /> excellent material.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#6a6a6a",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: "300px",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#2f2f2f",
                color: "#fff",
                borderRadius: "30px",
                px: 4,
                py: 1.2,
                fontWeight: "600",
                textTransform: "none",
                "&:hover": { bgcolor: "#222" },
              }}
            >
              Explore
            </Button>
          </Grid>

          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Box
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  transition: "all 0.3s ease",
                  "&:hover img": { transform: "translateY(-20px)" },
                  "&:hover::before": {
                    content: '""',
                    position: "absolute",
                    bottom: "10%",
                    left: 0,
                    right: 0,
                    height: "70%",
                    bgcolor: "#dce2e0",
                    borderRadius: "20px",
                    zIndex: -1,
                  },
                  position: "relative",
                  pb: 4,
                  px: 2,
                }}
              >
                {/* Product Image */}
                <Box
                  component="img"
                  src={product.img}
                  alt={product.name}
                  sx={{
                    // width: "100%",
                    width: "250px",
                    height: "auto",
                    objectFit: "contain",
                    mx: "auto",
                    mb: 3,
                    transition: "transform 0.3s ease-in-out",
                    zIndex: 2,
                    position: "relative",
                  }}
                />

                {/* Product Info */}
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", color: "#2f2f2f", mb: 0.5 }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '18px' ,fontWeight: "800", color: "#2f2f2f" }}
                >
                  {product.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
