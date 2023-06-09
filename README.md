# YVR❄️WAX
Landing page for my seasonal side business.  
  

  
## Live Demo  
  https://yvrwax.vercel.app/
  
## To-do List  
- [x] Add picture(s) to the pricing section using Astro's optimized component
- [x] Build contact form
- [x] Set up ~~serverless function to handle~~ form to email integration
- [ ] Display contact form submission result/feedback
- [ ] Add more bg decorations
- [ ] Use intersection observers to animate elements as users scroll
- [x] Build footer with link to GitHub
- [x] Deploy on Vercel
  

  
## Further Ideas  
* Use Yup for form schema validation
* Add captcha or honeypot to form for spam protection
* Add red border to form fields that don't pass validation
  

## Things I Used / Learned About
* Generating a new SSH key and adding to GitHub account
* Astro, static site generation
* Responsive images in HTML, @astro/image integration
* Embedding Google Maps  
* CSS Stacking Context  
* Formik
* React Input Mask for phone number field: (000) 000-0000
* Deploying a server-side rendered site on Vercel

## Finished Product  


## Dependencies
* astro
* tailwindcss
* @astrojs/image
* @astrojs/tailwind
* @astrojs/react
* @astrojs/vercel
* react
* sharp
* formik
* @heroicons/react
* react-input-mask

<br/>
<br/>
<br/>

# Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
