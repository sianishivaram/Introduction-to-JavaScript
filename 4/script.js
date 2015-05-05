"use strict";

var api = 'http://reddit.com/.json?limit=10&jsonp=?';
var linksContainer = $('#links');
//$ is the jQuery is a selector
//# is the ID 
// lnksContainer has all the links


function addToDOM(result){
  var myDiv = $('<div></div>');
  var myImage = $("<img src='" + result['data']['thumbnail'] + "' />");
  var myTitle = $("<div>"+ result['data']['title'] +"</div>");

  myDiv.append(myImage);
  myDiv.append(myTitle);
  linksContainer.append(myDiv);
}

function successFunction(result){
  
  var links = result['data']['children'];

  for( var i = 0 ; i < links.length; i++)
  {
    addToDOM(links[i]);
  }
  
  // for each link in links array
  //   currentLink = 
  //   console.log currentLink title
  //   console.log is `thumbnail` empty?
}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'dataType': 'jsonp'
};

jQuery.ajax(ajaxOptions);