// start function
function start() {
  document.getElementById("for").innerHTML = `<div id="for"><div id="container">
        <div class="word">
            <h1 id="Round">Round 1</h1>
        </div>
        <div class="word">
            <h3 id="que">Which color is this ?</h3>
        </div>
        <div class="row">
            <div onclick="blo1()" id="block1" class="block"></div>
            <div onclick="blo2()" id="block2" class="block"></div>
            <div onclick="blo3()" id="block3" class="block"></div>
        </div>
        <div class="row">
            <div onclick="blo4()" id="block4" class="block"></div>
            <div onclick="blo5()" id="block5" class="block"></div>
            <div onclick="blo6()" id="block6" class="block"></div>
        </div>
        <div class="row">
            <div onclick="blo7()" id="block7" class="block"></div>
            <div onclick="blo8()" id="block8" class="block"></div>
            <div onclick="blo9()" id="block9" class="block"></div>
        </div>
      </div>
      </div>`;
  color();
}
//
//
//
// color Array
let quecol, col1, col2, col3, col4, col5, col6, col7, col8, col9;

// question

// color change in random block;

function color() {
  // mainquestion
  let rand1 = Math.round(Math.random() * 255 + 1);
  let rand2 = Math.round(Math.random() * 255 + 1);
  let rand3 = Math.round(Math.random() * 255 + 1);
  console.log(rand1);
  console.log(rand2);
  console.log(rand3);
  quecol = `rgb(${rand1},${rand2},${rand3})`;
  document.getElementById("que").innerText = `Which color is this ${quecol}?`;
  //
  //
  //
  //   block 1 color
  function color1() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);
    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col1 = col;
    document.getElementById("block1").style.background = `${col}`;
  }
  color1();
  //
  //
  //
  //   block 2 color
  function color2() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);
    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col2 = col;
    document.getElementById("block2").style.background = `${col}`;
  }
  color2();
  //
  //
  //
  //   block 3 color
  function color3() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);
    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col3 = col;
    document.getElementById("block3").style.background = `${col}`;
  }
  color3();
  //
  //
  //
  //   block 4 color
  function color4() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);
    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col4 = col;
    document.getElementById("block4").style.background = `${col}`;
  }
  color4();
  //
  //
  //
  //   block 5 color
  function color5() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);

    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col5 = col;
    document.getElementById("block5").style.background = `${col}`;
  }
  color5();
  //
  //
  //
  //   block 6 color
  function color6() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);

    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col6 = col;
    document.getElementById("block6").style.background = `${col}`;
  }
  color6();
  //
  //
  //
  //   block 7 color
  function color7() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);
    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col7 = col;
    document.getElementById("block7").style.background = `${col}`;
  }
  color7();
  //
  //
  //
  //   block 8 color
  function color8() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);

    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col8 = col;
    document.getElementById("block8").style.background = `${col}`;
  }
  color8();
  //
  //
  //
  //   block 9 color
  function color9() {
    let rand1 = Math.round(Math.random() * 255 + 1);
    let rand2 = Math.round(Math.random() * 255 + 1);
    let rand3 = Math.round(Math.random() * 255 + 1);

    let col = `rgb(${rand1},${rand2},${rand3})`;
    console.log(col);
    col9 = col;
    document.getElementById("block9").style.background = `${col}`;
  }
  color9();
}
//
//
//
// color change in random block;
function randcol() {
  let rand = Math.round(Math.random() * 9) + 1;
  switch (rand) {
    case 1: {
      col1 = quecol;
      document.getElementById("block1").style.background = `${quecol}`;
      break;
    }
    case 2: {
      col2 = quecol;
      document.getElementById("block2").style.background = `${quecol}`;
      break;
    }
    case 3: {
      col3 = quecol;
      document.getElementById("block3").style.background = `${quecol}`;
      break;
    }
    case 4: {
      col4 = quecol;
      document.getElementById("block4").style.background = `${quecol}`;
      break;
    }
    case 5: {
      col5 = quecol;
      document.getElementById("block5").style.background = `${quecol}`;
      break;
    }
    case 6: {
      col6 = quecol;
      document.getElementById("block6").style.background = `${quecol}`;
      break;
    }
    case 7: {
      col7 = quecol;
      document.getElementById("block7").style.background = `${quecol}`;
      break;
    }
    case 8: {
      col8 = quecol;
      document.getElementById("block8").style.background = `${quecol}`;
      break;
    }
    case 9: {
      col9 = quecol;
      document.getElementById("block9").style.background = `${quecol}`;
      break;
    }
  }
  console.log(`rand col value : ${rand}`);
}

//
//
//
//color array
let colary = [col1, col2, col3, col4, col5, col6, col7, col8, col9];

let wincount = 0;
var round = 1;

function varset() {
  quecol = col1 = col2 = col3 = col4 = col5 = col6 = col7 = col8 = col9 = 0;
  round = 1;
  wincount = 0;
}
//
//
//
// game end function
function end() {
  document.getElementById("for").innerHTML = `<div class="outer">
  <div class="end">
      <h1>Game-Over</h1>
      <div>
          <h3>You Guess ${wincount} out of 10.</h3>
      </div>
      <div id="restart" onclick="restart()">Restart</div>
  </div>
</div>`;
}
//
//
//
// fuction for taking answer // win check

function blo1() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col1) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 1");
}
//
//
//
function blo2() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col2) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 2");
}
//
//
//
function blo3() {
  if (round >= 10) {
    end();
  } else randcol();
  if (quecol === col3) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 3");
}
//
//
//
function blo4() {
  if (round >= 10) {
    end();
  } else randcol();
  if (quecol === col4) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 4");
}
//
//
//
function blo5() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col5) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 5");
}
//
//
//
function blo6() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col6) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 6");
}
//
//
//
function blo7() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col7) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 7");
}
//
//
//
function blo8() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col8) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 8");
}
//
//
//
function blo9() {
  randcol();
  if (round >= 10) {
    end();
  } else if (quecol === col9) {
    wincount++;
    round++;
    console.log(`win count : ${wincount}`);
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  } else {
    round++;
    console.log(`game round : ${round}`);
    document.getElementById("Round").innerText = `Round ${round}`;
    color();
  }
  console.log("key 9");
}

// restart function
function restart() {
  varset();
  document.getElementById("for").innerHTML = `
  <div id="start">
      <div onclick="start()" class="class">Start</div>
  </div>
`;
}
