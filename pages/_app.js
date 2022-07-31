import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Satoshi",
    body: "Satoshi",
  },
});

const animationPage = {
  pageInitial: {
    opacity: 0,
  },

  pageAnimation: {
    opacity: 1,
  },

  pageExit: {
    opacity: 0,
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <ParallaxProvider>
      <AnimatePresence>
        <motion.div
          key={router.route}
          variants={animationPage}
          initial="pageInitial"
          animate="pageAnimation"
          exit="pageExit"
        >
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </motion.div>
      </AnimatePresence>
    </ParallaxProvider>
  );
}

export default MyApp;
