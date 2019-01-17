// function LinksSetColor(color) {
//   var alist = document.querySelectorAll('a');
//   var i = 0;
//   while(i < alist.length){
//     alist[i].style.color = color;
//     i = i + 1;
//   }
// }
//
// function BodySetBackColor(color){
//   document.querySelector('body').style.backgroundColor = color;
// }
// function BodySetColor(color){
//   document.querySelector('body').style.color = color;
// }
//
//
//
// function nightDayHandler(self) {
//     var target = document.querySelector('body');
//     if(self.value == 'night 모드') {
//       BodySetColor('white');
//       LinksSetColor('powderblue');
//       BodySetBackColor('black');
//       self.value = 'day 모드';
//       }
//
//
//     else if(self.value == 'day 모드') {
//       BodySetBackColor('white');
//       BodySetColor('black');
//       LinksSetColor('blue');
//       self.value = 'night 모드';
//       }
// }

//j쿼리
var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night 모드'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day 모드';
    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night 모드';
    Links.setColor('blue');
  }
}
