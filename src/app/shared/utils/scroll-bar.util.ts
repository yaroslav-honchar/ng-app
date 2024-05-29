export class ScrollBarUtil {
	static CSSVariable: string = "--scrollbar-width";
	private static originalOverflow: string = "visible";

	static getScrollbarWidth(): number {
		const outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.overflow = "scroll";
		outer.style.width = "100px";
		outer.style.position = "absolute";
		document.body.appendChild(outer);

		const inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);

		const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
		outer.parentNode?.removeChild(outer);

		return scrollbarWidth;
	}

	static lock(): void {
		if (typeof document === "undefined" || typeof window === "undefined") {
			return;
		}

		if (window.innerWidth === document.body.offsetWidth) {
			return;
		}

		this.originalOverflow = getComputedStyle(document.body).overflow;

		const scrollbarWidth = this.getScrollbarWidth();
		document.body.style.overflow = "hidden";
		document.documentElement.style.setProperty(this.CSSVariable, `${scrollbarWidth}px`);
	}

	static unlock(): void {
		if (typeof document === "undefined") {
			return;
		}

		document.body.style.overflow = this.originalOverflow;
		document.documentElement.style.setProperty(this.CSSVariable, `0px`);
	}
}
