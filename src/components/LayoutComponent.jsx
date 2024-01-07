"use client";

import React, { createContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// CREATING CONTEXT API
export const SiteContext = createContext(null);

export default function LayoutComponent({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
    .then(res => res.json())
    .then(data => setItems(data))
  },[])

  // VALUE SET
  const value = {
    showMenu,
    setShowMenu,
    showAddCard,
    setShowAddCard,
    items
  };



  return (
    <>
      <SiteContext.Provider value={value}>
        <Navbar />
        {children}

        {/*-----TOASET DEFAULT SETTING----- */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Footer />
      </SiteContext.Provider>
    </>
  );
}
