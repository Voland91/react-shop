import React from "react";
import { createPortal } from "react-dom";

import Cart from "../Templates/Cart";

const Modal = () => createPortal(<Cart />, document.querySelector("#modal"));

export default Modal;
