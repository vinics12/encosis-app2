/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { gasoline: "", alcohol: "", fuel: "" };

    this.updateValue = this.updateValue.bind(this);
    this.calcule = this.calcule.bind(this);
  }

  updateValue(name, value) {
    const obj = {};
    obj[name] = value;

    this.setState({ ...obj, fuel: "" });
  }

  calcule() {
    let fuel = "";
    const result = 0.7 * parseFloat(this.state.gasoline);
    if (result > parseFloat(this.state.alcohol)) fuel = "Alcool";
    else fuel = "Gasolina";

    this.setState({ fuel });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Gasolina"
          style={styles.number}
          keyboardType="numeric"
          value={this.state.gasoline}
          onChangeText={text => this.updateValue("gasoline", text)}
        />
        <TextInput
          placeholder="Alcool"
          style={styles.secondNumber}
          keyboardType="numeric"
          value={this.state.alcohol}
          onChangeText={text => this.updateValue("alcohol", text)}
        />
        <TouchableOpacity onPress={() => this.calcule()}>
          <Image
            source={require("./img/fuel-station.png")}
            style={styles.fuel}
          />
        </TouchableOpacity>
        <Text style={styles.result}>{this.state.fuel}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  number: {
    width: 300,
    height: 60,
    marginTop: 30,
    fontSize: 20
  },
  secondNumber: {
    width: 300,
    height: 60,
    fontSize: 20
  },
  fuel: {
    width: 80,
    height: 80
  },
  result: {
    fontSize: 30,
    margin: 20
  }
});
