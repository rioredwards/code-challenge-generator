# Code Quest

**Level-Up your code**.

![Code Quest Banner](/src/assets/banner.png)

Embark on your next coding adventure with **Code Quest**! This fun online tool generates pseudo-random coding challenges, giving you the opportunity to learn practical coding skills in a fun and engaging way.

---

## Tech Stack

| [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=black&style=for-the-badge)](https://www.typescriptlang.org/) | [![React](https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=black&style=for-the-badge)](https://reactjs.org/) | [![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=Redux&logoColor=white&style=for-the-badge)](https://redux.js.org/) | [![Framer Motion](https://img.shields.io/badge/framer_motion-BB4B96.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAwIDI1MDAiPgogICAgPHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTI1MDAgMHYyNTAwbC02MjUtNjI1LTYyNSA2MjUtNjI1LTYyNUwwIDI1MDBWMGwxMjUwIDEyNTBMMjUwMCAweiIvPgo8L3N2Zz4K&style=for-the-badge)](https://www.framer.com/motion/) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Features

- **Choose Your Adventure**: Code Quest allows users to control their degree of influence over the generated challenges. Users may choose to have the challenges generated completely at random, or they can specify certain parameters, such as the time limit, and the programming language.
- **Realistic Challenges**: You will never end up with a CLI challenge using React... unless you want to! Despite appearing random at first glance, under the hood, a sophisticated algorithm ensures that any challenge generated is realistic. (more details below)
- **Well Vetted**: The creator (Rio Edwards) has completed nearly 100 coding challenges/projects similar to the ones generated by Code Quest. This ensures that the challenges are practical and relevant to real-world coding scenarios.
- **Elegant UI**: The user interface is designed to be intuitive and easy to use, making it simple to get started with Code Quest. There is even a built-in help menu to explain the various features.
- **Custom Artwork**: All artwork is custom-made using Adobe Illustrator, giving Code Quest a unique look and feel.

## Usage

1. Install the [CLI](https://www.npmjs.com/package/j-scribe1) by running `npm i j-scribe1`.
2. Open the built-in tutorial with `j-scribe1 serve _intro` and follow the instructions to get familiar with the basic features j-scribe offers.
3. Open new or existing notes with `j-scribe1 serve <filename>` (Optionally include a filepath: `j-scribe1 serve <path/filename>`).
4. Run `j-scribe1 --help` for additional help

## Preview

![j-scribe preview](https://raw.githubusercontent.com/rioredwards/j-scribe/main/assets/j-scribe_preview.gif)

## Lessons Learned

- **Best Practices** for designing and building advanced, **production-ready** apps.
- Integrating **Typescript**, **React** and **React-Redux** together.
- Designing highly **reusable React components**.
- Creating a **custom plugin** for **Esbuild** to enable in-browser transpiling/bundling with support for imports from npm.
- Creating a **caching layer** for imported modules/bundled code using Local-Forage.
- Using **Redux-Middlewares** for handling complex business logic.
- Taking advantage of powerful **third-party libraries** such as: bulma, immer, monaco-editor, react-md-editor, commander, etc...
- **Safely handling user-input** by utilizing iframes as a code-execution environment- the same technique used by popular sites such as Codepen.
- Utilizing lerna and nx to create a **mono-repo** with multiple packages and build targets.
- Creating a **Restful-API** to serve up a **Front-End application** from a **CLI**.
- Utilizing **web-assembly** to go... **BLAZINGLY FAST!**
- **Deploying** to npm and vercel.

## Reflection

This project was a great learning experience for me. I learned a ton about TypeScript, React, and React-Redux as well as some project-specific libraries such as Monaco-Editor and Resizable. An unexpected challenge I faced was working with lerna and understanding the build process. This project contains multiple packages, and I had to learn how to configure lerna to build and deploy the packages in the correct order and for different production environments.

I also learned a lot about the importance of planning and design when building a large-scale application. It's very clear to me how useful OOP principles can be in designing larger apps. Developing each component in a modular way and ensuring that the code is reusable makes it much easier to modify and add more features later on.

I had a lot of fun working on this project, and I'm excited to continue learning and improving my skills. ✅

## Acknowledgements

- [readme.so](https://readme.so/editor)
- [Simple Icons](https://simpleicons.org/?q=redux)
- [shields.io](https://shields.io/)

## Authors

- [Rio Edwards](https://www.github.com/rioredwards)

## How Are Challenges Generated?

Whenever the user clicks a "Stop Button", the associated Reel appears to slow-down and eventually stops on an option which becomes a part of the generated challenge (eg: "Typescript", "5 Hours", etc...). The specific option that the reel lands on is actually not influenced by when the user clicks the button (as is with a reel slot-machine), and it also is not technically random. So how does it work?

### The Compatibility Algorithm:

The option is chosen at the moment the user hits the stop button according to an algorithm. When a reel is set to stop it runs an algorithm that:

- Check if any other reels have already selected their option.

- If not, then choose an option at random.

- If so, then look at that option's "compatibility array". This is an array of all the options from other reels that are compatible with the option in question. It is pre-defined in the code.

- of the challenge are compared to all previously set choices and given a "compatibility score". An option is then selected at random from those with the highest scores.
