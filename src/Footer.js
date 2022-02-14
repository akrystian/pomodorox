import React from 'react'
import { Navbar, Button } from 'react-bootstrap'

function Footer({ setDebugMode }) {
    return (
        <Navbar bg="light" variant="light">
            PomidoroX &copy; 2021
            <Button variant="link" onClick={() => setDebugMode(true)} size="sm">
                .
            </Button>
        </Navbar>
    )
}

export default Footer
