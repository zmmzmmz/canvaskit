const CanvasKitInit = require("canvaskit-wasm");
const path = require("path");

CanvasKitInit({
  locateFile: (file) => {
    const filePath = path.join(
      __dirname,
      "node_modules/canvaskit-wasm",
      "bin",
      file
    );
    console.log(filePath);
    return filePath;
  },
}).then((CanvasKit) => {
  const surface = CanvasKit.MakeSurface(300, 300);
  const canvas = CanvasKit.MakeCanvas(300, 300);
  const skcanvas = canvas.getContext("2d");
  // const skcanvas = surface.getCanvas();
  const font = new CanvasKit.Font(null, 18);

  const fontPaint = new CanvasKit.Paint();
  fontPaint.setStyle(CanvasKit.PaintStyle.Fill);
  fontPaint.setAntiAlias(false); // 抗锯齿

  console.log(skcanvas, fontPaint);
  // draw text
  skcanvas.drawText(`tishi`, 5, 120, fontPaint, font);
  // draw line
  const linePaint = new CanvasKit.Paint();
  linePaint.setStyle(CanvasKit.PaintStyle.Fill);
  skcanvas.drawLine(12, 10, 90, 10, linePaint);

  surface.flush();

  // const imgData = skcanvas.toDataURL();
  console.log(skcanvas);
});
