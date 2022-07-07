import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./../../Asset/Logoflat.png";
import Sign from "./../../Asset/Sign.png";
import TopHeader from "./../TopHeader";
const styles = StyleSheet.create({
  titleContainer: {
    position: "relative",
  },
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
  logo: {
    position: "absolute",
    width: 146,
    height: 49,
    left: "48",
    top: "175",
  },
  reportNameLeft3: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12",
    color: "#000000",
    left: "88",
  },
  reportNameLeft4: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12",
    color: "#000000",
    left: "88",
    marginTop: "42",
    width: "377",
  },
  reportNameLeft5: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12",
    color: "#000000",
    left: "88",
    marginTop: "112",
    width: "377",
  },
  reportNameLeft6: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12",
    color: "#000000",
    left: "88",
    marginTop: "162",
    width: "377",
  },
  reportNameLeft7: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12",
    color: "#000000",
    left: "88",
    marginTop: "222",
    width: "377",
  },
  reportNameLeft8: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12",
    color: "#000000",
    left: "88",
    marginTop: "236",
    width: "377",
  },
  logo1: {
    position: "absolute",
    left: "88",
    width: 71,
    height: 35,
    marginTop: "182",
  },
  reportNameLeft9: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10",
    color: "#000000",
    left: 46,
    top: 810,
  },
  reportNameLeft10: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10",
    color: "#000000",
    left: 170,
    top: 822,
  },
});

const Header = () => (
  <View style={styles.titleContainer}>
    <TopHeader />
    <Image style={styles.logo} src={logo} />
    <View style={styles.titleContainer3}>
      <Text style={styles.reportNameLeft3}>
        Sehr geehrte/r Herr/ Frau customer name,
      </Text>
      <Text style={styles.reportNameLeft4}>
        immer mehr Hauseigentümer decken den Großteil ihres Energiebedarfs mit
        selbst erzeugtem Solarstrom. Das ist nicht nur gut fürs Klima, sondern
        auch für den eigenen Geldbeutel.
      </Text>
      <Text style={styles.reportNameLeft5}>
        Anbei finden Sie das auf ihre Angaben und Wünsche abgestimmte Angebot
        für ihr Solarprojekt mit SolarHub.
      </Text>
      <Text style={styles.reportNameLeft6}>Mit sonnigen Grüßen</Text>
      <Image style={styles.logo1} src={Sign} />
      <Text style={styles.reportNameLeft7}>Geschäftsführer SolarHub</Text>
      <Text style={styles.reportNameLeft8}>David Wolf</Text>
    </View>
    <Text style={styles.reportNameLeft9}>
      beratung@solarhub24.de - www.solarhub24.de - kostenlose Kunden-Hotline
      0174 - 349 1624 (Mo - Fr 9 - 18 Uhr)
    </Text>
    <Text style={styles.reportNameLeft10}>
      SolarHub GmbH - Burgunderstraße 21 - 79104 Freiburg
    </Text>
  </View>
);

export default Header;
