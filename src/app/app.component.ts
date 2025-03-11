import { AfterViewInit, Component, NgZone } from '@angular/core';
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
  constructor(private _ngZone: NgZone) {}

  title = 'portfolio';
  projectList: any[] = [
    {
      Name: 'Landing Page',
      Info: 'Responsive Web',
      Image: 'img',
      GSAP: null,
    },
    {
      Name: 'Mobile App',
      Info: 'Operation Mobile App',
      Image: 'img',
      GSAP: null,
    },
  ];

  projectItemAnimation: any;

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
    this._ngZone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      // Title Animation
      gsap.fromTo(
        '.section1-title',
        { scale: 0, opacity: 0 },
        {
          duration: 1,
          scale: 1.0,
          opacity: 1,
          text: { value: 'Digital Slime Studio' },
        }
      );

      // Project Animation
      this.projectList.forEach((item, index) => {
        item.GSAP = gsap
          .to('.project-bg-' + index, {
            duration: 0.5,
            width: '100%',
            // background: 'blue',
            ease: 'circ.in',
          })
          .reverse();
        // .to('.project-item-' + index, {
        //   duration: 1,
        //   // backgroundSize: '100% 100%',
        //   // enableBackground: 1,
        //   background: 'blue',
        //   // backgroundImage: 'url(pixel-slime-blue-removebg.png)',
        //   // backgroundImage: 'pixel-slime-blue-removebg.png', //pixel-slime-blue-removebg.png
        // })
        // .reverse();
      });

      // const hoverTL = gsap.timeline();
      // this.projectItemAnimation = hoverTL
      //   .to('.project-item', {
      //     duration: 1,
      //     background: 'blue',
      //   })
      //   .reverse();

      // FOR SAME CLASS
      // var sections = gsap.utils.toArray('.project-item');
      // sections.forEach((section: any) => {
      //   gsap.to(section, {
      //     duration: 1,
      //     background: 'blue',
      //   });
      // });
    });
  }

  mouseEnter(index: number) {
    this.projectList[index].GSAP.play();
  }
  mouseLeave(index: number) {
    this.projectList[index].GSAP.reverse();
  }
}
