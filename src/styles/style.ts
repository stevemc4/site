import styled from 'styled-components'

const Name = styled.h1`
  font-family: var(--headerFont);
  font-size: 96px;
  font-weight: normal;
  margin: 0px;

  @media (max-width: 960px) {
    font-size: 72px;
  }

  span.chinese {
    font-family: var(--chineseFont);
    font-size: 48px;
    display: block;
    font-weight: bold;

    @media (max-width: 960px) {
      font-size: 32px;
    }
  }
`

const Work = styled.div`
  margin-top: 48px;

  span {
    display: block;
  }
`

const WorkPosition = styled.span`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 960px) {
    font-size: 32px;
  }
`

const WorkPlace = styled.span`
  font-size: 32px;

  @media (max-width: 960px) {
    font-size: 24px;
  }
`

const Social = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  margin-top: 24px;

  li {
    margin-right: 24px;

    &:last-child {
      margin-right: 0px;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: 24px;

      @media (max-width: 960px) {
        font-size: 18px;
      }

      &::after {
        content: "x";
        color: transparent;
        display: block;
        height: 4px;
        width: 30%;
        background: var(--bodyColor);
        margin-top: 4px;
        transition: width 0.25s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`

export default {}
export { Name, Work, WorkPosition, WorkPlace, Social }