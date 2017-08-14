import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { // unused
    }

    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter')
    mouseenter(eventData: Event) {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
    }
}