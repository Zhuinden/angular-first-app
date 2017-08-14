import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    constructor(private elRef: ElementRef, private renderer: Renderer2) { // unused
    }

    ngOnInit(): void {
    }

    @HostListener('mouseenter')
    mouseenter(eventData: Event) {
        this.backgroundColor = 'deepskyblue';
    }

    @HostListener('mouseleave')
    mouseleave(eventData: Event) {
        this.backgroundColor = 'transparent';
    }
}