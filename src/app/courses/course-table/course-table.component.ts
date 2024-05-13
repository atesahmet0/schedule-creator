import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.css'
})
export class CourseTableComponent {
  @Input() dataSource: any[] = [];

  displayedColumns: string[] = ['code', 'name', 'year', 'credit', 'core', 'dors', 'nofstudent', 'instructor', 'hours', 'edit'];
}
