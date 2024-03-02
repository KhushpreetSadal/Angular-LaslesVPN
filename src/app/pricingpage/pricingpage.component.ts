import { Component } from '@angular/core';

@Component({
  selector: 'app-pricingpage',
  standalone: true,
  imports: [],
  templateUrl: './pricingpage.component.html',
  styleUrl: './pricingpage.component.css'
})
export class PricingpageComponent {
ngOnInit(){
  this.reset()
}

reset(){
  let freeplan = document.getElementById('free')
  let standardplan = document.getElementById('standard')
  let premiumplan = document.getElementById('premium')

  freeplan&&[freeplan.style.border ='2px solid #dddddd']
  standardplan&&[standardplan.style.border ='2px solid #dddddd']
  premiumplan&&[premiumplan.style.border ='2px solid #f53838']
}

select(id:number){
  let freeplan = document.getElementById('free')
  let standardplan = document.getElementById('standard')
  let premiumplan = document.getElementById('premium')

  if(id == 1){
    freeplan&& [freeplan.style.border = '2px solid #f53838']
    standardplan&&[standardplan.style.border ='2px solid #dddddd']
    premiumplan&&[premiumplan.style.border ='2px solid #dddddd']

  }else if(id==2){

    freeplan&&[freeplan.style.border ='2px solid #dddddd']
    standardplan&&[standardplan.style.border = '2px solid #f53838']
    premiumplan&&[premiumplan.style.border ='2px solid #dddddd']
  }else if(id==3){
    this.reset()
  }
}

}
