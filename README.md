# Logotype Animation for We Construction

A pure javascript web animation for We Construction website.

#### Click to [launch animation](https://nerdmanship.github.io/WeCon/dist/)

## Purpose of the animation
Communicate company values as the logo reveals

#### Professional
* We take on grand projects
* We can compete with the big established ones
* We deliver on time, budget and quality standards

#### Modern
* We use a differentiating IT system
* We handle project information smarter
* We allow data to input once and used in multiple contexts

#### Family values
* We have a healthy view on our employees
* We care about relationships
* We value a human aspect

## Visual approach

The main challenge here was to abstract the key value messages and convert them into something familiar and emotional that could be digested, understood and memorized in just a few seconds.

### Professional:

**Approach:** Blueprint with a successful grand project

![Professional](https://github.com/nerdmanship/WeCon/blob/master/src/assets/images/blueprint.png?raw=true "Professional")

### Modern:

**Approach:** A smartphone with single data input and multiple data outputs

![Modern](https://github.com/nerdmanship/WeCon/blob/master/src/assets/images/smartphone.png?raw=true "Modern")

### Family values:

**Approach:** A beating heart

![Family values](https://github.com/nerdmanship/WeCon/blob/master/src/assets/images/heart.png?raw=true "Family values")


## How to use

1. **Get the script.** Right click [here](https://github.com/nerdmanship/WeCon/raw/master/dist/js/weconLogoAnimation.min.js) to download weconLogoAnimation.min.js, choose 'save link as...' and save it to your javascript directory. Then add the script in the page head:

`<script type="text/javascript" src="js/weconLogoAnimation.min.js"></script>`

2. **Create a div** in which you want to place the animated logotype and give it an ID, i.e. "wrapper":

`<div id="wrapper"></div>`

3. **Initialise the animation** in your main js file, i.e. on page load, and pass the div ID as a string:

`window.addEventListener("load", animateLogotypeIn("wrapper");`

#### Further information
You can position and style the div as you would with any normal image wrapper. The logotype will take the dimensions that you give the wrapper.

## Dependencies
(Included in weconLogoAnimation.min.js)
* GSAP TweenMax
* GSAP MorphSVGPlugin
* GSAP DrawSVGPlugin

## Tech spec
* Size: 52 Kb including dependencies
* Runs at 60 fps on both desktop and mobile

## Delivery

#### [Click to download from dropbox](https://www.dropbox.com/s/1kez3hpt3biqs97/wecon_delivery.zip?dl=1)
(Files are encrypted and password protected)

#### Contents
* Images
  * JPG_@1x
    * Blueprint.jpg
    * Smartphone.jpg
    * Heart.jpg
  * JPG_@2x
    * Blueprint.jpg (2x)
    * Smartphone.jpg (2x)
    * Heart.jpg (2x)
  * PNG_@1x
    * Blueprint.png
    * Smartphone.png
    * Heart.png
  * PNG_@2x
    * Blueprint.png (2x)
    * Smartphone.png (2x)
    * Heart.png (2x)
  * PNGA_@1x
    * Blueprint.png
    * Smartphone.png
    * Heart.png
  * PNGA_@2x
    * Blueprint.png (2x)
    * Smartphone.png (2x)
    * Heart.png (2x)
  * SVG
    * Blueprint.svg
    * Smartphone.svg
    * Heart.svg
* Video
  * GIF
    * logo-animation_400px.gif
    * logo-animation_800px.gif
  * MP4
    * logo-animation_640p_square.mp4
    * logo-animation_1080p_chroma.mp4
    * logo-animation_1080p.mp4

## Follow Nerdmanship Custom
* [Facebook](http://www.facebook.com/nerdmanship)
* [Twitter](http://www.twitter.com/stromqvist)
* [Dribbble](http://www.dribbble.com/stromqvist)
* [Codepen](http://www.codepen.io/nerdmanship)

## License

The code is available under the [MIT license](LICENSE.txt).