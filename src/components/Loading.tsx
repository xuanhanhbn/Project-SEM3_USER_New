import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 99999999,
    color: "#fff",
  },
}));

type Props = {
  isLoading:boolean
}

const Loading = (props: Props) => {
  const { isLoading } = props;
  const classes = useStyles();

  return (
    <div>
      <Backdrop open={isLoading} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loading;
