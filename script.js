var input = $("#value-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    console.log("hi");
    storeValue("little_apple", valueToSave);
    console.log(valueToSave)
  }
})

onNewValue("little_apple", function(value) {
  $("#value-output").html(value)
})