import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
secretMsg=false;
arrOfLog=[];
 toggle_display()
 {
   this.secretMsg=true;
   this.arrOfLog.push(this.arrOfLog.length+1);
 }

}
