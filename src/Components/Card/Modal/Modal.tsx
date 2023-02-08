import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CloudComputingData } from "../../../types/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  data: CloudComputingData;
}

export default function BasicModal(props: Props) {
  const { data } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={handleOpen}>More details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {data.Tags["app-name"]}
          </Typography>
          <div>
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
            <div>
              <b>Location</b>: {data.Location}
            </div>
            <div>
              <b>Instance Id</b>: {data.InstanceId}
            </div>
            <div>
              <b>Meter Category</b>: {data.MeterCategory}
            </div>
            <div>
              <b>Resource Location</b>: {data.ResourceLocation}
            </div>
            <div>
              <b>Business Unit</b>: {data.Tags["business-unit"]}
            </div>
            <div>
              <b>Unit Of Measure</b>: {data.UnitOfMeasure}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
