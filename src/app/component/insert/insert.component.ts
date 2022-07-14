// import { Component, OnInit } from '@angular/core';
import { InsertService } from 'src/app/services/insert-service/insert.service';
import { Component } from '@angular/core';



// @Component({
//   selector: 'app-insert',
//   templateUrl: './insert.component.html',
//   styleUrls: ['./insert.component.scss']
// })
// export class InsertComponent implements OnInit {

//   constructor(private insertServ: InsertService) { }

//   ngOnInit(): void {
//   }

//   getDatas(){
//     const lng = document.getElementById('lng');
//     const lat = document.getElementById('lat');
//     console.log(lng, lat);
//     alert(lat + ' ' + lng);
//   }

@Component({
  selector: 'app-root',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class AppComponent {
  username: string = 'ciao';
  clickme() {
    console.log('it does nothing',this.username);
  }
}




