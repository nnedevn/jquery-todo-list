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

function eraseNote(note) {
  note.parent().fadeOut('slow', function(e) {});
}

function strikeUnstrike(checkbox) {
  if (checkbox[0].checked) {
    checkbox.siblings('label').addClass('strike');
  } else {
    checkbox.siblings('label').removeClass('strike');
  }
}

function appendNote() {
  let noteContent = $('#note-content').val();
  let strToAppend = `<div class="note"><input type="checkbox" class="strike-through"><label class "note-text"> ${noteContent}  </label><input type="button" class="eraseNote" value="X"></div>`
  console.log(strToAppend);
  return strToAppend;
}
