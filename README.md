# RetroNotify

RetroNotify is a lightweight JavaScript library designed to display stylish and customizable notification messages. It operates independently, without the need for external libraries like jQuery.

## Demo

Experience RetroNotify in action: [Live Demo](https://91ahmed.github.io/projects/retronotify/demo/index.html)

## Download

Get the latest version of RetroNotify: [Download Here](https://github.com/91ahmed/RetroNotify/archive/refs/heads/main.zip)

## Installation

1. **Include CSS**: Add the RetroNotify stylesheet within the `<head>` section of your HTML:

    ```html
    <link rel="stylesheet" href="path/to/retronotify.css">
    ```

2. **Include JavaScript**: Place the RetroNotify script before the closing `</body>` tag:

    ```html
    <script src="path/to/retronotify.js"></script>
    ```

## Usage

Initialize RetroNotify by creating a new instance:

```javascript
new RetroNotify({
    contentText: 'Your notification message here'
});
```

## Example

Here's a basic implementation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>RetroNotify Example</title>
    <link rel="stylesheet" href="path/to/retronotify.css">
</head>
<body>
    <script src="path/to/retronotify.js"></script>
    <script>
        // Display a notification
        new RetroNotify({
            contentText: 'Hello, this is a RetroNotify message!',
            contentHeader: 'Notification',
            style: 'blue',
            animate: 'slideBottomRight'
        });
    </script>
</body>
</html>
```

## Customization

RetroNotify offers various options to tailor notifications to your needs:

- **class**: Add a custom class to the container element (default: `null`)
- **id**: Assign a custom ID to the container element (default: `null`)
- **contentText**: Set the main text of the notification
- **contentHeader**: Set the header text of the notification
- **contentClose**: Define the content of the close button (default: '×')
- **background**: Specify a custom background color (default: '#FFF')
- **color**: Specify a custom text color (default: '#012D2D')
- **openDelay**: Set the delay before the notification appears, in milliseconds (default: 1000)
- **closeDelay**: Set the delay before the notification disappears, in milliseconds (default: 6000)
- **animate**: Choose an animation style (default: 'slideBottomRight')
- **transition**: Define the CSS transition duration (default: '0.5s')
- **style**: Select a predefined style (default: 'white')
- **fixed**: Set to `true` to make the notification static without animation (default: `false`)

Example of customization:

```javascript
new RetroNotify({
    class: 'custom-notification',
    id: 'notify1',
    contentText: 'This is a custom notification!',
    contentHeader: 'Custom Header',
    contentClose: 'Close',
    background: '#333',
    color: '#FFF',
    openDelay: 500,
    closeDelay: 5000,
    animate: 'fadeTopLeft',
    transition: '0.7s',
    style: 'red',
    fixed: true
});
```

## Available Styles

RetroNotify comes with several predefined styles:

- blue
- red
- black
- green
- yellow
- sky
- gray

## Available Animations

Choose from a variety of animation effects:

- slideBottomLeft
- slideBottomRight
- slideTopLeft
- slideTopRight
- slideLeftTop
- slideLeftBottom
- slideRightTop
- slideRightBottom
- fadeBottomLeft
- fadeBottomRight
- fadeTopLeft
- fadeTopRight

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/91ahmed/RetroNotify/blob/main/LICENCE) file for details.

---
