shrinkwrap
==========

JQuery plugin that scales an HTML image to fill its parent container, while preserving the aspect ratio.

**Q:** How will I fit this big image into this itty bitty container?

<img src="./itty.png">


**A:** With Shrinkwrap!

```javascript
$(window).load(function() { $("img").shrinkWrap(); });
```

<img src="boxed.png">

* Image is constrained to its container's height and width,
* Aspect ratio is maintained,
* Image is centered vertically and horizontally in its container.

If your layout resizes the container when the window size changes, that's cool too:

```javascript
$(window).resize(function() { $("img").shrinkWrap(); });
```


[Complete example file](./demo.html)
