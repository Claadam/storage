var input = $("smol_apple")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    console.log("hi");
  }
})

onNewValue("smol_apple", function(value) {
  $("#value-output").html(value)
})