import React from "react";
import { useConnectedAnimation } from "./useConnectedAnimation";

export const PositionContext = React.createContext({} as ReturnType<
  typeof useConnectedAnimation
>);
