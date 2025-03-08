import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppTopToolbarComponent } from './@config/component/app-top-toolbar/app-top-toolbar.component';
import { TabsModule } from 'primeng/tabs';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/all';
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppTopToolbarComponent, ButtonModule, TabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  // const bgGroup=document.querySelector(".bg-group");
  // const bgPurple=document.querySelector(".bg-purple");
  // const bgLighter=document.querySelector(".bg-lighter");
  // const bgDanger=document.querySelector(".bg-danger");
  // const bgWarning=document.querySelector(".bg-warning");
  // const bgInfo=document.querySelector(".bg-info");
  // const
  // gsap.defaults({
  //     ease: "none",
  //     duration: 2,
  // });
  // //鏈式寫法
  // tltest.from(bgLighter,{xPercent: -100}).from(bgDanger,{xPercent: 100}).from(bgWarning,{yPercent:-100}).from(bgInfo,{yPercent: 100});

  // ScrollTrigger.create({
  //     animation: tltest,
  //     start: "top top",
  //     end: "+=4000",
  //     scrub: true,
  //     pin: bgGroup,
  //     markers: true,
  // })

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    // gsap.to('.box', { duration: 1, x: 100, rotation: 360 });
    const tltest = gsap.timeline();

    // //鏈式寫法
    // tltest
    //   .from('.section1-title', { xPercent: -100 })
    //   .from('section1-subtitle', { xPercent: 100 })
    //   .from('.section1-description', { yPercent: -100 });

    // ScrollTrigger.create({
    //   animation: tltest,
    //   start: 'top top',
    //   // end: '+=4000',
    //   scrub: true,
    //   pin: '.box',
    //   markers: true,
    // });

    gsap.fromTo(
      '.section1-title',
      { scale: 0, opacity: 0 },
      {
        duration: 1,
        y: 0,
        scale: 1.0,
        opacity: 1,
        text: { value: 'Digital Slime Studio' },
      }
    );
  }
}
