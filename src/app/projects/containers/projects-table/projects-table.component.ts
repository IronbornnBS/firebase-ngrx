import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {
  @Input() projects: Project[];
  @Output() projectDeleted = new EventEmitter<Project>();
  @Output() projectEdited = new EventEmitter<Project>();
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(project: Project) {
    this.projectEdited.emit(project);
  }

  onDelete(project: Project) {
    this.projectDeleted.emit(project);
  }

  trackByFn(index: any) {
    return index;
  }
}
