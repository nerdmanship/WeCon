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

1. **Add the script in the page head:** Right click [here](https://github.com/nerdmanship/WeCon/raw/master/dist/js/weconLogoAnimation.min.js) to download weconLogoAnimation.min.js, choose 'save link as...' and save it to your javascript directory.

`<script type="text/javascript" src="js/weconLogoAnimation.min.js"></script>`

2. **Create a div in which you want to place the animated logotype.**

`<div id="wrapper"></div>`

3. **Initialise the animation in your main js file**, i.e. on page load, and pass the div id as a string as an argument

`window.addEventListener("load", animateLogo("wrapper");`

#### Further information
You can position and style the div as you would with any normal image wrapper. The logotype will take the dimensions that you give the wrapper.

## Dependencies
(Included in weconLogoAnimation.min.js)
* GSAP TweenMax
* GSAP MorphSVGPlugin
* GSAP DrawSVGPlugin

## Follow Nerdmanship Custom
* [Facebook](http://www.facebook.com/nerdmanship)
* [Twitter](http://www.twitter.com/stromqvist)
* [Dribbble](http://www.dribbble.com/stromqvist)
* [Codepen](http://www.codepen.io/nerdmanship)

## Tech spec
* Size: 52 Kb including dependencies


## License

The code is available under the [MIT license](LICENSE.txt).