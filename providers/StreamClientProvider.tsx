import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({children}:{children:ReactNode}) => {

  return (
    <StreamVideo client={client}>

    </StreamVideo>
  );
};
