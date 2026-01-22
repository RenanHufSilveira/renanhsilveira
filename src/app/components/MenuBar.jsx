"use client";

import {
    Navbar,
    Nav,
    Container,
    Offcanvas
} from "react-bootstrap";
import { useTheme } from "../providers/ThemeProvider";
import { usePage } from "../providers/PageProvider";
import { Button } from "react-bootstrap";
import { useState } from "react";


export default function MenuBar() {
    const { theme, toggleTheme } = useTheme();
    const [show, setShow] = useState(false);
    const { page, setPage } = usePage();

    const changePage = (page) => {
        setPage(page);
        setShow(false);
    };

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>RHS</Navbar.Brand>

                    {/* botão sanduíche */}
                    <Navbar.Toggle aria-controls="main-menu" onClick={() => setShow(true)} />

                    {/* menu desktop */}
                    <Navbar.Collapse className="d-none d-lg-flex">
                        <Nav className="align-items-center">
                            <Nav.Link active={page === "home"} onClick={() => setPage("home")}>
                                Home
                            </Nav.Link>
                            <Nav.Link active={page === "projects"} onClick={() => setPage("projects")}>
                                Projetos
                            </Nav.Link>
                            <Nav.Link active={page === "about"} onClick={() => setPage("about")}>
                                Sobre
                            </Nav.Link>


                        </Nav>
                        {/* toggle theme */}
                        <Button
                            variant="link"
                            className="ms-auto"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                                </svg>}
                        </Button>
                    </Navbar.Collapse>

                    {/* offcanvas mobile */}
                    <Navbar.Offcanvas
                        id="main-menu"
                        placement="end"
                        className="d-lg-none"
                        show={show}
                        onHide={() => setShow(false)}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="flex-column gap-2">
                                <Nav.Link active={page === "home"} onClick={() => changePage("home")}>Home</Nav.Link>
                                <Nav.Link active={page === "projects"} onClick={() => changePage("projects")}>Projetos</Nav.Link>
                                <Nav.Link active={page === "about"} onClick={() => changePage("about")}>Sobre</Nav.Link>

                                <hr />

                                <Button variant="outline-secondary" onClick={toggleTheme}>
                                    {theme === "light" ? "Modo escuro" : "Modo claro"}
                                </Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}