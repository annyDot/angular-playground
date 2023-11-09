import { Component, OnInit } from '@angular/core';
import { ReactiveformNewComponent } from './reactive-approach/reactiveform-new/reactiveform-new.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { TemplateApproachComponent } from './template-approach/template-approach.component';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
    standalone: true,
    imports: [
        TemplateApproachComponent,
        ReactiveApproachComponent,
        ReactiveformNewComponent,
    ],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
