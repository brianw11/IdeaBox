
var titleInput = document.querySelector('.input');
var bodyInput = document.querySelector('#body');
var saveButton = document.querySelector('.save');
// var thingsToShow = document.querySelector('.container-bottom');
var deleteButton = document.querySelector('.delete-button');
var quality = document.querySelector('.quality');

delete
saveButton.addEventListener('click', addCard);


$('.container-bottom').on('click', '.delete-button', deleteCard);
$('.container-bottom').on('click', '.upvote', upvoteChange);
$('.container-bottom').on('click', '.downvote', downVoteChange);

function MakeCard(title, body, ideaQuality) {
  this.title = title;
  this.body = body;
  this.ideaQuality = ideaQuality || 0;
  this.qualityDisplay = ['quality: swill', 'quality: plausible', 'quality: genius'];

}

// function that creates card and pulls id, title, body, description

// MakeCard.prototype.prepend = function() {
//   var title = titleInput.value;
//  var body = bodyInput.value;
//  var ideaCard = document.createElement('article');
//   ideaCard.innerHTML = `
//   <article class="cards" >
//      <h4 contenteditable="true" id="TEST" class="header">${title}
//       <img class="delete-button header" id="delete" src="FEE-ideabox-icon-assets/delete.svg" alt="">
//      </h4>

//      <p contenteditable="true" id=${Date.now} class="description">${body}</p>
//      <div class="quality-line">
//      <img class="upvote" src="FEE-ideabox-icon-assets/upvote.svg" alt="">
//      <img class="downvote" src="FEE-ideabox-icon-assets/downvote.svg" alt="">
//      <p class="quality" id=${Date.now}>quality:swill</p>
//      </div>
//    </article>
//   `;
// }


function addCard(obj) {
 var title = titleInput.value;
 var body = bodyInput.value;
 var ideaCard = document.createElement('article');
  ideaCard.innerHTML = `
  <article class="cards">
     <h4 contenteditable="true" id="${obj.id}" class="header">${obj.title}
      <img class="delete-button header" id="delete" src="FEE-ideabox-icon-assets/delete.svg" alt="">
     </h4>

     <p contenteditable="true" class="description">${obj.body}</p>
     <div class="quality-line">
     <img class="upvote" src="FEE-ideabox-icon-assets/upvote.svg" alt="">
     <img class="downvote" src="FEE-ideabox-icon-assets/downvote.svg" alt="">
     <p class="quality">quality:swill</p>
     </div>
   </article>
  `;
  $('.container-bottom').prepend(ideaCard);
  setStorage();
  clearInput();
}

function clearInput() {
  titleInput.value = '';
  bodyInput.value = '';
}

function deleteCard() {
  // e.preventDefault();
  (this).closest('article').remove();
}

function upvoteChange() {
  if (ideaQuality <= 1) {
    ideaQuality++;
    $(this).closest('.quality-line').find('p')[0].innerHTML = qualityDisplay[ideaQuality];
  }
};

function downVoteChange() {
  if (ideaQuality >= 1) {
    ideaQuality--;
    $(this).closest('.quality-line').find('p')[0].innerHTML = qualityDisplay[ideaQuality];
  }
};


// Local storage //

function setStorage() {
  var titleStorage = document.getElementById("TEST");
  localStorage.setItem("titleStorage", JSON.stringify(titleStorage));
}