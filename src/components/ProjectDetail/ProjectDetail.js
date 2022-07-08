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
  mainContainer2: {
    width: 252,
    height: 525,
    borderRadius: 22,
    border: "1 solid grey",
    marginTop: 135,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flexstart",
    padding: 10,
    paddingLeft: 23,
    paddingRight: 24,
  },
  reportTitle31: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    marginTop: 24,
  },
  reportTitle32: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    marginTop: 8,
  },
  subContainer11: {
    marginTop: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 190,
    borderBottom: "0.1 dashed #E2E2E2",
  },
  subContainer12: {
    width: 9,
    height: 9,
    backgroundColor: "#FFCE31",
    borderRadius: "50",
    marginRight: 15,
  },
  reportTitle321: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16",
    color: "#2D4764",
    marginRight: 10,
  },
  reportTitle322: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    width: 70,
    marginRight: 30,
  },
  reportTitle3221: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
    width: 70,
    marginRight: 10,
  },
  subContainer122: {
    width: 16.87,
    height: 38.61,
    backgroundColor: "#FFCE31",
  },
  subContainer121: {
    width: 9,
    height: 9,
    backgroundColor: "#DF6569",
    borderRadius: "50",
    marginRight: 15,
  },
  subContainer1221: {
    width: 16.87,
    height: 72,
    backgroundColor: "#DF6569",
  },
  subContainer111: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 190,
  },
  reportTitle311: {
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14",
    color: "#2D4764",
    marginTop: 20,
  },
  subContainer91: {
    width: 228,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    backgroundColor: "#E8FCE8",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  subContainer9111: {
    width: 228,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFCCCB",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  subContainer92: {
    width: 9,
    height: 9,
    backgroundColor: "#3FB10A",
    borderRadius: "50",
    marginRight: 8,
  },

  subContainer93: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10",
    color: "#2D4764",
  },
  subContainer94: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
  },
  subContainer95: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 222,
    padding: 10,
    paddingBottom: 10,
  },
  subContainer96: {
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer921: {
    width: 9,
    height: 9,
    backgroundColor: "#F2994A",
    borderRadius: "50",
    marginRight: 8,
  },
  subContainer922: {
    width: 9,
    height: 9,
    backgroundColor: "#4D7E6D",
    borderRadius: "50",
    marginRight: 8,
  },
  subContainer923: {
    width: 9,
    height: 9,
    backgroundColor: "#4D7E6D",
    borderRadius: "50",
    marginRight: 8,
  },

  subContainer924: {
    width: 9,
    height: 9,
    backgroundColor: "#287E97",
    borderRadius: "50",
    marginRight: 8,
  },
  subContainer9112: {
    width: 216,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
  },
  subContainer9241: {
    width: 9,
    height: 9,
    backgroundColor: "#FFCE31",
    borderRadius: "50",
    marginRight: 8,
  },
  subContainer931: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14",
    color: "#2D4764",
  },
  subContainer941: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14",
    color: "#FFD75D",
  },
  subContainer9113: {
    width: 216,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  subContainer932: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
  },
  subContainer942: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12",
    color: "#2D4764",
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
          <Text style={styles.reportTitle31}>Return on invest</Text>
          <Text style={styles.reportTitle32}>Timeframe: 25 years</Text>
          <View style={styles.subContainer11}>
            <View style={styles.subContainer12} />
            <Text style={styles.reportTitle321}>+2500€</Text>
            <Text style={styles.reportTitle322}>Gains with solar system</Text>
            <View style={styles.subContainer122} />
          </View>
          <View style={styles.subContainer111}>
            <View style={styles.subContainer121} />
            <Text style={styles.reportTitle321}>-1800€</Text>
            <Text style={styles.reportTitle3221}>
              Loss without solar system
            </Text>
            <View style={styles.subContainer1221} />
          </View>
          <Text style={styles.reportTitle311}>Detailed calculations</Text>
          <View style={styles.subContainer91}>
            <View style={styles.subContainer95}>
              <View style={styles.subContainer96}>
                <View style={styles.subContainer92} />
                <Text style={styles.subContainer93}>Feed-in-gains</Text>
              </View>
              <Text style={styles.subContainer94}>+ 320€</Text>
            </View>
            <View style={styles.subContainer95}>
              <View style={styles.subContainer96}>
                <View style={styles.subContainer921} />
                <Text style={styles.subContainer93}>
                  Savings - basic electricity bill
                </Text>
              </View>
              <Text style={styles.subContainer94}>+ 320€</Text>
            </View>
            <View style={styles.subContainer95}>
              <View style={styles.subContainer96}>
                <View style={styles.subContainer922} />
                <Text style={styles.subContainer93}>
                  Savings - mobility gas bill
                </Text>
              </View>
              <Text style={styles.subContainer94}>+ 320€</Text>
            </View>
            <View style={styles.subContainer95}>
              <View style={styles.subContainer96}>
                <View style={styles.subContainer923} />
                <Text style={styles.subContainer93}>
                  Savings - heat gas bill
                </Text>
              </View>
              <Text style={styles.subContainer94}>+ 320€</Text>
            </View>
          </View>
          <View style={styles.subContainer9111}>
            <View style={styles.subContainer95}>
              <View style={styles.subContainer96}>
                <View style={styles.subContainer924} />
                <Text style={styles.subContainer93}>Financing cost</Text>
              </View>
              <Text style={styles.subContainer94}>+ 320€</Text>
            </View>
          </View>
          <View style={styles.subContainer9112}>
            <View style={styles.subContainer96}>
              <View style={styles.subContainer9241} />
              <Text style={styles.subContainer931}>Financing cost</Text>
            </View>
            <Text style={styles.subContainer941}>+ 320€</Text>
          </View>
          <View style={styles.subContainer9113}>
            <Text style={styles.subContainer932}>Amortisation time</Text>
            <Text style={styles.subContainer942}>10.5 years</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProjectDetail;
