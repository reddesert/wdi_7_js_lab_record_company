// This is basically all Tom's code, I used it to try and get it working initially
// and planned on writing my own, but I fell asleep before i could get around to
// completing it. I don't expect that this will be graded as part of my work.

RCApp.Album = function(name, artistName, description, year){
  this.name = name;
  this.artistName = artistName// document.getElementById("artist-name").selectedIndex
  this.description = description;
  this.year = year;
  this.id = RCApp.Album.next();

  this.viewEl = document.createElement('div');

  this.nameEl = document.createElement('span');
  this.nameEl.innerHTML = this.name;

  this.descEl = document.createElement('input');
  this.descEl.setAttribute('id', 'desc-album-' + this.id);
  this.descEl.setAttribute('placeholder', this.description);
  this.descEl.style.display = 'none';

  this.showButton = document.createElement('button');
  this.showButton.setAttribute('id', 'show-album-' + this.id);
  this.showButton.innerHTML = 'Show';

  this.deleteButton = document.createElement('button');
  this.deleteButton.setAttribute('id', 'delete-album-' + this.id);
  this.deleteButton.innerHTML = 'Delete';

  this.saveButton = document.createElement('button');
  this.saveButton.setAttribute('id', 'save-album-' + this.id);
  this.saveButton.innerHTML = 'Save';
  this.saveButton.style.display = 'none';

  this.cancelButton = document.createElement('button');
  this.cancelButton.setAttribute('id', 'cancel-album-' + this.id);
  this.cancelButton.innerHTML = 'Cancel';
  this.cancelButton.style.display = 'none';

  this.viewEl.setAttribute('id', 'album-view-' + this.id);
  this.viewEl.appendChild(this.nameEl);
  this.viewEl.appendChild(this.descEl);
  this.viewEl.appendChild(this.showButton);
  this.viewEl.appendChild(this.deleteButton);
  this.viewEl.appendChild(this.saveButton);
  this.viewEl.appendChild(this.cancelButton);
}


RCApp.Album.prototype.view = function(){
  var el = document.createElement('li');
  el.setAttribute('id', 'album-' + this.id);
  el.appendChild(this.viewEl);
  return el;
};

RCApp.Album.prototype.show = function(){
  this.descEl.style.display = 'inline';
  this.saveButton.style.display = 'inline';
  this.cancelButton.style.display = 'inline';

  this.showButton.style.display = 'none';
  this.deleteButton.style.display = 'none';
};

// Counter function to get the next value of a counter
// RCApp.Album.next();
RCApp.Album.next = (function(){
  var counter = 0;
  return function(){
    counter += 1;
    return  counter
  }
