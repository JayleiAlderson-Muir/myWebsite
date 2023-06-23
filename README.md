## Running this Project

Once you've cloned this project and installed dependencies with `npm install` and `npm install -save svelte-table`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

# myWebsite
web1 individual website project

# Example Websites
1. https://thegamingsetup.com/gaming-keyboard/buying-guides/keyboard-switch-chart-table

![image](https://github.com/JayleiAlderson-Muir/myWebsite/assets/113650600/ef768997-6c1f-4cc0-a273-52119b3f5776)

I have chosen this as an example as it has some very useful imformation as a resource for my own website. 
This is a blog post describing the same kind of data that I want to with my website.
It does a great job of showing this data in a meaningful way, and the page flows nicely.
I believe an issue with this example page is trying to do too much. It might be hard to understand.

2. https://kbdfans.com/collections/switches

![image](https://github.com/JayleiAlderson-Muir/myWebsite/assets/113650600/31dc1b85-af0f-425c-91ce-0d1c44117af8)

This site is actually a store but I think it does a good job of displaying different elements to be used.
The CSS doesn't seem to be dynamic and it's easy to break the look of the page by changing the window size.

3. https://www.androidpolice.com/mechanical-keyboard-switches-types-explainer

![image](https://github.com/JayleiAlderson-Muir/myWebsite/assets/113650600/33cc5e1f-acf5-48b1-97cb-ff20431a349f)

This is a great beginner guide. I think I want to do something similar but make it more expansive. 

# Known Issues
- Table information shows in unstyled format briefly when refreshing the page in web browser
- Does not scroll correctly to footer element when on the page '/filtered#about' after refreshing
  - note: it is only possible to do this by navigating to a filtered page, then to the about section
  - Does scroll to footer element, but due to the redirect, the movement is not smooth or direct
- SvelteTable has inherit formatting issues that should have been addressed
- FadingImage component can go out-of-sync and pause for the duration of the setInterval method used

# Next Steps
- Create an about page. This would help the program in the following ways:
  1. It would remove the issue caused when visiting the about section while on the filtered table page
  2. It would allow me to put a lot more information onto the site detailing my goals and explaining certain things in more detail for users
  3. Another page is just more oppurtunity to include interesting and dynamic code in my program
- Fixing SvelteTable issues. Styling, formatting, and allowing more options for filtering
- Add a transition to the Footer's FadingImage component, the reason why it was named thusly
- Tidy up switchData.js as it pertains to my program

## Reference Start

Sam, R. (2023). Mechanical Keyboard Switch Chart & Table. TheGamingSetup. https://thegamingsetup.com/gaming-keyboard/buying-guides/keyboard-switch-chart-table

CSV to JSON - CSVJSON. (n.d.). https://csvjson.com/csv2json

W3Schools Online Web Tutorials. (n.d.). https://www.w3schools.com/

SvelteTable example 4 - table fix • REPL • Svelte. (n.d.). https://svelte.dev/repl/8b2264e66d9a456abeb5f2b9322605f7?version=3.59.1

npm: svelte-table. (n.d.). Npm. https://www.npmjs.com/package/svelte-table

2256 UI elements made with CSS. (n.d.). https://uiverse.io/all

MDN Web Docs. (n.d.). https://developer.mozilla.org/en-US/

