import React from "react"
import { useMediaQuery, Grid } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/joy/Typography"
import Zoom from "@mui/material/Zoom"

import Promotional from "./Promotional"

// https://source.unsplash.com/XyONj_Aq-rg

// https://unsplash.com/photos/RGxEXgEym5U
export default function PromotionalFull() {
  const isMobile = useMediaQuery("(max-width:600px)")
  const [checked, setChecked] = React.useState(true)

  return (
    <div className="promotional-full-container">
      <div className="container">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Promotional pageHeaderBgImg="" pageHeaderMinVh="50vh" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="row justify-content-center">
              <img
                src="https://source.unsplash.com/RGxEXgEym5U"
                alt="Promotional"
                style={{ width: "100%", height: "100%" }}
              />

              <Box sx={{ display: "flex" }}>
                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "500ms" : "0ms" }}
                >
                  <Typography
                    fontSize="48px"
                    borderRadius=""
                    px={0.5}
                    mr={0.5}
                    sx={theme => ({
                      ...theme.variants.soft.danger,
                      color: "success.400",
                      verticalAlign: "text-top"
                    })}
                  >
                    Find the car you need!
                  </Typography>
                </Zoom>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}