(function(labyrinth, $, undefined){

    labyrinth.init = function(){
        _initializeParallax();
        _toggleNavigation();
        _initializeCodeHightlighting();
        _fitVideos();

        $('.scroll').click(function (e) {
            e.preventDefault();
            _initializeSmoothScrolling(this);
        });
    };

    function _initializeParallax() {
        $('.parallax').parallax();
    }

    function _toggleNavigation() {
        $('.hamburger-container').on('click', function () {
            $('nav').toggleClass('active');
        });
    }

    function _initializeCodeHightlighting() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }

    function _fitVideos() {
        var $postContent = $(".post section");
        $postContent.fitVids();
    }

    function _initializeSmoothScrolling(_this) {
        var sectionPosition = 0,
            offSet = 0;

        if ($(_this.hash).offset().top - offSet > $(document).height() - $(window).height()) {
            sectionPosition = $(document).height() - $(window).height();
        } else {
            sectionPosition = $(_this.hash).offset().top - offSet;
        }
        $('html,body').animate({scrollTop: sectionPosition}, 1000, 'swing');
    }

}(window.labyrinth = window.labyrinth || {}, jQuery));


$(document).ready(function(){
    new WOW().init();

    labyrinth.init();
});