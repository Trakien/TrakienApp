import React from "react";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default class CustomerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid.Container gap={2} justify="center">
      <Grid sm={12} md={5}>
        <Card css={{ mw: "630px" }}>
          <Card.Header>
            <Text b >{"Name: " + this.props.name}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Last Name: {this.props.lastName}
              <br></br>
              Email: {this.props.email}
              <br></br>
              With us since: {this.props.createdAt}
            </Text>
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
     </Grid.Container>
    );
  }
}
