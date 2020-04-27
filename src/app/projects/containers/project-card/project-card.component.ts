import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<Project>();
  @Output() edited = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleted.emit(this.project);
  }

  onEdit() {
    this.edited.emit(this.project);
  }

}
