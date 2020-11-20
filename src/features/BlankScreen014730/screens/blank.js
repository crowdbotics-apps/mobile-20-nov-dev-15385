import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_3: "", CheckBox_4: true }

  render = () => (
    <View>
      <Text style={styles.Text_2}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  TextInput_3: {},
  View_1: {},
  Text_2: { alignSelf: "flex-end" },
  TextInput_3: { width: 100, alignSelf: "flex-end" },
  CheckBox_4: {},
  View_1: {},
  Text_2: { alignSelf: "flex-start" },
  TextInput_3: { width: 100, alignSelf: "flex-end" },
  CheckBox_4: {},
  View_1: {},
  Text_2: { alignSelf: "flex-start" },
  TextInput_3: {
    width: "100%",
    alignSelf: "center",
    textAlign: "right",
    textDecorationLine: "underline"
  },
  CheckBox_4: {}
})
