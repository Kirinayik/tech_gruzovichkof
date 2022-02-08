import {FC, useState, useEffect} from "react";
import {MyWonderfulComponentProps} from "../types/types";
import {Box, Grid} from "@mui/material";

const MyWonderfulComponent:FC<MyWonderfulComponentProps> = ({children, id, options, ...other}) => {
  const { count, color, text } = other;
  const [sum, setSum] = useState<number>(count);

  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) {
      setSum(sum + 1);
    }
  }, [id, options, setSum]);

  return (
    <>
      <Box component={'h1'} color={color}>Hello World!</Box>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item>
          <Box>{sum}</Box>
        </Grid>
      </Grid>
      <Box>{text}</Box>
    </>
);
};

export default MyWonderfulComponent