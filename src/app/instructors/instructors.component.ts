import { Component } from '@angular/core';
import { Busy } from '../busy';
import { BusyService } from '../busy.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.css'
})
export class InstructorsComponent {
  busyDict!: { [key: string]: Busy; };
  dataSource: any[] = [];

  constructor(private busyService: BusyService) { }

  onFileSelected(file: File): void {
    this.busyService.parseCsv(file).then(result => {
      if (result) {
        this.busyDict = (result as any[][]).reduce((acc: { [key: string]: any }, row: any[]) => {
          const [name, ...rest] = row;
          acc[name] = [name, ...rest];
          console.log("acc is: " + acc);
          return acc;
        }, {});
        console.log(this.busyDict);
        this.dataSource = Object.values(this.busyDict);
      }
    }).catch(error => {
      console.error('Error occurred while reading CSVs', error);
    });
  }


}
