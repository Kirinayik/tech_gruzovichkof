import {ReactNode} from "react";

interface IOptions {
    params: {
      fields: {
        isDynamic: () => void;
      }
    }
}

export interface MyWonderfulComponentProps {
  children: ReactNode;
  id: string;
  options: IOptions;
  count: number;
  color: string;
  data: string;
  text: string;
}

export interface PageProps {
  text: string;
  id: string;
  count: number;
  color: string;
  data: string;
}