(function($){
    /**
     * Function to replicate css3 method background-size: cover
     * This method is expected to target only image tags inside a container
     */
    $.fn.aspectAdjust = function() {
        return this.each(function() {
            var $this= $(this);
            var src = $this.prop('src');
            $this.prop('src')

            $this.on('load', function() {
                var $this = $(this);
                $this.css({ width: 'auto', height: 'auto' });
                var containerHeight = $this.parent().height();
                var containerWidth = $this.parent().width();
                var srcHeight = $this.height();
                var srcWidth = $this.width();
                var scaleX = containerWidth/srcWidth;
                var scaleY = containerHeight/srcHeight;
                var scale;
                if ((srcWidth > containerWidth) || (srcHeight > containerHeight)) {
                    scale = Math.max(scaleX, scaleY);
                } else {
                    scale = 1;
                }
                var finalWidth = srcWidth * scale;
                var finalHeight = srcHeight * scale;

                // scale
                $this.css({ width: finalWidth, height: finalHeight });
                $this.attr('scaled', true);

                // reposition
                $this.css({ marginLeft: (containerWidth/2)-(finalWidth/2), marginTop: (containerHeight/2)-(finalHeight/2) });
            });

            // solves error where onload event is not firing
            $this.prop('src', src);
        });
    };

})(jQuery);
