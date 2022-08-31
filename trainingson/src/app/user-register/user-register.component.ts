import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';

 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userObj:userObj
  constructor() {
    this.userObj=new userObj();
   }
  
  ngOnInit(): void {
  }
  getNewUserId(){
    
    const oldRecords=localStorage.getItem('usersList')
    if(oldRecords !==null){
      const userList =JSON.parse(oldRecords);
      return userList.length +1;
    }
  }
  saveUser(){
    
    const latestId=this.getNewUserId;
    
    const oldRecords =localStorage.getItem('userList');
    if(oldRecords!==null){
      const userList=JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    }
    else{
      const userArr = [];
      userArr.push(this.userObj)
      localStorage.setItem('userList',JSON.stringify(userArr))
    }
    window.location.reload();
  }

}
