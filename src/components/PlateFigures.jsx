const INK = '#17150f'
const COBALT = '#1e2bd0'
const MAGENTA = '#ff3d7f'
const SUN = '#ffc400'
const PAPER = '#ece9df'
const MUTED = '#57523f'

const svgProps = {
  viewBox: '0 0 320 210',
  className: 'h-auto w-full',
  role: 'img',
  xmlns: 'http://www.w3.org/2000/svg',
}

const stroke = {
  fill: 'none',
  stroke: INK,
  strokeWidth: 1.1,
  vectorEffect: 'non-scaling-stroke',
}

const mono = {
  fontFamily: '"Space Mono", ui-monospace, monospace',
  fontSize: 7,
  fill: MUTED,
  letterSpacing: '0.08em',
}

function Arrow({ from, to }) {
  const [x1, y1] = from
  const [x2, y2] = to
  const horizontal = Math.abs(y2 - y1) < 0.5
  const head = horizontal
    ? `M${x2 - 5} ${y2 - 3.2}L${x2} ${y2}L${x2 - 5} ${y2 + 3.2}`
    : `M${x2 - 3.2} ${y2 - 5}L${x2} ${y2}L${x2 + 3.2} ${y2 - 5}`
  return (
    <g>
      <path d={`M${x1} ${y1}L${x2} ${y2}`} {...stroke} />
      <path d={head} {...stroke} />
    </g>
  )
}

/* 01 — a redirect path, its collision check and its cron job. */
function LinkTrim() {
  return (
    <svg {...svgProps} aria-label="Diagram: a long URL is shortened, checked for collisions, redirects with a 301 status and is cleaned up on a schedule">
      <rect x="6" y="10" width="308" height="24" {...stroke} />
      <text {...mono} x="14" y="26">
        https://example.com/campaign/winter-2026?ref=newsletter
      </text>

      <Arrow from={[160, 34]} to={[160, 56]} />

      <rect x="96" y="56" width="128" height="26" fill={COBALT} />
      <text {...mono} x="104" y="73" fill={PAPER} fontSize="7.5">
        linktrim.app/x7f2
      </text>

      <Arrow from={[224, 69]} to={[248, 69]} />
      <rect x="252" y="56" width="62" height="26" {...stroke} />
      <text {...mono} x="283" y="72" textAnchor="middle" fill={COBALT} fontSize="8">
        301
      </text>

      <Arrow from={[283, 82]} to={[283, 104]} />
      <rect x="232" y="104" width="76" height="52" {...stroke} />
      <path d="M232 114h76" {...stroke} />
      <rect x="240" y="122" width="16" height="12" {...stroke} />
      <rect x="262" y="122" width="16" height="12" {...stroke} />
      <rect x="284" y="122" width="16" height="12" {...stroke} />
      <path d="M240 142h36" {...stroke} />

      <text {...mono} x="160" y="98" textAnchor="middle">
        3-layer collision check
      </text>
      <path
        d="M96 69H30v96h196"
        fill="none"
        stroke={MAGENTA}
        strokeWidth="1.1"
        strokeDasharray="3 4"
        vectorEffect="non-scaling-stroke"
      />
      <text {...mono} x="34" y="175" fill={MAGENTA}>
        cron · no dormant links
      </text>
    </svg>
  )
}

/* 02 — medal counts, stacked, with reactive filters. */
function Olympics() {
  const groups = [
    { x: 54, gold: 14, silver: 12, bronze: 16 },
    { x: 98, gold: 20, silver: 14, bronze: 18 },
    { x: 142, gold: 17, silver: 18, bronze: 15 },
    { x: 186, gold: 26, silver: 20, bronze: 16 },
    { x: 230, gold: 22, silver: 19, bronze: 14 },
  ]

  return (
    <svg {...svgProps} aria-label="Diagram: stacked bar chart of Olympic medals by year with filters for year, country and sport">
      <path d="M38 22v128h254" {...stroke} />
      <text {...mono} x="38" y="16">
        medals
      </text>

      {[22, 54, 86, 118, 150].map((y) => (
        <path
          key={y}
          d={`M38 ${y}h254`}
          fill="none"
          stroke={INK}
          strokeWidth="0.6"
          strokeDasharray="2 4"
          opacity="0.35"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {groups.map((g, i) => {
        const bronzeTop = 150 - g.bronze
        const silverTop = bronzeTop - g.silver
        const goldTop = silverTop - g.gold
        return (
          <g key={g.x}>
            <rect x={g.x} y={bronzeTop} width="22" height={g.bronze} fill={MAGENTA} opacity={0.85} />
            <rect x={g.x} y={silverTop} width="22" height={g.silver} fill={PAPER} stroke={INK} strokeWidth="0.7" />
            <rect x={g.x} y={goldTop} width="22" height={g.gold} fill={SUN} />
            <text {...mono} x={g.x + 11} y="164" textAnchor="middle">
              {['1980', '1990', '2000', '2008', '2014'][i]}
            </text>
          </g>
        )
      })}

      <text {...mono} x="292" y="164" textAnchor="end">
        year
      </text>

      {[
        { label: 'year', x: 38 },
        { label: 'country', x: 84 },
        { label: 'sport', x: 156 },
      ].map((f) => (
        <g key={f.label}>
          <rect x={f.x} y="176" width={f.label === 'sport' ? 58 : 40} height="16" stroke={INK} strokeWidth="0.8" fill="none" />
          <text {...mono} x={f.x + (f.label === 'sport' ? 29 : 20)} y="187" textAnchor="middle" fill={INK}>
            {f.label}
          </text>
        </g>
      ))}
      <path d="M232 184h60" stroke={COBALT} strokeWidth="1.4" />
      <text {...mono} x="232" y="178" fill={COBALT}>
        reactive
      </text>
    </svg>
  )
}

/* 03 — a storefront inside a browser, with the cart state. */
function Zenith() {
  const cards = [20, 108, 196]
  return (
    <svg {...svgProps} aria-label="Diagram: storefront layout in a browser window with a product grid and a cart counter">
      <rect x="10" y="14" width="300" height="180" {...stroke} />
      <path d="M10 34h300" {...stroke} />
      {[20, 27, 34].map((cx) => (
        <circle key={cx} cx={cx} cy="24" r="1.8" fill={INK} />
      ))}
      <text {...mono} x="48" y="27">
        grupozenith.cr / tienda
      </text>

      <path d="M24 34v160" {...stroke} opacity="0.25" />
      <text {...mono} x="24" y="50">
        catálogo
      </text>
      <path d="M24 56h64" {...stroke} />

      {['productos', 'ofertas', 'cuenta'].map((label, i) => (
        <text key={label} {...mono} x={110 + i * 52} y="50" fill={INK}>
          {label}
        </text>
      ))}

      <circle cx="288" cy="48" r="9" fill={MAGENTA} />
      <text {...mono} x="288" y="51" textAnchor="middle" fill={PAPER} fontSize="8">
        3
      </text>

      {cards.map((x, i) => (
        <g key={x}>
          <rect x={x} y="68" width="80" height="86" {...stroke} />
          <rect x={x} y="68" width="80" height="44" fill={i === 1 ? COBALT : `rgba(30,43,208,0.12)`} />
          <path d={`M${x + 10} 124h44`} {...stroke} />
          <path d={`M${x + 10} 132h30`} {...stroke} opacity="0.5" />
          <text {...mono} x={x + 10} y="147" fill={INK} fontSize="7.5">
            {['₡ 12.900', '₡ 8.400', '₡ 21.000'][i]}
          </text>
          <rect x={x + 52} y="138" width="18" height="11" fill={INK} />
        </g>
      ))}

      <path d="M20 168h266" {...stroke} opacity="0.25" />
      <text {...mono} x="20" y="184">
        jwt · protected routes · admin dashboard
      </text>
    </svg>
  )
}

/* 04 — brand identity: type, palette, mark. */
function Crfiguras() {
  return (
    <svg {...svgProps} aria-label="Diagram: identity kit with a type specimen, a four-colour palette and a logotype">
      <text
        x="18"
        y="128"
        fontFamily="Archivo, sans-serif"
        fontWeight="800"
        fontSize="104"
        letterSpacing="-6"
        fill={INK}
      >
        Aa
      </text>
      <text {...mono} x="22" y="150">
        type scale
      </text>
      <path d="M22 160h96" {...stroke} />
      <path d="M22 168h70" {...stroke} opacity="0.6" />
      <path d="M22 176h44" {...stroke} opacity="0.35" />

      <text {...mono} x="150" y="26">
        palette
      </text>
      {[
        { c: COBALT, x: 150 },
        { c: MAGENTA, x: 188 },
        { c: SUN, x: 226 },
        { c: INK, x: 264 },
      ].map((s) => (
        <rect key={s.x} x={s.x} y="32" width="30" height="30" fill={s.c} />
      ))}

      <text {...mono} x="150" y="82">
        mark
      </text>
      <circle cx="176" cy="118" r="30" fill="none" stroke={COBALT} strokeWidth="1.4" />
      <path
        d="M176 92c14 10 20 24 20 34a20 20 0 0 1-40 0c0-10 6-24 20-34Z"
        fill={MAGENTA}
        opacity="0.9"
      />
      <path d="M176 100v32" stroke={PAPER} strokeWidth="1.4" />
      <path d="M176 118h12" stroke={PAPER} strokeWidth="1.4" />

      <text {...mono} x="224" y="124">
        WordPress
      </text>
      <text {...mono} x="224" y="136">
        WooCommerce
      </text>
      <text {...mono} x="224" y="148">
        Elementor
      </text>
    </svg>
  )
}

/* 05 — the audit: annotated wireframe with heuristic callouts. */
function Almacenes() {
  return (
    <svg {...svgProps} aria-label="Diagram: wireframe of a store page with three numbered heuristic callouts">
      <rect x="16" y="18" width="196" height="176" {...stroke} />
      <path d="M16 40h196" {...stroke} />
      <path d="M26 30h44" {...stroke} />
      {[150, 164, 178].map((x) => (
        <path key={x} d={`M${x} 28h14`} {...stroke} opacity="0.6" />
      ))}

      <rect x="16" y="40" width="196" height="46" fill="rgba(255,61,127,0.14)" />
      <path d="M30 56h64" {...stroke} />
      <path d="M30 66h40" {...stroke} opacity="0.5" />
      <rect x="166" y="54" width="32" height="14" fill={INK} />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={26 + i * 62} y="98" width="54" height="46" {...stroke} />
          <rect x={26 + i * 62} y="98" width="54" height="24" fill="rgba(30,43,208,0.14)" />
          <path d={`M${34 + i * 62} 130h34`} {...stroke} />
          <path d={`M${34 + i * 62} 137h22`} {...stroke} opacity="0.5" />
        </g>
      ))}

      <path d="M16 156h196" {...stroke} opacity="0.35" />
      <path d="M26 170h70" {...stroke} opacity="0.5" />
      <path d="M26 180h48" {...stroke} opacity="0.35" />

      {[
        { n: '1', y: 66, tx: 264 },
        { n: '2', y: 118, tx: 278 },
        { n: '3', y: 166, tx: 260 },
      ].map((c) => (
        <g key={c.n}>
          <path d={`M212 ${c.y}H${c.tx - 10}`} stroke={MAGENTA} strokeWidth="1" strokeDasharray="2 3" />
          <circle cx={c.tx} cy={c.y} r="9" fill={MAGENTA} />
          <text {...mono} x={c.tx} y={c.y + 2.6} textAnchor="middle" fill={PAPER} fontSize="8">
            {c.n}
          </text>
        </g>
      ))}

      <text {...mono} x="16" y="207" fill={INK}>
        Nielsen · 10 heuristics
      </text>
    </svg>
  )
}

const figures = [LinkTrim, Olympics, Zenith, Crfiguras, Almacenes]

export default function PlateFigure({ index }) {
  const Figure = figures[index % figures.length]
  return <Figure />
}
