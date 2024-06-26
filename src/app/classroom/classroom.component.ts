import { Component } from '@angular/core';
import { Classroom } from '../classroom';
import { ClassroomService } from '../classroom.service';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent {
  classroomDict!: { [key: string]: Classroom; };
  dataSource: any[] = [];

  constructor(private classroomService: ClassroomService) { }

  onFileSelected(file: File): void {
    this.classroomService.parseCsv(file).then(result => {
      if (result) {
        this.classroomDict = (result as any[][]).reduce((acc: { [key: string]: any }, row: any[]) => {
          const [name, ...rest] = row;
          acc[name] = [name, ...rest];
          console.log("acc is: " + acc);
          return acc;
        }, {});
        console.log(this.classroomDict);
        this.dataSource = Object.values(this.classroomDict);
      }
    }).catch(error => {
      console.error('Error occurred while reading CSVs', error);
    });
  }
}
