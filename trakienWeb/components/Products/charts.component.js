import React from "react";
import FullButton from "../Buttons/FullButton";
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
    chartArea: { width: "75%", height: "70%" },
    legend: { position: "top", alignment: "center" },
    control: { color: "red" },
  };

  const controls = [
    {
      controlType: "DateRangeFilter",

      options: {
        filterColumnIndex: 0,
        ui: {
          format: { pattern: "dd/MM/yyyy" },
        },
      },
    },
  ];

  const initializateDates = () => {
    let dates = {};
    let names = [["Date"]];
    props.stores.forEach((store) => {
      names[0].push(store.name);
      store.updateDates.forEach((date) => {
        date = new Date(date).toLocaleDateString("en-US");
        dates[date] = [new Date(date)];
      });
    });
    let res = [names, dates];
    return res;
  };

  const initializatePrices = (dates) => {
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
    return dates;
  };

  const handleChartData = () => {
    let data = [];
    let init = initializateDates();
    let names = init[0];
    let dates = initializatePrices(init[1]);
    for (let index in dates) {
      data.push(dates[index]);
    }
    data = names.concat(data.reverse());
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
      <FullButton title="Más Detalles" action={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Item Charts"}</DialogTitle>
        <DialogContent>
          <Chart
            chartType="LineChart"
            width="80vw"
            height="40vh"
            data={chartData}
            options={chartOptions}
            controls={controls}
            legendToggle
          />
        </DialogContent>
        <DialogActions>
          <FullButton title="Close" action={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
