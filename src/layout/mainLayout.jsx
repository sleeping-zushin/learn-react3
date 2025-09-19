import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { Button } from "antd";
import { LoginModal } from "../components/loginModal";

export const MainLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={
        { 
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column"
         }
      }>
      <header style={{ padding: 16, borderBottom: "1px solid #eee", marginBottom: 16 }}>
        <Header />
        <nav style={{ marginTop: 12, display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/medicine">Medicine</Link>
          <Button onClick={showModal}>Login</Button>
        </nav>
        <LoginModal 
          isModalOpen={isModalOpen} 
          showModal={showModal} 
          handleOk={handleOk} 
          handleCancel={handleCancel} 
          />
      </header>
      <main style={{ flex: 1, width: "100%", maxWidth: 960, margin: "0 auto", padding: 16 }}>
        {children}
      </main>
      <footer style={{ padding: 16, borderTop: "1px solid #eee", marginTop: 16, textAlign: "center", color: "#666" }}>
        © {new Date().getFullYear()} Learn GitHub
      </footer>
    </div>
  );
};


