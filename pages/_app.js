import React, { useState } from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import StackedLayout from "../app/layouts/StackedLayout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Got Liao</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <StackedLayout>
        <Component {...pageProps} />
      </StackedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
