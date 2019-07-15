var button = $('button');

var one = $('.one');
var two = $('.two');
var three = $('.three');
var four = $('.four');
var five = $('.five');
var six = $('.six');
var seven = $('.seven');
var eight = $('.eight');
var nine = $('.nine');
var ten= $('.ten');
var eleven = $('.eleven');
var twelve = $('.twelve');

var story = $('.story');
var form = $('.inputs');

button.on("click",showStory);

function showStory(){
  story.append(`<p>On the ${one.val()} planet ${two.val()}, there lived 2 ${three.val()} ${four.val()}. Both enjoyed ${five.val()} ${six.val()} and coding. Their coding class project was to create a ${seven.val()} ${eight.val()}. They accidentally made a ${nine.val()}, which ${ten.val()} their ${eleven.val()}, ${twelve.val()} them into a parallel universe.</p>`);
  form.addClass('hide');
}
