
    

const cookies = {
   arrn:[],
  
   
    name_of_city: ['Seattle','Tokyo', 'Dubai', 'Paris', 'Lima'],//Location

    time:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','total: '],
    
    mi_mx :[[23,65,6.3],[3,24,1.2],[11,38,3.7],[20,38,2.3],[2,16,4.6]],// Min / Cust ,Max / Cust,Avg Cookie / Sale

    sumf : function(arr,n){ // calculate the last raw for every location total number
        let sum =0;
        for (let p = n;p<arr.length;p++){
            sum+=arr[p]
        }
        return sum; 
       },
       
       randm:function(max_min){
        return  Math.floor( Math.floor(Math.random() * (max_min[1] - max_min[0] + 1) + max_min[0])*max_min[2])
       },
    
    render: function() {let articleElement = document.createElement('article');
    cookiesProfiles.appendChild(articleElement);

    
    
    for(let j = 0; j < this.name_of_city.length; j++) {
        let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
      let liElement = document.createElement('h2');
      liElement.textContent = this.name_of_city[j];
      ulElement.appendChild(liElement);

      for ( let i =0 ; i<this.time.length;i++){
          if (i==this.time.length-1){
            let liElement = document.createElement('li');
            liElement.textContent = this.time[i]+this.sumf(this.arrn,j*15)+'cookies';
            ulElement.appendChild(liElement);
            break
          }
          let rand = this.randm(this.mi_mx[j])
          this.arrn.push(rand)
                let liElement = document.createElement('li');
              liElement.textContent = this.time[i]+rand+'cookies';
              ulElement.appendChild(liElement);
            }
            
    }
}
}
    cookies.render();