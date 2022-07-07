import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./../../Asset/Logoflat.png";
import House from "./../../Asset/House.jpg";
import TopHeader from "./../TopHeader";
const styles = StyleSheet.create({
  titleContainer: {
    position: "relative",
  },
  logo: {
    position: "absolute",
    width: 75,
    height: 25,
    left: "12",
    top: "12",
  },
  logo: {
    position: "absolute",
    width: 75,
    height: 25,
    left: "12",
    top: "12",
  },
  title: {
    position: "absolute",
    left: 239,
    top: 129,
    fontStyle: "normal",
    fontSize: "16",
    color: "#2D4764",
  },
  mainContainer: {
    left: 12,
    top: 101,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer1: {
    paddingTop: 20,
    border: "1 solid grey",
    width: 508,
    maxHeight: 466,
    minHeight: 233,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  reportTitle: {
    position: "absolute",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14",
    color: "#666666",
    left: 8,
    top: 4,
  },
  subContainer2: {
    // border: "1 solid grey",
  },
  house: {
    width: 162,
    height: 207,
    padding: 10,
  },
  title1: {
    fontStyle: "normal",
    fontSize: "16",
    color: "#2D4764",
    marginTop: "16",
  },
  title2: {
    fontStyle: "normal",
    fontSize: "14",
    color: "#2D4764",
    marginTop: "16",
  },
  description: {
    width: 508,
    border: "1 solid grey",
    padding: 10,
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
    marginTop: "8",
    borderRadius: 12,
  },
  description1: {
    width: 78,
    height: 23,
    border: "1 dash #CDCDCD",
    padding: 5,
    paddingLeft: 15,
    fontStyle: "normal",
    fontSize: "10",
    color: "#2D4764",
    marginTop: "8",
    borderRadius: 6,
  },
});

const HouseImageTop = () => (
  <View style={styles.titleContainer}>
    <TopHeader />
    <Image style={styles.logo} src={logo} />
    <Text style={styles.title}>Project images</Text>
    <View style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <Text style={styles.reportTitle}>House/roof area details</Text>
        <Image style={styles.house} src={House} />
        <Image style={styles.house} src={House} />
        <Image style={styles.house} src={House} />
        <Image style={styles.house} src={House} />
        <Image style={styles.house} src={House} />
        <Image style={styles.house} src={House} />
      </View>
      <Text style={styles.title1}>Description</Text>
      <Text style={styles.description}>
        Here is my description please make sure that also when we have a long
        description the whole text is visible. The users like to write a lot of
        information here to make sure we know about everything that is
        important. Here is my description please make sure that also when we
        have a long description the whole text is visible. The users like to
        write a lot of information here to make sure we know about everything
        that is important. Here is my description please make sure that also
        when we have a long description the whole text is visible. The users
        like to write a lot of information here to make sure we know about
        everything that is important. Here is my description please make sure
        that also when we have a long description the whole text is visible. The
        users like to write a lot of information here to make sure we know about
        everything that is important.
      </Text>
      <Text style={styles.title2}>Building year of the roof</Text>
      <Text style={styles.description1}>After 1980</Text>
    </View>
  </View>
);

export default HouseImageTop;
