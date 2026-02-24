import React, { useState, useEffect } from "react";
import SystemeHomeContent from "../components/SystemeHomeContent";
import "./Home.css";

const LANDING_PAGES_API = "https://api.tektime.io/api/landing-pages";

export default function Home() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLandingPages = async () => {
      try {
        const response = await fetch(LANDING_PAGES_API);
        const result = await response.json();
        if (result.success && result.data?.data) {
          // Filter only active pages
          const activePages = result.data.data.filter((p) => p.is_active);
          setSections(activePages);
        }
      } catch (error) {
        console.error("Error fetching landing pages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLandingPages();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            border: "3px solid #e5e7eb",
            borderTop: "3px solid #1a56db",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return <SystemeHomeContent sections={sections} />;
}
