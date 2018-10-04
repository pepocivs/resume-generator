import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})

export class InfoBlockComponent {
  objectKeys = Object.keys;
  
  keysTranslator = {
    "phone": "Mobile",
    "email": "Email",
    "skype": "Skype",
    "socialNetworks": "Social networks",
    "address": "Address"
  }; 
  @Input() info: object;
  @Input() percent: boolean;
  @Input() title: string;
}
