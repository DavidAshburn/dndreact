import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Creation from "../components/Creation";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const maker = document.getElementById('maker');
    createRoot(maker).render(<Creation />);
  }
}
