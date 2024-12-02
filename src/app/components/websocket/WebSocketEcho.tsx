"use client";

import React, { useState, useEffect } from "react";
import "../styles/webSocket.css";
import Link from "next/link";
const WebSocketEcho = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);

  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const socket = new WebSocket("wss://echo.websocket.org/");

      socket.onopen = () => {
        console.log("WebSocket connected");
      };

      socket.onmessage = (event) => {
        console.log("new message");
        setResponse((prev) => [...prev, event.data]);
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };

      setWs(socket);

      return () => {
        if (socket) socket.close();
      };
    }
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(message);
    }
  };

  return (
    <div className="container">
      <Link className="link" href={"/posts"}>
        go to posts page
      </Link>
      <div className="container-2col ">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          className="input-field"
        />
        <button className="btn default-style" onClick={sendMessage}>
          Send Message
        </button>
      </div>

      <h3 className="title">Response from Echo Server:</h3>

      <div>
        {response.length > 0 ? (
          <ul className="messages-container">
            {response.map((r) => (
              <li className="message" key={r}>
                {r}
              </li>
            ))}
          </ul>
        ) : (
          <p className="connecting">Connecting...</p>
        )}
      </div>
    </div>
  );
};

export default WebSocketEcho;
