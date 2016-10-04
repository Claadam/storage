var input = $("3.14159265358979323846")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    console.log("hi");
  }
})

onNewValue("3.141592653589793238462643383", function(value) {
  $("#value-output").html(value)
})