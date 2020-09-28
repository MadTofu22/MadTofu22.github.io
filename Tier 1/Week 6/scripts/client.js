const maxGarageSpaces = 5;
let garage = [];
let garageValue = 0;

newCar(2013, 'Ford', 'F150', '23000', 'https://ford-h.assetsadobe.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2020/collections/dm/19_frd_f15_ps34_xl_cc5_sport_abgy.tif?croppathe=1_21x9&wid=900');
newCar(2020, 'Tesla', 'Roadster', '50000', 'https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/9120-2020-tesla-roadster');

$( document ).ready(function() {

  console.log(this.title, 'has loaded successfully.');
  displayGarage();
  displayGarageValue();
  $( '#info_submit' ).on('click', addToGarage);
  $( '.view_button' ).on('click', function (event) {
    let carId = event.target.id;
    viewCarImage(carId);
  });
});

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput, costInput, urlInput) {

  console.log('in newCar:', yearInput, makeInput, modelInput, costInput, urlInput);
  const newCarObject = {
    year: yearInput,
    make: capFirstLetter(makeInput),
    model: capFirstLetter(modelInput),
    cost: parseInt(costInput, 10),
    url: urlInput
  }
  garage.push(newCarObject);
  return true;
}
//end newCar

function addToGarage() {

  //check if garage is FULL
  if (garage.length === maxGarageSpaces) {
    disableInputs();
    alert('The garage is full.');
    return false;
  }
  else {
    if(validateForm()) {
      let year = $( '#inputYear' ).val();
      let make = $( '#inputMake').val();
      let model = $( '#inputModel' ).val();
      let cost = $( '#inputCost' ).val();
      let url = $( '#inputURL' ).val();

      console.log('in addToGarage():', make, model, year, cost, url);

      newCar(year, make, model, cost, url);
      displayGarageValue();

      $( '.info_field' ).val('');
      $( '#garage_list' ).append(addCarToList(garage[garage.length-1]));
      $( '.view_button' ).on('click', function (event) {
        let carId = event.target.id;
        animateCarImage(carId);
      });
      return false;
    }
    else {
      alert("Please fill in all required fields and resubmit.");
      return false;
    }
  }
}

function validateForm() {

  let numOfPasses = 0;
  let inputList = $( ".info_field" );

  inputList.each(index => {

    let input = inputList[index];
    if (validateInput(input)) {
      numOfPasses++;
    }
  });

  //console.log("in validateForm, numOfPasses:", numOfPasses);

  if(numOfPasses === inputList.length) {
    return true;
  }
  else {
    return false;
  }
}

function validateInput(inputEle) {

  let isRequired = $( inputEle ).prop("required");
  let inputVal = $( inputEle ).val();

  //console.log("in validateInput, isRequired:", isRequired, "inputVal:", inputVal);

  if(isRequired) {
    if(inputVal !== "") {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return true;
  }
}

function displayGarage() {

  let listItemsHtml = ``;
  let ul = ``;
  //update garage spaces h4 element
  updateAvailableSpaces($( "#garage_spaces" ));

  //add each car to the listItemsHtml string
  for (let car of garage) {
    listItemsHtml += addCarToList(car);
  }
  ul = `<ul id="garage_list">${listItemsHtml}</ul>`
  console.log('ul', ul);
  $( '#garage_list' ).replaceWith(ul);

  //console.log('in displayGarage, listItemsHtml:', listItemsHtml, 'ul:', ul);
}

function updateAvailableSpaces(ele) {

  //updates the $( "#garage_spaces" ) h4 element
  let text = ``;
  let color = null;
  let openSpaces = maxGarageSpaces - garage.length;

  if (openSpaces === maxGarageSpaces) {
    text += `The garage is EMPTY.`
    color = "#00ff66";
  }
  else if (openSpaces === 0) {
    text += `The garage is FULL.`;
    color = "#ff0000";
    disableInputs();
  }
  else {
    text += `${openSpaces} spaces available.`;
  }
  $( ele ).replaceWith(`<h4 id="garage_spaces">${text}</h4>`);
  flashText($('#garage_spaces'), color);
  //console.log('in genAvailableSpaces, text:', text);
}

function flashText(ele, color) {

  ele.attr('style', `color: ${color}`);
  ele.fadeOut(1000);
  ele.fadeIn(1000);
  ele.fadeOut(1000);
  ele.fadeIn(1000);
}

function addCarToList(car) {

  let text = ``;
  //let urlText = ``; //will use for view/hide image button
  let imageText = ``;
  let buttonText = ``; //will use for view/hide image button

  text += `${car.year} ${car.make} ${car.model} bought for $${addCommasToNum(car.cost.toString())}.`;

  //add check for car.imageURL and add a button to view the image
  if (car.url) {
    imageText += `<br><img src="${car.url}" id="${garage.indexOf(car)}" class="car_image" alt="Picture of ${car.make} ${car.model}." width="0" height="0">`;
    buttonText += `<input type="submit" id="${garage.indexOf(car)}" class="view_button" value="View Car">`;
  }

  return `<li>${text}${buttonText}</li>${imageText}`;
}

function updateGarageValue() {

  garageValue = 0;

  for (let car of garage) {
    garageValue += car.cost;
  }
  console.log('in updateGarageValue, garageValue:', garageValue);
}

function displayGarageValue() {

  //init vars
  let html = ``;
  let value = ``;

  //update value and format
  updateGarageValue();
  value = addCommasToNum(garageValue.toString());

  //populate new data on html
  html += `<p id="garage_value">Total Garage Value: $${value}</p>`;
  if ($( '#garage_value' ).length === 0) { //prepends for initial run
    $( 'body' ).prepend(html);
    console.log('in displayGarageValue prepend');
  }
  else {
    $( '#garage_value' ).replaceWith(html);
  }
}

function disableInputs() {

  $( '.info_field' ).attr('disabled', true);
  $( '#info_submit' ).attr('disabled', true);
}

function capFirstLetter(string) {

  let newString = '';

  for (let index in string) {
    if (index === '0') {
      let firstLetter = string.charAt(index);
      newString = newString + firstLetter.toUpperCase();
      //console.log('first letter', firstLetter.toUpperCase());
    }
    else {
      newString += string.charAt(index);
    }
    //console.log('in capFirstLetter, newString:', newString, 'index', index);
  }
  return newString;
}

function addCommasToNum(string) {

  let numOfDigits = string.length;
  let newString = '';

  if (numOfDigits > 3){
    let numOfCommas = Math.floor(numOfDigits/3);
    let numOfPreCommaDigits = numOfDigits%3;
    let threeCount = 0;
    let index = 0;

    if (numOfPreCommaDigits === 0) {
      numOfCommas--;
    }

    let newLength = numOfDigits + numOfCommas;

    //console.log('in addCommasToNum, numOfDigits:', numOfDigits, 'newLength:', newLength);

    for (let i=0; i < newLength; i++) {
      if (i < numOfPreCommaDigits){
        newString += string.charAt(index);
        index++;
      }
      else if ((i === numOfPreCommaDigits && i !== 0) || threeCount === 3){
        newString += ',';
        threeCount = 0;
      }
      else {
        newString += string.charAt(index);
        index++;
        threeCount++;
      }
      //console.log('in addCommasToNum loop, i', i, 'index:', index, 'threeCount:', threeCount, 'newString:', newString);
    }
    return newString;
  }
  else {
    return string;
  }
}

function viewCarImage(carId) {

  let image = `#${carId}.car_image`;
  let css = {
    width: '100%',
    height: 'auto',
    opacity: '1'
  };

  $( image ).animate(css, 1000);
  $( image ).slideDown(1000);
}
