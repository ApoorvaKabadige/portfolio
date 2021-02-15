import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService) { 
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd) 
    ).subscribe((event: any) => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init(); 
    });
  }

  ngOnInit(): void {
    // this.wowSubscription = this.wowService.itemRevealed$.subscribe(
    //   (item:HTMLElement) => {
    //     // do whatever you want with revealed element
    //   });

  }

  scroll(id:any) {
    let el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior:"smooth"});
    }
  }
}
