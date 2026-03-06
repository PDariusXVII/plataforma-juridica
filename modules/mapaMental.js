// modules/mapaMental.js
// Responsável por renderizar o mapa mental interativo (SVG)

function renderMapa() {
  const va = document.getElementById('view-area');
  va.style.padding = '16px';
  va.innerHTML = `<div class="map-container" id="map-cont"><svg class="map-svg" id="map-svg"></svg></div>`;
  setTimeout(drawMindMap, 50);
}

function drawMindMap() {
  const svg = document.getElementById('map-svg');
  if (!svg || !currentTopic) return;

  const d  = DA[currentTopic];
  const W  = svg.clientWidth  || 800;
  const H  = svg.clientHeight || 500;
  const cx = W / 2;
  const cy = H / 2;
  const nodes = d.mapa;
  const n = nodes.length;
  const r = Math.min(W, H) * 0.34;

  let html = '';

  // Nó central
  const titleShort = currentTopic.length > 20 ? currentTopic.slice(0, 18) + '…' : currentTopic;
  html += `
    <g class="map-node">
      <rect x="${cx - 90}" y="${cy - 22}" width="180" height="44" rx="10"
            fill="${d.color}22" stroke="${d.color}" stroke-width="1.5"/>
      <text x="${cx}" y="${cy + 5}" text-anchor="middle"
            font-family="Syne,sans-serif" font-size="13" font-weight="700"
            fill="${d.color}">${titleShort}</text>
    </g>`;

  // Nós filhos
  nodes.forEach((node, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    const nx    = cx + r * Math.cos(angle);
    const ny    = cy + r * Math.sin(angle);
    const bw    = Math.min(Math.max(node.length * 8, 100), 160);
    const label = node.length > 22 ? node.slice(0, 20) + '…' : node;

    html += `
      <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}"
            stroke="${d.color}" stroke-width="1" stroke-opacity="0.25"/>
      <g class="map-node"
         onmouseenter="showMapTip(event,'${node.replace(/'/g, '\\\'')}')"
         onmouseleave="hideMapTip()">
        <rect x="${nx - bw / 2}" y="${ny - 16}" width="${bw}" height="32" rx="8"
              fill="${d.color}18" stroke="${d.color}55" stroke-width="1"/>
        <text x="${nx}" y="${ny + 5}" text-anchor="middle"
              font-family="Inter,sans-serif" font-size="11.5"
              fill="#d1d9f0">${label}</text>
      </g>`;
  });

  svg.innerHTML = html;
}

function showMapTip(e, txt) {
  const t = document.getElementById('map-tooltip');
  t.style.display = 'block';
  t.style.left    = (e.clientX + 12) + 'px';
  t.style.top     = (e.clientY - 10) + 'px';
  t.textContent   = txt;
}

function hideMapTip() {
  document.getElementById('map-tooltip').style.display = 'none';
}
