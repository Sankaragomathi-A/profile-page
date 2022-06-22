import React from "react";
import { styled } from "@mui/material/styles";
import img from "./boy.jpg";
import {
  Grid,
  Typography,
  Box,
  Link,
  Button,
  TextareaAutosize,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Profile() {
  return (
    <Grid container spacing={1}>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" component="h2">
          Profile
        </Typography>
        <Typography style={{ paddingBottom: "2rem" }}>
          Update your photo and personal details here.
        </Typography>
      </Grid>

      <Grid lg={5} md={5} sm={12} xs={12} item style={{ padding: "2rem 0" }}>
        <Typography variant="h6">Username</Typography>
      </Grid>
      <Grid lg={7} md={7} sm={12} xs={12} item style={{ padding: "2rem 0",display:'flex' }}>
        <Box
          style={{
            background: "#FFFFFF",
            border: "1px solid #B0B0B0",
            borderRadius: "12px",
            width: "393px",
            height: "37px",
            display: "flex",

            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              borderRight: "1px solid  #808080",
              padding: "0 1rem",
              color: " #808080",
              fontSize: "18px",
            }}
          >
            creatverse.com
          </Typography>
          <Typography style={{ padding: "0 1rem" }}>arunkumar</Typography>
        </Box>
      </Grid>

      <Grid lg={5} md={5} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <Typography variant="h6">Website</Typography>
      </Grid>
      <Grid lg={7} md={7} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <Box
          style={{
            background: "#FFFFFF",
            border: "1px solid #B0B0B0",
            borderRadius: "12px",
            width: "393px",
            height: "37px",
            display: "flex",

            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              borderRight: "1px solid  #808080",
              padding: "0 1rem",
              color: " #808080",
              fontSize: "18px",
            }}
          >
            http://
          </Typography>
          <Typography style={{ padding: "0 1rem" }}>
            www.arunmusic.com
          </Typography>
        </Box>
      </Grid>

      <Grid lg={5} md={5} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <Typography variant="h6">Your Photo</Typography>
        <Typography>This is will be displayed on your profile</Typography>
      </Grid>
      <Grid lg={7} md={7} sm={12} xs={12} style={{ padding: "1rem 0",display:'flex',justifyContent:'flex-end' }}>
        <Grid  style={{ display: "flex",justifyContent:'space-between',width:'100%',}}>
        
        <Grid  style={{ display: "flex",}}>
          <Grid>
            <img
              src={img}
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "58px",
              }}
            />
          </Grid>
          <Grid>
            <Typography>Arun Kumar</Typography>
            <Link href="#">@arunkumar6654.gmail.com</Link>
          </Grid>
        </Grid>

        <Grid>
        <Button variant="contained">Update Now</Button>
      </Grid>

      </Grid> 
      </Grid>

      {/* <Grid lg={4} md={4} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <Typography variant="h6">Your Photo</Typography>
      </Grid>
      <Grid lg={4} md={4} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <Button variant="contained">Your Photo</Button>
      </Grid> */}

      {/* <Grid lg={4} md={4} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",

            alignItems: "center",
          }}
        >
          <Grid lg={6} md={6}>
            <img
              src={img}
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "58px",
              
              }}
            />
          </Grid>
          <Grid lg={6} md={6}>
            <Typography>Arun Kumar</Typography>
            <Link href="#">@arunkumar6654.gmail.com</Link>
          </Grid>
        </div>
      </Grid>
      <Grid lg={4} md={4} sm={12} xs={12}>
        <Button variant="contained">Update Now</Button>
      </Grid> */}

      <Grid lg={5} md={5} sm={12} xs={12} style={{ paddingTop: "1rem" }}>
        <Typography variant="h6">Your Bio</Typography>
        <Typography>Write a short introduction</Typography>
      </Grid>

      <Grid lg={7} md={7} sm={12} xs={12} style={{ paddingTop: "1rem" }}>
        <Box
          style={{
            background: "#FFFFFF",
            border: "1px solid #B0B0B0",
            borderRadius: "12px",
            width: "205px",
            height: "37px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 0.5rem",
          }}
        >
          <Typography
            variant="h6"
            style={{
              padding: "0 1rem",
              color: " #808080",
              fontSize: "18px",
            }}
          >
            Normal Text
          </Typography>

          <KeyboardArrowDownIcon />
        </Box>
        {/* <TextareaAutosize
          aria-label="minimum height"
          placeholder="I am a freelance photograper& relish capturing moments,emotions and beauty in every little think that surrounds me. "
          style={{
            background: "#FFFFFF",
            border: "1px solid #B0B0B0",
            borderRadius: "12px",
            width: "383px",
            height: "96px",
          }}
        /> */}
        <div style={{ padding: "2rem 0" }}>
          <Box
            style={{
              background: "#FFFFFF",
              border: "1px solid #B0B0B0",
              borderRadius: "12px",
              width: "393px",
              height: "96px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              boxSizing: "border-box",
            }}
          >
            <span style={{ fontSize: "15px", padding: "0 1rem" }}>
              I am a freelance photograper& relish capturing moments,emotions
              and beauty in every little think that surrounds me.
            </span>
          </Box>
          <p style={{ color: "#808080" }}>230 characters left</p>
        </div>
      </Grid>

      <Grid lg={5} md={5} sm={12} xs={12} style={{ paddingTop: "1rem" }}>
        <Typography variant="h6">Job title</Typography>
      </Grid>
      <Grid lg={7} md={7} sm={12} xs={12} style={{ paddingTop: "1rem" }}>
        <Box
          style={{
            background: "#FFFFFF",
            border: "1px solid #B0B0B0",
            borderRadius: "12px",
            width: "393px",
            height: "37px",
            display: "flex",

            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              padding: "0 1rem",

              fontSize: "18px",
            }}
          >
            Musician
          </Typography>
        </Box>
        <p
          style={{
            color: "#808080",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <CheckCircleOutlineIcon style={{ paddingRight: "1rem" }} /> Show my
          job title in my profile{" "}
        </p>
      </Grid>
      <Grid lg={5} md={5} sm={12} xs={12} style={{ padding: "1rem 0" }}>
        <Typography variant="h6">Alternative contact email</Typography>
        <Typography style={{ color: "#808080" }}>
          Enter alternative email if u want to
        </Typography>
      </Grid>
      <Grid lg={7} md={7} sm={12} xs={12} item style={{ padding: "2rem 0" }}>
        <Box
          style={{
            background: "#FFFFFF",
            border: "1px solid #B0B0B0",
            borderRadius: "12px",
            width: "393px",
            height: "37px",
            display: "flex",

            alignItems: "center",
          }}
        >
          <MailOutlineIcon style={{ padding: "1rem " }} />
          <Typography> example@example.com</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
