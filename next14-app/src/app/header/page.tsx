'use client';
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Link href={'/'} className="nav-link">
              Home
            </Link>
            <Link href={'/facebook'} className="nav-link">
              Facebook
            </Link>
            <Link href={'/tiktok'} className="nav-link">
              Tiktok
            </Link>
            <Link href={'/youtube'} className="nav-link">
              Youtube
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
