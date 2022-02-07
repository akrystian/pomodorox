import React from 'react'
import { Navbar, Button } from 'react-bootstrap'

function Footer({ setDebugMode }) {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Button variant="link" onClick={() => setDebugMode(true)} size="sm">
                PomidoroX &copy; 2021
            </Button>
        </Navbar>
    )
}

export default Footer
