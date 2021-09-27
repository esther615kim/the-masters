import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary
} from "@material-ui/core/Accordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: 655,
    height: 300,
    padding: 5,
    marginTop: 20,
    textAlign: "left"
  },
  title: { marginBottom: 20, textAlign: "left" },

  heading: {
    fontSize: theme.typography.pxToRem(14),
    flexBasis: "90%",
    fontWeight: "700",
    flexShrink: 0
  },
  sentence: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary
  }
}));

export default function Accordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>질문답변</h3>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Q. 서비스의 견적은 어떤 방식으로 산정 되나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.sentence}>
            견적은 단순 거리나 짐량만으로 산정되지는 않습니다. 여러가지의 여건을
            고려하여, 고객님께 가장 최적의 견적을 제시합니다. 1. 짐량(가구 및
            가전 등의 주요 이사품목/수납 짐 등 잔짐량)
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Q. 어떤 서비스를 전문적으로 제공하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.sentence}>
            원룸 이사를 전문적으로 진행하고 있습니다. 하이잭의 대표 상품은 원룸
            반포장 이사 입니다. 1. 일반이사 #기본적으로 침대 분해조립 및
            매트리스 포장 제공입니다. 1) 기사님 1분 : 고객님께서 직접
            포장,기사님과 함께 운반 도움 2) 기사님 2분 : 고객님께서 직접 포장,
            기사님들이 일체 운반 2. 반포장 이사 #포장자재는 당일 저희 업체가
            모두 가지고 방문 합니다. 1) 기사님 1분 : 고객님과 함께 포장 및
            운반도움 2) 기사님 2분 : 업체에서 일체 포장 / 운반도움 / 도착지
            가구배치 (*하이잭 추천상품)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
