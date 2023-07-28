// ChatPage.js

import React from "react";
import Header from "../components/Header";
import ChatInterface from "../components/ChatInterface";
import Footer from "../components/Footer";
import "./ChatPage.css";

const ChatPage = () => {
  return (
    <div className="chat-page">
      <Header />
      <h2 className="chat-page-title">Chat</h2>
      <ChatInterface />
      <Footer />
    </div>
  );
};

export default ChatPage;
