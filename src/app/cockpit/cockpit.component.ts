import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter();
  @Output('bpCreated') bluePrintCreated: EventEmitter <{serverName: string, serverContent: string}> = new EventEmitter();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
