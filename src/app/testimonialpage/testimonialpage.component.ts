import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonialpage',
  standalone: true,
  imports: [],
  templateUrl: './testimonialpage.component.html',
  styleUrl: './testimonialpage.component.css'
})
export class TestimonialpageComponent {
  ngOnInit(){
    this.reset()
    this.adjust()
    this.change(0)
  }

  counter = 0;
  
  reset(){
    
    const customer3 = document.getElementById("customer3");
    
    customer3 && [customer3.style.border = '2px solid red']
  
  }
  
  next(){
    if (this.counter == 0) {
      this.change(1)
      this.counter++
    } else if(this.counter == 1){
      this.change(2)
      this.counter++
    }else if(this.counter == 2){
      this.change(0)
      this.counter = 0
    }
  }
  
previous(){
    if (this.counter == 0) {
      this.change(1)
      console.log(1)
      this.counter++
    } else if(this.counter == 1){
      this.change(2)
      console.log(2)
      this.counter++
    }else if(this.counter == 2){
      this.change(0)
      console.log(0)
      this.counter = 0
    }
  };

  adjust(){
  const selector1 = document.getElementById('selector1')
  selector1&&[selector1.style.backgroundColor='#f53838']
  }
  
  change(id:number){
    console.log('change')
    const customer1 = document.getElementById("customer1");
    const customer2 = document.getElementById("customer2");
    const customer3 = document.getElementById("customer3");

    const selector1 = document.getElementById('selector1')
    const selector2 = document.getElementById('selector2')
    const selector3 = document.getElementById('selector3')
    let screenwidth = window.innerWidth
    console.log(screenwidth)
 

    if(screenwidth < 992){
      if(id==0){
        customer1&& [customer1.style.left= `200%`] 
        customer2&&[customer2.style.left = `100%`]
        customer3&&[customer3.style.left = `0%`]
    
        selector1&&[selector1.style.backgroundColor='#f53838']
        selector2&&[selector2.style.backgroundColor='#dee0e0']
        selector3&&[selector3.style.backgroundColor='#dee0e0']
        
        customer3&& [customer3.style.border = '2px solid #f53838']
        customer2&& [customer2.style.border ='2px solid #76787a']
        customer1&& [customer1.style.border ='2px solid #76787a']
    
      }else if(id==1){
     
        customer1&&[customer1.style.left= `100%`]
        customer2&&[customer2.style.left = `0%`]
        customer3&&[customer3.style.left = `200%`]
    
        selector2&&[selector2.style.backgroundColor='#f53838']
        selector1&&[selector1.style.backgroundColor='#dee0e0']
        selector3&&[selector3.style.backgroundColor='#dee0e0']
    
        customer2&&[customer2.style.border = '2px solid #f53838']
        customer3&&[customer3.style.border ='2px solid #76787a']
        customer1&&[customer1.style.border ='2px solid #76787a']
      }else if(id ==2){
        customer1&&[customer1.style.left= `0%`]
        customer2&&[customer2.style.left = `200%`]
        customer3&&[customer3.style.left = `100%`]
    
        selector3&&[selector3.style.backgroundColor='#f53838']
        selector1&&[selector1.style.backgroundColor='#dee0e0']
        selector2&&[selector2.style.backgroundColor='#dee0e0']
    
        customer1&&[customer1.style.border = '2px solid #f53838']
        customer2&&[customer2.style.border ='2px solid #76787a']
        customer3&&[customer3.style.border ='2px solid #76787a']
    
      }
  
  
    }else{
  
      if(id==0){
        customer1&&[customer1.style.left= `90%`]
        customer2&&[customer2.style.left = `45%`]
        customer3&&[customer3.style.left = `0%`]
        
        selector1&&[selector1.style.backgroundColor='#f53838']
        selector2&&[selector2.style.backgroundColor='#dee0e0']
        selector3&&[selector3.style.backgroundColor='#dee0e0']
        
        customer3&&[customer3.style.border = '2px solid #f53838']
        customer2&&[customer2.style.border ='2px solid #76787a']
        customer1&&[customer1.style.border ='2px solid #76787a']
    
      }else if(id==1){
        customer1&&[customer1.style.left= `45%`]
        customer2&&[customer2.style.left = `0%`]
        customer3&&[customer3.style.left = `90%`]
    
        selector2&&[selector2.style.backgroundColor='#f53838']
        selector1&&[selector1.style.backgroundColor='#dee0e0']
        selector3&&[selector3.style.backgroundColor='#dee0e0']
    
        customer2&&[customer2.style.border = '2px solid #f53838']
        customer3&&[customer3.style.border ='2px solid #76787a']
        customer1&&[customer1.style.border ='2px solid #76787a']
      }else if(id ==2){
        customer1&&[customer1.style.left= `0%`]
        customer2&&[customer2.style.left = `90%`]
        customer3&&[customer3.style.left = `45%`]
    
        selector3&&[selector3.style.backgroundColor='#f53838']
        selector1&&[selector1.style.backgroundColor='#dee0e0']
        selector2&&[selector2.style.backgroundColor='#dee0e0']
    
        customer1&&[customer1.style.border = '2px solid #f53838']
        customer2&&[customer2.style.border ='2px solid #76787a']
        customer3&&[customer3.style.border ='2px solid #76787a']
    
      }
    }
  }
  
}
