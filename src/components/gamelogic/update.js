let previousTime = null;

function frame(now) {
  if (previousTime !== null) {
    const elapsedMs = now - previousTime;
    const elapsedSeconds = elapsedMs / 1000;

    // 초당 생산량 × 실제 경과 시간
    
  }

  previousTime = now;

  // 다음 프레임에도 실행하도록 예약
  requestAnimationFrame(frame);
}