import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  stats = [
    { label: 'Employees', value: 120 },
    { label: 'Projects', value: 15 },
    { label: 'Departments', value: 5 },
    { label: 'Tasks', value: 340 }
  ];

  activities = [
    'John Doe added a new project',
    'HR updated leave policy',
    'New employee joined: Jane Smith',
    'Task assigned to Mike'
  ];

  performance = [
    { quarter: 'Q1', value: 65 },
    { quarter: 'Q2', value: 59 },
    { quarter: 'Q3', value: 80 },
    { quarter: 'Q4', value: 81 }
  ];

  employees = [
    { name: 'John Doe', role: 'Developer', department: 'IT' },
    { name: 'Jane Smith', role: 'HR Manager', department: 'HR' },
    { name: 'Mike Johnson', role: 'Designer', department: 'UI/UX' }
  ];
}
