import React, { useEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { CloudComputingData, SortByValue } from "./types/types";
import Card from "./Components/Card/Card/Card";
import SelectVariants from "./Components/Card/Select/Select";

const URL = "https://engineering-task.elancoapps.com/api";

function App() {
  const sortValue = [SortByValue.ConsumedQuantity, SortByValue.Cost];

  const [cloudComputingData, setCloudComputingData] = useState<CloudComputingData[]>([]);
  const [filteredData, setFilteredData] = useState<CloudComputingData[]>([]);
  const [applications, setApplications] = useState<string[]>([]);
  const [resources, setResources] = useState<string[]>([]);
  const [selectedApplications, setSelectedApplications] = useState<string>("");
  const [selectedResources, setSelectedResources] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    if (!cloudComputingData.length) {
      fetch(`${URL}/raw`)
        .then((res) => res.json())
        .then((data) => {
          setCloudComputingData(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [cloudComputingData]);

  useEffect(() => {
    if (!applications.length) {
      fetch(`${URL}/applications`)
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [applications]);

  useEffect(() => {
    if (!resources.length) {
      fetch(`${URL}/resources`)
        .then((res) => res.json())
        .then((data) => {
          setResources(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [resources]);

  useEffect(() => {
    let filteringData;
    if (selectedApplications && selectedResources) {
      filteringData = cloudComputingData.filter(
        (data) =>
          data.ResourceGroup === selectedApplications &&
          data.ServiceName === selectedResources
      );
    } else if (selectedApplications) {
      filteringData = cloudComputingData.filter(
        (data) => data.ResourceGroup === selectedApplications
      );
    } else if (selectedResources) {
      filteringData = cloudComputingData.filter(
        (data) => data.ServiceName === selectedResources
      );
    } else {
      filteringData = cloudComputingData;
    }

    if (sortBy) {
      filteringData = filteringData.sort((a: any, b: any) => {
        const aInt = Number(a[sortBy]);
        const bInt = Number(b[sortBy]);
        if (!Number.isNaN(aInt) && !Number.isNaN(bInt)) {
          return bInt - aInt;
        }
        return a[sortBy].localeCompare(b[sortBy]);
      });
    }
    const filteredJSONData = JSON.stringify(filteringData);
    setFilteredData(JSON.parse(filteredJSONData));
  }, [cloudComputingData, selectedApplications, selectedResources, sortBy]);

  return (
    <div>
      <header className="App-header" style={{ padding: "10px" }}>
        Cloud Computing App
      </header>
      <div className="menu-section">
        <div className="text-align-left">
          <div>Total data: {cloudComputingData.length}</div>
          <div>Filtered data: {filteredData.length}</div>
        </div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <b>Filter By:</b>
          <SelectVariants
            name="Applications"
            data={applications}
            selectedValue={selectedApplications}
            setValue={setSelectedApplications}
          />
          <SelectVariants
            name="Resources"
            data={resources}
            selectedValue={selectedResources}
            setValue={setSelectedResources}
          />
        </div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <b>Sort by:</b>
          <SelectVariants
            name="Sort"
            data={sortValue}
            selectedValue={sortBy}
            setValue={setSortBy}
          />
        </div>
      </div>
      <Box
        className="App-header"
        sx={{ flexGrow: 1 }}
        style={{ padding: "10px", height: "100%" }}
      >
        {filteredData.length ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {filteredData.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </Grid>
        ) : (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="warning">
              No Data available!
            </Alert>
          </Stack>
        )}
      </Box>
    </div>
  );
}

export default App;
