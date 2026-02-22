import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  signal,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { TIME } from '../../../../util/time-alert';


@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent implements OnInit, OnDestroy {

  @Input() text: any;
  @Input() src: any;
  @Input() breadCrumb: any;
  @Input() title: any;
  @Input() routing: any;
  @Input() showBackButton: boolean = true;

  hour = signal(new Date());
  setIntervalTime: number = TIME.setIntervalTime;

  private intervalId: any;

  constructor(
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.showDate();
  }

  private showDate(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.hour.set(new Date());

    this.intervalId = setInterval(() => {
      this.hour.set(new Date());
    }, this.setIntervalTime);
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}