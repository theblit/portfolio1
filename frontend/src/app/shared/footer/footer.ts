import { Component, inject } from '@angular/core';
import { CV } from '../../data/cv';
import { NAV_LINKS, ScrollSpyService } from '../scroll-spy.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly spy = inject(ScrollSpyService);

  readonly cv = CV;
  readonly links = NAV_LINKS;
  readonly year = new Date().getFullYear();

  go(event: Event, id: string): void {
    event.preventDefault();
    this.spy.scrollTo(id);
  }
}
