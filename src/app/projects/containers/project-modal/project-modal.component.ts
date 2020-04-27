import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Project } from '../../models/project.model';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  @ViewChild('projectForm', { static: true }) projectForm: NgForm;

  heading: string;

  title: string;
  description: string;
  photoUrl: string;

  projectData: Subject<Project> = new Subject();

  constructor(public modalRef: MatDialogRef<ProjectModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Project) {}

  ngOnInit() {
  }

  onSave() {
    if (this.projectForm.valid) {
      this.projectData.next(this.data);
      this.modalRef.close();
    } else {
      const controls = this.projectForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }
}
