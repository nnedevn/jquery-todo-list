$('#newNote').click((e) => {
  $('.notes').append(appendNote());
  addHandlers();
  console.log(e);
})

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
    checkbox.siblings('p').addClass('strike');
  } else {
    checkbox.siblings('p').removeClass('strike');
  }
}

function appendNote() {
  let noteContent = $('#note-content').val();
  let strToAppend = `<div class="note"><input type="checkbox" class="strike-through"><p class "note-text"> ${noteContent}  </p><input type="button" class="eraseNote" value="X"></div>`
  console.log(strToAppend);
  return strToAppend;
}
