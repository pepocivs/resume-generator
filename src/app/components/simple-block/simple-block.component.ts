import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-block',
  templateUrl: './simple-block.component.html',
  styleUrls: ['./simple-block.component.scss']
})

export class SimpleBlockComponent {
  objectKeys = Object.keys;
  
  keysTranslator = {
    "phone": "Mobile",
    "email": "Email",
    "skype": "Skype",
    "socialNetworks": "Social networks",
    "address": "Address"
  }; 
  @Input() info: object;
  @Input() title: string;
}
