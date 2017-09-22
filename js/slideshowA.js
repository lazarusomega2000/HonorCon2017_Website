// JavaScript Document

$(function() {
$('#slideshow img:gt(0)').hide();
setInterval(function() {
$('#slideshow :first-child')
.fadeOut(1000)
.next('img')
.fadeIn(1000)
.end()
.appendTo('#slideshow');
}, 4000);
});

$(function() {
$('#slideshow2 img:gt(0)').hide();
setInterval(function() {
$('#slideshow2 :first-child')
.fadeOut(1000)
.next('img')
.fadeIn(1000)
.end()
.appendTo('#slideshow2');
}, 4000);
});

$(function() {
$('#slideshow3 img:gt(0)').hide();
setInterval(function() {
$('#slideshow3 :first-child')
.fadeOut(1000)
.next('img')
.fadeIn(1000)
.end()
.appendTo('#slideshow3');
}, 4000);
});