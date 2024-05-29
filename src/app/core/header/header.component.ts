import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
	constructor(private headerHostRef: ElementRef) {}

	ngOnInit(): void {
		if (typeof document !== "undefined") {
			const headerHeight = this.headerHostRef.nativeElement.offsetHeight;
			document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
		}
	}
}
