"use client";
import { useCallback, useEffect, useRef } from "react";

const SmoothScrollHandler: React.FC = () => {
	const animationFrameId = useRef<number | null>(null);
	const targetScrollTop = useRef(0);
	const currentScrollTop = useRef(0);

	const SMOOTHING_FACTOR = 0.1;
	const SCROLL_SPEED_LIMIT = 100;

	const animateScroll = useCallback(() => {
		const el = document.documentElement;
		const diff = targetScrollTop.current - currentScrollTop.current;
		if (Math.abs(diff) < 0.5) {
			el.scrollTop = targetScrollTop.current;
			if (animationFrameId.current)
				cancelAnimationFrame(animationFrameId.current);
			animationFrameId.current = null;
			return;
		}
		const next = currentScrollTop.current + diff * SMOOTHING_FACTOR;
		el.scrollTop = next;
		currentScrollTop.current = next;
		animationFrameId.current = requestAnimationFrame(animateScroll);
	}, []);

	const handleWheel = useCallback(
		(e: WheelEvent) => {
			e.preventDefault();
			const el = document.documentElement;
			const delta =
				Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), SCROLL_SPEED_LIMIT);
			targetScrollTop.current = Math.max(
				0,
				Math.min(
					el.scrollHeight - el.clientHeight,
					targetScrollTop.current + delta,
				),
			);
			if (animationFrameId.current === null) {
				currentScrollTop.current = el.scrollTop;
				animationFrameId.current = requestAnimationFrame(animateScroll);
			}
		},
		[animateScroll],
	);

	useEffect(() => {
		document.documentElement.style.scrollBehavior = "auto";
		document.body.style.scrollBehavior = "auto";
		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => {
			window.removeEventListener("wheel", handleWheel);
			if (animationFrameId.current)
				cancelAnimationFrame(animationFrameId.current);
		};
	}, [handleWheel]);

	return null;
};

export default SmoothScrollHandler;
