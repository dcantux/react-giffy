import { Link as LinkWoutder } from "wouter";
import styled from "@emotion/styled";


export const Link = styled(LinkWoutder)`
 border: 1px solid transparent;
  background-color: var(--brand-color_3);
  color: var(--theme-body-txt);
  cursor: pointer;
  font-size: 1rem;
  padding: .5rem 1rem;

  :hover {
      background-color: var(--brand-color_2)
  }
`

export const Button = Link.withComponent('button')
