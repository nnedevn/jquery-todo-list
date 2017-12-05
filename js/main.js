$(function() {
    /*
    Adds an event handler to the addNote button.
     */
  $('#newNote').click((e) => {
    $('.notes').append(appendNote());
    addHandlers();
  });
  /*
     Adds a new handler to the newly created notes
   */
  function addHandlers() {
    //ereaseNote handler
    $('.eraseNote').on('click', function(e) {
      eraseNote($(this));
    });

    $('.strike-through').on('click', function(e) {
      strikeUnstrike($(this));
    });
  }
/*  Takes in the clicked the X button and fades out the note
 */
  function eraseNote(note) {
    note.parent().fadeOut('slow', function(e) {});
  }
/*
    Takes in the clicked ckeckbox and applies a line-through class on checked, removes on unchecked
 */
  function strikeUnstrike(checkbox) {
    if (checkbox[0].checked) {
      checkbox.siblings('label').addClass('strike');
    } else {
      checkbox.siblings('label').removeClass('strike');
    }
  }
/*
    Reads the current value of the input field and generates the html for the new note.
 */
  function appendNote() {
    let noteContent = $('#note-content').val();
    let strToAppend = `<div class="note"><input type="checkbox" class="strike-through"><label class "note-text"> ${noteContent} </label><input type="button" class="eraseNote" value="X"></div>`
    console.log(strToAppend);
    return strToAppend;
  }
})();
