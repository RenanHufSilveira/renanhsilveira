"use client";

import {
    Navbar,
    Nav,
    Container,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasTitle,
    OffcanvasBody,
} from "react-bootstrap";
import { useTheme } from "../providers/ThemeProvider";
import { usePage } from "../providers/PageProvider";
import { Button } from "react-bootstrap";
import { useState } from "react";


export default function MenuBar() {
    const { theme, toggleTheme } = useTheme();
    const [show, setShow] = useState(false);
    const { setPage } = usePage();

    return (
        <>
            <Navbar bg={theme} data-bs-theme={theme} expand="sm">
                <Container>
                    {/* Título à esquerda */}
                    <Navbar.Brand>
                        RHS
                    </Navbar.Brand>
                    <Nav className="me-auto d-none d-sm-flex">
                        <Nav.Link onClick={() => setPage("home")} >Home</Nav.Link>
                        <Nav.Link onClick={() => setPage("projects")}>Projetos</Nav.Link>
                        <Nav.Link onClick={() => setPage("about")}>Sobre</Nav.Link>
                    </Nav>
                    <Button
                        variant={theme === "light" ? "dark" : "light"}
                        onClick={toggleTheme}
                        className="d-none d-sm-flex"
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </Button>

                    {/* Botão hambúrguer à direita */}
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar"
                        onClick={() => setShow(true)}
                        className="d-sm-none"
                    />
                </Container>
            </Navbar>

            {/* Offcanvas */}
            <Offcanvas
                id="offcanvasNavbar"
                placement="end"
                show={show}
                onHide={() => setShow(false)}
            >
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>Menu</OffcanvasTitle>
                </OffcanvasHeader>

                <OffcanvasBody>
                    <Nav className="flex-column gap-2">
                        <Nav.Link onClick={() => setPage("home")} >
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={() => setPage("projects")}>
                            Projetos
                        </Nav.Link>
                        <Nav.Link onClick={() => setPage("about")}>
                            Sobre
                        </Nav.Link>
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}