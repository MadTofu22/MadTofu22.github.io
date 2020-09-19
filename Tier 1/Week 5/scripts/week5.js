console.log('js');

let collection = []; //declare blank array
let numOfSearches = 0;

function addToCollection(title, artist, year) {

  //create and return an ablum object
  let album = {
    title,
    artist,
    year
  };
  return album;
}

//add a bunch of albums to test the functions
collection.push(addToCollection('Jessica Rabbit', 'Sleigh Bells', '2016'));
collection.push(addToCollection('Big Grams', 'Phantogram', '2015'));
collection.push(addToCollection('Out of the Blue', 'ELO', '1977'));
collection.push(addToCollection('Automaton', 'Jamiroquai', '2017'));
collection.push(addToCollection('Eyelid Movies', 'Phantogram', '2010'));
collection.push(addToCollection('Xanadu', 'ELO', '1980'));
collection.push(addToCollection('Three', 'Phantogram', '2016'));
collection.push(addToCollection('Eldorado', 'ELO', '1974'));
collection.push(addToCollection('Alone in the Universe', 'ELO', '2015'));
collection.push(addToCollection('Three', 'The Necks', '2020'));

//check to make sure albums were added correctly
console.log(collection);
for (let record of collection) {
  console.log(record);
}

function findRecord(title) {

  //stretch goal 1: find an album in collection by its name
  for (let index in collection) {
    if (collection[index].title === title) {
      return index;
    }
  }
  return false;
}

//test findRecord function
console.log('what index is Automaton?', findRecord('Automaton'));
console.log('what index is Eyelid Movies?', findRecord('Eyelid Movies'));

function allBy(artist=null) {

  //stretch goal 2: return an array of all the albums by an artist
  let tempArr = [];

  for (let record of collection) {
    if (record.artist === artist) {
      tempArr.push(record);
    }
  }
  return tempArr;
}

//test the allBy function
let phantogram = allBy('Phantogram');
console.log(phantogram);
let elo = allBy('ELO');
console.log(elo);

function search(criteria=null) {

  //stretch goal 3: return an array of all albums that match the search criteria
  let results = [];

  if (criteria === null) { //return the entire collection if no criteria is listed
    return collection;
  }
  else {
    let criteriaList = Object.keys(criteria);

    for (let album of collection) {//itterate through collection
      let matches = 0;

      for (let prop of criteriaList) { //check each criteria that was passed
        if (album[prop] === criteria[prop]) {
          matches++; //increase the number of criteria that matches
        }
        else if (criteria[prop] === ""){ //count empty user search as a pass
          matches++;
        }
      }
      if (matches === criteriaList.length) { //check that the album matches all criteria then add it to the results array
        results.push(album);
      }
    }
  }
  return results;
}

//test the search function
console.log(search());
console.log(search({artist: 'ELO'}));
console.log(search({year: 2015}));
console.log(search({title: 'Three'}));
console.log(search({artist: 'ELO', year: 2015}));
console.log(search({title: 'Three', year: 2020}));
console.log(search({artist: 'ELO', title: 'Eldorado', year: 1974}));

function userAddAlbum() { //allow the user to add an album to the collecitons array

  let album = collectUserInput();

  if (validInput(album)) {
    collection.push(addToCollection(album.title, album.artist, album.year)); //add the user input to collections as an album
    clearInput();
  }
  else {
    alertText = generateAlert(album);
    alert(alertText);
  }
}

function userSearchCollection() { //allow the user to search the albums in collections and display the results on the html page.

  let criteria = collectUserInput();
  let results = search(criteria); //gather the results

  if (numOfSearches > 0) {
    clearResults();
  }
  numOfSearches++;
  displaySearchResults(results);
  clearInput();
}

function displaySearchResults(resultArray) {//displays the search results in the html file

  let section = document.getElementById('search_results');
  let header = createResultsHeader(resultArray);
  let results = createResultsList(resultArray);

  section.appendChild(header);
  section.appendChild(results);
}

function clearInput() {//clear the values so the user can enter another input

  document.getElementById('artist').value = "";
  document.getElementById('title').value = "";
  document.getElementById('year').value = "";
}

function collectUserInput() {//get the user input after they submit and return as an album object

  let userArtist = document.getElementById('artist').value;
  let userTitle = document.getElementById('title').value;
  let userYear = document.getElementById('year').value;

  let album = { //create the search object
    artist: userArtist,
    title: userTitle,
    year: userYear
  };

  return album;
}

function validInput(input) {//Checks to make sure the user entered all 3 album properties

  let hasArtist = input.artist ? true : false;
  let hasTitle = input.title ? true : false;
  let hasYear = input.year ? true : false;

  if (hasArtist && hasTitle && hasYear) {
    return true;
  }
  else {
    return false;
  }
}

function generateAlert(input) {//checks which values are missing and formats the alert text

  let alertText = 'Missing Info:';

  if (!input.artist) {
    alertText += ' Artist;';
  }
  if (!input.title) {
    alertText += ' Album Title;';
  }
  if (!input.year) {
    alertText += ' Release Year;'
  }
  return alertText;
}

function clearResults() {//clears the previous search results

  let header = document.getElementById('results_header');
  let list = document.getElementById('results_list');

  header.remove();
  list.remove();
}

function createResultsHeader(results) {//creates the h3 element after the user submits a search request

  //create the header element
  let headerElement = document.createElement('h3');
  let headerText = results.length ? 'Search Results!' : 'No Results Found!';

  //add info to the header element
  headerElement.appendChild(document.createTextNode(headerText));
  headerElement.setAttribute('id', 'results_header');

  //add the header to the results sections
  return headerElement;
}

function createResultsList(results) {//create the UL and LI elements after the user submits a search request

  //create the UL element
  let list = document.createElement('UL');
  list.setAttribute('id', 'results_list');

  for (let album of results) {//itterate through the results and add the list item
    //create new LI and string for each album
    let listItem = document.createElement('LI');
    let albumString = `${album.title} by ${album.artist}, released in ${album.year}`;

    //add LI and string to the UL element
    listItem.appendChild(document.createTextNode(albumString));
    list.appendChild(listItem);
  }
  return list;
}
