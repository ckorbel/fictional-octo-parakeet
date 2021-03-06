import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['Testserver', 'testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; 
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = !this.serverCreated; 
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created ' + this.serverName;
  }

  //no longer needed with mgModel two way binding
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
