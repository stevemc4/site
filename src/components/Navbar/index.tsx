import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

const Name = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  color: #2d2d2d;
  margin: 0px;
`

// const ChineseName = styled.span`
//   font-style: normal;
//   font-weight: 500;
//   font-size: 24px;
//   display: block;
//   color: #636363;
// `

const Links = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  margin-top: 16px;
  display: flex;

  @media print {
    display: none;
  }
`

interface StyledLinkProps {
  active?: boolean;
}

const StyledLink = styled.li<StyledLinkProps>`
  flex: none;
  order: 1;
  align-self: flex-start;
  margin: 0px 8px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  a {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #636363;
    text-decoration: none;
    min-width: 43px;
    display: inline-block;

    &:hover {
      color: #2d2d2d;
    }
  }

  ${(props): FlattenSimpleInterpolation => props.active && css`
    a {
      color: #2d2d2d;
      font-weight: 500;
    }
  `}
`

interface NavbarProps {
  currentPage?: 'HOME' | 'NOTES' | 'WORKS' | 'STUFFS' | 'ABOUT';
}

const Navbar = ({ currentPage }: NavbarProps): React.ReactElement => {
  return (
    <nav>
      <Name>Dhika Rizky</Name>
      {/* <ChineseName>古育琦</ChineseName> */}
      <Links>
        <StyledLink active={currentPage === 'HOME'}>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </StyledLink>
        {/* <StyledLink>
          <Link href="/notes" passHref>
            <a>Notes</a>
          </Link>
        </StyledLink> */}
        <StyledLink active={currentPage === 'WORKS'}>
          <Link href="/works" passHref>
            <a>Works</a>
          </Link>
        </StyledLink>
        <StyledLink active={currentPage === 'STUFFS'}>
          <Link href="/stuffs" passHref>
            <a>Stuffs</a>
          </Link>
        </StyledLink>
        <StyledLink active={currentPage === 'ABOUT'}>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </StyledLink>
      </Links>
    </nav>
  )
}

export default Navbar
