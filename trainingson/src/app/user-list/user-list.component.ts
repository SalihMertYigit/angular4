import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
  userList: userObj[];
  constructor() {
    this.userList=[{
      
      "Firstname": "Mert",
      "Lastname": "Yiğit",
      "Nationality": "Turkish",
      "Title": "Engineer",
      "Currency":"USD",
      
    },
    {
      
      "Firstname": "Mert",
      "Lastname": "Yiğit",
      "Nationality": "Turkish",
      "Title": "Engineer",
      "Currency":"USD",
      
    }
  ];
   }
    
  delete(id:any){
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords!==null){
      const userList=JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=>a.userId==id),1)
      localStorage.setItem('userList',JSON.stringify(userList))
      window.location.reload();
    }

  }
  
  
    ngOnInit(): void {
      const records=localStorage.getItem('userList')
      if(records!==null){
        this.userList=JSON.parse(records);
      }
  }
  
}
@Component({
  selector: 'app-user-list2',
  templateUrl: './user-list-portuguese.component.html',
  
})
export class JkApp extends UserListComponent {
}
@Component({
  selector: 'app-user-list3',
  templateUrl: './user-list-french.component.html',
  
})
export class JkApp2 extends UserListComponent {
}
@Component({
  selector: 'app-user-list4',
  templateUrl: './cardPages.html',
  
})
export class JkApp3 extends UserListComponent {
}
