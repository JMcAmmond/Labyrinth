# Labyrinth
Labyrinth is a theme build for the Ghost blogging platform. This theme features a full screen parallax header on the home page and parallax feature images on posts.  
This theme is still a work in progress.

![Labyrinth Mockup Home](https://raw.githubusercontent.com/JMcAmmond/Labyrinth/master/assets/img/mockup.jpg)


## Version
0.1.0


## Installation

1. Download the theme from GitHub
2. Upload the theme following the directions in the [Ghost Documentation](http://docs.ghost.org/usage/settings/).
3. Configure variables inside `partials/custom/config.hbs` and `partials/custom/widgets-sidebar.hbs`.
4. Remove/reorganize the widget placement inside `partials/custom/widgets-sidebar.hbs` however you wish them to appear on the page.


## Widgets 
All widgets are inside the `partials/widget` directory. Each widget may be called anywhere on the page provided it is called with the required parameters
and following any special instructions given. (etc. comment widget must be container within `{{#post}}{{/post}}` block and disqus variable must be configured.)

### Available Widgets:
##### Name: newsletter
* Mandatory Variables: 
    * subscriptionURL
* Special Instructions: 
    * none
* Variables:

| Variable Name       | Expected      | Default                       | Mandatory     |
|---------------------|---------------|-------------------------------|---------------|
| title:              | string        |                               | false         |
| body:               | string        |                               | false         |
| subscriptionURL:    | string        |                               | true          |
| buttonText:         | string        | Submit                        | false         |



##### Name: text
* Mandatory Variables: 
    * body
* Special Instructions: 
    * none
* Variables:

| Variable Name       | Expected      | Default                       | Mandatory     |
|---------------------|---------------|-------------------------------|---------------|
| title:              | string        |                               | false         |
| body:               | string/html   |                               | true          |



##### Name: comments
* Mandatory Variables: 
    * none
* Special Instructions:
    * Must be contained with in `{{#post}}{{/post}}` block and disqus variable must be entered into 'custom/config.hbs'
* Variables:

| Variable Name       | Expected      | Default                       | Mandatory     |
|---------------------|---------------|-------------------------------|---------------|
|                     |               |                               |               |



##### Name: author
* Mandatory Variables: 
    * none
* Special Instructions: 
    * Widget will only show if author has a bio. This information is entered in on the ghost settings panel.
* Variables:

| Variable Name       | Expected      | Default                       | Mandatory     |
|---------------------|---------------|-------------------------------|---------------|
|                     |               |                               |               |



##### Name: share-post
* Mandatory Variables: 
    * none
* Special Instructions: 
    * none
* Variables:

| Variable Name       | Expected      | Default                       | Mandatory     |
|---------------------|---------------|-------------------------------|---------------|
| title               | string        |                               | false         |



##### Name: follow
* Mandatory Variables: 
    * none
* Special Instructions: 
    * Simply changing a social media variable to false will stop it from showing on the page
* Variables:

| Variable Name       | Expected      | Default                       | Mandatory     |
|---------------------|---------------|-------------------------------|---------------|
| title:              | string        |                               | false         |
| facebook:           | boolean       |                               | false         |
| facebookURL:        | string        |                               | false         |
| google:             | boolean       |                               | false         |
| googleURL:          | string        |                               | false         |
| twitter:            | boolean       |                               | false         |
| twitterURL:         | string        |                               | false         |
| dribbble:           | boolean       |                               | false         |
| dribbbleURL:        | string        |                               | false         |
| instagram:          | boolean       |                               | false         |
| instagramURL:       | string        |                               | false         |
| github:             | boolean       |                               | false         |
| githubURL:          | string        |                               | false         |
| youtube:            | boolean       |                               | false         |
| youtubeURL:         | string        |                               | false         |
| pinterest:          | boolean       |                               | false         |
| pinterestURL:       | string        |                               | false         |
| linkedin:           | boolean       |                               | false         |
| linkedinURL:        | string        |                               | false         |
| skype:              | boolean       |                               | false         |
| skypeURL:           | string        |                               | false         |
| tumblr:             | boolean       |                               | false         |
| tumblrURL:          | string        |                               | false         |
| rss:                | boolean       |                               | false         |



### Customizing Colour Scheme
This theme was developed using LESS. All colours have been placed in the assets/css/helpers/colours.less directory. To change the colours of the theme simply change the colour code in the less file, recompile the code and minify it.
 
 
## Attributions & Credits

* [jQuery](https://jquery.com/)
* [Fontawesome](http://fontawesome.io)
* [Bootstrap 3.3.2](http://getbootstrap.com)
* [Highlightjs](https://highlightjs.org/)
* [Materialize](http://materializecss.com/)
* [WowJS](http://mynameismatthieu.com/WOW/)
* [AnimateCSS](https://daneden.github.io/animate.css/)
* [FitVids](http://fitvidsjs.com/)

## More ScreenShots
![Labyrinth Mockup Full View](https://raw.githubusercontent.com/JMcAmmond/Labyrinth/master/assets/img/fullview.png)