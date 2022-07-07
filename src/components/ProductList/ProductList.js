import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Banner from "./../../Asset/Banner.jpg";
import Panel from "./../../Asset/Panel.jpg";
import logo from "./../../Asset/Logoflat.png";
import Solar from "./../../Asset/Solar.png";
import German from "./../../Asset/German.jpg";
import Tick from "./../../Asset/Tick.png";
const styles = StyleSheet.create({
  titleContainer: {
    position: "relative",
  },
  reportTitle: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10",
    backgroundColor: "white",
    color: "#666666",
    // borderRadius: "0px 0px 0px 10px",
    padding: "6",
    right: "0px",
  },
  banner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 625,
    height: 173,
  },
  bannerContainer: {
    position: "absolute",
    left: "16",
    top: "16",
    width: 211,
    height: 143,
    backgroundColor: "#FFD75D",
    borderRadius: 10,
  },
  logo: {
    position: "absolute",
    width: 126,
    height: 43,
    left: "20",
    top: "4",
  },
  bannerTitle: {
    fontStyle: "normal",
    fontSize: "14",
    color: "#2D4764",
    left: "20",
    top: "50",
  },
  bannerTitle1: {
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
    left: "20",
    top: "60",
  },
  bannerTitle2: {
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
    left: "20",
    top: "70",
  },
  MainTitle: {
    fontStyle: "normal",
    fontSize: "16",
    color: "#2D4764",
    left: "249",
    top: "184",
  },
  SubContainer: {
    position: "absolute",
    left: 111,
    top: 221,
    width: 362,
    height: 155,
  },
  panel: {
    position: "absolute",
    width: 221,
    height: 155,
    left: "20",
    top: "4",
  },
  SubContainerText: {
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
    left: "269",
    top: "48",
    marginTop: 6,
  },
  MainTitle1: {
    fontStyle: "normal",
    fontSize: "16",
    color: "#2D4764",
    left: "193",
    top: "407",
  },
  SubContainer1: {
    width: 532,
    height: 160,
    left: 30,
    top: 443,
    backgroundColor: "#FFFFFF",
    borderRadius: "22",
    border: "1 solid grey",
    marginTop: 12,
  },
  solar: {
    position: "absolute",
    width: 116,
    height: 89,
    left: "18",
    top: "53",
  },
  german: {
    position: "absolute",
    width: 19,
    height: 12,
    left: "35",
    top: 103,
    zIndex: 20,
  },
  productTitle: {
    position: "absolute",
    left: "40",
    top: 6,
    fontStyle: "normal",
    fontSize: "14",
    color: "#2D4764",
  },
  productTitle1: {
    position: "absolute",
    left: "28",
    top: 32,
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
  },
  productTitleBar: {
    position: "absolute",
    left: "18",
    top: 48,
    width: 115,
    height: 4,
    backgroundColor: "#FFD75D",
    borderRadius: 4,
  },
  productTitle2: {
    position: "absolute",
    left: 185,
    top: 22,
    fontStyle: "normal",
    fontSize: "14",
    color: "#2D4764",
  },
  SubContainer2: {
    position: "absolute",
    left: 185,
    top: 52,
  },
  SubContainer3: {
    display: "flex",
    flexDirection: "row",
    marginTop: 6,
  },
  tick: {
    width: 11,
    height: 11,
    marginRight: 6,
  },
  productTitle3: {
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
  },
  SubContainer4: {
    position: "absolute",
    left: 455,
    top: 62,
  },
  productTitle4: {
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
    marginTop: 4,
  },
});
const ProjectList = () => {
  return (
    <View style={styles.titleContainer}>
      <Image style={styles.banner} src={Banner} />
      <Text style={styles.reportTitle}>
        {"Angebotserstellung 29.06.2022     -    Projektnummer #1532"}
      </Text>
      <View style={styles.bannerContainer}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.bannerTitle}>Ihr optimales Energiesetup</Text>
        <Text style={styles.bannerTitle1}>Customer Name</Text>
        <Text style={styles.bannerTitle2}>Customer Address</Text>
      </View>
      <Text style={styles.MainTitle}>Ihr Dachlayout</Text>
      <View style={styles.SubContainer}>
        <Image style={styles.panel} src={Panel} />
        <Text style={styles.SubContainerText}>System Price: 11.543€</Text>
        <Text style={styles.SubContainerText}>System Capacity: 14 kWp</Text>
        <Text style={styles.SubContainerText}>System Capacity: 14 kWp</Text>
      </View>
      <Text style={styles.MainTitle1}>Ihre gewählten Komponenten</Text>
      <View style={styles.SubContainer1}>
        <Image style={styles.solar} src={Solar} />
        <Image style={styles.german} src={German} />
        <Text style={styles.productTitle}>PV Module</Text>
        <Text style={styles.productTitle1}>Performance Class</Text>
        <Text style={styles.productTitleBar} />
        <Text style={styles.productTitle2}>Meyer Burger MB60S20-MR 385 Wp</Text>
        <View style={styles.SubContainer2}>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>
              25 Jahre Leistungsgarantie (mind. 81%)
            </Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>12 Jahre Produktgarantie</Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>
              High performance module > 375 Wp
            </Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>made in germany</Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>full black</Text>
          </View>
        </View>
        <View style={styles.SubContainer4}>
          <Text style={styles.productTitle4}>€12.264</Text>
          <Text style={styles.productTitle4}>84 x €146 </Text>
          <Text style={styles.productTitle4}>5.0</Text>
          <Text style={styles.productTitle4}>26 reviews</Text>
        </View>
      </View>

      <View style={styles.SubContainer1}>
        <Image style={styles.solar} src={Solar} />
        <Image style={styles.german} src={German} />
        <Text style={styles.productTitle}>PV Module</Text>
        <Text style={styles.productTitle1}>Performance Class</Text>
        <Text style={styles.productTitleBar} />
        <Text style={styles.productTitle2}>Meyer Burger MB60S20-MR 385 Wp</Text>
        <View style={styles.SubContainer2}>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>
              25 Jahre Leistungsgarantie (mind. 81%)
            </Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>12 Jahre Produktgarantie</Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>
              High performance module > 375 Wp
            </Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>made in germany</Text>
          </View>
          <View style={styles.SubContainer3}>
            <Image style={styles.tick} src={Tick} />
            <Text style={styles.productTitle3}>full black</Text>
          </View>
        </View>
        <View style={styles.SubContainer4}>
          <Text style={styles.productTitle4}>€12.264</Text>
          <Text style={styles.productTitle4}>84 x €146 </Text>
          <Text style={styles.productTitle4}>5.0</Text>
          <Text style={styles.productTitle4}>26 reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectList;
