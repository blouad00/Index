var Body = {
 SetfontColor:function(color){
  document.querySelector('body').style.color = color;
 },
 SetbackgroundColor:function(color){
  document.querySelector('body').style.backgroundColor = color;
 }
}

var Links = {
 SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

function DayNightMod(self){
  var targetA = document.querySelector('body');
  if(self.value === '야간 모드'){
  Body.SetbackgroundColor('black');
  Body.SetfontColor('white');
  self.value = '주간 모드';
  Links.SetColor('powderblue');
 }
 else {
  Body.SetbackgroundColor('white');
  Body.SetfontColor('black');
  self.value = '야간 모드';
  Links.SetColor('');
 }
}
