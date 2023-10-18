import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {
   joinyear : any;
   currentyear: any;
   experience: any;
  transform(value: any): any {
    this.joinyear = new Date(value).getFullYear();
    this.currentyear = new Date().getFullYear();
    this.experience = this.currentyear - this.joinyear;
    return this.experience+ " Years";
  }

}
