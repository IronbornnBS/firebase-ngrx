import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];
  @Input() editable = true;
  @Output() projectDeleted = new EventEmitter<Project>();
  @Output() projectEdited = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
  }

  onProjectDelete(project: Project) {
    this.projectDeleted.emit(project);
  }

  onProjectEdit(project: Project) {
    this.projectEdited.emit(project);
  }

  trackByFunction(index: any) {
    return index;
  }
}
