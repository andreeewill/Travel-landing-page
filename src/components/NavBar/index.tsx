import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../Logo';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../responsive';
import { slide as Menu } from 'react-burger-menu';
//*bruger styles
import styles from './menuStyles';

const Container = styled.div`
  ${tw`
    flex
    h-20
    px-6
    pt-4
    border-b-2
    border-gray-200
    border-opacity-50
    items-center
    self-center
  `}
`;

const NavItems = tw.ul`
  list-none
  w-full
  h-auto
  lg:h-full
  flex
  lg:ml-20
  justify-center
  items-center
`;

const NavItem = tw.li`
  mx-4
  flex
  items-center
  justify-center
  min-h-full
  text-white
  cursor-pointer
  font-medium
  text-lg
  lg:text-base
  transition-colors
  transition-duration[300ms]
  hover:text-gray-300
  box-content
  // mb-2
  lg:mb-0
`;

export function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const navItems = (
    <NavItems>
      <NavItem>
        <Link to="Home">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="Explore">Explore</Link>
      </NavItem>
      <NavItem>
        <Link to="TravelPlaces">Travel Places</Link>
      </NavItem>
    </NavItems>
  );
  return (
    <Container>
      <Logo />
      {isMobile && (
        <Menu right styles={styles}>
          {navItems}
        </Menu>
      )}
      {!isMobile && <>{navItems}</>}
    </Container>
  );
}
