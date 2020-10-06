
test();

function test() {// function declaration!
  console.log('HELLLO');
}

const test2 = function() {// function expression!
  console.log('HELLO FORM TEST 2')
}

const test3 = (a, b, c, d, e, t, o, p) => {// arrow function
  console.log('HELLO FORM TEST 3', a, b, c, d, e, t,o,p,)
}

test2();
test3(1,2,3,4,5,6);