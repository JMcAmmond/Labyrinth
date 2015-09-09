# Labyrinth





## Version
1.0.0

## Attributions & Credits

* [jQuery](https://jquery.com/)
* [Modernizr](http://modernizr.com/)
* [Fontawesome](http://fontawesome.io)
* [Bootstrap 3.3.2](http://getbootstrap.com)
* [Highlightjs](https://highlightjs.org/)
* Preview Images from [Stokpic](http://stokpic.com/)


## Installation

Unzip labyrinth.zip and place folder inside `/content/themes` directory

## Widgets 
Animations options: https://daneden.github.io/animate.css/

### Available Widgets:
##### Name: follow
* Mandatory Variables: 
    * none
* Special Instructions: 
    * Simply changing a social media variable to false will stop it from showing on the page
* Variables:

    | Variable Name       | Expected      | Default                  |
    | ------------------- |---------------| -------------------------|
    | animation:          | String        | fadeIn                   |
    | title:              | string        | Follow                   |
    | facebook:           | boolean       | true                     |
    | facebookURL:        | string        | http://facebook.com      |
    | google:             | boolean       | true                     |
    | googleURL:          | string        | http://plus.google.com   |
    | twitter:            | boolean       | true                     |
    | twitterURL:         | string        | http://twitter.com       |
    | dribbble:           | boolean       | true                     |
    | dribbbleURL:        | string        | http://dribbble.com      |
    | instagram:          | boolean       | true                     |
    | instagramURL:       | string        | http://instagram.com     |
    | github:             | boolean       | true                     |
    | githubURL:          | string        | http://github.com        |
    | youtube:            | boolean       | true                     |
    | youtubeURL:         | string        | http://youtube.com       |
    | pinterest:          | boolean       | true                     |
    | pinterestURL:       | string        | http://pinterest.com     |
    | linkedin:           | boolean       | true                     |
    | linkedinURL:        | string        | http://linkedin.com      |
    | skype:              | boolean       | true                     |
    | skypeURL:           | string        | http://skype.com         |
    | tumblr:             | boolean       | true                     |
    | tumblrURL:          | string        | http://tumblr.com        |
    | rss:                | boolean       | true                     |


##### Name: newsletter
* Mandatory Variables: 
    * subscriptionURL
* Special Instructions: 
    * none
* Variables:

    | Variable Name       | Expected      | Default                       |
    | ------------------- |---------------| ------------------------------|
    | animation:          | String        | fadeIn                        |
    | title:              | string        | Newsletter                    |
    | body:               | string        | Subscribe to our news letter! |
    | subscriptionURL:    | string        | #                             |
    | buttonText:         | string        | Subscribe                     |


##### Name: text
* Mandatory Variables: 
    * body
* Special Instructions: 
    * none
* Variables:

    | Variable Name       | Expected      | Default                       |
    | ------------------- |---------------| ------------------------------|
    | animation:          | String        | fadeIn                        |
    | title:              | string        |                               |
    | body:               | string/html   |                               |


##### Name: comments
* Mandatory Variables: 
    * none
* Special Instructions:
    * Must be contained with in `{{#post}}{{/post}}` block and disqus variable must be entered into 'custom/config.hbs'
* Variables:

    | Variable Name       | Expected      | Default                       |
    | ------------------- |---------------| ------------------------------|
    | animation:          | String        | fadeIn                        |


##### Name: author
* Mandatory Variables: 
    * none
* Special Instructions: 
    * Widget will only show if author has a bio
* Variables:

    | Variable Name       | Expected      | Default                       |
    | ------------------- |---------------| ------------------------------|
    | animation:          | String        | fadeIn                        |


### Customizing Colour Scheme
This theme was developed using LESS. All colours have been placed in the assets/css/helpers/colours.less directory. To change the colours of the theme simply change the colour code in the less file, recompile the code and minify it. 