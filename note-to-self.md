## Initial Configuration

This file is a note to myself on how to (re?)configure Styled Components and twin.macro with tailwindcss on NextJS-Typescript. Because this crap is kind of pointless.

1. Installing NextJS with Typescript and Eslint

`npx create-next-app@latest --ts --eslint`

2. Installing TailwindCSS (with autoprefixer and postcss!)

`npm install --save-dev tailwindcss postcss autoprefixer`

3. Installing Styled Components (@types is optional, for TS)

`npm install --save-dev styled-components @types/styled-components`

4. Installing twin.macro, where it gets pointlessly annoying

`npm install twin.macro babel-plugin-macros`

You will need to configure babel. Yeah.

5. Configure twin.macro and babel

Refer to: [next-styled-components-typescript](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components-typescript#readme)
Follow everything step-by-step. (This guide was written on 23/11/22, the repo's last commit was on Nov 9. Hopefully nothing breaks in the future.)

NOTE: Using Babel means you can't use next/fonts.

## Other Dev Configurations

1. React Responsive Carousel needs its css file to function properly.

`import { Carousel } from "react-responsive-carousel"; import 'react-responsive-carousel/lib/styles/carousel.min.css`
([credit where credit's due](https://stackoverflow.com/questions/66554854/react-responsive-carousel-is-not-displaying-properly))

2. Current state/situation with Sections...

So not only do we have to define the name, but we have to define the onPointerOver event handler manually (and involve the useStore) for EACH. SECTION. Do note that Section Wrapper is a styled div so that just makes things a bit trickier if we were to, say, delegate the onPointerOver handling to the Section "template".