import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
  } 

  ngOnInit() {
    console.log(`text content: ${this.header.nativeElement.textContent}`);
  }

  ngDoCheck() {
    //called when Angular checks for any changes
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    //called once
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked = () => {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log(`text content: ${this.header.nativeElement.textContent}`);
  }

  ngOnDestoy() {
    console.log('ngOnDestroy called');
  }

}
