"use client";

import { useEffect } from "react";

export function SidebarHandler() {
  useEffect(() => {
    const aside = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const tglButton = document.getElementById("toggle-aside");
    const closeBtn = document.getElementById("close-button");

    if (!aside || !mainContent) return; 

    if (tglButton) {
      tglButton.addEventListener("click", () => {
        console.log('check')
        if (aside.classList.contains("w-0")) {
          aside.classList.remove("w-0", "overflow-hidden");
          aside.classList.add("w-1/2");
          mainContent.classList.add("blur-xs");
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        if (aside.classList.contains("w-1/2")) {
          aside.classList.remove("w-1/2");
          aside.classList.add("w-0", "overflow-hidden");
          mainContent.classList.remove("blur-xs");
        }
      });
    }

    return () => {
      if (tglButton)
        tglButton.removeEventListener("click", () => {});
      if (closeBtn)
        closeBtn.removeEventListener("click", () => {});
    };
  }, []);
}
