
const vehicles = [{ 
  id: 01,
  type: 'car',
  model: 'toyota aygo',
  price: 53,
  transmission: 'manual',
  passengers: '4'
},
{
  id: 02,
  type: 'car',
  model: 'ford focus',
  price: 64,
  transmission: 'automatic',
  passengers: '5'
},
{
  id: 03,
  type: 'car',
  model: 'citroen 2cv',
  price: 30,
  transmission: 'manual',
  passengers: '2'
},
{
  id: 04,
  type: 'car',
  model: 'lamborghini huracan spyder',
  price: 2400,
  transmission: 'manual',
  passengers: '2'
},
{
  id: 05,
  type: 'suv',
  model: 'volvo xc60',
  price: 185,
  transmission: 'manual',
  passengers: '5'
},
{
  id: 06,
  type: 'suv',
  model: 'ford kuga',
  price: 92,
  transmission: 'automatic',
  passengers: '5'
},
{
  id: 07,
  type: 'suv',
  model: 'range rover sport',
  price: 240,
  transmission: 'automatic',
  passengers: '5'
},
{
  id: 08,
  type: 'van',
  model: 'vauxhall vivaro',
  price: 60,
  transmission: 'manual',
  passengers: '3'
},
{
  id: 09,
  type: 'van',
  model: 'renault kangoo',
  price: 50,
  transmission: 'manual',
  passengers: '2'
},
{
  id: 10,
  type: 'carrier',
  model: 'seat alhambra',
  price: 200,
  transmission: 'automatic',
  passengers: '7'
}
]


const filter = document.getElementById('filter')

filter.addEventListener('click', function(){
  displayCards()
  filterType()
  filterTransmission()
  filterPassengers()
})


const cards = document.querySelectorAll('.all')

// Car type variables
// Get value of a checkbox
const valueCar = document.getElementById('cars').value;
const valueSuv = document.getElementById('suv').value;
const valueVan = document.getElementById('van').value;
const valueCarrier = document.getElementById('carrier').value;
// Get checkboxes by type 
const checkboxCar = document.getElementById('cars')
const checkboxSuv = document.getElementById('suv')
const checkboxVan = document.getElementById('van')
const checkboxCarrier = document.getElementById('carrier')
const checkboxAll = document.getElementById('all')
// Select all cards with specific class
const cars = document.querySelectorAll('.cars')
const suv = document.querySelectorAll('.suv')
const van = document.querySelectorAll('.van')
const carrier = document.querySelectorAll('.carrier')

// Transmission type variables 
// Get values from radiobuttons
const valueAuto = document.getElementById('automatic').value
const valueMan = document.getElementById('manual').value
const valueAny = document.getElementById('any').value
// Get radiobuttons by type
const radioAuto = document.getElementById('automatic')
const radioMan = document.getElementById('manual')
const radioAny = document.getElementById('any')
// Select all cards with specific class
const automatic = document.querySelectorAll('.automatic')
const manual = document.querySelectorAll('.manual')
const any = document.querySelectorAll('.any')

// Passengers number variables
// Get values from checkboxes 
const value2 = document.getElementById('2').value
const value3 = document.getElementById('3').value
const value4 = document.getElementById('4').value
const value5 = document.getElementById('5').value
const value7 = document.getElementById('7').value
const valueAllPas = document.getElementById('allpas').value
console.log(value2)
// Get checkboxes by number of passengers
const checkbox2 = document.getElementById('2')
const checkbox3 = document.getElementById('3')
const checkbox4 = document.getElementById('4')
const checkbox5 = document.getElementById('5')
const checkbox7 = document.getElementById('7')
const checkboxAllPas = document.getElementById('allpas')
// Select all cards with specific class 
const pas2 = document.querySelectorAll('.two')
const pas3 = document.querySelectorAll('.three')
const pas4 = document.querySelectorAll('.four')
const pas5 = document.querySelectorAll('.five')
const pas7 = document.querySelectorAll('.seven')
const pasAll = document.querySelectorAll('.allpas')

function filterType(){
  
      for( let i = 0; i < vehicles.length; i++){
        const vehType = vehicles[i].type
      
      if(checkboxCar.checked && vehType == valueCar){
        Cars()
        filterTransmission()
      }else if(checkboxSuv.checked && vehType == valueSuv){
        Suv()
      }else if(checkboxVan.checked && vehType == valueVan){
        Van()
      }else if(checkboxCarrier.checked && vehType == valueCarrier){
        Carrier()
      }
    }
}


function filterTransmission(){
  
    for( let i = 0; i < vehicles.length; i++){
      const tranType = vehicles[i].transmission
    
    if(radioAuto.checked && tranType == valueAuto){
      Automatic()
    }else if(radioMan.checked && tranType == valueMan){
      Manual()
    }else if(radioAny.checked && tranType == valueAny){
      Any()
    }
  }
}

function filterPassengers(){
  for( let i = 0; i < vehicles.length; i++){
    const pasNum = vehicles[i].passengers
    if(checkbox2.checked && pasNum == value2){
      Pas2()
    }else if(checkbox3.checked && pasNum == value3){
      Pas3()
    }else if(checkbox4.checked && pasNum == value4){
      Pas4()
    }else if(checkbox5.checked && pasNum == value5){
      Pas5()
    }else if(checkbox7.checked && pasNum == value7){
      Pas7()
    }
  }
}

// Loop all elements with the class of cars
function Cars(){
  for( let i = 0; i < cars.length; i++){
    cars[i].style.display = 'block'
  }
}
// Loop all elements with the class of suv
function Suv(){
  for( let i = 0; i < suv.length; i++){
    suv[i].style.display = 'block'
  }
}
// Loop all elements with the class of van
function Van(){
  for( let i = 0; i < van.length; i++){
    van[i].style.display = 'block'
  }
}
// Loop all elements with the class of carrier
function Carrier(){
  for( let i = 0; i < carrier.length; i++){
    carrier[i].style.display = 'block'
  }
}

// Loop all elements with the class of automatic
function Automatic(){
  for( let i = 0; i < automatic.length; i++){
    automatic[i].style.display = 'block'
  }
}
// Loop all elements with the class of automatic
function Manual(){
  for( let i = 0; i < manual.length; i++){
    manual[i].style.display = 'block'
  }
}
// Loop all elements with the class of automatic
function Any(){
  for( let i = 0; i < any.length; i++){
    any[i].style.display = 'block'
  }
}
// Loop all elements with the class of 2 
function Pas2(){
  for(let i = 0; i < pas2.length; i++){
    pas2[i].style.display = 'block'
  }
}
// Loop all elements with the class of 3 
function Pas3(){
  for(let i = 0; i < pas3.length; i++){
    pas3[i].style.display = 'block'
  }
}
// Loop all elements with the class of 4
function Pas4(){
  for(let i = 0; i < pas4.length; i++){
    pas4[i].style.display = 'block'
  }
}
// Loop all elements with the class of 5 
function Pas5(){
  for(let i = 0; i < pas5.length; i++){
    pas5[i].style.display = 'block'
  }
}
// Loop all elements with the class of 7 
function Pas7(){
  for(let i = 0; i < pas7.length; i++){
    pas7[i].style.display = 'block'
  }
}


function displayCards(){
  for( let i = 0; i < cards.length; i++){
    if(checkboxCar.checked || checkboxSuv.checked || checkboxVan.checked || checkboxCarrier.checked || radioAuto.checked || radioMan.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked || checkbox5.checked || checkbox7.checked){
        cards[i].style.display = 'none'
      }
      else
        cards[i].style.display = 'block'
      }
    }






// for(let i = 0; i < checkbox.length; i++){
//   checkbox[i].addEventListener('click',
//   filterPosts.bind(this, checkbox[i]))
// }

// function filterPosts(item){
//   changeActivePosition(item)
//   for(let i = 0; i < allCategoryPosts.length; i++){
//       if(allCategoryPosts[i].classList.contains
//           (item.attributes.id.value)){
//               allCategoryPosts[i].style.display = 'block'
//           } else{
//               allCategoryPosts[i].style.display = 'none'
//           }
//   }
// } 

// function changeActivePosition(activeItem){
//   for(let i = 0; i < location_checkbox.length; i++){
//       location_checkbox[i].classList.remove('active2')
//   }
//   activeItem.classList.add('active2')
// } 



// document.addEventListener('change', () => {
//   const checkedValues = [...document.querySelectorAll('.location_checkbox')]
//     .filter(input => input.checked)
//     .map(input => input.value);
//   const filteredStores = stores.filter(({ storeType }) => checkedValues.includes(storeType));
//   console.log(filteredStores);