
let addlocation = document.getElementById('addlocation');
 let cookiesProfiles = document.getElementById('cookiesProfiles');
let articleElement = document.createElement('article');
cookiesProfiles.appendChild(articleElement);
let tableelement = document.createElement('table');
articleElement.appendChild(tableelement).classList.add("tab1")
//###################################################
time = ['location/time','6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm ', 'daily total: '];

column = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
count = 0
//###################################################
//#####################################################
function header (){

  let row_1 = document.createElement('tr')
  tableelement.appendChild(row_1)
  for (let i=0;i<time.length;i++){
  let th_1 = document.createElement('th')
  th_1.textContent = time[i]
  row_1.appendChild(th_1)
  }
};
  
  //###################################################
//#####################################################
  //#################################
  function footer(){
    let row_2 = document.createElement('tr')
  tableelement.appendChild(row_2)
  
  let th_1 = document.createElement('th')
   th_1.textContent = 'total'
  row_2.appendChild(th_1)
  
  for (let i = 1; i < time.length; i++) {
    
    let td_1 = document.createElement('td');
    td_1.textContent =  column[i] ;
    row_2.appendChild(td_1);
  }
}
//###################################################
//#####################################################
  //################################
function cookie(name, min, max, avg) {
  
  this.location = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.rand = 0;
  this.random = 0;
}
//###################################################

cookie.prototype.randm = function () {
  this.rand = Math.floor(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.avg)
  this.total += this.rand
  return this.rand
};
//###################################################

//###################################################

cookie.prototype.render = function () {
  count++
let row_2 = document.createElement('tr')
tableelement.appendChild(row_2).classList.add("ta1")

let th_1 = document.createElement('th')
 th_1.textContent = this.location
row_2.appendChild(th_1)
  for (let i = 1; i < time.length; i++) {
    if (i ==time.length - 1) {
      column[i] += this.total
      let td_1 = document.createElement('td');
    td_1.textContent =  this.total;
    row_2.appendChild(td_1);
      break
    }
    this.random = this.randm()
    column[i] += this.random
    let td_1 = document.createElement('td');
    td_1.textContent =  this.random ;
    row_2.appendChild(td_1);
  }
}
//###################################################
//#####################################################
let seattle = new cookie('seattle', 23, 65, 6.3)
let tokyo = new cookie('tokyo', 3, 24, 1.2)
let Dubai = new cookie('Dubai', 11, 38, 3.7)
let Paris = new cookie('Paris', 20, 38, 2.3)
let lima = new cookie('lima', 2, 16, 4.6)
city=[seattle,tokyo,Dubai,Paris,lima]
header()

for(let i =0;i<city.length;i++){
  city[i].render()
}
footer()
//###################################################
//#####################################################
addlocation.addEventListener('submit',submitHandler);

function submitHandler  (event) {
  event.preventDefault(); // Stop refreshing
  let namelocation = event.target.locationname.value;
  let numbermin = parseInt(event.target.minnumber.value);
  let numbermax = parseInt(event.target.maxnumber.value);
  let numberavg = parseInt(event.target.avgnumber.value);
  let new_location = new cookie(namelocation, numbermin, numbermax,  numberavg)
  addlocation.reset();
  new_location.render();
  tableelement.removeChild(tableelement.childNodes[count]);
  footer()
  
}







//###################################################
//###################################################



//  let imgElement =  document.createElement('img');
//     // imgElement.src = this.imageSrc;
//     imgElement.setAttribute('src', this.imageSrc)
//     articleElement.appendChild(imgElement);

//     let aTag = document.createElement('a');
//     aTag.href = '#';
//     aTag.textContent = 'test';
//     articleElement.appendChild(aTag);
// const cookies = {
//   arrn: [],


//   name_of_city: ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'],//Location

//   time: ['6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm ', 'total: '],

//   mi_mx: [[23, 65, 6.3], [3, 24, 1.2], [11, 38, 3.7], [20, 38, 2.3], [2, 16, 4.6]],// Min / Cust ,Max / Cust,Avg Cookie / Sale

//   sumf: function (arr, n) { // calculate the last raw for every location total number
//     let sum = 0;
//     for (let p = n; p < arr.length; p++) {
//       sum += arr[p]
//     }
//     return sum;
//   },

//   randm: function (max_min) {
//     return Math.floor(Math.floor(Math.random() * (max_min[1] - max_min[0] + 1) + max_min[0]) * max_min[2])
//   },

//   render: function () {




//     for (let j = 0; j < this.name_of_city.length; j++) {
//       let ulElement = document.createElement('ul');
//       articleElement.appendChild(ulElement);
//       let liElement = document.createElement('h2');
//       liElement.textContent = this.name_of_city[j];
//       ulElement.appendChild(liElement);

//       for (let i = 0; i < this.time.length; i++) {
//         if (i == this.time.length - 1) {
//           let liElement = document.createElement('li');
//           liElement.textContent = this.time[i] + this.sumf(this.arrn, j * 15) + 'cookies';
//           ulElement.appendChild(liElement);
//           break
//         }
//         let rand = this.randm(this.mi_mx[j])
//         this.arrn.push(rand)
//         let liElement = document.createElement('li');
//         liElement.textContent = this.time[i] + rand + 'cookies';
//         ulElement.appendChild(liElement);
//       }

//     }
//   }
// }
// cookies.render();