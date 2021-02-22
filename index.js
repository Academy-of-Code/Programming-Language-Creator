var if_char;
var else_char;
var elseif_char;
var while_char;
var var_char;
var function_char;
var const_char;
var let_char;
var return_char;
var class_char;

var skipped = false;

var input;
var output;

var JsonPacked = {
  "if" : if_char,
  "else_char" : else_char,
  "elseif_char" : elseif_char,
  "while_char" : while_char,
  "var_char" : var_char,
  "funtion_char" : function_char,
  "const_char" : const_char,
  "let_char" : let_char,
  "return_char" : return_char,
	"class_char" : class_char
}

const inputElement=document.getElementById("input")
const outputElement=document.getElementById("output")



function submit(){
	if_char = document.getElementById("if-q").value
  else_char = document.getElementById("else-q").value
  elseif_char = document.getElementById("elseif-q").value
  while_char = document.getElementById("while-q").value
  var_char = document.getElementById("var-q").value
  function_char = document.getElementById("function-q").value
  const_char = document.getElementById("const-q").value
  let_char = document.getElementById("let-q").value
  return_char = document.getElementById("return-q").value
  class_char = document.getElementById("class-q").value
  
  document.getElementById("questions").style.visibility = "hidden"
  
  document.getElementById("in-out").style.visibility = "visible"
}

function replace(){
	output = inputElement.value.replace(if_char, "if")
  output = output.replace(else_char, "else")
  output = output.replace(elseif_char, "elseif")
  output = output.replace(while_char, "while")
  output = output.replace(var_char, "var")
  output = output.replace(function_char, "function")
  output = output.replace(const_char, "const")
  output = output.replace(let_char, "let")
  output = output.replace(return_char, "return")
  output = output.replace(class_char, "class")
}

function compile(){
	if(skipped === true){setTimeout(document.getElementById("input").value, 1)}
  else{
    replace();
    setTimeout(output, 1);
  }
}


function skip(){
	skipped = true
  
  document.getElementById("questions").style.visibility = "hidden"
  
  document.getElementById("in-out").style.visibility = "visible"
}

function pack(jsonPack){
	jsonPack.if = if_char 
  jsonPack.else = else_char
  jsonPack.elseif = elseif_char
  jsonPack.while = while_char
  jsonPack.var = var_char
  jsonPack.function = function_char
  jsonPack.const = const_char
  jsonPack.let = let_char
  jsonPack.return = return_char
  jsonPack.class = class_char
  
  document.getElementById("packedText").value = JSON.stringify(jsonPack)
}

function load(jsonPack){
	if_char = jsonPack.if
  else_char = jsonPack.else
  elseif_char = jsonPack.elseif
  while_char = jsonPack.while
  var_char = jsonPack.var
  function_char = jsonPack.function
  const_char = jsonPack.const
  let_char = jsonPack.let
  return_char = jsonPack.return
  class_char = jsonPack.class
  
  jsonPack = JSON.Parse(document.getElementById("packedText").value)
}
