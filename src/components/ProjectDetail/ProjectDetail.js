import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./../../Asset/Logoflat.png";
const styles = StyleSheet.create({
  titleContainer: {
    position: "relative",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
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
  reportTitle1: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18",
    color: "#2D4764",
    right: "213",
    marginTop: 83,
  },
  logo: {
    position: "absolute",
    width: 146,
    height: 49,
    left: "5",
    top: "5",
    marginTop: 5,
  },
  mainContainer1: {
    width: 299,
    height: 604,
    borderRadius: 22,
    border: "1 solid grey",
    marginTop: 135,
    marginRight: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flexstart",
    padding: 20,
    paddingRight: 30,
  },
  mainContainer2: {
    width: 252,
    height: 604,
    borderRadius: 22,
    border: "1 solid grey",
    marginTop: 135,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flexstart",
    padding: 10,
  },
  reportTitle2: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14",
    color: "#2D4764",
  },
  rectangle: {
    width: 150,
    height: 4,
    backgroundColor: "#FFD75D",
    borderRadius: "4",
    marginTop: 6,
  },
  reportTitle3: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    marginRight: 36,
    marginBottom: 8,
  },
  reportTitleLine: {
    width: 95,
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 7,
  },
  contain1: {
    marginTop: 32,
  },
  contain2: {
    display: "flex",
    flexDirection: "row",
  },
  contain3: {
    display: "flex",
    flexDirection: "row",
    width: "252",
    justifyContent: "space-between",
    marginLeft: "12",
    marginTop: 8,
  },
  reportTitle4: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10",
    color: "#2D4764",
    marginRight: 12,
  },
  reportTitle5: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10",
    color: "#2D4764",
  },
  reportTitle6: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10",
    color: "#247D38",
  },
  contain4: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 241,
    border: "1 dash #CDCDCD",
    borderRadius: 22,
    marginLeft: 16,
    marginTop: 18,
    paddingTop: 8,
    paddingBottom: 12,
  },
  contain5: {
    display: "flex",
    flexDirection: "row",
    width: "200",
    justifyContent: "space-between",
    marginTop: 8,
  },
  contain7: {
    display: "flex",
    flexDirection: "row",
    width: "200",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 8,
  },
  contain8: {
    display: "flex",
    flexDirection: "row",
    width: "200",
    justifyContent: "space-between",
    marginTop: 8,
    paddingBottom: 4,
    borderBottom: "1 solid #E2E2E2",
  },
  contain6: {
    border: "1 dash #CDCDCD",
    borderRadius: 16,
    width: 40,
    height: 16,
    paddingLeft: 10,
    paddingRight: 6,
    paddingTop: 1,
  },
});
const ProjectDetail = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>
        {"Angebotserstellung 29.06.2022     -    Projektnummer #1532"}
      </Text>
      <Image style={styles.logo} src={logo} />
      <Text style={styles.reportTitle1}>Ihre Detailkalkulation</Text>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainer1}>
          <Text style={styles.reportTitle2}>Green Option</Text>
          <View style={styles.rectangle} />
          <View style={styles.contain1}>
            <View style={styles.contain2}>
              <Text style={styles.reportTitle3}>Production Parameters</Text>
              <View style={styles.reportTitleLine} />
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Solarmodules</Text>
              <Text style={styles.reportTitle5}>180</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Panel capacity</Text>
              <Text style={styles.reportTitle5}>180</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>System capacity</Text>
              <Text style={styles.reportTitle5}>65,7 kWp</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Yearly production</Text>
              <Text style={styles.reportTitle5}>18.900 kWh</Text>
            </View>
          </View>
          <View style={styles.contain1}>
            <View style={styles.contain2}>
              <Text style={styles.reportTitle3}>Consumption parameters</Text>
              <View style={styles.reportTitleLine} />
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>
                Basic electricity consumption
              </Text>
              <Text style={styles.reportTitle5}>5.500 kWh</Text>
            </View>
            <View style={styles.contain4}>
              <View style={styles.contain7}>
                <Text style={styles.reportTitle4}>Autarky level</Text>
                <View style={styles.contain6}>
                  <Text style={styles.reportTitle5}>50%</Text>
                </View>
              </View>
              <View style={styles.contain8}>
                <Text style={styles.reportTitle4}>Yearly production</Text>
                <Text style={styles.reportTitle6}>18.900 kWh</Text>
              </View>
              <View style={styles.contain5}>
                <Text style={styles.reportTitle4}>Yearly consumption</Text>
                <Text style={styles.reportTitle5}>3.000 kWh</Text>
              </View>
              <View style={styles.contain5}>
                <Text style={styles.reportTitle4}>Self-consumption</Text>
                <Text style={styles.reportTitle5}>1.500 kWh</Text>
              </View>
              <View style={styles.contain5}>
                <Text style={styles.reportTitle4}>Grid supply</Text>
                <Text style={styles.reportTitle5}>1.500 kWh</Text>
              </View>
              <View style={styles.contain5}>
                <Text style={styles.reportTitle4}>Feed-in</Text>
                <Text style={styles.reportTitle5}>12.400 kWh</Text>
              </View>
            </View>
          </View>
          <View style={styles.contain1}>
            <View style={styles.contain2}>
              <Text style={styles.reportTitle3}>Underlying assumptions</Text>
              <View style={styles.reportTitleLine} />
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>
                Current electricity price (€/kWh){" "}
              </Text>
              <Text style={styles.reportTitle5}>0.3</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>
                Electricity price increase (Yearly)
              </Text>
              <Text style={styles.reportTitle5}>5%</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Self supply</Text>
              <Text style={styles.reportTitle5}>50%</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Roof pitch</Text>
              <Text style={styles.reportTitle5}>48</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Interest rate by bank</Text>
              <Text style={styles.reportTitle5}>2%</Text>
            </View>
            <View style={styles.contain3}>
              <Text style={styles.reportTitle4}>Feed-in-tariff</Text>
              <Text style={styles.reportTitle5}>0.065 €</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainContainer2}>
          <Text style={styles.reportTitle2}>Buy</Text>
          <View style={styles.rectangle} />
        </View>
      </View>
    </View>
  );
};

export default ProjectDetail;
