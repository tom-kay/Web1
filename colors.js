var Links = {
  setColor : function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i++;
    // }
    $('a').css('color', color)
  }
}

var Body = {
  setColor : function(target, color){
    target.style.color=color;
  },
  setBackgroundColor : function (target, color){
    target.style.backgroundColor=color;
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value === 'night'){
    Body.setBackgroundColor(target, 'black');
    Body.setColor(target, 'white');
    self.value='day';

    Links.setColor('yellow');

  } else {
    Body.setBackgroundColor(target, 'white');
    Body.setColor(target, 'black');
    self.value='night';

    Links.setColor('blue');
  }
}
