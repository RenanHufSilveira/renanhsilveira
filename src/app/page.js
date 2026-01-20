"use client";

import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { usePage } from "./providers/PageProvider";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Page() {
  const { page } = usePage();
  const [pagina, setPagina] = useState("home");

  return (
    <div>
      <main>
        <Container className="p-4">
          {page === "home" && <Home />}
          {page === "about" && <About />}
          {page === "projects" && <Projects />}
        </Container>
      </main>
    </div>
  );
}
