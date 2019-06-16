import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})

export class InfoBlockComponent {
  objectKeys = Object.keys;
  
  keysTranslator = {
    "phone": "Teléfono Móvil",
    "email": "Dirección de Email",
    "skype": "Skype",
    "socialNetworks": "Redes Sociales",
    "address": "Dirección Postal"
  }; 
  @Input() info: object;
  @Input() percent: boolean;
  @Input() title: string;
}
