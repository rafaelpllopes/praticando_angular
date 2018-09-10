import { UserService } from './../../../core/user/user.service';
import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  currentDisplay: string;
  
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) { }
  
  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
    this.userService.getUser().subscribe(user => {
      if(user) {
        this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
      } else {
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
      }
    })
  }
}
