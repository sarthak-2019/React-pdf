import React from "react";
import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import Header from "./../Certificate/Header";
import ProjectDetail from "./../ProjectDetail/ProjectDetail";
import ProductList from "./../ProductList/ProductList";
import HouseImageTop from "../HouseImageTop/HouseImageTop";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../src/logo.png";

const styles = StyleSheet.create({
  page0: {
    margin: 0,
    padding: 0,
  },
  page1: {
    margin: 0,
    padding: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  page2: {
    margin: 0,
    padding: 0,
  },
  page3: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Invoice = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page0}>
      <ProductList />
    </Page>
    <Page size="A4" style={styles.page1}>
      <ProjectDetail />
    </Page>
    <Page size="A4" style={styles.page2}>
      <Header />
    </Page>
    <Page size="A4" style={styles.page2}>
      <HouseImageTop />
    </Page>

    {/* <Page size="A4" style={styles.page3}>
      <Image style={styles.logo} src={logo} />
      <InvoiceTitle title="Solar Hub" />
      <InvoiceNo invoice={invoice} />
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice} />
      <InvoiceThankYouMsg />
    </Page> */}
  </Document>
);

export default Invoice;
