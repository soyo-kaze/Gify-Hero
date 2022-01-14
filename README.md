# Gify-Hero

**The Story:** It all started with [Cuberto](https://cuberto.com/) , and me attempting to replicate its Hero hover effect in html/css/Js combo. I did succeed in creating it but when I was about to publish it as an npm package I realized I don't know sh*t about react component bundling and creating an npm package out of it, so, I'll leave that for some other day till then use this component in `./src` folder named `HeroText.js`.

### How to use?

------

* Copy all the content from `./src` folder except `index.js` cuz that makes no sense.

* Paste all that wherever you want in our react project.

* Use it like this

  ```react
  import {HeroText,Pointer} from './HeroText';
  import gif_you_want_on_it from './some.gif'; 
  // this will be shown when hovered over the hero text
  
  const yourComponent = () =>{
      return(
      	<>
          	<Pointer/> {/*you can import and render it into the root component as we want to this only once.*/}
          	<div>
              	<HeroText GifSrc={gif_you_want_on_it}>The HeroText you want</HeroText>
  			</div>
          </>
      )
  }
  ```

* Example demo:

https://user-images.githubusercontent.com/38816886/149498147-cddd3a7e-60e7-442b-8f7c-b3bb5e30a1b4.mp4


  

