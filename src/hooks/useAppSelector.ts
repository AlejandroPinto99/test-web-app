import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store/storeSetup";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
