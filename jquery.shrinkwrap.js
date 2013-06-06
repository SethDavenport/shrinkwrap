/** 
 * JQuery plugin that scales and centers a block element inside its parent's
 * bounding box.  Mainly designed for images.  Scaling preserves aspect ratio,
 * and centering is both horizontal and vertical.
 * 
 * Author: Seth Davenport, http://www.sethdavenport.com
 */
(function($) {
    $.fn.extend({
        shrinkWrap: function() {
            return this.each(function() {
                var item = $(this);
                var box = $(this).parent();
                _shrinkWrap(item, box);
                
                $(window).resize(function() {_shrinkWrap(item, box);})
            });
        }
    });
})(jQuery);

function _shrinkWrap(item, box) {
    _fitToBoundingBox(item, box);
    _centerInBox(item, box);
}

function _fitToBoundingBox(item, box) {
    // Figure out which dimension needs to be scaled the most.
    var widthDelta = box.width() - item.width();
    var heightDelta = box.height() - item.height();
    
    newWidth = item.width();
    newHeight = item.height();
    if (widthDelta > heightDelta) {
        newWidth = 'auto';
        newHeight = '100%';
    }
    else {
        newWidth = '100%';
        newHeight = 'auto';
    }
    
    item.css('position', 'relative');
    item.css('width', newWidth);
    item.css('height', newHeight);
}

function _centerInBox(item, box) {
    var widthDelta = box.width() - item.width();
    var heightDelta = box.height() - item.height();

    item.css('position', 'relative');
    item.css('left', (widthDelta / 2) + 'px');
    item.css('top', (heightDelta / 2)  + 'px');
}