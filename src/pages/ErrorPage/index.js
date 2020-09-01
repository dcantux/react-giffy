/** @jsx jsx */
/** @jsxFrag React.Fragment  */

import React from "react";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import { css, jsx } from '@emotion/core'
import Button from "components/Button";


const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`

const codeErrorStyle = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem 0;
`

const gifErrorStyles = css`
  margin: 1rem auto;
  width: 250px;
  height: 250px;
  object-fit: cover;
`

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div css={pageErrorStyles}>
            <span css={codeErrorStyle}>404</span>
            <span css={msgErrorStyles}>Sometimes gettings lost isn't that bad</span>
            <img css={gifErrorStyles} src={randomImage()} alt="alt-page-404"/>
            <Button href='/'>Go back home</Button>
        </div>
      </div>
    </React.Fragment>
  );
}