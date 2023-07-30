import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Sheet from "../components/Sheet";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const sheet = document.getElementById('sheet');
    createRoot(sheet).render(<Sheet />);
  }
}
