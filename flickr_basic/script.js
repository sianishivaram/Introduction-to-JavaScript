"use strict";

var imageCount = 20;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){
  // whats the offset? hint: use the image number and the viewport width

  var viewportWidth = -$(window).width();

  // What's the offset
  // Use the offset as the margin-left

  container.css("margin-left", index*viewportWidth + "px");
  indexCounter = index;
}


function addToDOM(photo){
  var myDiv = $('<div class ="post"></div>');

  var myImage = $("<img src='" + photo.media.m.replace('_m.jpg', '_b.jpg') + "' />");
  myDiv.append(myImage);

  var viewportWidth = viewport.width();
  myDiv.width(viewportWidth);

  container.append(myDiv);

}

function nextImage(){

  // if indexcounter is the same as imagecount
  // reset the indexcounter to 0

  indexCounter++;

  if( indexCounter == imageCount -1 ){
    indexCounter = 0;
  } 

  // increment the indexcounter
  // call showImage with the indexCounter
  showImage( indexCounter)
}

function apiSuccess(result){
  var photos = result['items'];

  console.log(photos);

  // For photo in photos
  for( var i = 0; i< photos.length; i++)
   {
    addToDOM( photos[i]);
   } 
setInterval( nextImage, 5000);

}

var ajaxSettings = {
  // The url to flickrs api
  url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
  // The format we want it in
  dataType: 'jsonp',
  // The function to execute when the api has finished loading
  success: apiSuccess,
};

$.ajax(ajaxSettings);

//setInterval

