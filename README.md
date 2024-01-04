# react with jsx enabled

esbuild and tailwind

<div id="sheet" data-controller="react"></div> all you need in view

yarn add react react-dom

javascript/components
holds our components

paste in " --loader:.js=jsx"
inside package.json
in the yarn build script for esbuild

rails_controller
renders our sheet component

import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Sheet from "../components/Sheet";

our imports in react_controller need to bring in React and the components we have it render

Sheet.jsx
import React, { useState } from 'react'

function Sheet() {

    return (
    <section>
        <p>Loading all the stuff</p>
    </section>
    )

}

export default Sheet

go to town
