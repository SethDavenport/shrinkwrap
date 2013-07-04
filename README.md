shrinkwrap
==========

JQuery plugin that scales an HTML image to fill its parent container, while preserving the aspect ratio.

**Q:** How will I fit this big image into this itty bitty container?

<img src="./itty.png">


**A:** With Shrinkwrap!

```javascript
$(window).load(function() { $("img").shrinkWrap(); });
$(window).resize(function() { $("img").shrinkWrap(); });
```

<img src="boxed.png">

* Image is constrained to its container's height and width,
* Aspect ratio is maintained,
* Image is centered vertically and horizontally in its container,
* If container is resized dynamically, the image is resized as well.

[Complete example file](./demo.html)
