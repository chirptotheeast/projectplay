
import * as React from "react";
import { motion } from "framer-motion";
import logo from "../images/cropreveal.png";

 const jigglebutton = () => {
 return <motion.img
    src={logo}
    alt="logo"
    whileHover={{ scale: 1.0, rotate: 20 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  />
}

export default jigglebutton



