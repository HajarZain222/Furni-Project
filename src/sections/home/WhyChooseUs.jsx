import { Box, Grid, Container, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SupportIcon from "@mui/icons-material/Support";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import why_choose_us_image from "../../assets/why-choose-us.jpeg";
import dots_yellow from "../../assets/dots-yellow.svg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ color: "#2f2f2f", fontSize: "1.2rem" }} />,
      title: "Fast & Free Shipping",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: <LocalMallIcon sx={{ color: "#2f2f2f", fontSize: "1.2rem" }} />,
      title: "Easy to Shop",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: <SupportIcon sx={{ color: "#2f2f2f", fontSize: "1.2rem" }} />,
      title: "24/7 Support",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      icon: <SyncAltIcon sx={{ color: "#2f2f2f", fontSize: "1.2rem" }} />,
      title: "Hassle Free Returns",
      desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#EFF2F1", py: { xs: 8, md: 15 }, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side: Text & Features */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ color: "#2f2f2f", fontWeight: "600", mb: 2 }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6a6a6a",
                mb: 6,
                maxWidth: "500px",
                lineHeight: 1.8,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            {/* Features Grid */}
            <Grid container spacing={4}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        bgcolor: "rgba(59, 93, 80, 0.15)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="subtitle"
                      sx={{ fontWeight: "600", color: "#2f2f2f", mb: 1 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#6a6a6a",
                        lineHeight: 1.6,
                        display: "block",
                        maxWidth: "300px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Side: Image with Dots */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Dots */}
              <Box
                component="img"
                src={dots_yellow}
                sx={{
                  position: "absolute",
                  top: "-10%",
                  left: "-10%",
                  zIndex: 0,
                  opacity: 0.8,
                  width: 220,
                }}
              />

              {/* Image */}
              <Box
                component="img"
                src={why_choose_us_image}
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
