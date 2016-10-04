var input = $("#value-output")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    console.log("hi");
    storeValue("little_apple", value);
    console.log(value)
  }
})

onNewValue("little_apple", function(value) {
  $("#value-output").html(value)
})