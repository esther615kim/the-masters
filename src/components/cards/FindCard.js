import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { find_masters } from "../../data.json";
import { Container, Box, Paper, Typography } from "@material-ui/core";
import "@fontsource/roboto";
//import { useStyles } from "./styles";

const useStyles = makeStyles({
  boxContainer: {
    margin: "0 auto",
    maxWidth: 855,
    height: 100,
    padding: 20,

    textAlign: "left"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  sorting: {
    float: "right"
  },
  card: {
    width: 800,
    height: 210,
    margin: 3,
    marginRight: 10
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 5
  },
  title: {
    marginBottom: 5,
    textAlign: "left"
  },
  textBox: {
    flex: 5,
    display: "flex",
    flexDirection: "column",
    padding: 10
  }
});

const FindCard = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.boxContainer}>
        <h5 className={classes.sorting}>리뷰순</h5>
        <h5 className={classes.title}>2,787명의 고수</h5>

        <Box className={classes.wrapper}>
          {/* 카드 */}
          <div variant="outlined">
            <img
              className={classes.image}
              src="https://static.cdn.soomgo.com/upload/profile/206d790b-69ea-4f5c-9621-0efae5e494bc.jpg?d=320x320"
            />
          </div>

          <div className={classes.textBox}>
            <Typography fontWeight="bold" variant="s">
              지용득
            </Typography>
            <Typography variant="s">
              지용득 고수의 에어컨 청소 서비스
            </Typography>
          </div>
        </Box>
        {/* 카드 */}
        <Box className={classes.wrapper}>
          <div variant="outlined">
            <img
              className={classes.image}
              src="https://static.cdn.soomgo.com/upload/profile/ef8113b4-96bc-435d-9228-783fa169abf1.jpg?d=320x320"
            />
          </div>

          <div className={classes.textBox}>
            <Typography fontWeight="bold" variant="s">
              디자인줄눈
            </Typography>
            <Typography variant="s">줄눈시공 전문업체입니다.</Typography>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FindCard;
