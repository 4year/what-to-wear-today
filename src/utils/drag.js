// 드래그 범위 지정
export const inrange = (move, min, max) => {
	if (move < min) return min;
	if (move > max) return max;
	return move;
};

// 드래드 이벤트
export const registerDragEvent = ({ onDragStart, onDragEnd }) => {
	// 터치스크린 여부 확인
	const isTouchScreen =
		typeof window !== 'undefined' &&
		window.matchMedia('(hover: none) and (pointer: coarse)').matches;

	if (isTouchScreen) {
		return {
			// 터치 이벤트
			onTouchStart: (touchEvent) => {
				const touchMoveHandler = (moveEvent) => {
					const moveX = moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
					const moveY = moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
					onDragStart(moveX, moveY);
				};

				const touchEndHandler = (moveEvent) => {
					const moveX =
						moveEvent.changedTouches[0].pageX - touchEvent.changedTouches[0].pageX;
					const moveY =
						moveEvent.changedTouches[0].pageY - touchEvent.changedTouches[0].pageY;
					onDragEnd(moveX, moveY);
					document.removeEventListener('touchmove', touchMoveHandler);
				};

				document.addEventListener('touchmove', touchMoveHandler, {
					passive: false,
				});
				document.addEventListener('touchend', touchEndHandler, { once: true });
			},
		};
	}

	return {
		// 마우스 이벤트
		onMouseDown: (clickEvent) => {
			const initX = clickEvent.pageX;
			const initY = clickEvent.pageY;

			const mouseMoveHandler = (moveEvent) => {
				const moveX = moveEvent.pageX - initX;
				const moveY = moveEvent.pageY - initY;
				onDragStart(moveX, moveY);
			};

			const mouseUpHandler = (moveEvent) => {
				const moveX = moveEvent.pageX - initX;
				const moveY = moveEvent.pageY - initY;
				onDragEnd(moveX, moveY);
				document.removeEventListener('mousemove', mouseMoveHandler);
			};

			document.addEventListener('mousemove', mouseMoveHandler);
			document.addEventListener('mouseup', mouseUpHandler, { once: true });
		},
	};
};
