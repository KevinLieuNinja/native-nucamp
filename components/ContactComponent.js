import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>
            1 Nucamp Way {"\n"}
            Seattle, WA 98001{"\n"}
            U.S.A.
          </Text>

          <Text style={{ marginTop: 10 }}>
            Phone:1-206-555-1234{"\n"}
            Email:campsites@nucamp.com
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
