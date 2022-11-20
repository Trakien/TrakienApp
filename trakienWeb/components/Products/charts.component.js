import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

export default function Charts(props) {
  const [open, setOpen] = useState(false);
  const [chartData, setChartData] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const chartOptions = {
    chartArea: { width: "90%", height: "80%" },
    curveType: "function",
    legend: { position: "bottom" },
  };

  const handleChartData = () => {
    let names = [["Date"]];
    let data = [];
    let dates = {};
    props.stores.forEach((store) => {
      names[0].push(store.name);
      store.updateDates.forEach((date) => {
        date = new Date(date).toLocaleDateString("en-US");
        dates[date] = [date];
      });
    });
    props.stores.forEach((store) => {
      for (let date in dates) {
        let newUpdateDates = store.updateDates.map((date) => {
          return new Date(date).toLocaleDateString("en-US");
        });
        if (newUpdateDates.includes(date)) {
          dates[date].push(
            parseInt(store.prices[newUpdateDates.indexOf(date)])
          );
        } else {
          dates[date].push(null);
        }
      }
    });
    for (let index in dates) {
      data.push(dates[index]);
    }
    data = data.reverse();
    data = names.concat(data);
    setChartData(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleChartData();
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        More Details
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Item Charts"}</DialogTitle>
        <DialogContent>
          <Chart
            chartType="LineChart"
            width="1000px"
            height="500px"
            data={chartData}
            options={chartOptions}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
