import React from "react";
import { CloudComputingData } from "../../types/types";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicModal from "../Modal/Modal";

interface Props {
  data: CloudComputingData;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function Card(props: Props) {
  const { data } = props;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Item>
        <div>
          <div>
            <b>Application Name:</b> {data.Tags["app-name"]}
          </div>
          <div>
            <b>Resource Group</b>: {data.ResourceGroup}
          </div>
          <div>
            <b>Service Name</b>: {data.ServiceName}
          </div>
          <div>
            <b>Location</b>: {data.Location}
          </div>
          <div>
            <b>Environment</b>: {data.Tags.environment}
          </div>
          <div>
            <b>Date</b>: {data.Date}
          </div>
          <div>
            <b>Cost</b>: {data.Cost}
          </div>
          <div>
            <b>Consumed Quantity</b>: {data.ConsumedQuantity}
          </div>
        </div>
        <BasicModal data={data} />
      </Item>
    </Grid>
  );
}

export default Card;
