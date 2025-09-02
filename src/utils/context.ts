import {createContext} from "react";
import type {IcqInterface} from "./constants.ts";

export const IcqContext = createContext<IcqInterface>({} as IcqInterface);