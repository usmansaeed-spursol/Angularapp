import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
 //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  serverName = 'Testserver';
  userName = '';
  allowReset = false;
  serverCreated =false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    } ,2000);
   }

  ngOnInit(): void {
  }

  checkIfEmpty(){
    if(this.userName == ''){
      return true;
    }
    else{
      return false;
    }
  }

  resetString(){
    this.userName = '';
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =  this.serverName;
  }
  onUpdateServerName(event: Event){
    //this.serverName = (<HTMLInputElement>event.target).value;
  }
}
