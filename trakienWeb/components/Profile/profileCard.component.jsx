import React from "react";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import ProfileInformation from "./ProfileInformation.component";

export default class CustomerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ProfileInformation />
      </>
    );
  }
}
