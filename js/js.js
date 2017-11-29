 $(function() {
    $('.jcarousel').jcarousel({
        list: '.jcarousel-list'
    });
});


function() {
    return this.element().children().eq(0);
}


$('.jcarousel').jcarousel({
    animation: 'slow'
});

$('.jcarousel').jcarousel({
    animation: {
        duration: 800,
        easing:   'linear',
        complete: function() {
        }
    }
});