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

    const changePage = (page) => {
        setPage(page);
        setShow(false);
    };

    return (
        <>
            <Navbar className="bg-body-tertiary" data-bs-theme={theme} expand="sm">
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
                        {theme === "light" ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                            </svg>}
                    </Button>

                    {/* Botão hambúrguer à direita */}
                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar"
                        onClick={() => setShow(true)}
                    />
                </Container>
            </Navbar>

            {/* Offcanvas */}
            <Offcanvas
                id="offcanvasNavbar"
                placement="end"
                show={show}
                onHide={() => setShow(false)}
                data-bs-theme={theme}
                className="bg-body-tertiary"
            >
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>Menu</OffcanvasTitle>
                </OffcanvasHeader>

                <OffcanvasBody>
                    <Nav className="flex-column gap-2">
                        <Nav.Link onClick={() => changePage("home")} >
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={() => changePage("projects")}>
                            Projetos
                        </Nav.Link>
                        <Nav.Link onClick={() => changePage("about")}>
                            Sobre
                        </Nav.Link>
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}