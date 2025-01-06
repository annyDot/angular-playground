import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header-reusable',
  templateUrl: './header-reusable.component.html',
  styleUrls: ['./header-reusable.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class HeaderReusableComponent implements OnInit {
  mainTitle?: string;
  title?: string;
  subtitle?: string;
  isBeta?: boolean;

  headerService = inject(HeaderService);

  ngOnInit(): void {}
}
