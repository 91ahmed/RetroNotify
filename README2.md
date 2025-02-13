## RetroNotify
RetroNotify - is a Javascript library to display notification messages with a sleek, modern design that’s both visually appealing and easy to customize, offering a seamless user experience. RetroNotify allows developers to effortlessly integrate notifications into their web applications with full flexibility for styling and behavior.

### Demo
[Click to preview](https://91ahmed.github.io/projects/RetroNotify/demo/index.html)

### Download
[Click here to download the library](https://91ahmed.github.io/projects/RetroNotify/demo/download/retronotify-v1.0.0.zip)

### How to use
The library is written in pure JavaScript and only requires two files: a JavaScript file and a CSS file. It does not require jQuery.

``` html
// Include css at the end of the head tag
<link rel="stylesheet" href="retronotify.css">

// Include js at the end of the body tag
<script src="retronotify.js"></script> 
```

### Running RetroNofity
Simply create a new instance of RetroNotify.

``` javascript
new RetroNotify()
```

### Example
``` html
<html>
    <head>
        <meta charset="utf-8">
        <title>Retro Notify</title>

        <link rel="stylesheet" href="retronotify.css">
    </head>

    <body>
        <script src="retronotify.js"></script>

        <script>
            // Run RetroNotify
            new RetroNotify({
                contentText: 'Write your message here'
            })
        </script>
    </body>
</html>
```

### How to Customize
The class takes one parameter which is an object that allow the user to change the default options and customize the notification design.

``` javascript
new RetroNotify({
    class: 'your_class', // add your own class to the container element (default null)
    id: 'your_id', // add your own id to the container element (default null)
    contentText: 'your_text', // change text content
    contentHeader: 'your_header', // change header content
    contentClose: '×', // change close button content
    background: '#fff', // add your custom background (default #FFF white)
    color: '#012d2d', // add your custom text color (default #012D2D black)
    openDelay: 1000, // set open delay duration (default 1s)
    closeDelay: 6000, // set close delay duration (default 6s)
    animate: 'select_animation', // change the animation style (default slideBottomRight)
    transition: '1s', // css transition duration (default 0.5s)
    style: 'yellow', // change the style (default white)
    fixed: false // set to true to make it static without animation (default false)
})
```

### Available Styles
* blue
* red
* black
* green
* yellow
* sky
* gray

### Available Animation
* slideBottomLeft
* slideBottomRight
* slideTopLeft
* slideTopRight
* slideLeftTop
* slideLeftBottom
* slideRightTop
* slideRightBottom
* fadeBottomLeft
* fadeBottomRight
* fadeTopLeft
* fadeTopRight
