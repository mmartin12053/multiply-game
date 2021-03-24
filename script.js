var num1, num2, y;
var tries = 3;
var ps = 0;
var hs = 0;
var dave;

function start(){
  tries = 3
  if(document.getElementById('level').value == "lvl1"){
    console.log("LEVEL 1");
    num1 = Math.floor(Math.random()*10+1)
  num2 = Math.floor(Math.random()*10+1)
  y = 2;
  document.getElementById('problem').innerHTML = `${num1} * ${num2}`
  } else if(document.getElementById('level').value == "lvl2") {
    console.log("LEVEL 2");
    num1 = Math.floor(Math.random()*100+1)
  num2 = Math.floor(Math.random()*100+1)
  y = 5;
  document.getElementById('problem').innerHTML = `${num1} * ${num2}`
  } else if(document.getElementById('level').value == "lvl3") {
    console.log("LEVEL 3");
    num1 = Math.floor(Math.random()*1000+1)
  num2 = Math.floor(Math.random()*1000+1)
  y = 10;
  document.getElementById('problem').innerHTML = `${num1} * ${num2}`
} else{
  console.log("sploorf")
}
}

 

function checkAnswer(){
  var x, text;

  x = parseFloat(document.getElementById('solution').value);

  if(x == num1 * num2){
      tries = 3;
      ps+=y;
      document.getElementById('ps').innerHTML = ps;
      text = "wow, your good at math!";
      document.getElementById('sploorf').innerHTML = text;
      document.getElementById('solution').value = "";
      start();
      if(ps > hs){
  hs = ps;
  document.getElementById('hs').innerHTML = hs
}
  } else {
    ps--;
    document.getElementById('ps').innerHTML = ps;
    tries--;
    if (tries < 1){
    tries = 3;
    text = "you're out of tries, please do another question.";
      document.getElementById('sploorf').innerHTML = text;
      document.getElementById('solution').value = "";

    start()
    } else{
      text = "you have " + tries + " left"
      document.getElementById('sploorf').innerHTML = text;
      document.getElementById('solution').value = "";

    }
  }
}

function restart(){
  tries = 3;
  ps = 0;
  document.getElementById('solution').value = "";
  document.getElementById('ps').innerHTML = 0;
  start()
}

