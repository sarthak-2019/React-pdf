import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  titleContainer1: {
    marginTop: "62",
  },
  titleContainer3: {
    marginTop: "242",
  },
  reportTitle: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10",
    backgroundColor: "#FCE8A9",
    color: "#666666",
    // borderRadius: "0px 0px 0px 10px",
    padding: "6",
    right: "0px",
  },
  reportNameLeft: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "12",
    color: "#2D4764",
    left: "48",
  },
  reportNameLeft1: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    left: "48",
    marginTop: "18",
  },
  reportNameLeft2: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    left: "48",
    marginTop: "30",
  },
  reportNameRight1: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    left: "382",
  },
  reportNameRight2: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    marginTop: "14",
    left: "382",
  },
  reportNameRight3: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    marginTop: "28",
    left: "382",
  },
});

const Header = () => (
  <View>
    <Text style={styles.reportTitle}>
      {"Angebotserstellung 29.06.2022     -    Projektnummer #1532"}
    </Text>
    <View style={styles.titleContainer1}>
      <Text style={styles.reportNameLeft}>{"Customer Name"}</Text>
      <Text style={styles.reportNameLeft1}>Hasselfelder Straße 5</Text>
      <Text style={styles.reportNameLeft2}> 38124 Braunschweig</Text>
      <View>
        <Text style={styles.reportNameRight1}>
          {"Kundenberater:       David Wolf1"}
        </Text>
        <Text style={styles.reportNameRight2}>
          {"Angebotsdatum:      09.12.2021"}
        </Text>
        <Text style={styles.reportNameRight3}>
          {"Angebot gültig bis:   23.12.2021"}
        </Text>
      </View>
    </View>
  </View>
);

export default Header;
