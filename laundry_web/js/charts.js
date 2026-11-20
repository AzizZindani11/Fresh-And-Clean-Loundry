/**
 * Fresh & Clean Laundry — Custom Responsive Canvas & SVG Chart Renderer
 * Dirancang untuk tampilan tajam (High-DPI) dari layar HP 360px hingga Desktop 1440px+
 */

window.LaundryCharts = {
  formatShortRupiah(val) {
    const num = Number(val) || 0;
    if (num >= 1000000) {
      return `Rp${(num / 1000000).toFixed(1).replace('.0', '')}jt`;
    }
    if (num >= 1000) {
      return `Rp${Math.round(num / 1000)}rb`;
    }
    return `Rp${num}`;
  },

  /**
   * Merender grafik area/garis Pendapatan Harian dengan estetika Ocean Blue & Turquoise
   */
  renderRevenueTrend(canvasId, dataPoints) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    const width = Math.max(260, rect.width || 560);
    const height = Math.max(210, rect.height || 245);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const isCompact = width < 430;
    const padLeft = isCompact ? 54 : 64;
    const padRight = isCompact ? 16 : 24;
    const padTop = 26;
    const padBottom = 38;

    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    const values = dataPoints.map(d => Number(d.revenue) || 0);
    const maxVal = Math.max(50000, ...values) * 1.18;

    // Garis bantu horizontal
    const gridSteps = 4;
    ctx.strokeStyle = 'rgba(7, 42, 54, 0.08)';
    ctx.lineWidth = 1;
    ctx.font = `500 ${isCompact ? '10px' : '11px'} "Plus Jakarta Sans", sans-serif`;
    ctx.fillStyle = '#4B6B78';
    ctx.textAlign = 'right';

    for (let i = 0; i <= gridSteps; i++) {
      const ratio = i / gridSteps;
      const y = padTop + chartH - ratio * chartH;
      const labelVal = Math.round(ratio * maxVal);

      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();

      ctx.fillText(this.formatShortRupiah(labelVal), padLeft - 8, y + 4);
    }
    ctx.setLineDash([]);

    if (dataPoints.length === 0) {
      ctx.restore();
      return;
    }

    const stepX = dataPoints.length > 1 ? chartW / (dataPoints.length - 1) : chartW / 2;
    const points = dataPoints.map((d, idx) => {
      const x = dataPoints.length > 1 ? padLeft + idx * stepX : padLeft + chartW / 2;
      const y = padTop + chartH - ((Number(d.revenue) || 0) / maxVal) * chartH;
      return { x, y, label: d.label, revenue: Number(d.revenue) || 0 };
    });

    // Gradasi bawah kurva (Ocean Turquoise -> Seafoam transparan)
    const grad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    grad.addColorStop(0, 'rgba(18, 165, 180, 0.30)');
    grad.addColorStop(0.65, 'rgba(125, 226, 209, 0.10)');
    grad.addColorStop(1, 'rgba(125, 226, 209, 0.0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, padTop + chartH);
    points.forEach((pt, idx) => {
      if (idx === 0) {
        ctx.lineTo(pt.x, pt.y);
      } else {
        const prev = points[idx - 1];
        const cpX = (prev.x + pt.x) / 2;
        ctx.bezierCurveTo(cpX, prev.y, cpX, pt.y, pt.x, pt.y);
      }
    });
    ctx.lineTo(points[points.length - 1].x, padTop + chartH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Kurva utama
    ctx.beginPath();
    points.forEach((pt, idx) => {
      if (idx === 0) {
        ctx.moveTo(pt.x, pt.y);
      } else {
        const prev = points[idx - 1];
        const cpX = (prev.x + pt.x) / 2;
        ctx.bezierCurveTo(cpX, prev.y, cpX, pt.y, pt.x, pt.y);
      }
    });
    ctx.strokeStyle = '#127795';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Titik data dan label sumbu X
    ctx.textAlign = 'center';
    points.forEach((pt, idx) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(18, 165, 180, 0.18)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = '#0B3B4C';
      ctx.stroke();

      if (pt.revenue > 0 && (!isCompact || idx === points.length - 1 || pt.revenue === Math.max(...values))) {
        ctx.font = '600 10.5px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#072A36';
        ctx.fillText(this.formatShortRupiah(pt.revenue), pt.x, pt.y - 10);
      }

      ctx.font = `500 ${isCompact ? '10px' : '11px'} "Plus Jakarta Sans", sans-serif`;
      ctx.fillStyle = '#4B6B78';
      ctx.fillText(pt.label, pt.x, padTop + chartH + 22);
    });

    ctx.restore();
  },

  /**
   * Merender grafik batang perbandingan Pendapatan Kotor vs Biaya Operasional
   */
  renderComparisonBars(canvasId, seriesPoints) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    const width = Math.max(260, rect.width || 560);
    const height = Math.max(220, rect.height || 260);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const isCompact = width < 430;
    const padLeft = isCompact ? 54 : 64;
    const padRight = 18;
    const padTop = 28;
    const padBottom = 38;

    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    const allVals = seriesPoints.flatMap(d => [Number(d.revenue) || 0, Number(d.expense) || 0]);
    const maxVal = Math.max(50000, ...allVals) * 1.18;

    const gridSteps = 4;
    ctx.strokeStyle = 'rgba(7, 42, 54, 0.08)';
    ctx.lineWidth = 1;
    ctx.font = `500 ${isCompact ? '10px' : '11px'} "Plus Jakarta Sans", sans-serif`;
    ctx.fillStyle = '#4B6B78';
    ctx.textAlign = 'right';

    for (let i = 0; i <= gridSteps; i++) {
      const ratio = i / gridSteps;
      const y = padTop + chartH - ratio * chartH;
      const labelVal = Math.round(ratio * maxVal);

      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();

      ctx.fillText(this.formatShortRupiah(labelVal), padLeft - 8, y + 4);
    }
    ctx.setLineDash([]);

    const groupCount = Math.max(1, seriesPoints.length);
    const groupW = chartW / groupCount;
    const barW = Math.min(22, Math.max(8, groupW * 0.28));

    ctx.textAlign = 'center';
    seriesPoints.forEach((item, idx) => {
      const centerX = padLeft + idx * groupW + groupW / 2;

      const revH = ((Number(item.revenue) || 0) / maxVal) * chartH;
      const expH = ((Number(item.expense) || 0) / maxVal) * chartH;

      const revX = centerX - barW - 2;
      const revY = padTop + chartH - revH;
      ctx.fillStyle = '#12829C';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(revX, revY, barW, Math.max(2, revH), [4, 4, 0, 0]) : ctx.rect(revX, revY, barW, Math.max(2, revH));
      ctx.fill();

      const expX = centerX + 2;
      const expY = padTop + chartH - expH;
      ctx.fillStyle = '#D96B43';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(expX, expY, barW, Math.max(2, expH), [4, 4, 0, 0]) : ctx.rect(expX, expY, barW, Math.max(2, expH));
      ctx.fill();

      ctx.font = `500 ${isCompact ? '10px' : '11px'} "Plus Jakarta Sans", sans-serif`;
      ctx.fillStyle = '#4B6B78';
      ctx.fillText(item.label, centerX, padTop + chartH + 22);
    });

    ctx.restore();
  }
};
