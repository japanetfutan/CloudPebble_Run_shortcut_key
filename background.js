(function(){
  var type = 'down';  // "press", "down" or "up"
  $('body').gpKey(type, {
    // "a": function() { /* code for "A" */ },
    "^r": function() {
      /* code for "Ctrl(Command) + R" */
      $('.run-btn').click();
    },
    // "&a": function() { /* code for "Alt + A" */ },
    // "A": function() { /* code for "Shift + A" */ },
    // "^&A": function() { /* code for "Ctrl + Alt + Shift + A" */ },
  });
})();
