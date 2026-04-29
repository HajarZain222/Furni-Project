import { Box, Grid, Container, Typography, Button } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import dots_green from "../../assets/dots-green.svg";
import image_grid_1 from "../../assets/img-grid-1.jpeg";
import image_grid_2 from "../../assets/img-grid-2.jpeg";
import image_grid_3 from "../../assets/img-grid-3.jpeg";

export default function WhyChooseUs() {
  const features = [
    "Donec vitae odio quis nisl dapibus malesuada",
    "Donec vitae odio quis nisl dapibus malesuada",
    "Donec vitae odio quis nisl dapibus malesuada",
    "Donec vitae odio quis nisl dapibus malesuada",
  ];

  return (
    <Box sx={{ bgcolor: "#EFF2F1", py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        {/* 7 / 5 SPLIT */}
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
          {/* LEFT - IMAGES (7) */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: { xs: "flex", md: "grid" },
                flexDirection: { xs: "column" },
                gridTemplateColumns: "3fr 1fr",
                gridTemplateRows: "260px 260px",
                gap: 2,
                position: "relative",
                height: { md: "520px" },
              }}
            >
              {/* dots decoration */}
              <Box
                component="img"
                src={dots_green}
                sx={{
                  position: "absolute",
                  top: -60,
                  left: -60,
                  width: 220,
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />

              {/* BIG IMAGE */}
              <Box
                component="img"
                src={image_grid_1}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 4,
                  gridColumn: "1 / 2",
                  gridRow: "1 / 3",
                  zIndex: 1,
                }}
              />

              {/* TOP RIGHT */}
              <Box
                component="img"
                src={image_grid_2}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 4,
                  gridColumn: "2 / 3",
                  gridRow: "1 / 2",
                  zIndex: 1,
                }}
              />

              {/* BOTTOM RIGHT */}
              <Box
                component="img"
                src={image_grid_3}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 4,
                  gridColumn: "2 / 3",
                  gridRow: "2 / 3",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT - TEXT (5) */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              sx={{ color: "#2f2f2f", fontWeight: 600, mb: 3 }}
            >
              We Help You Make Modern <br /> Interior Design
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#6a6a6a",
                mb: 4,
                lineHeight: 1.8,
                maxWidth: "450px",
              }}
            >
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              {features.map((desc, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <PanoramaFishEyeIcon
                      sx={{ color: "#3B5D50", fontSize: "0.7rem", mt: 0.7 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "#6a6a6a", maxWidth: "200px" }}
                    >
                      {desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#2f2f2f",
                borderRadius: "30px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                "&:hover": { bgcolor: "#1a1a1a" },
              }}
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
