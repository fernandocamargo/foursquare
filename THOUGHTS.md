# What are your thoughts about the advantages and disadvantages of using CSS in JS approach?

## Introduction

All my professional experience with _CSS-in-JS_ so far has basically been made using [React CSS Modules](https://github.com/gajus/react-css-modules), [Emotion](https://github.com/emotion-js/emotion) and finally [styled-components](https://github.com/styled-components/styled-components), that have been satisfying all my needs. Other libraries have been experimented (like [Glamorous](https://github.com/paypal/glamorous), RIP), but only for learning purposes, so I can't dig into their pros and cons.

I'd like to mention that basically the reason that made me migrate from `css modules` was the complexity involved to extend the applied styles from outside (IMHO).

Last but not least, I know that a few points raised on my list were previously and properly solved by methodologies like BEM, OOCSS, SMACSS, etc. Or even preprocessors. So, by any means, I'm not claiming here those solutions/improvements were introduced exclusively by _CSS-in-JS_ approach.

### Advantages
* It makes easier the interpolation between dynamic values and CSS rules (avoiding conditional swapping of classnames representing states), making the component markup more simplified and straightforward
* Encapsulation of style definitions within components (better modularity approach, no extra-configuring steps, no loading of additional stylesheets)
* Scoped selectors avoiding global collision
* Support for non-CSS-native features (e.g.: component selectors using [styled-components](https://www.styled-components.com/docs/advanced#referring-to-other-components))
* Easier to implement robust theming
* Dead code elimination
* Possibility to share code (from variables to helpers functions) with the rest of codebase, leading to an unique source of truth (one language to rule them all!)
* No need to think on classnames nomeclature
> "There are only two hard things in Computer Science: cache invalidation and naming things" - [Tim Bray](http://www.tbray.org/ongoing/When/200x/2005/12/23/UPI)
* Performance

### Disadvantages
* Latency of having to wait for JavaScript to be downloaded, parsed and executed before styles being applied
* Lack of standardization among available solutions, making eventual migration harder or demanding extra steps for portability
* Highly coupled/tied on React (in our case), requiring additional and sometimes complex steps to be able to share CSS with non-React environments
* Works at runtime
* May not be safe when some care is not taken (e.g.: [CSS injection](https://reactarmory.com/answers/how-can-i-use-css-in-js-securely))
* Performance
