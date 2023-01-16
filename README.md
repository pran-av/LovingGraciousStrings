## Project Commentary

[Loving Gracious Strings:](https://lovinggraciousstrings.pranavmandhare.repl.co/#) This was a 3 day project trying to build a personal website using replit with ChatGPT assist. Battle was lost at 16 Jan 18:08 2023.
Not so loving after all...

Stack: HTML, TailwindCSS, React JS
Tools: ChatGPT, Google, Youtube

### What Transpired?
1. The first difficulty I came across was wrapping of HTML code for JSX. After some trial and errors was able to wrap an HTML code into divs, but I don’t think I did it more efficiently or got the entire logic about it. To make sense of the wrapping, I had to Google rather than ask GPT.

2. Above all of this I don’t know the structure of how a webapp should be built as in the compenents I need to create, shall I just put all of the code in the App.js or create separate components. I will have to carefully frame a question to get an accurate answer on this from GPT. Lets try!

3. GPT help with creating components quite well. I mkdir’ed a directory to store all the components and then added a jsx file called Navbar. I got the Navbar code entirely from GPT and then GPT also told me how to import this navbar component in App.jsx. One mistake that GPT did here was that it directed me to create .js files instead of .jsx, which in replit shows an error – but with certain compiler wouldn’t.

4. GPT has proved good for understanding a bit technicalities of the language, like what are the arrow functions used (understood that they are defined with `const` keywords for creating anonymous functions where `this` pointers are not applicable). For regular functions, I can use `this` to refer to the object of that function name. `this` referred outside of a `const` keyword gives me global parameters. To recap:

- Anonymous Function: `const anonFunc = () => {}`
- Regular Function: `function funcName() {}`


5. A while back I had asked GPT the structure of any react webapp, it gave me a 5 point summary. Now after spending a few hours with replit, here’s my breakdown of the structure:

- Store for all HTML components: A separate components folder with all individual replicable components.
- A file where all components are rendered with js logic: Typically App.jsx
- A file that imports react based functionalities, extrenal styling, and middleware: Typically Index.jsx
- All the above ones are in src. Apart from this, a separate folder for images and icons. A Readme. And then packager files that are generally created after running console commands like create-react-app.

6. The next step is to get the tailwind into this project. I’ll probably need some google help in this as well as some GPT answers are not helping.

7. Okay awesome! I managed to install tailwind with my replit project. I had to use combination of tailwind docs and GPT to figure this out. Though it was pretty simple, steps below:

- `npm install tailwindcss`
- `npx tailwindcss init`
- `content: ["./src/**/*.{html,js}"]` For configuration of template paths. The best part of this command was that when I asked GPT what this means, it explained me each component from how * is a wildcard – double asterisks here for directories, and the parenthesis mention the file extensions where I need tailwind to be applied.
- Next, in App.css I put the following directives. I would be using App.css as the css input.
  - `@tailwind base; @tailwind components; @tailwind utilities;`
- And then finally, `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`.
- Now I have to use the following header for all my component files 
  - ```html
    <head>
    <link href="/dist/output.css" rel="stylesheet" />
    </head>

8. Our next step is to create a figma design of what exactly I want the website to look like. Will user lorem ipsum content for now and then later on at the very end can do the copyrighting.

9. Okay, the basic figma design is ready but there’s a big blocker ahead because I am not able to do some basic html logic that allows me the build something like a navbar. When it comes to toggling the bar where the menu falls down, is a JS task. Here I juggling on three front html-css-js and try to fight them with gpt-google-youtube. Its achievable but probably not too efficient! It would be more efficient and fun tackling these fronts one at a time. At this time 3days I think aren’t enough at all even with all the AI and Search tools with me. I could imagine someone with atleast html and basic js knowledge could have easily pulled this off.

10. As a next step, I’ll mark this first battle as a failure and instead gear up for the war ahead. Let’s fight and win the html front first!

### The output: 
All I managed to do was a setup, structure the project, integrate tailwind, and then start with the Navbar. Here’s the repl: https://lovinggraciousstrings.pranavmandhare.repl.co/#
<img width="1440" alt="Screenshot 2023-01-16 at 5 57 30 PM" src="https://user-images.githubusercontent.com/64312310/212686326-bd94dc69-5758-49e0-a174-24b1094b5e0a.png">

### Discussion with ChatGPT
[LovingGraciousStringsChat.pdf](https://github.com/pran-av/LovingGraciousStrings/files/10426120/LovingGraciousStringsChat.pdf)
