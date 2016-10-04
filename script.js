var input = $("#value-output")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("little_apple", valueeeee);
    console.log(little_apple)
  }
})

onNewValue("little_apple", function(value) {
  $("#value-output").html(value)
})