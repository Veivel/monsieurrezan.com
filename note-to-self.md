## Configuring

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