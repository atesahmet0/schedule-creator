import { Component } from '@angular/core';

@Component({
  selector: 'instructors-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'subject'];
  dataSource = [
    {name: 'Instructor 1', subject: 'Subject 1'},
    {name: 'Instructor 2', subject: 'Subject 2'},
    {name: 'Instructor 3', subject: 'Subject 3'},
  ];
}
