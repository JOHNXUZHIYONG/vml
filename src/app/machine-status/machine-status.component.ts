import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.css']
})
export class MachineStatusComponent {

  lights: { status: string, top: number, left: number, label: string }[] = [
    { status: 'green', top: 40, left: 250, label: 'Powder filling' },
    { status: 'yellow', top: 70, left: 570, label: 'Liquid filling' },
    { status: 'green', top: 300, left: 220, label: 'Label printer' },
    { status: 'red', top: 330, left: 350, label: 'Pouch magazine' },
    { status: 'green', top: 270, left: 680, label: 'Check weigher' },
    { status: 'green', top: 200, left: 780, label: 'Pouch inspection' },
    { status: 'green', top: 440, left: 700, label: 'Tote filling and transfer' }
  ];
  


  toggleTrafficLights() {
    for (let i = 0; i < this.lights.length; i++) {
      switch (this.lights[i].status) {
        case 'red':
          this.lights[i].status = 'yellow';
          break;
        case 'yellow':
          this.lights[i].status = 'green';
          break;
        case 'green':
          this.lights[i].status = 'red';
          break;
        default:
          this.lights[i].status = 'green';
      }
    }
  }

}
