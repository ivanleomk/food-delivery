import React, { useState } from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../app/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Got Liao</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
