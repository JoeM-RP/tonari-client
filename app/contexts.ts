import { createContext } from "react";
import { INearby } from "./types";

export const NotificationContext = createContext(0)

export const PlacesContext = createContext<INearby[] | null>(null)