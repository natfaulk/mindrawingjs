MinDrawingJS - Minimal Drawing JS
=================================

I find myself using [p5.js](https://p5js.org/) a lot. However often I don't want it as the focal point of the application. Therefore often I don't want the draw function constantly looping. I also find I only use a vary small portion of the library (the basic drawing functions). Therefore I have made a library that is effectively a thin wrapper over the underlying HTML canvas methods with a similar API to p5.js but without all the unnecessary stuff I don't want.


API Reference
-------------

### HTML canvas
The library requires an HTML canvas with a unique ID. eg:

`<canvas id="myCanvas">`

### `drawing.setup(id[, width, height])`

**id**: HTML canvas tag id  
**width**: HTML canvas width (optional)  
**height**: HTML canvas height (optional)  

If canvas width and height are not specified, the current canvas width will be used. This is useful if the width has been set using the HTML tag eg:  
`<canvas id="myCanvas" width="800" height="600">`

### `drawing.background(colour)`
Fills the screen with the specified color. Can be used to erase the canvas.

**colour**: The colour to fill the screen with. CSS style color e.g. `#FF0000`

### `drawing.stroke(colour)`
Sets line and shape outline colour.

**colour**: The colour to set the line or outline to. CSS style color e.g. `#FF0000`

### `drawing.strokeWeight(weight)`
Sets line width in px

**weight**: Width of line in px

### `drawing.fill(colour)`
Sets fill colour

**colour**: The colour to set the fill to. CSS style color e.g. `#FF0000`

### `drawing.rect(x, y, width, height)`
Draws a rectangle

**x**: X-position of top left corner of the rectangle  
**y**: Y-position of top left corner of the rectangle  
**width**: Width of rectangle in px  
**height**: Height of rectangle in px  

### `drawing.line(ax, ay, bx, by)`
Draw a line between two points

**ax**: X-position of point 1  
**ay**: Y-position of point 1  
**bx**: X-position of point 2  
**by**: Y-position of point 2  

Example
-------

```
<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>MinDrawingJS example</title>
  <script src="../build/drawing.min.js"></script>
</head>
<body>
  <canvas id="myCanvas">

  <script type="text/javascript">
    const RED = '#FF0000';
    const GREEN = '#00FF00';
    const BLACK = '#000';
    const WHITE = '#FFF';

    drawing.setup('myCanvas', 800, 600);
    drawing.background(BLACK);
    drawing.stroke(GREEN);
    drawing.strokeWeight(5);
    drawing.line(0, 500, 800, 500);

    drawing.fill(RED);
    drawing.stroke(WHITE);
    drawing.strokeWeight(2);
    drawing.rect(300,350,200,100);
  </script>
</body>
</html>
```
