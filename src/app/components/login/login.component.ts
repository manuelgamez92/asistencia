import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'login-root',
    styleUrls: ['./login.component.css'],
    templateUrl: 'login.component.html',
    
})

export class LoginComponent implements OnInit {
 

 @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

 constructor(private router: Router){


 }
    ngOnInit() {
        
    }

      login(){
 
 this.notify.emit(true);
 
this.router.navigate(['dashboard']);
}
   
}
