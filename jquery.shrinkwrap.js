/**
 * JQuery plugin that scales and centers a block element inside its parent's
 * bounding box.  Mainly designed for images.  Scaling preserves aspect ratio,
 * and centering is both horizontal and vertical.
 *
 * Author: Seth Davenport, http://www.sethdavenport.com
 *
 *  Copyright 2013 Seth Davenport
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Shrinkwrap: scales and centers an image inside its container's box.
 *
 * Scaling preserves aspect ratio.
 * Centering is both horizontal and vertical.
 */
(function($) {
    $.fn.extend({
        shrinkWrap: function() {
            return $(this)
                .fitToParentBox()
                .centerInParentBox();
        },

        /**
         * Fits an item inside its container's box.  Scaling preserves aspect
         * ratio.
         */
        fitToParentBox: function() {
            return $(this).each(function() {
                var item = $(this);
                var box = item.parent();

                var itemOuterWidth = item.outerWidth(true);
                var itemOuterHeight = item.outerHeight(true);
                var boxInnerWidth = box.width();
                var boxInnerHeight = box.height();

                // Figure out how much of the item's outerWidth is taken up by
                // margins, border, and padding.
                var itemBoxPaddingX = itemOuterWidth - item.width();
                var itemBoxPaddingY = itemOuterHeight - item.height();

                // Figure out which dimension needs to be scaled the most.
                var widthDelta = boxInnerWidth - itemOuterWidth;
                var heightDelta = boxInnerHeight - itemOuterHeight;

                item.css('position', 'relative');
                if (widthDelta > heightDelta) {
                    item.css('width', 'auto');
                    item.css('height', boxInnerHeight - itemBoxPaddingY);
                }
                else {
                    item.css('width', boxInnerWidth - itemBoxPaddingX);
                    item.css('height', 'auto');
                }
            });
        },

        /**
         * Centres an item inside its container's box.
         */
        centerInParentBox: function() {
            return $(this).each(function() {
                var item = $(this);
                var box = item.parent();

                var widthDelta = box.width() - item.outerWidth(true);
                var heightDelta = box.height() - item.outerHeight(true);

                item.css('position', 'relative');
                item.css('left', (widthDelta / 2) + 'px');
                item.css('top', (heightDelta / 2)  + 'px');
            });
        }
    });
})(jQuery);
