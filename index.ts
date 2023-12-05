// Create a smart template engine
// base on react logic inspired by qwik, svelte etc...

import Lexer from "./src/Lexer"

const template = `
  div.card
    h1.card__title Salut tout le monde
    p.card__description ok les gars tout fonctionne bien !
`

console.log(template)