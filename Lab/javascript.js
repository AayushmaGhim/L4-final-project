var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  "It was 94 farenheit outside and :insertx: was very hungry, so they went to get some ramyeon. When they dreamt of going to :inserty:, they decided to prank brother, but :insertz:. Their teacher gave them an A+, but was surprised — :insertx: weighs 300 pounds, was always eating in class and brother got him scolded.";

  var insertX = ['Ron Weasley',
  'Annabeth Chase',
  'Santa Claus'];
var insertY = ["the great dining hall",
  "paddy field",
  "Singha Durbar"];
var insertZ = ["was hit by a flying shoe",
  "got a pimple on the face",
  "Donald Trump snitched on them"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('brother', name);

  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);

  }

 
  story.textContent = newStory;
  story.style.visibility = 'visible';
}