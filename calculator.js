$(document).ready(function() {
  var ops = ["+", "-", "/", "*", ".", "%"];
  var countPunts = 0;
  var equalClicked = false;

  // Equal helper function
  function eqHelper() {
    if (equalClicked === true) {
      $("#res").text("");
      equalClicked = false;
    }
  }

  // Remove Last One
  $("#c").click(function() {
    if ($("#res").text().slice(-1) === "." && countPunts === 1) {
      countPunts = 0;
    }
    var resSplit = $("#res").text().split("");
    var resLength = $("#res").text().length - 1;
    console.log(resSplit);
    console.log(resLength);
    $("#res").text(resSplit.splice(-0, resLength).join(""));
    if ($("#res").text() === "") {
      $("#res").text("0");
    }
  });

  function chekOperators(x) {
    var lastChar = $("#res").text().slice(-1);

    if (equalClicked === true) {
      equalClicked = false;
    }

    for (var i = 0; i < ops.length; i++) {
      if (ops[i] === lastChar) {
        var resText = $("#res").text().split("").splice(resLength, 1);
        console.log(resText);
        $("#res").text(resText);
      }
    }
  }

  // Operators
  $("#eq").click(function() {
    if (equalClicked === false) {
      $("#res").text(eval($("#res").text()));
      equalClicked = true;
    }
  });

  $("#plus").click(function() {
    chekOperators("+");
    $("#res").text($("#res").text() + "+");
    // chekOperators();
  });

  $("#minus").click(function() {
    chekOperators();
    if ($("#res").text() === "0") {
      $("#res").text("");
    }
    $("#res").text($("#res").text() + "-");
  });

  $("#divide").click(function() {
    chekOperators();
    $("#res").text($("#res").text() + "/");
  });

  $("#multiply").click(function() {
    chekOperators();
    $("#res").text($("#res").text() + "*");
  });

  $("#punt").click(function() {
    chekOperators();
    if (countPunts != 1) {
      $("#res").text($("#res").text() + ".");
      countPunts = 1;
    }
  });

  function checkZero() {
    if ($("#res").text() === "0" || $("#res").text() === "Error") {
      $("#res").text("");
    }
  }

  // Clear all
  $("#ac").click(function() {
    $("#res").text("0");
    countPunts = 0;
    equalClicked = false;
  });

  // Numbers
  $("#nine").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 9);
  });

  $("#eigth").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 8);
  });

  $("#seven").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 7);
  });

  $("#six").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 6);
  });

  $("#five").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 5);
  });

  $("#four").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 4);
  });

  $("#three").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 3);
  });

  $("#two").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 2);
  });

  $("#one").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 1);
  });

  $("#zero").click(function() {
    checkZero();
    eqHelper();
    $("#res").text($("#res").text() + 0);
  });
});
