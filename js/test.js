for (var i = 0; i < 100; i++) {
    var hex = i.toString(16);
    var a = "u{" + hex + "}";
    console.log(String("\\" + a));
}