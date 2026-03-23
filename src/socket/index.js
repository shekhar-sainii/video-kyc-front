import { io } from "socket.io-client";
import ENV from "../config/env";

const socket = io(ENV.SOCKET_URL, {
  autoConnect: true, // connect immediately
  transports: ["websocket"], // faster
});

export default socket;
