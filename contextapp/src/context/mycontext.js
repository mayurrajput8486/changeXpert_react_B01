import { createContext } from "react";

//Always start context name with capital letter
const AppName = createContext()
const DevName = createContext()
const Appversion = createContext()
const Appmsg = createContext()
const Product1 = createContext()

//Named export
//to export multiple variable we use named export
//if we are exporting a context using {  } then we have to use {  } while importing context
export {AppName, DevName, Appversion, Appmsg, Product1}