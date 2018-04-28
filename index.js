function add(a, b) {
  var result = a + b 
  return result
}

function subtract(a, b) {
  var result = a - b 
  return result
}

function multiply(a,b) {
  var result = a*b
  return result
}

function divide(a,b) {
  var result = a/b 
  return result
}

function inc(n) {
  n += 1
  return n
}

function dec(n) {
  n -= 1
  return n
}

function makeInt(n) {
<<<<<<< HEAD
  var result = parseInt(n,10) 
=======
  var result = parseInt(n) 
>>>>>>> fb443ec78ac9699d12b50e840b78df90655fa21d
  return result
}

function preserveDecimal(n) {
  var result = parseFloat(n)
  return result
}