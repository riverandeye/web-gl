export const drawOnMouseMove = (e, ctx, isDrawable: () => boolean) => {
  const x = e.nativeEvent.offsetX;
  const y = e.nativeEvent.offsetY;

  if (!isDrawable()) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

export const onClickCanvas = (e, ctx, canvas) => {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
