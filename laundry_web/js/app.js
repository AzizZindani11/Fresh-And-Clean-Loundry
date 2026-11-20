/**
 * Fresh & Clean Laundry — Advanced Visual Polish, Experience Refinement & Complete MIS
 * Preserves Approved 2.5D Visual Direction, Service-Accurate Assets & Decimal Pricing
 */

const LAUNDRY_STATUSES = ['Diterima', 'Diproses', 'Siap Diambil', 'Selesai'];
const PAYMENT_STATUSES = ['Belum Dibayar', 'Sebagian Dibayar', 'Lunas'];

const LAUNDRY_BADGE_CLASS = {
  'Diterima': 'badge-diterima',
  'Diproses': 'badge-diproses',
  'Siap Diambil': 'badge-siap',
  'Selesai': 'badge-selesai'
};

const PAYMENT_BADGE_CLASS = {
  'Lunas': 'badge-lunas',
  'Sebagian Dibayar': 'badge-sebagian',
  'Belum Dibayar': 'badge-belum'
};

/**
 * Service-Accurate 2.5D Shaded Illustrations:
 * 1. Cuci Setrika: Neatly folded washed clothes + freshly pressed shirt + modern steam iron with rising steam
 * 2. Cuci Kering: Front-load washer drum with clean water bubbles + clean garments hanging neatly on hangers
 * 3. Paket Setrika: Ironing board + neatly pressed collared shirt + steam iron actively pressing with steam clouds
 * 4. Dryer / Pengering: Dryer machine + warm airflow ribbons + clothes drying inside drum + fresh dry garments
 */
const SERVICE_ILLUSTRATIONS = {
  cuciSetrika: `<svg viewBox="0 0 280 230" width="265" height="225" aria-label="Ilustrasi Cuci Setrika: Pakaian Bersih Terlipat Rapi dan Setrika Uap">
    <defs>
      <linearGradient id="csFoldTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#D2E8FF"/>
      </linearGradient>
      <linearGradient id="csFoldMid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6CC3FF"/>
        <stop offset="100%" stop-color="#1D7CE0"/>
      </linearGradient>
      <linearGradient id="csFoldBot" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FF8FA3"/>
        <stop offset="100%" stop-color="#E0385E"/>
      </linearGradient>
      <linearGradient id="csIronBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="58%" stop-color="#DDF9FF"/>
        <stop offset="100%" stop-color="#48CAE4"/>
      </linearGradient>
    </defs>

    <!-- Inked Rising Steam Clouds & Fresh Dewdrops -->
    <g fill="#FFFDF8" stroke="#182C66" stroke-width="1.5">
      <path d="M52,66 C48,54 58,44 68,48 C72,34 90,32 98,42 C106,36 118,44 114,56 C118,66 106,72 96,70 L60,70 C54,70 50,68 52,66 Z"/>
    </g>
    <path d="M222,40 L229,53 A7.5,7.5 0 1,1 215,53 Z" fill="#4CE8E0" stroke="#182C66" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M244,68 L249,78 A5.2,5.2 0 1,1 239,78 Z" fill="#74C0FC" stroke="#182C66" stroke-width="1.4" stroke-linejoin="round"/>

    <!-- Freshly Pressed Hang-Shirt with Crisp Collar & Placket Outline -->
    <g transform="translate(148, 22) rotate(6 55 75)">
      <path d="M44,16 Q55,3 66,16" fill="none" stroke="#182C66" stroke-width="5.2" stroke-linecap="round"/>
      <path d="M44,16 Q55,3 66,16" fill="none" stroke="#FFD166" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M22,26 L88,26 L104,58 L84,66 L80,48 L80,126 L30,126 L30,48 L26,66 L6,58 Z" fill="url(#csFoldTop)" stroke="#182C66" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="40,26 55,44 70,26" fill="#6CC3FF" stroke="#182C66" stroke-width="1.5" stroke-linejoin="round"/>
      <line x1="55" y1="44" x2="55" y2="126" stroke="#182C66" stroke-width="1.5"/>
      <circle cx="55" cy="64" r="1.8" fill="#182C66"/><circle cx="55" cy="86" r="1.8" fill="#182C66"/><circle cx="55" cy="108" r="1.8" fill="#182C66"/>
    </g>

    <!-- Crisp Inked Stack of Folded Clean Clothes -->
    <g transform="translate(26, 98)">
      <rect x="0" y="68" width="164" height="34" rx="14" fill="url(#csFoldBot)" stroke="#182C66" stroke-width="2"/>
      <path d="M18,76 L146,76" stroke="#FFC9D2" stroke-width="2.5" stroke-linecap="round" opacity="0.82"/>
      <path d="M16,89 L148,89" stroke="#182C66" stroke-width="1.4" stroke-linecap="round" opacity="0.35"/>
      <rect x="8" y="36" width="148" height="34" rx="14" fill="url(#csFoldMid)" stroke="#182C66" stroke-width="2"/>
      <path d="M24,44 L138,44" stroke="#BAE6FD" stroke-width="2.5" stroke-linecap="round" opacity="0.88"/>
      <rect x="16" y="6" width="132" height="32" rx="13" fill="url(#csFoldTop)" stroke="#182C66" stroke-width="2"/>
      <path d="M32,16 L130,16" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M32,24 L130,24" stroke="#74C0FC" stroke-width="1.6" stroke-linecap="round"/>
    </g>

    <!-- Inked Cel-Shaded Steam Iron -->
    <g transform="translate(46, 46) rotate(-5 65 40)">
      <path d="M38,32 C38,8 96,8 102,32" fill="none" stroke="#182C66" stroke-width="12.5" stroke-linecap="round"/>
      <path d="M38,32 C38,8 96,8 102,32" fill="none" stroke="#FF6B81" stroke-width="8.5" stroke-linecap="round"/>
      <path d="M12,56 C24,26 62,22 114,24 L122,56 Z" fill="url(#csIronBody)" stroke="#182C66" stroke-width="2" stroke-linejoin="round"/>
      <path d="M44,36 L88,36 L92,48 L40,48 Z" fill="#1D7CE0" stroke="#182C66" stroke-width="1.4" stroke-linejoin="round"/>
      <rect x="8" y="56" width="118" height="8.5" rx="4" fill="#E2E8F0" stroke="#182C66" stroke-width="1.8"/>
      <line x1="16" y1="60.2" x2="118" y2="60.2" stroke="#FF6B81" stroke-width="2.2" stroke-linecap="round"/>
    </g>
  </svg>`,

  cuciKering: `<svg viewBox="0 0 280 230" width="265" height="225" aria-label="Ilustrasi Cuci Kering: Mesin Cuci Profesional dan Pakaian Bersih tergantung Rapi">
    <defs>
      <linearGradient id="ckWasher" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="65%" stop-color="#E4F3FF"/>
        <stop offset="100%" stop-color="#8DC2F2"/>
      </linearGradient>
      <linearGradient id="ckDrumWater" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0E347A"/>
        <stop offset="52%" stop-color="#1D7CE0"/>
        <stop offset="100%" stop-color="#4CE8E0"/>
      </linearGradient>
      <linearGradient id="ckShirtCoral" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FF9EAB"/>
        <stop offset="100%" stop-color="#E0385E"/>
      </linearGradient>
    </defs>

    <!-- Inked Garment Rail & Clean Hung Shirts -->
    <g transform="translate(142, 18)">
      <line x1="6" y1="18" x2="122" y2="18" stroke="#182C66" stroke-width="7.5" stroke-linecap="round"/>
      <line x1="6" y1="18" x2="122" y2="18" stroke="#F8FAFC" stroke-width="4" stroke-linecap="round"/>
      <g transform="translate(12, 18)">
        <path d="M35,0 L35,8 M14,20 L35,8 L56,20" fill="none" stroke="#182C66" stroke-width="4.6" stroke-linecap="round"/>
        <path d="M35,0 L35,8 M14,20 L35,8 L56,20" fill="none" stroke="#FFD166" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M8,20 L62,20 L72,48 L56,54 L52,38 L52,118 L18,118 L18,38 L14,54 L-2,48 Z" fill="#FFFFFF" stroke="#182C66" stroke-width="1.9" stroke-linejoin="round"/>
        <polygon points="24,20 35,34 46,20" fill="#38BDF8" stroke="#182C66" stroke-width="1.4" stroke-linejoin="round"/>
      </g>
      <g transform="translate(52, 24)">
        <path d="M35,0 L35,8 M14,20 L35,8 L56,20" fill="none" stroke="#182C66" stroke-width="4.6" stroke-linecap="round"/>
        <path d="M35,0 L35,8 M14,20 L35,8 L56,20" fill="none" stroke="#FFD166" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M10,20 L60,20 L68,46 L54,52 L50,36 L50,114 L20,114 L20,36 L16,52 L2,46 Z" fill="url(#ckShirtCoral)" stroke="#182C66" stroke-width="1.9" stroke-linejoin="round"/>
        <polygon points="25,20 35,32 45,20" fill="#FFE3E8" stroke="#182C66" stroke-width="1.3" stroke-linejoin="round"/>
      </g>
    </g>

    <!-- Inked Cel-Shaded Front-Load Washing Machine -->
    <g transform="translate(22, 30)">
      <rect x="-10" y="8" width="132" height="164" rx="18" fill="#4676BA" stroke="#182C66" stroke-width="2"/>
      <rect x="0" y="0" width="132" height="164" rx="18" fill="url(#ckWasher)" stroke="#182C66" stroke-width="2"/>
      <line x1="0" y1="36" x2="132" y2="36" stroke="#182C66" stroke-width="1.8"/>
      <rect x="14" y="11" width="38" height="14" rx="4" fill="#BAE6FD" stroke="#182C66" stroke-width="1.4"/>
      <circle cx="72" cy="18" r="7" fill="#FF6B81" stroke="#182C66" stroke-width="1.5"/>
      <circle cx="104" cy="18" r="5" fill="#228BE6" stroke="#182C66" stroke-width="1.5"/>
      <circle cx="66" cy="100" r="46" fill="#E2E8F0" stroke="#182C66" stroke-width="2.4"/>
      <circle cx="66" cy="100" r="37" fill="url(#ckDrumWater)" stroke="#182C66" stroke-width="1.8"/>
      <path d="M30,100 Q48,82 66,100 T102,100 A36,36 0 0,1 30,100 Z" fill="#66D9E8" stroke="#182C66" stroke-width="1.2" opacity="0.88"/>
      <path d="M40,78 A28,28 0 0,1 86,74" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" opacity="0.82"/>
      <circle cx="52" cy="84" r="5" fill="#FFFFFF" stroke="#182C66" stroke-width="1"/>
      <circle cx="78" cy="76" r="3.5" fill="#FFFFFF" opacity="0.9"/>
      <circle cx="64" cy="114" r="4" fill="#FFFFFF" opacity="0.82"/>
    </g>

    <circle cx="156" cy="176" r="12" fill="rgba(255,255,255,0.52)" stroke="#182C66" stroke-width="1.5"/>
    <path d="M150,171 A7,7 0 0,1 159,169" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    <circle cx="182" cy="190" r="7" fill="rgba(255,255,255,0.42)" stroke="#182C66" stroke-width="1.3"/>
  </svg>`,

  paketSetrika: `<svg viewBox="0 0 280 230" width="265" height="225" aria-label="Ilustrasi Paket Setrika: Meja Setrika, Kemeja Rapi, dan Setrika Uap Aktif">
    <defs>
      <linearGradient id="psBoard" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6CC3FF"/>
        <stop offset="50%" stop-color="#E6FAFF"/>
        <stop offset="100%" stop-color="#38BDF8"/>
      </linearGradient>
      <linearGradient id="psShirt" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#CBE8FF"/>
      </linearGradient>
      <linearGradient id="psIron" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FF9EAB"/>
        <stop offset="55%" stop-color="#FF5E79"/>
        <stop offset="100%" stop-color="#C92A49"/>
      </linearGradient>
    </defs>

    <!-- Inked Rising Steam Puffs -->
    <g fill="#FFFDF8" stroke="#182C66" stroke-width="1.6">
      <path d="M50,86 C48,72 60,64 70,68 C74,52 94,46 106,54 C116,42 138,44 142,60 C148,70 140,86 128,88 L58,88 C52,88 50,86 50,86 Z"/>
      <path d="M92,98 L75,78 M116,94 L108,68 M140,96 L142,70" stroke="#74C0FC" stroke-width="2.8" stroke-linecap="round"/>
    </g>

    <!-- Inked Ironing Board -->
    <g transform="translate(16, 118)">
      <line x1="58" y1="26" x2="188" y2="92" stroke="#182C66" stroke-width="8.5" stroke-linecap="round"/>
      <line x1="58" y1="26" x2="188" y2="92" stroke="#94A3B8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="188" y1="26" x2="58" y2="92" stroke="#182C66" stroke-width="8.5" stroke-linecap="round"/>
      <line x1="188" y1="26" x2="58" y2="92" stroke="#CBD5E1" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M8,22 Q8,6 42,6 L228,6 Q244,6 244,18 L244,24 Q244,34 228,34 L42,34 Q8,34 8,22 Z" fill="url(#psBoard)" stroke="#182C66" stroke-width="2"/>
      <rect x="236" y="4" width="16" height="30" rx="4" fill="#64748B" stroke="#182C66" stroke-width="1.8"/>
    </g>

    <!-- Pressed Shirt Spread on Board -->
    <g transform="translate(52, 96)">
      <path d="M12,26 L148,26 L162,56 L132,62 L124,42 L26,42 L18,62 L-4,52 Z" fill="url(#psShirt)" stroke="#182C66" stroke-width="1.9" stroke-linejoin="round"/>
      <line x1="36" y1="33" x2="124" y2="33" stroke="#228BE6" stroke-width="2" stroke-dasharray="6 4"/>
    </g>

    <!-- Coral-Red Steam Iron Pressing Actively -->
    <g transform="translate(96, 54) rotate(-4 65 40)">
      <path d="M42,30 C42,4 106,4 114,30" fill="none" stroke="#182C66" stroke-width="12.5" stroke-linecap="round"/>
      <path d="M42,30 C42,4 106,4 114,30" fill="none" stroke="#FFD166" stroke-width="8.5" stroke-linecap="round"/>
      <path d="M8,60 C22,26 66,20 124,24 L132,60 Z" fill="url(#psIron)" stroke="#182C66" stroke-width="2" stroke-linejoin="round"/>
      <path d="M24,48 Q66,34 116,38" fill="none" stroke="#FFE3EC" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <rect x="4" y="60" width="132" height="9" rx="4.5" fill="#F8FAFC" stroke="#182C66" stroke-width="1.8"/>
      <circle cx="28" cy="64.5" r="2" fill="#182C66"/><circle cx="48" cy="64.5" r="2" fill="#182C66"/>
      <circle cx="68" cy="64.5" r="2" fill="#182C66"/><circle cx="88" cy="64.5" r="2" fill="#182C66"/>
    </g>
  </svg>`,

  dryerPengering: `<svg viewBox="0 0 280 230" width="265" height="225" aria-label="Ilustrasi Dryer Pengering: Mesin Pengering, Aliran Udara Hangat, dan Pakaian Kering">
    <defs>
      <linearGradient id="drCabinet" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="60%" stop-color="#FFF2E0"/>
        <stop offset="100%" stop-color="#FFBA6B"/>
      </linearGradient>
      <linearGradient id="drDrumWarm" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FF922B"/>
        <stop offset="50%" stop-color="#FF5E79"/>
        <stop offset="100%" stop-color="#5F3DC4"/>
      </linearGradient>
      <linearGradient id="drAirflow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFD166"/>
        <stop offset="100%" stop-color="#FF6B81"/>
      </linearGradient>
    </defs>

    <!-- Inked Cel-Shaded Tumble Dryer Cabinet -->
    <g transform="translate(26, 22)">
      <rect x="-10" y="8" width="136" height="172" rx="18" fill="#C96432" stroke="#182C66" stroke-width="2"/>
      <rect x="0" y="0" width="136" height="172" rx="18" fill="url(#drCabinet)" stroke="#182C66" stroke-width="2"/>
      <line x1="0" y1="36" x2="136" y2="36" stroke="#182C66" stroke-width="1.8"/>
      <circle cx="28" cy="18" r="8" fill="#FF6B81" stroke="#182C66" stroke-width="1.5"/>
      <rect x="52" y="11" width="44" height="14" rx="4" fill="#1E293B" stroke="#182C66" stroke-width="1.4"/>
      <text x="74" y="21" font-family="monospace" font-size="9" font-weight="bold" fill="#4CE8E0" text-anchor="middle">60°C</text>
      <circle cx="114" cy="18" r="5" fill="#FCC419" stroke="#182C66" stroke-width="1.4"/>

      <circle cx="68" cy="102" r="48" fill="#E2E8F0" stroke="#182C66" stroke-width="2.4"/>
      <circle cx="68" cy="102" r="39" fill="url(#drDrumWarm)" stroke="#182C66" stroke-width="1.8"/>

      <path d="M36,96 C46,74 72,72 88,88 C102,102 86,126 64,122 C44,118 32,108 36,96 Z" fill="#FFFFFF" stroke="#182C66" stroke-width="1.5" opacity="0.94"/>
      <path d="M52,108 C66,92 92,94 98,112 C90,128 62,130 52,108 Z" fill="#74C0FC" stroke="#182C66" stroke-width="1.5" opacity="0.92"/>
      <path d="M44,82 A28,28 0 0,1 94,88" fill="none" stroke="#FFE066" stroke-width="3" stroke-linecap="round"/>
      <path d="M92,118 A28,28 0 0,1 42,112" fill="none" stroke="#FFE066" stroke-width="3" stroke-linecap="round"/>
    </g>

    <!-- Inked Warm Airflow Ribbons & Fresh Dry Folded Stack -->
    <g transform="translate(172, 42)">
      <path d="M0,24 Q24,10 48,24 T92,24" fill="none" stroke="#182C66" stroke-width="6.2" stroke-linecap="round"/>
      <path d="M0,24 Q24,10 48,24 T92,24" fill="none" stroke="url(#drAirflow)" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M6,44 Q30,30 54,44 T96,44" fill="none" stroke="#182C66" stroke-width="5.6" stroke-linecap="round"/>
      <path d="M6,44 Q30,30 54,44 T96,44" fill="none" stroke="url(#drAirflow)" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M0,64 Q24,50 48,64 T88,64" fill="none" stroke="#182C66" stroke-width="5" stroke-linecap="round"/>
      <path d="M0,64 Q24,50 48,64 T88,64" fill="none" stroke="#4CE8E0" stroke-width="2.8" stroke-linecap="round"/>

      <g transform="translate(2, 92)">
        <rect x="0" y="42" width="92" height="24" rx="10" fill="#FF6B81" stroke="#182C66" stroke-width="1.8"/>
        <path d="M12,48 L80,48" stroke="#FFC9D2" stroke-width="2" stroke-linecap="round"/>
        <rect x="6" y="20" width="80" height="24" rx="10" fill="#FFD166" stroke="#182C66" stroke-width="1.8"/>
        <path d="M16,26 L74,26" stroke="#FFF3BF" stroke-width="2" stroke-linecap="round"/>
        <rect x="12" y="-2" width="68" height="24" rx="10" fill="#FFFFFF" stroke="#182C66" stroke-width="1.8"/>
        <path d="M22,4 L70,4" stroke="#BAE6FD" stroke-width="2" stroke-linecap="round"/>
      </g>
    </g>
  </svg>`
};

const SERVICE_ILLUSTRATIONS_BACK = Object.fromEntries(
  Object.entries(SERVICE_ILLUSTRATIONS).map(([k, svg]) => [
    k,
    svg.replace(/id="([^"]+)"/g, 'id="$1Back"').replace(/url\(#([^)]+)\)/g, 'url(#$1Back)')
  ])
);

const App = {
  experienceMode: 'landing', // 'landing' | 'admin'
  currentView: 'ringkasan',
  editingTrxId: null,
  carouselActiveIdx: 0, // Starts on 01 Cuci Setrika

  // State untuk form Transaksi Baru
  formState: {
    selectedPackageId: 'PKT-A',
    selectedDurationLabel: '1 Hari'
  },

  // Filter Riwayat Transaksi
  historyFilters: {
    search: '',
    datePreset: 'Semua',
    paymentStatus: 'Semua',
    laundryStatus: 'Semua'
  },

  // Filter Biaya Operasional
  expenseFilters: {
    search: '',
    category: 'Semua',
    datePreset: 'Semua'
  },

  // Filter Periode Laporan Keuangan
  reportPeriodFilter: 'semua',

  atmosphereMode: 'day', // 'day' | 'sunset' | 'night'

  // Smooth Lerped Motion & Cached Parallax State (Zero-Reflow 60fps Engine)
  motionState: {
    motionInitialized: false,
    targetScrollY: 0,
    currentScrollY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    currentMouseX: 0,
    currentMouseY: 0,
    touchStartX: 0,
    rafRunning: false,
    headerScrolled: null,
    cachedViewportHeight: 900,
    cachedViewportWidth: 1440,
    cachedOriginHeader: null,
    cachedBoatNode: null,
    cachedHeadline: null,
    cachedHeroLayers: null,
    cachedEcoSections: null,
    cachedContentLayers: null,
    cachedBubbleTransitions: null,
    cachedBiomePortals: null,
    cachedSeabedStage: null,
    navCamShift: null,
    navTransitionState: null,
    lastHeroKey: '',
    lastBoatKey: '',
    lastHeadKey: '',
    lastDocHeight: 0,
    resizeObserver: null
  },

  init() {
    this.initAtmosphereMode();
    this.syncSidebarBranding();
    this.updateNavBadges();
    this.renderLandingCarousel();
    if (this.experienceMode === 'admin') {
      this.navigate(this.currentView || 'ringkasan');
    }
    this.initMotionSystem();
  },

  get db() {
    return window.LaundryStore.state;
  },

  _resolveIllustrationKey(pkg) {
    if (!pkg) return 'cuciSetrika';
    const nameLower = String(pkg.name || '').toLowerCase();
    const idUpper = String(pkg.id || '').toUpperCase();

    if (idUpper === 'PKT-A' || (nameLower.includes('cuci') && nameLower.includes('setrika'))) {
      return 'cuciSetrika';
    }
    if (idUpper === 'PKT-B' || (nameLower.includes('cuci') && nameLower.includes('kering'))) {
      return 'cuciKering';
    }
    if (idUpper === 'PKT-C' || nameLower.includes('setrika')) {
      return 'paketSetrika';
    }
    if (idUpper === 'PKT-D' || nameLower.includes('dryer') || nameLower.includes('pengering')) {
      return 'dryerPengering';
    }
    return 'cuciSetrika';
  },

  /**
   * Returns the accurate 2.5D illustration matching the service package
   */
  getServiceIllustration(pkg) {
    return SERVICE_ILLUSTRATIONS[this._resolveIllustrationKey(pkg)];
  },

  getBackServiceIllustration(pkg) {
    return SERVICE_ILLUSTRATIONS_BACK[this._resolveIllustrationKey(pkg)];
  },

  /**
   * Format angka ke format Rupiah standar Indonesia (contoh: Rp11.200)
   */
  fmtRp(amount) {
    const val = Math.round(Number(amount) || 0);
    const formatted = Math.abs(val)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return val < 0 ? `-Rp${formatted}` : `Rp${formatted}`;
  },

  /**
   * Format angka berat desimal agar jelas (contoh: 1.4 -> 1.4, 3.5 -> 3.5)
   */
  fmtWeight(num) {
    const n = Number(num) || 0;
    return Number(n.toFixed(2)).toString();
  },

  escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  toast(message, type = 'info') {
    const stack = document.getElementById('toastStack');
    if (!stack) return;
    while (stack.children && stack.children.length >= 4) {
      stack.children[0].remove?.();
    }
    const item = document.createElement('div');
    item.className = 'toast-msg';
    if (type === 'warning') item.style.borderLeftColor = '#FBBF24';
    if (type === 'danger') item.style.borderLeftColor = '#EF4444';

    item.innerHTML = `
      <span>${this.escapeHtml(message)}</span>
      <button type="button" style="color:rgba(255,255,255,0.75);font-size:1.1rem;" onclick="this.parentElement.remove()" aria-label="Tutup">&times;</button>
    `;
    stack.appendChild(item);
    setTimeout(() => {
      if (item.parentElement) item.remove();
    }, 3600);
  },

  syncSidebarBranding() {
    const s = this.db.settings;
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el && val) el.textContent = val;
    };

    const heroTitleEl = document.getElementById('landingHeroTitle');
    if (heroTitleEl && s.businessName) {
      const rawUpper = s.businessName.trim().toUpperCase();
      if (rawUpper.endsWith(' LAUNDRY')) {
        const mainPart = rawUpper.slice(0, -8).trim();
        const formattedMain = this.escapeHtml(mainPart).replace('&amp;', '<span class="hero-amp">&amp;</span>');
        heroTitleEl.innerHTML = `<span class="hero-title-main">${formattedMain}</span><span class="hero-title-sub">LAUNDRY</span>`;
      } else {
        heroTitleEl.textContent = rawUpper;
      }
    }

    setTxt('landingHeroDesc', s.description);
    setTxt('landingFooterDesc', s.description);
    setTxt('sidebarBizName', s.businessName);
    setTxt('sidebarAdminName', s.adminName);
    setTxt('sidebarAdminRole', s.adminRole);
    setTxt('landingFooterAddress', s.address);
    setTxt('landingFooterPhone', s.phone);
    setTxt('landingFooterHours', s.operatingHours);
  },

  updateNavBadges() {
    const el = document.getElementById('navTrxCount');
    if (el) el.textContent = this.db.transactions.length;
  },

  /* ==========================================================================
     DAY / SUNSET / NIGHT ATMOSPHERE MODE SWITCHER (TOP CENTER ORB)
     ========================================================================== */
  initAtmosphereMode() {
    let savedMode = 'day';
    try {
      if (typeof localStorage !== 'undefined') {
        savedMode = localStorage.getItem('fresh_clean_atmosphere_mode') || 'day';
      }
    } catch {
      savedMode = 'day';
    }
    if (savedMode !== 'day' && savedMode !== 'sunset' && savedMode !== 'night') {
      savedMode = 'day';
    }
    this.applyAtmosphereMode(savedMode);
  },

  applyAtmosphereMode(mode) {
    this.atmosphereMode = mode;
    const classList = document.body?.classList;
    if (classList) {
      classList.toggle('theme-sunset', mode === 'sunset');
      classList.toggle('theme-night', mode === 'night');
    }
    this.syncAtmosphereOrbState(mode);
  },

  syncAtmosphereOrbState(mode) {
    const orb = document.getElementById('originCenterOrb');
    if (!orb) return;
    orb.setAttribute?.('aria-pressed', mode !== 'day' ? 'true' : 'false');
    orb.setAttribute?.('data-theme-mode', mode);
    if (mode === 'sunset') {
      orb.title = 'Mode Senja Aktif — Klik untuk beralih ke Mode Malam';
    } else if (mode === 'night') {
      orb.title = 'Mode Malam Aktif — Klik untuk kembali ke Mode Siang';
    } else {
      orb.title = 'Mode Siang Aktif — Klik untuk beralih ke Mode Senja / Malam';
    }
  },

  toggleAtmosphereMode() {
    if (!document.body?.classList) return;
    const order = ['day', 'sunset', 'night'];
    const currentIdx = order.indexOf(this.atmosphereMode);
    const nextMode = order[(currentIdx + 1) % order.length];
    this.applyAtmosphereMode(nextMode);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('fresh_clean_atmosphere_mode', nextMode);
      }
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi
    }
    const labels = {
      day: 'Mode Siang diaktifkan',
      sunset: 'Mode Senja diaktifkan',
      night: 'Mode Malam diaktifkan'
    };
    this.toast(labels[nextMode]);
  },

  /* ==========================================================================
     EXPERIENCE MODE SWITCHER (2.5D LANDING <-> INTERNAL ADMIN WORKSPACE)
     ========================================================================== */
  switchExperienceMode(mode) {
    this.experienceMode = mode;
    const landingEl = document.getElementById('landingExperienceView');
    const adminEl = document.getElementById('adminWorkspaceView');
    const btnLand = document.getElementById('dockLandingBtn');
    const btnAdm = document.getElementById('dockAdminBtn');

    if (mode === 'admin') {
      if (typeof this.cancelSceneTransition === 'function') this.cancelSceneTransition(false);
      landingEl?.classList.add('hidden');
      adminEl?.classList.remove('hidden');
      document.body.classList.add('in-admin-mode');
      btnLand?.classList.remove('active');
      btnAdm?.classList.add('active');
      this.updateNavBadges();
      this.navigate(this.currentView || 'ringkasan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      adminEl?.classList.add('hidden');
      landingEl?.classList.remove('hidden');
      document.body.classList.remove('in-admin-mode');
      btnAdm?.classList.remove('active');
      btnLand?.classList.add('active');
      this.syncSidebarBranding();
      this.renderLandingCarousel();
      this.cacheParallaxNodes();
      this.applyParallaxTransforms(0, this.motionState.currentMouseX, this.motionState.currentMouseY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  toggleOriginMobileMenu() {
    document.getElementById('originMobileMenu')?.classList.toggle('open');
  },

  closeOriginMobileMenu() {
    document.getElementById('originMobileMenu')?.classList.remove('open');
  },

  openMobileSidebar() {
    document.getElementById('appSidebar')?.classList.add('open');
    document.getElementById('sidebarBackdrop')?.classList.add('open');
  },

  closeMobileSidebar() {
    document.getElementById('appSidebar')?.classList.remove('open');
    document.getElementById('sidebarBackdrop')?.classList.remove('open');
  },

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.add('hidden');
  },

  /* ==========================================================================
     2.5D POP-OUT 3-CARD CAROUSEL WITH SERVICE-ACCURATE IMAGERY
     ========================================================================== */
  renderLandingCarousel() {
    const grid = document.getElementById('originCarouselGrid');
    const dotsWrap = document.getElementById('originCarouselDots');
    if (!grid || !dotsWrap) return;

    const activePkgs = this.db.packages.filter(p => p.active);
    const items = activePkgs.length > 0 ? activePkgs : this.db.packages;
    const total = items.length;

    if (this.carouselActiveIdx >= total) {
      this.carouselActiveIdx = 0;
    }

    const leftIdx = (this.carouselActiveIdx - 1 + total) % total;
    const centerIdx = this.carouselActiveIdx;
    const rightIdx = (this.carouselActiveIdx + 1) % total;

    const visibleTriplet = total >= 3
      ? [
        { pkg: items[leftIdx], idx: leftIdx, pos: 'left' },
        { pkg: items[centerIdx], idx: centerIdx, pos: 'center' },
        { pkg: items[rightIdx], idx: rightIdx, pos: 'right' }
      ]
      : items.map((pkg, idx) => ({ pkg, idx, pos: idx === centerIdx ? 'center' : 'side' }));

    if (typeof grid.replaceChildren === 'function' && typeof document.createElement === 'function') {
      if (!this._cardDomCache) this._cardDomCache = new Map();
      const cardNodes = visibleTriplet.map(slot => {
        const pkg = slot.pkg;
        const numStr = String(slot.idx + 1).padStart(2, '0');
        const isCenter = slot.pos === 'center';
        const tariffsSig = (pkg.durations || []).map(d => `${d.label}:${d.price}`).join('|');
        const cacheKey = `${pkg.id}_${numStr}_${pkg.name}_${pkg.description}_${pkg.unit}_${pkg.minWeight}_${tariffsSig}`;

        let articleEl = this._cardDomCache.get(cacheKey);
        if (!articleEl) {
          const artSvg = this.getServiceIllustration(pkg);
          const backArtSvg = this.getBackServiceIllustration(pkg);
          const minNote = pkg.unit === 'kg' && pkg.minWeight > 0
            ? `Min. ${pkg.minWeight} kg`
            : `Satuan / ${this.escapeHtml(pkg.unit)}`;

          const tariffsHtml = (pkg.durations || [])
            .map(d => `<span class="card-tariff-pill">${this.escapeHtml(d.label)}: ${this.fmtRp(d.price)}/${this.escapeHtml(pkg.unit)}</span>`)
            .join('');

          articleEl = document.createElement('article');
          articleEl.innerHTML = `
            <div class="card-3d-inner">
              <div class="card-face card-face-front">
                <span class="card-index-num">${numStr}</span>
                <div class="card-popout-art">${artSvg}</div>

                <div class="card-body-copy">
                  <h3>${this.escapeHtml(pkg.name)}</h3>
                  <p>${this.escapeHtml(pkg.description || 'Layanan perawatan pakaian Fresh & Clean Laundry.')}</p>
                  <div class="card-tariff-pills">${tariffsHtml}</div>
                </div>

                <button
                  type="button"
                  class="btn-card-learn"
                  onclick="App.openLandingPackageDetailModal('${pkg.id}')"
                >
                  <span>Rincian Tarif</span>
                  <span>&rsaquo;</span>
                </button>
              </div>

              <div class="card-face card-face-back">
                <div class="card-foil-sheen" aria-hidden="true"></div>
                <div class="card-back-header">
                  <span class="card-back-badge">PAKET ${numStr}</span>
                  <span class="card-back-unit">${minNote}</span>
                </div>

                <div class="card-back-emblem" aria-hidden="true">${backArtSvg}</div>

                <div class="card-back-copy">
                  <h3>${this.escapeHtml(pkg.name)}</h3>
                  <p class="card-back-desc">${this.escapeHtml(pkg.description || 'Layanan perawatan pakaian Fresh & Clean Laundry.')}</p>
                  <div class="card-tariff-pills card-back-tariffs">${tariffsHtml}</div>
                </div>

                <button
                  type="button"
                  class="btn-card-learn btn-card-learn-back"
                  onclick="App.openLandingPackageDetailModal('${pkg.id}')"
                >
                  <span>Rincian Tarif</span>
                  <span>&rsaquo;</span>
                </button>
              </div>
            </div>`;
          this._cardDomCache.set(cacheKey, articleEl);
        }
        articleEl.className = isCenter ? 'origin-feature-card center-elevated' : 'origin-feature-card';
        return articleEl;
      });
      grid.replaceChildren(...cardNodes);
    } else {
      grid.innerHTML = visibleTriplet
        .map(slot => {
          const pkg = slot.pkg;
          const numStr = String(slot.idx + 1).padStart(2, '0');
          const isCenter = slot.pos === 'center';
          const artSvg = this.getServiceIllustration(pkg);
          const backArtSvg = this.getBackServiceIllustration(pkg);
          const minNote = pkg.unit === 'kg' && pkg.minWeight > 0
            ? `Min. ${pkg.minWeight} kg`
            : `Satuan / ${this.escapeHtml(pkg.unit)}`;

          const tariffsHtml = (pkg.durations || [])
            .map(d => `<span class="card-tariff-pill">${this.escapeHtml(d.label)}: ${this.fmtRp(d.price)}/${this.escapeHtml(pkg.unit)}</span>`)
            .join('');

          return `
            <article class="origin-feature-card ${isCenter ? 'center-elevated' : ''}">
              <div class="card-3d-inner">
                <div class="card-face card-face-front">
                  <span class="card-index-num">${numStr}</span>
                  <div class="card-popout-art">${artSvg}</div>

                  <div class="card-body-copy">
                    <h3>${this.escapeHtml(pkg.name)}</h3>
                    <p>${this.escapeHtml(pkg.description || 'Layanan perawatan pakaian Fresh & Clean Laundry.')}</p>
                    <div class="card-tariff-pills">${tariffsHtml}</div>
                  </div>

                  <button
                    type="button"
                    class="btn-card-learn"
                    onclick="App.openLandingPackageDetailModal('${pkg.id}')"
                  >
                    <span>Rincian Tarif</span>
                    <span>&rsaquo;</span>
                  </button>
                </div>

                <div class="card-face card-face-back">
                  <div class="card-foil-sheen" aria-hidden="true"></div>
                  <div class="card-back-header">
                    <span class="card-back-badge">PAKET ${numStr}</span>
                    <span class="card-back-unit">${minNote}</span>
                  </div>

                  <div class="card-back-emblem" aria-hidden="true">${backArtSvg}</div>

                  <div class="card-back-copy">
                    <h3>${this.escapeHtml(pkg.name)}</h3>
                    <p class="card-back-desc">${this.escapeHtml(pkg.description || 'Layanan perawatan pakaian Fresh & Clean Laundry.')}</p>
                    <div class="card-tariff-pills card-back-tariffs">${tariffsHtml}</div>
                  </div>

                  <button
                    type="button"
                    class="btn-card-learn btn-card-learn-back"
                    onclick="App.openLandingPackageDetailModal('${pkg.id}')"
                  >
                    <span>Rincian Tarif</span>
                    <span>&rsaquo;</span>
                  </button>
                </div>
              </div>
            </article>
          `;
        })
        .join('');
    }

    const dotsSig = items.map(p => `${p.id}:${p.name}`).join('|');
    if (dotsWrap._dotsSig === dotsSig && dotsWrap.children && dotsWrap.children.length === items.length) {
      for (let i = 0; i < dotsWrap.children.length; i++) {
        dotsWrap.children[i].classList?.toggle('active', i === this.carouselActiveIdx);
      }
    } else {
      dotsWrap._dotsSig = dotsSig;
      dotsWrap.innerHTML = items
        .map((pkg, idx) => `
          <button
            type="button"
            class="carousel-dash ${idx === this.carouselActiveIdx ? 'active' : ''}"
            onclick="App.setOriginCarouselIndex(${idx})"
            aria-label="Slide ${idx + 1}: ${this.escapeHtml(pkg.name)}"
          ></button>
        `)
        .join('');
    }
  },

  shiftOriginCarousel(delta) {
    const activePkgs = this.db.packages.filter(p => p.active);
    const total = Math.max(1, activePkgs.length || this.db.packages.length);
    this.carouselActiveIdx = (this.carouselActiveIdx + delta + total) % total;
    this.renderLandingCarousel();
  },

  setOriginCarouselIndex(index) {
    this.carouselActiveIdx = index;
    this.renderLandingCarousel();
  },

  openLandingPackageDetailModal(pkgId) {
    const pkg = this.db.packages.find(p => p.id === pkgId);
    if (!pkg) return;

    const box = document.getElementById('appModalBox');
    box.innerHTML = `
      <div class="modal-head">
        <div>
          <span class="badge badge-diterima">Informasi Paket &amp; Tarif</span>
          <h3 class="card-title" style="margin-top:6px;">${this.escapeHtml(pkg.name)}</h3>
        </div>
        <button type="button" class="btn btn-secondary btn-xs" onclick="App.closeModal('appModal')">&times;</button>
      </div>

      <p style="font-size:0.9rem;color:var(--adm-ink-secondary);margin-bottom:16px;">
        ${this.escapeHtml(pkg.description)}
      </p>

      <div style="background:var(--adm-surface-subtle);padding:16px;border-radius:12px;margin-bottom:18px;border:1px solid var(--adm-border);">
        <div style="display:flex;justify-content:space-between;font-size:0.76rem;font-weight:800;color:var(--adm-ink-muted);padding-bottom:8px;border-bottom:1px solid var(--adm-border-strong);margin-bottom:8px;">
          <span>DURASI PENGERJAAN</span>
          <span>HARGA PER ${this.escapeHtml(pkg.unit.toUpperCase())}</span>
        </div>
        ${pkg.durations.map(d => `
          <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--adm-border);font-size:0.92rem;">
            <strong>${this.escapeHtml(d.label)}</strong>
            <strong class="mono" style="color:var(--adm-primary);">${this.fmtRp(d.price)}/${this.escapeHtml(pkg.unit)}</strong>
          </div>
        `).join('')}
        ${pkg.unit === 'kg' && pkg.minWeight > 0 ? `
          <div style="margin-top:10px;font-size:0.8rem;color:var(--adm-ink-muted);">
            * Ketentuan: Berlaku berat minimum <strong>${pkg.minWeight} kg</strong> untuk paket ini.
          </div>
        ` : ''}
      </div>

      <div style="display:flex;justify-content:flex-end;gap:10px;">
        <button type="button" class="btn btn-secondary btn-sm" onclick="App.closeModal('appModal')">Tutup</button>
        <button type="button" class="btn btn-primary btn-sm" onclick="App.closeModal('appModal'); App.formState.selectedPackageId='${pkg.id}'; App.switchExperienceMode('admin'); App.openNewTransaction();">
          Input Transaksi Paket Ini di Admin &rarr;
        </button>
      </div>
    `;
    document.getElementById('appModal').classList.remove('hidden');
  },

  /* ==========================================================================
     ADVANCED LERPED MULTI-LAYER SCROLL & CURSOR PARALLAX ENGINE
     Zero-lag cached DOM nodes, viewport culling & multi-speed depth layers
     ========================================================================== */
  cacheParallaxNodes() {
    const m = this.motionState;

    if (!m._staticNodes) {
      const heroEls = Array.from(document.querySelectorAll('[data-scroll-y], [data-mouse-x]')).map(el => {
        const sf = parseFloat(el.getAttribute('data-scroll-y')) || 0;
        return {
          el,
          scrollFactor: sf,
          mouseXFactor: parseFloat(el.getAttribute('data-mouse-x')) || 0,
          mouseYFactor: parseFloat(el.getAttribute('data-mouse-y')) || 0,
          camFactor: 68 * (sf < 0 ? 1.55 : (sf > 0.25 ? 0.85 : 0.36)),
          txStr: '0.0',
          lastQMx: null
        };
      });

      const ecoEls = Array.from(document.querySelectorAll('[data-section-parallax]')).map(ecoLayer => {
        const parentSec = ecoLayer.parentElement;
        const depthNodes = typeof ecoLayer.querySelectorAll === 'function'
          ? Array.from(ecoLayer.querySelectorAll('[data-depth-speed]')).map(node => {
            const spd = parseFloat(node.getAttribute('data-depth-speed')) || 0;
            return {
              node,
              speed: spd,
              camFactor: spd <= -0.14 ? 64 : (spd < 0 ? 38 : 16),
              txStr: '0.0',
              lastQMx: null
            };
          })
          : [];
        const creatureNodes = typeof ecoLayer.querySelectorAll === 'function'
          ? Array.from(ecoLayer.querySelectorAll('[data-creature-scroll="fade"]'))
          : [];
        return {
          ecoLayer,
          parentSec,
          factor: parseFloat(ecoLayer.getAttribute('data-section-parallax')) || 0.1,
          depthNodes,
          creatureNodes
        };
      });

      const contentEls = Array.from(document.querySelectorAll('[data-content-parallax]')).map(el => ({
        el,
        factor: parseFloat(el.getAttribute('data-content-parallax')) || 0
      }));

      const seabedEl = document.getElementById('seabedPanoramaStage');
      let seabedStatic = null;
      if (seabedEl) {
        const depthNodes = typeof seabedEl.querySelectorAll === 'function'
          ? Array.from(seabedEl.querySelectorAll('[data-depth-speed]')).map(node => {
            const spd = parseFloat(node.getAttribute('data-depth-speed')) || 0;
            return {
              node,
              speed: spd,
              camFactor: spd <= -0.10 ? 54 : (spd < 0 ? 32 : 14),
              txStr: '0.0',
              lastQMx: null
            };
          })
          : [];
        const creatureNodes = typeof seabedEl.querySelectorAll === 'function'
          ? Array.from(seabedEl.querySelectorAll('[data-creature-scroll="fade"]'))
          : [];
        seabedStatic = { el: seabedEl, depthNodes, creatureNodes };
      }

      const bubbleEls = Array.from(document.querySelectorAll('[data-bubble-transition]')).map(band => {
        const parentEl = band.parentElement;
        const orbs = typeof band.querySelectorAll === 'function'
          ? Array.from(band.querySelectorAll('[data-bubble-orb]')).map(orb => {
            const tAttr = orb.getAttribute ? (orb.getAttribute('transform') || '') : '';
            const mTrans = tAttr.match(/translate\(\s*([-\d.]+)[,\s]+([-\d.]+)\s*\)/i);
            return {
              el: orb,
              baseX: mTrans ? parseFloat(mTrans[1]) : 0,
              baseY: mTrans ? parseFloat(mTrans[2]) : 0,
              speedY: parseFloat(orb.getAttribute?.('data-speed-y')) || -100,
              spreadX: parseFloat(orb.getAttribute?.('data-spread-x')) || 28,
              dirX: parseFloat(orb.getAttribute?.('data-dir-x')) || 1,
              baseScale: parseFloat(orb.getAttribute?.('data-base-scale')) || 1,
              expandAmt: parseFloat(orb.getAttribute?.('data-expand')) || 0.4,
              maxOp: parseFloat(orb.getAttribute?.('data-max-op')) || 0.82
            };
          })
          : [];
        return { band, parentEl, orbs };
      });

      const portalEls = Array.from(document.querySelectorAll('[data-biome-portal]')).map(band => {
        const leftGates = typeof band.querySelectorAll === 'function'
          ? Array.from(band.querySelectorAll('[data-portal-side="left"]')).map(el => ({
            el,
            shift: parseFloat(el.getAttribute?.('data-portal-shift')) || 28
          }))
          : [];
        const rightGates = typeof band.querySelectorAll === 'function'
          ? Array.from(band.querySelectorAll('[data-portal-side="right"]')).map(el => ({
            el,
            shift: parseFloat(el.getAttribute?.('data-portal-shift')) || 28
          }))
          : [];
        const curtains = typeof band.querySelectorAll === 'function'
          ? Array.from(band.querySelectorAll('[data-portal-curtain]')).map(el => ({
            el,
            maxOp: parseFloat(el.getAttribute?.('data-portal-op')) || 0.72
          }))
          : [];
        const drifts = typeof band.querySelectorAll === 'function'
          ? Array.from(band.querySelectorAll('[data-portal-drift]')).map(el => ({
            el,
            driftX: parseFloat(el.getAttribute?.('data-portal-drift-x')) || -44,
            driftY: parseFloat(el.getAttribute?.('data-portal-drift-y')) || -20
          }))
          : [];
        return { band, leftGates, rightGates, curtains, drifts };
      });

      m._staticNodes = {
        originHeader: document.getElementById('originHeader'),
        boatNode: document.getElementById('heroBoatParallaxNode'),
        headline: document.getElementById('heroHeadlineBlock'),
        heroEls,
        ecoEls,
        contentEls,
        seabedStatic,
        bubbleEls,
        portalEls
      };
    }

    const s = m._staticNodes;

    // PHASE 1: Batch All Style Resets First (Write-Only Pass -> Prevents Layout Thrashing)
    for (let i = 0; i < s.ecoEls.length; i++) {
      const item = s.ecoEls[i];
      if (item.ecoLayer.style && item.ecoLayer.style.transform) item.ecoLayer.style.transform = '';
      for (let j = 0; j < item.depthNodes.length; j++) {
        const dn = item.depthNodes[j].node;
        if (dn.style && dn.style.transform) dn.style.transform = '';
      }
    }
    for (let i = 0; i < s.contentEls.length; i++) {
      const el = s.contentEls[i].el;
      if (el.style && el.style.transform) el.style.transform = '';
    }
    if (s.seabedStatic) {
      for (let j = 0; j < s.seabedStatic.depthNodes.length; j++) {
        const dn = s.seabedStatic.depthNodes[j].node;
        if (dn.style && dn.style.transform) dn.style.transform = '';
      }
    }

    // PHASE 2: Batch All Geometry Reads Together (Read-Only Pass -> Single Browser Layout Pass)
    const sy = window.scrollY || 0;
    m.cachedViewportHeight = window.innerHeight || 900;
    m.cachedViewportWidth = window.innerWidth || 1440;
    m.cachedOriginHeader = s.originHeader;
    m.cachedBoatNode = s.boatNode;
    m.cachedHeadline = s.headline;
    m.cachedHeroLayers = s.heroEls;

    m.cachedEcoSections = s.ecoEls.map(item => {
      let pageTop = 800;
      let height = 560;
      if (item.parentSec && typeof item.parentSec.getBoundingClientRect === 'function') {
        const rect = item.parentSec.getBoundingClientRect();
        pageTop = (rect.top || 0) + sy;
        height = rect.height || 560;
      }
      return {
        ecoLayer: item.ecoLayer,
        parentSec: item.parentSec,
        factor: item.factor,
        pageTop,
        height,
        depthNodes: item.depthNodes,
        creatureNodes: item.creatureNodes,
        lastKey: '',
        lastQOff: null,
        lastQMx: null,
        lastQMy: null,
        lastCamKey: '',
        lastVis: ''
      };
    });

    m.cachedContentLayers = s.contentEls.map(item => {
      let pageTop = 800;
      let height = 320;
      if (typeof item.el.getBoundingClientRect === 'function') {
        const rect = item.el.getBoundingClientRect();
        pageTop = (rect.top || 0) + sy;
        height = rect.height || 320;
      }
      return {
        el: item.el,
        factor: item.factor,
        pageTop,
        height,
        lastKey: '',
        lastQOff: null,
        lastCamKey: ''
      };
    });

    if (s.seabedStatic) {
      let pageTop = 2100;
      let height = 550;
      if (typeof s.seabedStatic.el.getBoundingClientRect === 'function') {
        const rect = s.seabedStatic.el.getBoundingClientRect();
        pageTop = (rect.top || 0) + sy;
        height = rect.height || 550;
      }
      m.cachedSeabedStage = {
        el: s.seabedStatic.el,
        pageTop,
        height,
        depthNodes: s.seabedStatic.depthNodes,
        creatureNodes: s.seabedStatic.creatureNodes,
        lastKey: '',
        lastQOff: null,
        lastQMx: null,
        lastQMy: null,
        lastCamKey: '',
        lastVis: ''
      };
    }

    m.cachedBubbleTransitions = s.bubbleEls.map(item => {
      let pageTop = 800;
      let height = 280;
      if (typeof item.band.getBoundingClientRect === 'function') {
        const rect = item.band.getBoundingClientRect();
        pageTop = (rect.top || 0) + sy;
        height = rect.height || 280;
      } else if (item.parentEl && typeof item.parentEl.getBoundingClientRect === 'function') {
        const rect = item.parentEl.getBoundingClientRect();
        pageTop = (rect.top || 0) + sy - 120;
      }
      return {
        band: item.band,
        pageTop,
        height,
        orbs: item.orbs,
        lastKey: '',
        lastQT: null,
        lastQMx: null
      };
    });

    m.cachedBiomePortals = s.portalEls.map(item => {
      let pageTop = 1000;
      let height = 280;
      if (typeof item.band.getBoundingClientRect === 'function') {
        const rect = item.band.getBoundingClientRect();
        pageTop = (rect.top || 0) + sy;
        height = rect.height || 280;
      }
      return {
        band: item.band,
        pageTop,
        height,
        leftGates: item.leftGates,
        rightGates: item.rightGates,
        curtains: item.curtains,
        drifts: item.drifts,
        lastKey: '',
        lastQT: null,
        lastQMx: null
      };
    });

    m.lastHeroKey = '';
    m.lastBoatKey = '';
    m.lastHeadKey = '';
  },

  initMotionSystem() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0);

    this.motionState.targetScrollY = window.scrollY || 0;
    this.motionState.currentScrollY = this.motionState.targetScrollY;
    this.cacheParallaxNodes();
    this.applyParallaxTransforms(this.motionState.currentScrollY, 0, 0);

    if (this.motionState.motionInitialized) return;
    this.motionState.motionInitialized = true;

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.04, rootMargin: '60px 0px 60px 0px' }
      );
      document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

      // Pause CSS keyframe animations when off-screen (>250px buffer pre-warms smoothly before entering viewport)
      const stageNodes = document.querySelectorAll(
        '#puncak, #tentang, #layanan, .sanctuary-story-frame, #seabedPanoramaStage, #kontak'
      );
      const initVh = this.motionState.cachedViewportHeight || window.innerHeight || 900;
      stageNodes.forEach(el => {
        if (typeof el.getBoundingClientRect === 'function') {
          const r = el.getBoundingClientRect();
          if (r.height > 0) {
            const isOut = r.bottom < -250 || r.top > initVh + 250;
            el.classList?.toggle('is-offscreen', isOut);
          }
        }
      });

      const perfObserver = new IntersectionObserver(
        entries => {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
          }
        },
        { rootMargin: '250px 0px' }
      );
      stageNodes.forEach(el => perfObserver.observe(el));
    } else {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('in-view'));
    }

    if (typeof document.addEventListener === 'function') {
      document.addEventListener('visibilitychange', () => {
        document.body?.classList?.toggle('tab-hidden', !!document.hidden);
      });
    }

    // Cinematic Ocean Camera Scene Navigation (Layered Fore/Mid/Back Departure + Arrival Reveal)
    if (typeof document.addEventListener === 'function') {
      document.addEventListener('click', e => {
        const anchor = e.target && typeof e.target.closest === 'function'
          ? e.target.closest('a[href^="#"]')
          : null;
        if (!anchor) return;
        const hash = anchor.getAttribute('href');
        if (!hash || hash === '#') return;
        const targetEl = document.getElementById(hash.slice(1));
        if (!targetEl) return;
        e.preventDefault();
        this.closeOriginMobileMenu();
        this.navigateToScene(targetEl, hash);
      });
    }

    // Re-sync cached layout coordinates once custom fonts load or landing page height shifts
    if (typeof document.fonts !== 'undefined' && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
      document.fonts.ready.then(() => {
        if (this.experienceMode === 'landing') {
          this.cacheParallaxNodes();
          this.applyParallaxTransforms(window.scrollY || 0, this.motionState.currentMouseX, this.motionState.currentMouseY);
        }
      });
    }

    const landingRoot = document.getElementById('landingExperienceView');
    if (typeof ResizeObserver === 'function' && landingRoot) {
      let roTimer = null;
      this.motionState.lastDocHeight = landingRoot.offsetHeight || 0;
      const ro = new ResizeObserver(entries => {
        if (this.experienceMode !== 'landing' || !entries || !entries[0]) return;
        const h = entries[0].contentRect ? entries[0].contentRect.height : 0;
        if (Math.abs(h - this.motionState.lastDocHeight) <= 2) return;
        this.motionState.lastDocHeight = h;
        clearTimeout(roTimer);
        roTimer = setTimeout(() => {
          this.cacheParallaxNodes();
          this.applyParallaxTransforms(window.scrollY || 0, this.motionState.currentMouseX, this.motionState.currentMouseY);
        }, 60);
      });
      ro.observe(landingRoot);
      this.motionState.resizeObserver = ro;
    }

    const carouselGrid = document.getElementById('originCarouselGrid');
    if (carouselGrid) {
      carouselGrid.addEventListener('touchstart', e => {
        if (e.touches && e.touches[0]) {
          this.motionState.touchStartX = e.touches[0].clientX;
        }
      }, { passive: true });

      carouselGrid.addEventListener('touchend', e => {
        if (e.changedTouches && e.changedTouches[0]) {
          const diffX = e.changedTouches[0].clientX - this.motionState.touchStartX;
          if (Math.abs(diffX) > 45) {
            this.shiftOriginCarousel(diffX < 0 ? 1 : -1);
          }
        }
      }, { passive: true });
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (this.experienceMode === 'admin') {
          if (this.currentView === 'ringkasan') {
            this.drawDashboardChart();
          } else if (this.currentView === 'laporan') {
            this.drawFinancialReportChart();
          }
        } else {
          this.cacheParallaxNodes();
          if (!prefersReduced) {
            this.applyParallaxTransforms(window.scrollY || 0, this.motionState.currentMouseX, this.motionState.currentMouseY);
          }
        }
      }, 140);
    }, { passive: true });

    if (prefersReduced) return;

    window.addEventListener('scroll', () => {
      if (this.motionState.navTransitionState && this.motionState.navTransitionState.rafId) return;
      this.motionState.targetScrollY = window.scrollY || 0;
      if (typeof requestAnimationFrame === 'function') {
        this.startParallaxLoop();
      } else {
        this.motionState.currentScrollY = this.motionState.targetScrollY;
        this.applyParallaxTransforms(this.motionState.targetScrollY, this.motionState.targetMouseX, this.motionState.targetMouseY);
      }
    }, { passive: true });

    if (!isTouch) {
      window.addEventListener('mousemove', e => {
        if (this.experienceMode !== 'landing' || this.motionState.cachedViewportWidth < 768) return;
        this.motionState.targetMouseX = (e.clientX / this.motionState.cachedViewportWidth) - 0.5;
        this.motionState.targetMouseY = (e.clientY / this.motionState.cachedViewportHeight) - 0.5;
        this.startParallaxLoop();
      }, { passive: true });
    }
  },

  cancelSceneTransition(syncParallax = true) {
    const m = this.motionState;
    const st = m.navTransitionState;
    if (st) {
      if (st.rafId && typeof cancelAnimationFrame === 'function') {
        cancelAnimationFrame(st.rafId);
      }
      if (st.cleanupTimer) clearTimeout(st.cleanupTimer);
      if (st.abortHandler && typeof window.removeEventListener === 'function') {
        window.removeEventListener('wheel', st.abortHandler);
        window.removeEventListener('touchstart', st.abortHandler);
        window.removeEventListener('keydown', st.abortKeyHandler);
      }
      if (st.veilEl) {
        st.veilEl.style.opacity = '0';
        st.veilEl.classList?.remove('active', 'dir-down', 'dir-up');
      }
      if (st.arrivingEl) {
        st.arrivingEl.classList?.remove('scene-arriving', 'dir-down', 'dir-up');
      }
      m.navTransitionState = null;
    }

    m.navCamShift = null;
    m.lastHeroKey = '';
    m.lastBoatKey = '';
    m.lastHeadKey = '';
    (m.cachedContentLayers || []).forEach(item => {
      if (item.el?.style) item.el.style.opacity = '';
      item.lastKey = '';
    });

    if (syncParallax && this.experienceMode === 'landing') {
      const sy = window.scrollY || 0;
      m.targetScrollY = sy;
      m.currentScrollY = sy;
      this.applyParallaxTransforms(sy, m.currentMouseX, m.currentMouseY);
    }
  },

  navigateToScene(targetEl, hash) {
    if (!targetEl) return;
    this.cancelSceneTransition(false);

    const m = this.motionState;
    const prefersReduced = typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startY = window.scrollY || 0;
    const vh = m.cachedViewportHeight || window.innerHeight || 900;
    const docHeight = document.documentElement?.scrollHeight || 3849;
    const maxScroll = Math.max(0, docHeight - vh);
    const navOffset = (hash === '#puncak' || hash === '#kontak') ? 0 : 28;
    const rectTop = typeof targetEl.getBoundingClientRect === 'function'
      ? targetEl.getBoundingClientRect().top
      : 0;
    const targetTop = Math.max(0, Math.min(maxScroll, Math.round(rectTop + startY - navOffset)));

    if (prefersReduced || typeof requestAnimationFrame !== 'function') {
      window.scrollTo(0, targetTop);
      m.targetScrollY = targetTop;
      m.currentScrollY = targetTop;
      this.applyParallaxTransforms(targetTop, m.currentMouseX, m.currentMouseY);
      return;
    }

    const dist = Math.abs(targetTop - startY);
    const dir = targetTop >= startY ? 1 : -1;
    const dirCls = dir > 0 ? 'dir-down' : 'dir-up';

    document.querySelectorAll('.scene-arriving').forEach(el => {
      el.classList.remove('scene-arriving', 'dir-down', 'dir-up');
    });

    if (dist < 42) {
      targetEl.classList?.add('scene-arriving', dirCls);
      window.scrollTo(0, targetTop);
      m.navTransitionState = {
        arrivingEl: targetEl,
        cleanupTimer: setTimeout(() => {
          targetEl.classList?.remove('scene-arriving', 'dir-down', 'dir-up');
          if (m.navTransitionState?.arrivingEl === targetEl) m.navTransitionState = null;
        }, 560)
      };
      return;
    }

    const veilEl = document.getElementById('oceanSceneTransitionVeil');
    if (veilEl) {
      veilEl.classList?.remove('active', 'dir-down', 'dir-up');
      void veilEl.offsetWidth;
      veilEl.classList?.add('active', dirCls);
    }

    const DEPART_MS = 340;
    const ARRIVE_MS = 600;
    const TOTAL_MS = DEPART_MS + ARRIVE_MS;
    const departEndY = Math.max(0, Math.min(maxScroll, startY + dir * Math.min(78, dist * 0.12)));
    const entryY = Math.max(0, Math.min(maxScroll, targetTop - dir * Math.min(260, Math.max(96, dist * 0.32))));
    const startTime = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
    let relocated = false;

    const abortHandler = () => this.cancelSceneTransition(true);
    const abortKeyHandler = e => {
      if (e && ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
        this.cancelSceneTransition(true);
      }
    };

    if (typeof window.addEventListener === 'function') {
      window.addEventListener('wheel', abortHandler, { passive: true, once: true });
      window.addEventListener('touchstart', abortHandler, { passive: true, once: true });
      window.addEventListener('keydown', abortKeyHandler, { passive: true });
    }

    const st = {
      rafId: 0,
      cleanupTimer: null,
      abortHandler,
      abortKeyHandler,
      veilEl,
      arrivingEl: null
    };
    m.navTransitionState = st;

    const tick = now => {
      if (m.navTransitionState !== st || this.experienceMode !== 'landing') return;
      const elapsed = Math.max(0, now - startTime);
      const tNorm = Math.max(0, Math.min(1, elapsed / TOTAL_MS));
      const veilAlpha = (0.5 - 0.5 * Math.cos(2 * Math.PI * tNorm)) * 0.68;

      if (elapsed < DEPART_MS) {
        const p = Math.max(0, Math.min(1, elapsed / DEPART_MS));
        const easeDepart = p * p * (3 - 2 * p);
        const sy = startY + (departEndY - startY) * easeDepart;
        if (veilEl) veilEl.style.opacity = veilAlpha.toFixed(3);
        m.navCamShift = { dir, mode: 'depart', intensity: easeDepart * 0.85 };
        m.targetScrollY = sy;
        m.currentScrollY = sy;
        window.scrollTo(0, sy);
        this.applyParallaxTransforms(sy, m.currentMouseX, m.currentMouseY);
        st.rafId = requestAnimationFrame(tick);
        return;
      }

      if (!relocated) {
        relocated = true;
        st.arrivingEl = targetEl;
        targetEl.classList?.add('scene-arriving', dirCls);
        m.lastHeroKey = '';
        m.lastBoatKey = '';
        m.lastHeadKey = '';
        (m.cachedContentLayers || []).forEach(item => {
          if (item.el?.style) item.el.style.opacity = '';
          item.lastKey = '';
        });
      }

      if (elapsed < TOTAL_MS) {
        const q = Math.max(0, Math.min(1, (elapsed - DEPART_MS) / ARRIVE_MS));
        const easeArrive = 1 - Math.pow(1 - q, 4);
        const rem = (1 - easeArrive) * 0.85;
        const sy = entryY + (targetTop - entryY) * easeArrive;
        if (veilEl) veilEl.style.opacity = veilAlpha.toFixed(3);
        m.navCamShift = { dir, mode: 'arrive', intensity: rem };
        m.targetScrollY = sy;
        m.currentScrollY = sy;
        window.scrollTo(0, sy);
        this.applyParallaxTransforms(sy, m.currentMouseX, m.currentMouseY);
        st.rafId = requestAnimationFrame(tick);
        return;
      }

      // Final exact arrival settle
      window.removeEventListener?.('wheel', abortHandler);
      window.removeEventListener?.('touchstart', abortHandler);
      window.removeEventListener?.('keydown', abortKeyHandler);
      m.navCamShift = null;
      m.lastHeroKey = '';
      m.lastBoatKey = '';
      m.lastHeadKey = '';
      (m.cachedContentLayers || []).forEach(item => {
        if (item.el?.style) item.el.style.opacity = '';
        item.lastKey = '';
      });
      if (veilEl) {
        veilEl.style.opacity = '0';
        veilEl.classList?.remove('active', 'dir-down', 'dir-up');
      }
      window.scrollTo(0, targetTop);
      m.targetScrollY = targetTop;
      m.currentScrollY = targetTop;
      this.applyParallaxTransforms(targetTop, m.currentMouseX, m.currentMouseY);

      st.cleanupTimer = setTimeout(() => {
        targetEl.classList?.remove('scene-arriving', 'dir-down', 'dir-up');
        if (m.navTransitionState === st) m.navTransitionState = null;
      }, 420);
    };

    st.rafId = requestAnimationFrame(tick);
  },

  startParallaxLoop() {
    if (this.motionState.rafRunning || typeof requestAnimationFrame !== 'function') return;
    this.motionState.rafRunning = true;

    const step = () => {
      const m = this.motionState;
      m.rafRunning = false;

      // 1:1 compositor-synced vertical scroll eliminates upward/downward reverse-scroll phase lag
      const liveSy = typeof window.scrollY === 'number' ? window.scrollY : m.targetScrollY;
      m.targetScrollY = liveSy;
      m.currentScrollY = liveSy;

      m.currentMouseX += (m.targetMouseX - m.currentMouseX) * 0.14;
      m.currentMouseY += (m.targetMouseY - m.currentMouseY) * 0.14;

      const deltaX = Math.abs(m.targetMouseX - m.currentMouseX);
      const deltaY = Math.abs(m.targetMouseY - m.currentMouseY);

      if (deltaX <= 0.0015 && deltaY <= 0.0015) {
        m.currentMouseX = m.targetMouseX;
        m.currentMouseY = m.targetMouseY;
      }

      this.applyParallaxTransforms(m.currentScrollY, m.currentMouseX, m.currentMouseY);

      if (deltaX > 0.0015 || deltaY > 0.0015) {
        m.rafRunning = true;
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  },

  applyParallaxTransforms(
    sy = this.motionState.targetScrollY,
    mx = this.motionState.targetMouseX,
    my = this.motionState.targetMouseY
  ) {
    if (this.experienceMode !== 'landing') return;

    const m = this.motionState;
    if (!m.cachedHeroLayers) {
      this.cacheParallaxNodes();
    }

    // Update fixed navbar state strictly inside rAF and only when threshold changes
    const isScrolled = sy > 40;
    if (m.cachedOriginHeader && m.headerScrolled !== isScrolled) {
      m.headerScrolled = isScrolled;
      m.cachedOriginHeader.classList.toggle('scrolled', isScrolled);
    }

    // Camera depth offset active strictly during nav scene transitions (null during manual scroll)
    const ns = m.navCamShift;
    const camKey = ns ? `${ns.mode}_${ns.dir}_${ns.intensity.toFixed(3)}` : '';
    const camVec = ns ? ((ns.mode === 'depart' ? -ns.dir : ns.dir) * ns.intensity) : 0;

    const qMx3 = Math.round(mx * 1000);
    const qMy3 = Math.round(my * 1000);
    const qMx2 = Math.round(mx * 100);

    // 1. Hero Surface Multi-Layer Parallax (Strictly Deterministic & Clamped for Bidirectional Parity)
    const clampedHeroSy = Math.max(0, Math.min(sy, 1080));
    const qHeroSy = Math.round(clampedHeroSy * 10);
    if (
      m.lastHeroKey === '' ||
      m.lastQHeroSy !== qHeroSy ||
      m.lastHeroQMx !== qMx3 ||
      m.lastHeroQMy !== qMy3 ||
      m.lastHeroCamKey !== camKey
    ) {
      m.lastHeroKey = '1';
      m.lastQHeroSy = qHeroSy;
      m.lastHeroQMx = qMx3;
      m.lastHeroQMy = qMy3;
      m.lastHeroCamKey = camKey;
      const heroLayers = m.cachedHeroLayers || [];
      for (let i = 0; i < heroLayers.length; i++) {
        const item = heroLayers[i];
        const depthMul = item.scrollFactor < 0 ? 1.55 : (item.scrollFactor > 0.25 ? 0.85 : 0.36);
        const camOffset = camVec * (item.camFactor || (68 * depthMul));
        const ty = (clampedHeroSy * item.scrollFactor) + (my * item.mouseYFactor) + camOffset;
        if (item.lastQMx !== qMx3) {
          item.lastQMx = qMx3;
          item.txStr = (mx * item.mouseXFactor).toFixed(1);
        }
        item.el.style.transform = `translate3d(${item.txStr}px, ${ty.toFixed(1)}px, 0)`;
      }
    }

    if (m.cachedBoatNode) {
      const boatSy = Math.max(0, Math.min(sy, 980));
      const qBoatSy = Math.round(boatSy * 10);
      if (
        m.lastBoatKey === '' ||
        m.lastQBoatSy !== qBoatSy ||
        m.lastBoatQMx !== qMx3 ||
        m.lastBoatQMy !== qMy3 ||
        m.lastBoatCamKey !== camKey
      ) {
        m.lastBoatKey = '1';
        m.lastQBoatSy = qBoatSy;
        m.lastBoatQMx = qMx3;
        m.lastBoatQMy = qMy3;
        m.lastBoatCamKey = camKey;
        const driftX = 128 + (boatSy * 0.085) + (mx * -18) + (camVec * -16);
        const driftY = 296 - (boatSy * 0.055) + (my * -8) + (camVec * 42);
        const tiltDeg = (boatSy * -0.007) + (mx * 2.2) + (camVec * 2.4);
        m.cachedBoatNode.setAttribute('transform', `translate(${driftX.toFixed(1)}, ${driftY.toFixed(1)}) rotate(${tiltDeg.toFixed(2)} 250 320)`);
      }
    }

    if (m.cachedHeadline) {
      const headSy = Math.max(0, Math.min(sy, 460));
      let opacity = headSy >= 410 ? 0 : Math.max(0, 1 - headSy / 410);
      if (ns && ns.mode === 'depart' && sy < 460) {
        opacity = opacity * Math.max(0.12, 1 - ns.intensity * 0.85);
      }
      const qHeadOp = Math.round(opacity * 1000);
      if (m.lastHeadKey === '' || m.lastQHeadOp !== qHeadOp) {
        m.lastHeadKey = '1';
        m.lastQHeadOp = qHeadOp;
        m.cachedHeadline.style.opacity = opacity.toFixed(2);
      }
    }

    // 2. Extended Multi-Layer Underwater Parallax Across All Lower Sections & Kontak Footer (Zero Layout Reflow, Edge-Clamped)
    const vh = m.cachedViewportHeight || window.innerHeight || 900;
    const isNarrow = (m.cachedViewportWidth || window.innerWidth || 1440) < 768;
    const ecoSections = m.cachedEcoSections || [];
    const ecoTxStr = (mx * -14).toFixed(1);

    for (let i = 0; i < ecoSections.length; i++) {
      const sec = ecoSections[i];
      const viewportTop = sec.pageTop - sy;
      const centerOffset = (viewportTop + sec.height * 0.5) - (vh * 0.5);
      const clampedOffset = Math.max(-440, Math.min(440, centerOffset));
      const qOff = Math.round(clampedOffset * 10);
      if (
        sec.lastKey !== '' &&
        sec.lastQOff === qOff &&
        sec.lastQMx === qMx3 &&
        sec.lastQMy === qMy3 &&
        sec.lastCamKey === camKey
      ) {
        continue;
      }
      sec.lastKey = '1';
      sec.lastQOff = qOff;
      sec.lastQMx = qMx3;
      sec.lastQMy = qMy3;
      sec.lastCamKey = camKey;

      const ty = clampedOffset * sec.factor + (camVec * 24);
      sec.ecoLayer.style.transform = `translate3d(${ecoTxStr}px, ${ty.toFixed(1)}px, 0)`;

      // Sub-layer differential depth speeds inside the section (background slow, foreground fast)
      for (let j = 0; j < sec.depthNodes.length; j++) {
        const d = sec.depthNodes[j];
        const subTy = clampedOffset * d.speed + (camVec * d.camFactor);
        if (d.lastQMx !== qMx3) {
          d.lastQMx = qMx3;
          d.txStr = (mx * (d.speed * 95)).toFixed(1);
        }
        d.node.style.transform = `translate3d(${d.txStr}px, ${subTy.toFixed(1)}px, 0)`;
      }

      if (sec.creatureNodes.length > 0) {
        const normalizedDist = Math.min(1, Math.abs(centerOffset) / (vh * 0.88));
        const visStr = Math.max(0.20, 1 - normalizedDist * 0.76).toFixed(2);
        if (sec.lastVis !== visStr) {
          sec.lastVis = visStr;
          for (let k = 0; k < sec.creatureNodes.length; k++) {
            const c = sec.creatureNodes[k];
            if (c && c.style) c.style.opacity = visStr;
          }
        }
      }
    }

    // 2B. Foreground Content Micro-Depth Parallax Across Story Sections & Footer
    const contentLayers = m.cachedContentLayers || [];
    const contentScale = isNarrow ? 0.55 : 1;
    const contentMaxOff = isNarrow ? 260 : 420;
    const isDepart = !!(ns && ns.mode === 'depart');
    const departOpStr = isDepart ? Math.max(0.18, 1 - ns.intensity * 0.78).toFixed(2) : '';
    const departCamY = isDepart ? camVec * 30 : 0;

    for (let i = 0; i < contentLayers.length; i++) {
      const item = contentLayers[i];
      const viewportTop = item.pageTop - sy;
      const centerOffset = (viewportTop + item.height * 0.5) - (vh * 0.5);
      const clampedOffset = Math.max(-contentMaxOff, Math.min(contentMaxOff, centerOffset));
      const qOff = Math.round(clampedOffset * 10);
      if (item.lastKey !== '' && item.lastQOff === qOff && item.lastCamKey === camKey) {
        continue;
      }
      item.lastKey = '1';
      item.lastQOff = qOff;
      item.lastCamKey = camKey;

      const ty = clampedOffset * item.factor * contentScale + departCamY;
      item.el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0)`;
      if (isDepart) {
        item.el.style.opacity = departOpStr;
      } else if (item.el.style.opacity) {
        item.el.style.opacity = '';
      }
    }

    // 3. Seabed Sanctuary Multi-Layer Parallax (Background Canyon, Midground Ruins/Pod, Foreground Ridge/Diver)
    const seabed = m.cachedSeabedStage;
    if (seabed) {
      const viewportTop = seabed.pageTop - sy;
      const centerOffset = (viewportTop + seabed.height * 0.5) - (vh * 0.5);
      const clampedOffset = Math.max(-360, Math.min(360, centerOffset));
      const qOff = Math.round(clampedOffset * 10);

      if (
        seabed.lastKey === '' ||
        seabed.lastQOff !== qOff ||
        seabed.lastQMx !== qMx3 ||
        seabed.lastQMy !== qMy3 ||
        seabed.lastCamKey !== camKey
      ) {
        seabed.lastKey = '1';
        seabed.lastQOff = qOff;
        seabed.lastQMx = qMx3;
        seabed.lastQMy = qMy3;
        seabed.lastCamKey = camKey;

        for (let j = 0; j < seabed.depthNodes.length; j++) {
          const d = seabed.depthNodes[j];
          const subTy = clampedOffset * d.speed + (camVec * d.camFactor);
          if (d.lastQMx !== qMx3) {
            d.lastQMx = qMx3;
            d.txStr = (mx * (d.speed * 110)).toFixed(1);
          }
          d.node.style.transform = `translate3d(${d.txStr}px, ${subTy.toFixed(1)}px, 0)`;
        }

        if (seabed.creatureNodes.length > 0) {
          const normalizedDist = Math.min(1, Math.abs(centerOffset) / (vh * 0.92));
          const visStr = Math.max(0.24, 1 - normalizedDist * 0.72).toFixed(2);
          if (seabed.lastVis !== visStr) {
            seabed.lastVis = visStr;
            for (let k = 0; k < seabed.creatureNodes.length; k++) {
              const c = seabed.creatureNodes[k];
              if (c && c.style) c.style.opacity = visStr;
            }
          }
        }
      }
    }

    // 4. Playful Cartoon Bubble Transitions Between Scenes (Bidirectional Deterministic Function of Scroll)
    const bubbleBands = m.cachedBubbleTransitions || [];
    const transWindow = vh * 0.34;
    const bubbleScale = isNarrow ? 0.62 : 1;
    const bubbleMxShift = mx * -18;
    for (let i = 0; i < bubbleBands.length; i++) {
      const b = bubbleBands[i];
      const bandCenterVpY = (b.pageTop - sy) + (b.height * 0.5);
      const rawT = (bandCenterVpY - vh * 0.44) / transWindow;
      if (rawT <= -0.99 || rawT >= 0.99) {
        if (b.lastKey === 'off') continue;
        b.lastKey = 'off';
        for (let j = 0; j < b.orbs.length; j++) {
          const orb = b.orbs[j];
          if (!orb.el || !orb.el.style) continue;
          orb.el.style.opacity = '0';
          orb.el.style.transform = '';
        }
        continue;
      }

      const t = Math.max(-1, Math.min(1, rawT));
      const qT = Math.round(t * 1000);
      if (b.lastKey === 'on' && b.lastQT === qT && b.lastQMx === qMx2) {
        continue;
      }
      b.lastKey = 'on';
      b.lastQT = qT;
      b.lastQMx = qMx2;

      const bell = Math.max(0, 1 - Math.abs(t));
      const smoothBell = bell * bell * (3 - 2 * bell);
      const oneMinusSmooth = 1 - smoothBell;

      for (let j = 0; j < b.orbs.length; j++) {
        const orb = b.orbs[j];
        if (!orb.el || !orb.el.style) continue;
        if (smoothBell <= 0.01) {
          orb.el.style.opacity = '0';
          orb.el.style.transform = '';
          continue;
        }
        const spreadOffset = orb.dirX * oneMinusSmooth * orb.spreadX;
        const tx = orb.baseX + spreadOffset + bubbleMxShift;
        const ty = orb.baseY + (t * orb.speedY);
        const sc = orb.baseScale * bubbleScale * (0.72 + orb.expandAmt * smoothBell);
        orb.el.style.opacity = (smoothBell * orb.maxOp).toFixed(2);
        orb.el.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) scale(${sc.toFixed(3)})`;
      }
    }

    // 5. Biome Storytelling Portals Between Lower Habitats (Deterministic Bidirectional Scroll)
    const biomePortals = m.cachedBiomePortals || [];
    const portalWindow = vh * 0.44;
    const portalScale = isNarrow ? 0.55 : 1;
    const gateMxShift = mx * -12;
    const curtainTxStr = (mx * 16).toFixed(1);
    const driftMxShift = mx * 18;
    const driftMyShift = my * 8;

    for (let i = 0; i < biomePortals.length; i++) {
      const p = biomePortals[i];
      const bandCenterVpY = (p.pageTop - sy) + (p.height * 0.5);
      const rawT = (bandCenterVpY - vh * 0.46) / portalWindow;
      const t = Math.max(-1, Math.min(1, rawT));
      const qT = Math.round(t * 1000);
      if (p.lastKey !== '' && p.lastQT === qT && p.lastQMx === qMx2) {
        continue;
      }
      p.lastKey = '1';
      p.lastQT = qT;
      p.lastQMx = qMx2;

      const bell = Math.max(0, 1 - Math.abs(t));
      const smooth = bell * bell * (3 - 2 * bell);
      const liftYStr = (t * -18).toFixed(1);
      const curtainTyStr = (t * -24).toFixed(1);
      const driftOpStr = (0.20 + smooth * 0.72).toFixed(2);
      const smoothScaled = smooth * portalScale;
      const tScaled = t * portalScale;

      for (let j = 0; j < p.leftGates.length; j++) {
        const g = p.leftGates[j];
        if (!g.el || !g.el.style) continue;
        const tx = (-smoothScaled * g.shift) + gateMxShift;
        g.el.style.transform = `translate3d(${tx.toFixed(1)}px, ${liftYStr}px, 0)`;
      }
      for (let j = 0; j < p.rightGates.length; j++) {
        const g = p.rightGates[j];
        if (!g.el || !g.el.style) continue;
        const tx = (smoothScaled * g.shift) + gateMxShift;
        g.el.style.transform = `translate3d(${tx.toFixed(1)}px, ${liftYStr}px, 0)`;
      }
      for (let j = 0; j < p.curtains.length; j++) {
        const c = p.curtains[j];
        if (!c.el || !c.el.style) continue;
        c.el.style.opacity = (0.14 + smooth * c.maxOp).toFixed(2);
        c.el.style.transform = `translate3d(${curtainTxStr}px, ${curtainTyStr}px, 0)`;
      }
      for (let j = 0; j < p.drifts.length; j++) {
        const d = p.drifts[j];
        if (!d.el || !d.el.style) continue;
        const dx = (tScaled * d.driftX) + driftMxShift;
        const dy = (t * d.driftY) + driftMyShift;
        d.el.style.opacity = driftOpStr;
        d.el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      }
    }
  },

  /* ==========================================================================
     ADMIN NAVIGATION CONTROLLER (7 MODUL UTAMA)
     ========================================================================== */
  navigate(view, options = {}) {
    this.currentView = view;
    this.closeMobileSidebar();
    this.updateNavBadges();

    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-nav') === view);
    });
    document.querySelectorAll('[data-mob-nav]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mob-nav') === view);
    });

    const headers = {
      'ringkasan': {
        title: 'Ringkasan Operasional',
        sub: 'Pantau cucian yang perlu ditangani, pendapatan, dan transaksi terbaru'
      },
      'transaksi-baru': {
        title: this.editingTrxId ? `Edit Transaksi ${this.editingTrxId}` : 'Transaksi Baru',
        sub: 'Input cepat transaksi pelanggan dengan kalkulasi harga otomatis'
      },
      'riwayat': {
        title: 'Riwayat Transaksi',
        sub: 'Cari transaksi, perbarui status cucian, dan cetak struk digital'
      },
      'paket': {
        title: 'Paket & Tarif',
        sub: 'Kelola jenis paket layanan, durasi pengerjaan, dan harga per kilogram'
      },
      'biaya': {
        title: 'Biaya Operasional',
        sub: 'Catat pengeluaran detergen, pewangi, pelembut, listrik, air, dan perawatan mesin'
      },
      'laporan': {
        title: 'Laporan Keuangan',
        sub: 'Ringkasan pendapatan kotor, uang diterima, piutang, biaya operasional, dan laba bersih'
      },
      'pengaturan': {
        title: 'Pengaturan',
        sub: 'Identitas usaha Fresh & Clean Laundry dan manajemen data aplikasi'
      }
    };

    const meta = headers[view] || headers['ringkasan'];
    const titleEl = document.getElementById('pageHeaderTitle');
    const subEl = document.getElementById('pageHeaderSubtitle');
    if (titleEl) titleEl.textContent = meta.title;
    if (subEl) subEl.textContent = meta.sub;

    if (view !== 'transaksi-baru') {
      this.editingTrxId = null;
    }

    switch (view) {
      case 'ringkasan':
        this.renderRingkasan();
        break;
      case 'transaksi-baru':
        this.renderTransaksiBaru(options);
        break;
      case 'riwayat':
        this.renderRiwayat();
        break;
      case 'paket':
        this.renderPaketTarif();
        break;
      case 'biaya':
        this.renderBiayaOperasional();
        break;
      case 'laporan':
        this.renderLaporanKeuangan();
        break;
      case 'pengaturan':
        this.renderPengaturan();
        break;
      default:
        this.renderRingkasan();
    }
  },

  openNewTransaction(editTrxId = null) {
    this.editingTrxId = editTrxId;
    this.navigate('transaksi-baru', { editTrxId });
  },

  /* ==========================================================================
     1. MODUL ADMIN: RINGKASAN (VISUALLY INTEGRATED + INTUITIVE WORKFLOW)
     ========================================================================== */
  renderRingkasan() {
    const trxs = this.db.transactions;
    const exps = this.db.expenses;

    const totalTransaksi = trxs.length;
    let pendapatanKotor = 0;
    let sedangDiproses = 0;
    let siapDiambil = 0;
    let belumLunasCount = 0;
    let totalPiutang = 0;
    const statusCounts = {
      'Diterima': 0,
      'Diproses': 0,
      'Siap Diambil': 0,
      'Selesai': 0
    };

    for (let i = 0; i < totalTransaksi; i++) {
      const t = trxs[i];
      pendapatanKotor += Number(t.totalPrice) || 0;
      const st = t.laundryStatus;
      if (statusCounts[st] !== undefined) statusCounts[st]++;
      if (st === 'Diterima' || st === 'Diproses') sedangDiproses++;
      else if (st === 'Siap Diambil') siapDiambil++;
      if (t.paymentStatus !== 'Lunas') {
        belumLunasCount++;
        totalPiutang += Number(t.remainingBalance) || 0;
      }
    }

    let totalBiaya = 0;
    for (let i = 0; i < exps.length; i++) {
      totalBiaya += Number(exps[i].amount) || 0;
    }
    const labaBersih = pendapatanKotor - totalBiaya;

    const recentTrxs = trxs.slice(0, 6);

    const container = document.getElementById('workspaceContent');
    container.innerHTML = `
      <!-- Illustrated Ocean Banner Header (Connects Admin Visual Identity to Landing Page) -->
      <section class="dash-welcome-bar">
        <svg class="dash-welcome-bg-svg" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="admBeam" x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0%" stop-color="#4CE8E0" stop-opacity="0.22"/>
              <stop offset="100%" stop-color="#4CE8E0" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <polygon points="150,0 320,0 520,220 260,220" fill="url(#admBeam)"/>
          <polygon points="620,0 790,0 980,220 740,220" fill="url(#admBeam)"/>
          <path d="M0,155 C310,210 620,105 940,165 C1080,190 1150,145 1200,155 L1200,220 L0,220 Z" fill="rgba(11, 20, 69, 0.38)"/>
          <circle cx="1060" cy="54" r="10" fill="rgba(255,255,255,0.18)"/>
          <circle cx="1110" cy="88" r="6" fill="rgba(76,232,224,0.28)"/>
        </svg>

        <div class="dash-welcome-copy">
          <h2>Operasional Harian — ${this.escapeHtml(this.db.settings.businessName)}</h2>
          <p>
            Saat ini terdapat <strong>${sedangDiproses} cucian sedang diproses</strong>,
            <strong>${siapDiambil} siap diambil</strong>, dan
            <strong>${belumLunasCount} transaksi belum lunas</strong>.
          </p>
        </div>

        <div style="position:relative;z-index:2;display:flex;gap:10px;flex-wrap:wrap;">
          <button type="button" class="btn btn-primary" onclick="App.openNewTransaction()">
            + Buat Transaksi Baru
          </button>
          <button type="button" class="btn btn-secondary" style="background:rgba(255,255,255,0.14);color:#FFFFFF;border-color:rgba(255,255,255,0.32);" onclick="App.openExpenseModal()">
            + Catat Biaya Operasional
          </button>
        </div>
      </section>

      <!-- Intuitive 4-Step Cashier Workflow Bar -->
      <section class="workflow-guide-bar" aria-label="Panduan Alur Kerja Cepat">
        <div class="workflow-step-pill" onclick="App.openNewTransaction()">
          <span class="workflow-step-num" style="background:#FFE4E8;color:#E03131;">1</span>
          <div>
            <div style="font-weight:800;font-size:0.84rem;color:var(--adm-ink);">Input Transaksi Baru</div>
            <div style="font-size:0.73rem;color:var(--adm-ink-muted);">Timbang &amp; hitung otomatis</div>
          </div>
        </div>

        <div class="workflow-step-pill" onclick="App.navigate('riwayat')">
          <span class="workflow-step-num">2</span>
          <div>
            <div style="font-weight:800;font-size:0.84rem;color:var(--adm-ink);">Update Status &amp; Struk</div>
            <div style="font-size:0.73rem;color:var(--adm-ink-muted);">Diproses &rarr; Siap Diambil</div>
          </div>
        </div>

        <div class="workflow-step-pill" onclick="App.navigate('paket')">
          <span class="workflow-step-num">3</span>
          <div>
            <div style="font-weight:800;font-size:0.84rem;color:var(--adm-ink);">Atur Paket &amp; Tarif</div>
            <div style="font-size:0.73rem;color:var(--adm-ink-muted);">Kelola harga per kilogram</div>
          </div>
        </div>

        <div class="workflow-step-pill" onclick="App.navigate('laporan')">
          <span class="workflow-step-num" style="background:#DCFCE7;color:#15803D;">4</span>
          <div>
            <div style="font-weight:800;font-size:0.84rem;color:var(--adm-ink);">Cek Laporan Keuangan</div>
            <div style="font-size:0.73rem;color:var(--adm-ink-muted);">Pendapatan &amp; laba bersih</div>
          </div>
        </div>
      </section>

      <!-- Priority Operational Attention Cards -->
      <section class="priority-attention-grid">
        <div class="priority-card" onclick="App.filterHistoryByStatus('laundry', 'Diproses')">
          <div>
            <span style="font-size:0.78rem;font-weight:700;color:var(--adm-ink-muted);display:block;">Sedang Diproses</span>
            <strong class="mono" style="font-size:1.65rem;font-weight:800;color:#0369A1;">${sedangDiproses}</strong>
            <small style="display:block;font-size:0.76rem;color:var(--adm-ink-muted);">Status Diterima &amp; Diproses &rarr;</small>
          </div>
          <div class="ops-tile-icon" style="background:#E0F2FE;color:#0369A1;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
        </div>

        <div class="priority-card" onclick="App.filterHistoryByStatus('laundry', 'Siap Diambil')">
          <div>
            <span style="font-size:0.78rem;font-weight:700;color:var(--adm-ink-muted);display:block;">Laundry Siap Diambil</span>
            <strong class="mono" style="font-size:1.65rem;font-weight:800;color:#0F766E;">${siapDiambil}</strong>
            <small style="display:block;font-size:0.76rem;color:var(--adm-ink-muted);">Menunggu diambil pelanggan &rarr;</small>
          </div>
          <div class="ops-tile-icon" style="background:#CCFBF1;color:#0F766E;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
        </div>

        <div class="priority-card" onclick="App.filterHistoryByStatus('payment', 'Belum Lunas')">
          <div>
            <span style="font-size:0.78rem;font-weight:700;color:var(--adm-ink-muted);display:block;">Transaksi Belum Lunas</span>
            <strong class="mono" style="font-size:1.65rem;font-weight:800;color:#B91C1C;">${belumLunasCount}</strong>
            <small style="display:block;font-size:0.76rem;color:#B91C1C;font-weight:600;">Sisa tagihan: ${this.fmtRp(totalPiutang)} &rarr;</small>
          </div>
          <div class="ops-tile-icon" style="background:#FEE2E2;color:#B91C1C;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
        </div>
      </section>

      <!-- Financial Summary Row -->
      <section class="dash-finance-strip">
        <div class="finance-stat-box">
          <span class="stat-label">Total Transaksi</span>
          <div class="stat-value">${totalTransaksi} Nota</div>
          <div class="stat-sub">Seluruh catatan cucian</div>
        </div>

        <div class="finance-stat-box">
          <span class="stat-label">Pendapatan Kotor</span>
          <div class="stat-value" style="color:var(--adm-primary);">${this.fmtRp(pendapatanKotor)}</div>
          <div class="stat-sub">Total nilai transaksi</div>
        </div>

        <div class="finance-stat-box">
          <span class="stat-label">Biaya Operasional</span>
          <div class="stat-value" style="color:#B45309;">${this.fmtRp(totalBiaya)}</div>
          <div class="stat-sub">Dari ${exps.length} pengeluaran</div>
        </div>

        <div class="finance-stat-box" style="background:#F0FDF4;border-color:#BBF7D0;">
          <span class="stat-label" style="color:#15803D;">Laba Bersih</span>
          <div class="stat-value" style="color:${labaBersih >= 0 ? '#15803D' : '#B91C1C'};">${this.fmtRp(labaBersih)}</div>
          <div class="stat-sub">Pendapatan &minus; Biaya</div>
        </div>
      </section>

      <!-- Revenue Chart & Operational Status Breakdown -->
      <div class="grid-2col-asym">
        <div class="surface-card">
          <div class="card-header">
            <div>
              <h3 class="card-title">Grafik Pendapatan 7 Hari Terakhir</h3>
              <p class="card-subtitle">Nilai transaksi harian berdasarkan tanggal masuk</p>
            </div>
            <button type="button" class="btn btn-secondary btn-xs" onclick="App.navigate('laporan')">
              Laporan Keuangan &rarr;
            </button>
          </div>
          <div class="chart-box">
            <canvas id="ringkasanRevenueCanvas"></canvas>
          </div>
        </div>

        <div class="surface-card" style="display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div class="card-header">
              <div>
                <h3 class="card-title">Ikhtisar Status Cucian</h3>
                <p class="card-subtitle">Distribusi status pemrosesan saat ini</p>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;gap:12px;">
              ${LAUNDRY_STATUSES.map(st => {
      const count = statusCounts[st] || 0;
      const pct = totalTransaksi > 0 ? Math.round((count / totalTransaksi) * 100) : 0;
      return `
                  <div>
                    <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:5px;">
                      <span style="font-weight:600;">${st}</span>
                      <span class="mono" style="font-weight:700;">${count} nota <small style="color:var(--adm-ink-muted);font-weight:400;">(${pct}%)</small></span>
                    </div>
                    <div style="height:8px;background:var(--adm-surface-subtle);border-radius:99px;overflow:hidden;">
                      <div style="height:100%;width:${pct}%;background:var(--adm-primary);border-radius:99px;"></div>
                    </div>
                  </div>
                `;
    }).join('')}
            </div>
          </div>

          <div style="margin-top:20px;padding-top:14px;border-top:1px dashed var(--adm-border-strong);display:flex;gap:8px;">
            <button type="button" class="btn btn-primary btn-sm" style="flex:1;" onclick="App.openNewTransaction()">
              + Transaksi Baru
            </button>
            <button type="button" class="btn btn-secondary btn-sm" style="flex:1;" onclick="App.navigate('riwayat')">
              Riwayat Transaksi
            </button>
          </div>
        </div>
      </div>

      <!-- Recent Transactions -->
      <div class="surface-card">
        <div class="card-header">
          <div>
            <h3 class="card-title">Transaksi Terbaru</h3>
            <p class="card-subtitle">Klik status cucian atau cetak struk secara langsung</p>
          </div>
          <button type="button" class="btn btn-secondary btn-xs" onclick="App.navigate('riwayat')">
            Lihat Semua (${totalTransaksi}) &rarr;
          </button>
        </div>

        <div class="desktop-table-wrap desktop-table-only">
          <table class="clean-table">
            <thead>
              <tr>
                <th>No. Transaksi</th>
                <th>Pelanggan</th>
                <th>Paket &amp; Durasi</th>
                <th>Berat</th>
                <th>Total &amp; Pembayaran</th>
                <th>Status Laundry</th>
                <th>Aksi Cepat</th>
              </tr>
            </thead>
            <tbody>
              ${recentTrxs.map(t => `
                <tr>
                  <td>
                    <span class="mono" style="font-weight:700;color:var(--adm-primary);cursor:pointer;" onclick="App.openTransactionDetailModal('${t.id}')">
                      ${this.escapeHtml(t.id)}
                    </span>
                    <div style="font-size:0.75rem;color:var(--adm-ink-muted);">${this.escapeHtml(t.transactionDate)}</div>
                  </td>
                  <td>
                    <div style="font-weight:600;">${this.escapeHtml(t.customerName)}</div>
                    <div style="font-size:0.76rem;color:var(--adm-ink-muted);">${this.escapeHtml(t.customerPhone)}</div>
                  </td>
                  <td>
                    <div style="font-weight:600;">${this.escapeHtml(t.packageName)}</div>
                    <div style="font-size:0.76rem;color:var(--adm-primary);font-weight:600;">${this.escapeHtml(t.durationLabel)} (${this.fmtRp(t.pricePerUnit)}/${t.unit})</div>
                  </td>
                  <td>
                    <span class="mono" style="font-weight:700;">${this.fmtWeight(t.actualWeight)} ${this.escapeHtml(t.unit)}</span>
                  </td>
                  <td>
                    <div class="mono" style="font-weight:700;">${this.fmtRp(t.totalPrice)}</div>
                    <span class="badge ${PAYMENT_BADGE_CLASS[t.paymentStatus] || 'badge-belum'}">${this.escapeHtml(t.paymentStatus)}</span>
                  </td>
                  <td>
                    <span class="badge ${LAUNDRY_BADGE_CLASS[t.laundryStatus] || 'badge-diterima'}">${this.escapeHtml(t.laundryStatus)}</span>
                  </td>
                  <td>
                    <div style="display:flex;gap:6px;">
                      <button type="button" class="btn btn-secondary btn-xs" onclick="App.advanceLaundryStatus('${t.id}')">Lanjut Status</button>
                      <button type="button" class="btn btn-secondary btn-xs" onclick="App.openReceiptModal('${t.id}')">Struk</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="mobile-cards-list">
          ${this.renderMobileTransactionCards(recentTrxs)}
        </div>
      </div>
    `;

    this.drawDashboardChart();
  },

  drawDashboardChart() {
    const revByDate = Object.create(null);
    const trxs = this.db.transactions;
    for (let i = 0; i < trxs.length; i++) {
      const t = trxs[i];
      revByDate[t.transactionDate] = (revByDate[t.transactionDate] || 0) + (Number(t.totalPrice) || 0);
    }
    const points = [];
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    for (let i = 6; i >= 0; i--) {
      const dateStr = window.formatDateISO(-i);
      const d = new Date(dateStr + 'T12:00:00');
      const label = i === 0 ? 'Hari Ini' : dayNames[d.getDay()];
      points.push({ label, revenue: revByDate[dateStr] || 0 });
    }
    window.LaundryCharts.renderRevenueTrend('ringkasanRevenueCanvas', points);
  },

  filterHistoryByStatus(type, value) {
    this.historyFilters.search = '';
    this.historyFilters.datePreset = 'Semua';
    if (type === 'laundry') {
      this.historyFilters.laundryStatus = value;
      this.historyFilters.paymentStatus = 'Semua';
    } else if (type === 'payment') {
      this.historyFilters.paymentStatus = value === 'Belum Lunas' ? 'Belum Lunas' : value;
      this.historyFilters.laundryStatus = 'Semua';
    }
    this.navigate('riwayat');
  },

  /* ==========================================================================
     2. MODUL ADMIN: TRANSAKSI BARU (WITH ILLUSTRATED PACKAGE SELECTOR CARDS)
     ========================================================================== */
  renderTransaksiBaru() {
    const existing = this.editingTrxId
      ? this.db.transactions.find(t => t.id === this.editingTrxId)
      : null;

    const activePackages = this.db.packages.filter(
      p => p.active || (existing && p.id === existing.packageId)
    );

    if (existing) {
      this.formState.selectedPackageId = existing.packageId;
      this.formState.selectedDurationLabel = existing.durationLabel;
    } else {
      const foundPkg = activePackages.find(p => p.id === this.formState.selectedPackageId) || activePackages[0];
      if (foundPkg) {
        this.formState.selectedPackageId = foundPkg.id;
        const hasDur = foundPkg.durations.some(d => d.label === this.formState.selectedDurationLabel);
        if (!hasDur && foundPkg.durations[0]) {
          this.formState.selectedDurationLabel = foundPkg.durations[0].label;
        }
      }
    }

    const currentPkg = activePackages.find(p => p.id === this.formState.selectedPackageId) || activePackages[0];
    const currentDur = currentPkg.durations.find(d => d.label === this.formState.selectedDurationLabel) || currentPkg.durations[0];

    const initialWeight = existing ? existing.actualWeight : 1.4;
    const initialItems = existing ? (existing.itemCount || 6) : 6;
    const initialDiscount = existing ? (existing.discount || 0) : 0;
    const initialTrxDate = existing ? existing.transactionDate : window.formatDateISO(0);
    const initialEstDate = existing
      ? existing.estimatedDate
      : this.calculateEstimatedDate(initialTrxDate, currentDur ? currentDur.hours : 24);

    const container = document.getElementById('workspaceContent');
    container.innerHTML = `
      <form id="trxForm" class="transaction-builder-layout" onsubmit="App.handleSaveTransaction(event)">
        <div class="surface-card">
          <div class="card-header">
            <div>
              <h3 class="card-title">${existing ? `Edit Transaksi ${existing.id}` : 'Formulir Transaksi Baru'}</h3>
              <p class="card-subtitle">Harga dihitung otomatis saat memilih paket, durasi, atau mengisi berat cucian</p>
            </div>
            ${existing ? `<button type="button" class="btn btn-secondary btn-xs" onclick="App.navigate('riwayat')">&larr; Batal Edit</button>` : ''}
          </div>

          <!-- Group 1: Informasi Pelanggan -->
          <div class="form-section-title">1. Informasi Pelanggan</div>
          <div class="form-group">
            <label class="form-label" for="trxCustomerPreset">Pilih Pelanggan Terdaftar (Opsional)</label>
            <select id="trxCustomerPreset" class="form-control" onchange="App.handleCustomerPresetChange()">
              <option value="BARU">+ Input Pelanggan Baru</option>
              ${this.db.customers.map(c => `
                <option value="${c.id}" ${(existing && existing.customerId === c.id) ? 'selected' : ''}>
                  ${this.escapeHtml(c.name)} — ${this.escapeHtml(c.phone)}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label class="form-label" for="trxCustomerName">Nama Pelanggan *</label>
              <input
                type="text"
                id="trxCustomerName"
                class="form-control"
                required
                placeholder="Contoh: Budi Santoso"
                value="${this.escapeHtml(existing ? existing.customerName : '')}"
                oninput="App.recalcTransactionForm()"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="trxCustomerPhone">Nomor Telepon / WhatsApp *</label>
              <input
                type="text"
                id="trxCustomerPhone"
                class="form-control"
                required
                placeholder="Contoh: 081298765432"
                value="${this.escapeHtml(existing ? existing.customerPhone : '')}"
              />
            </div>
          </div>

          <!-- Group 2: Layanan Laundry (With Service-Accurate 2.5D Thumbnails) -->
          <div class="form-section-title">2. Layanan Laundry &amp; Waktu Pengerjaan</div>
          <div class="form-group">
            <label class="form-label">Pilih Paket Laundry *</label>
            <div class="package-selector-grid" id="packageSelectorGrid">
              ${activePackages.map(pkg => {
      const isSelected = pkg.id === currentPkg.id;
      const minPrice = Math.min(...pkg.durations.map(d => d.price));
      const thumbSvg = this.getServiceIllustration(pkg);
      return `
                  <div
                    class="package-radio-card ${isSelected ? 'selected' : ''}"
                    onclick="App.selectFormPackage('${pkg.id}')"
                    role="button"
                    tabindex="0"
                  >
                    <div style="display:flex;align-items:center;gap:12px;">
                      <div class="pkg-mini-thumb">${thumbSvg}</div>
                      <div>
                        <div style="font-weight:800;font-size:0.95rem;color:var(--adm-ink);">${this.escapeHtml(pkg.name)}</div>
                        <div style="font-size:0.75rem;color:var(--adm-ink-muted);margin-top:2px;">
                          Satuan: per ${this.escapeHtml(pkg.unit)} ${pkg.unit === 'kg' && pkg.minWeight > 0 ? `• Min. ${pkg.minWeight} kg` : ''}
                        </div>
                      </div>
                    </div>
                    <div class="mono" style="font-size:0.8rem;font-weight:700;color:var(--adm-primary);text-align:right;">
                      Mulai<br/>${this.fmtRp(minPrice)}/${this.escapeHtml(pkg.unit)}
                    </div>
                  </div>
                `;
    }).join('')}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Pilih Durasi Pengerjaan *</label>
            <div class="duration-pills-wrap" id="durationSelectorWrap">
              ${this.renderDurationPillsHtml(currentPkg, currentDur ? currentDur.label : '')}
            </div>
          </div>

          <!-- Group 3: Berat & Harga -->
          <div class="form-section-title">3. Berat Cucian &amp; Diskon</div>
          <div class="form-row-3">
            <div class="form-group">
              <label class="form-label" for="trxWeightInput" id="trxWeightLabel">
                ${currentPkg.unit === 'kg' ? 'Berat Laundry (kg) *' : 'Jumlah Item (pcs) *'}
              </label>
              <input
                type="number"
                id="trxWeightInput"
                class="form-control mono"
                min="0.01"
                step="any"
                required
                value="${initialWeight}"
                oninput="App.recalcTransactionForm()"
              />
              <small style="font-size:0.74rem;color:var(--adm-ink-muted);display:block;margin-top:4px;" id="trxWeightHint">
                ${currentPkg.unit === 'kg'
        ? 'Mendukung desimal (contoh: 1.0, 1.4, 2.5, 3.5 kg).'
        : 'Masukkan jumlah satuan barang.'}
              </small>
            </div>

            <div class="form-group">
              <label class="form-label" for="trxItemCount">Jumlah Pakaian (Potong)</label>
              <input
                type="number"
                id="trxItemCount"
                class="form-control mono"
                min="1"
                step="1"
                value="${initialItems}"
              />
              <small style="font-size:0.74rem;color:var(--adm-ink-muted);display:block;margin-top:4px;">Opsional (jumlah potong)</small>
            </div>

            <div class="form-group">
              <label class="form-label" for="trxDiscountInput">Diskon (Rp)</label>
              <input
                type="number"
                id="trxDiscountInput"
                class="form-control mono"
                min="0"
                step="any"
                value="${initialDiscount}"
                oninput="App.recalcTransactionForm()"
              />
            </div>
          </div>

          <!-- Group 4: Pembayaran -->
          <div class="form-section-title">4. Pembayaran</div>
          <div style="background:var(--adm-primary-soft);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid rgba(37,56,156,0.16);">
            <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;">
              <label class="form-label" style="margin:0;color:var(--adm-ink);" for="trxAmountPaidInput">Pembayaran Awal / Jumlah Dibayar (Rp)</label>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <button type="button" class="btn btn-secondary btn-xs" onclick="App.setQuickPayment('lunas')">Bayar Lunas</button>
                <button type="button" class="btn btn-secondary btn-xs" onclick="App.setQuickPayment('dp50')">DP 50%</button>
                <button type="button" class="btn btn-secondary btn-xs" onclick="App.setQuickPayment('nol')">Belum Dibayar (Rp0)</button>
              </div>
            </div>

            <input
              type="number"
              id="trxAmountPaidInput"
              class="form-control mono"
              min="0"
              step="any"
              value="${existing ? existing.amountPaid : ''}"
              data-auto-lunas="${existing ? 'false' : 'true'}"
              oninput="this.dataset.autoLunas='false'; App.recalcTransactionForm();"
            />
          </div>

          <!-- Group 5: Catatan & Estimasi -->
          <div class="form-section-title">5. Estimasi Selesai &amp; Catatan</div>
          <div class="form-row-3">
            <div class="form-group">
              <label class="form-label" for="trxDateInput">Tanggal Masuk *</label>
              <input
                type="date"
                id="trxDateInput"
                class="form-control mono"
                required
                value="${initialTrxDate}"
                onchange="App.updateEstDateFromDuration()"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="trxEstDateInput">Estimasi Selesai *</label>
              <input
                type="date"
                id="trxEstDateInput"
                class="form-control mono"
                required
                value="${initialEstDate}"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="trxLaundryStatus">Status Cucian</label>
              <select id="trxLaundryStatus" class="form-control">
                ${LAUNDRY_STATUSES.map(st => `
                  <option value="${st}" ${(existing ? existing.laundryStatus : 'Diterima') === st ? 'selected' : ''}>${st}</option>
                `).join('')}
              </select>
            </div>
          </div>

          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label" for="trxNotesInput">Catatan Tambahan (Opsional)</label>
            <input
              type="text"
              id="trxNotesInput"
              class="form-control"
              placeholder="Contoh: Kemeja putih dipisah..."
              value="${this.escapeHtml(existing ? existing.notes : '')}"
            />
          </div>
        </div>

        <!-- Sticky Real-Time Price Calculation Panel -->
        <aside class="live-calc-panel">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
            <span style="font-size:0.75rem;font-weight:800;color:var(--bio-cyan);letter-spacing:0.06em;">RINCIAN HARGA OTOMATIS</span>
            <span class="badge badge-lunas" id="calcPayStatusBadge">Lunas</span>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.32rem;font-weight:800;margin-bottom:4px;" id="calcPkgTitle">Cuci Setrika</h3>
          <div style="font-size:0.84rem;color:var(--bio-cyan);margin-bottom:14px;" id="calcDurSubtitle">Durasi: 1 Hari</div>

          <div id="calcMinWeightBanner" class="min-weight-notice hidden"></div>

          <div class="calc-row">
            <span class="calc-row-label">Harga per kg:</span>
            <span class="calc-row-val" id="calcUnitPriceVal">Rp10.000/kg</span>
          </div>

          <div class="calc-row">
            <span class="calc-row-label" id="calcWeightRowLabel">Berat aktual:</span>
            <span class="calc-row-val" id="calcWeightRowVal">1.4 kg</span>
          </div>

          <div class="calc-row">
            <span class="calc-row-label">Kalkulasi:</span>
            <span class="calc-row-val" style="font-size:0.82rem;color:var(--bio-cyan);" id="calcFormulaVal">1.4 kg × Rp10.000</span>
          </div>

          <div class="calc-row">
            <span class="calc-row-label">Subtotal:</span>
            <span class="calc-row-val" id="calcSubtotalVal">Rp14.000</span>
          </div>

          <div class="calc-row">
            <span class="calc-row-label">Diskon:</span>
            <span class="calc-row-val" style="color:#86EFAC;" id="calcDiscountVal">Rp0</span>
          </div>

          <div class="calc-total-highlight">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <span style="font-weight:700;font-size:1rem;">Total Harga:</span>
              <span class="mono" style="font-size:1.45rem;font-weight:800;color:var(--bio-cyan);" id="calcTotalVal">Rp14.000</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.88rem;padding-top:8px;border-top:1px solid rgba(255,255,255,0.16);">
              <span style="color:rgba(255,255,255,0.8);">Pembayaran awal:</span>
              <span class="mono" style="font-weight:600;" id="calcPaidVal">Rp14.000</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.92rem;margin-top:6px;">
              <span style="color:rgba(255,255,255,0.9);font-weight:600;">Sisa pembayaran:</span>
              <span class="mono" style="font-weight:700;color:#FFD166;" id="calcRemainingVal">Rp0</span>
            </div>
          </div>

          <button type="submit" class="btn btn-seafoam" style="width:100%;padding:13px;">
            ${existing ? 'Simpan Perubahan Transaksi' : 'Simpan Transaksi'}
          </button>
        </aside>
      </form>
    `;

    this.recalcTransactionForm();
  },

  renderDurationPillsHtml(pkg, selectedLabel) {
    if (!pkg || !Array.isArray(pkg.durations)) return '';
    return pkg.durations
      .map(d => {
        const isSel = d.label === selectedLabel;
        return `
          <button
            type="button"
            class="duration-pill-btn ${isSel ? 'selected' : ''}"
            onclick="App.selectFormDuration('${this.escapeHtml(d.label)}')"
          >
            <div style="font-weight:700;font-size:0.9rem;">${this.escapeHtml(d.label)}</div>
            <div class="mono" style="font-size:0.8rem;opacity:0.88;">${this.fmtRp(d.price)}/${this.escapeHtml(pkg.unit)}</div>
          </button>
        `;
      })
      .join('');
  },

  selectFormPackage(pkgId) {
    const pkg = this.db.packages.find(p => p.id === pkgId);
    if (!pkg) return;
    this.formState.selectedPackageId = pkg.id;

    const hasDur = pkg.durations.some(d => d.label === this.formState.selectedDurationLabel);
    if (!hasDur && pkg.durations[0]) {
      this.formState.selectedDurationLabel = pkg.durations[0].label;
    }

    document.querySelectorAll('#packageSelectorGrid .package-radio-card').forEach((card, idx) => {
      const activePackages = this.db.packages.filter(
        p => p.active || (this.editingTrxId && p.id === this.formState.selectedPackageId)
      );
      if (activePackages[idx]) {
        card.classList.toggle('selected', activePackages[idx].id === pkg.id);
      }
    });

    const durWrap = document.getElementById('durationSelectorWrap');
    if (durWrap) {
      durWrap.innerHTML = this.renderDurationPillsHtml(pkg, this.formState.selectedDurationLabel);
    }

    const weightLabel = document.getElementById('trxWeightLabel');
    const weightHint = document.getElementById('trxWeightHint');
    if (weightLabel) {
      weightLabel.textContent = pkg.unit === 'kg' ? 'Berat Laundry (kg) *' : 'Jumlah Item (pcs) *';
    }
    if (weightHint) {
      weightHint.textContent = pkg.unit === 'kg'
        ? 'Mendukung desimal (contoh: 1.0, 1.4, 2.5, 3.5 kg).'
        : 'Masukkan jumlah satuan barang.';
    }

    this.updateEstDateFromDuration();
    this.recalcTransactionForm();
  },

  selectFormDuration(durLabel) {
    this.formState.selectedDurationLabel = durLabel;
    const pkg = this.db.packages.find(p => p.id === this.formState.selectedPackageId);
    if (pkg) {
      const durWrap = document.getElementById('durationSelectorWrap');
      if (durWrap) {
        durWrap.innerHTML = this.renderDurationPillsHtml(pkg, durLabel);
      }
    }
    this.updateEstDateFromDuration();
    this.recalcTransactionForm();
  },

  calculateEstimatedDate(baseDateStr, hours) {
    const base = baseDateStr ? new Date(baseDateStr + 'T09:00:00') : new Date();
    const daysToAdd = hours <= 12 ? 0 : Math.ceil(hours / 24);
    base.setDate(base.getDate() + daysToAdd);
    const yyyy = base.getFullYear();
    const mm = String(base.getMonth() + 1).padStart(2, '0');
    const dd = String(base.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  },

  updateEstDateFromDuration() {
    const pkg = this.db.packages.find(p => p.id === this.formState.selectedPackageId);
    if (!pkg) return;
    const dur = pkg.durations.find(d => d.label === this.formState.selectedDurationLabel) || pkg.durations[0];
    const dateInput = document.getElementById('trxDateInput');
    const estInput = document.getElementById('trxEstDateInput');
    if (dateInput && estInput && dur) {
      estInput.value = this.calculateEstimatedDate(dateInput.value, dur.hours);
    }
  },

  handleCustomerPresetChange() {
    const sel = document.getElementById('trxCustomerPreset');
    const nameIn = document.getElementById('trxCustomerName');
    const phoneIn = document.getElementById('trxCustomerPhone');
    if (!sel || !nameIn || !phoneIn) return;

    if (sel.value === 'BARU') {
      nameIn.value = '';
      phoneIn.value = '';
      nameIn.focus();
    } else {
      const c = this.db.customers.find(item => item.id === sel.value);
      if (c) {
        nameIn.value = c.name;
        phoneIn.value = c.phone;
      }
    }
  },

  /**
   * Deterministic Real-Time Price Calculation Engine
   * Formula: Total price = Actual weight × Price per kilogram (minus Discount)
   * Preserves exact decimal weights (e.g., 1.4 kg × Rp8.000 = Rp11.200).
   */
  computeTransactionBreakdown() {
    const pkg = this.db.packages.find(p => p.id === this.formState.selectedPackageId) || this.db.packages[0];
    const dur = pkg.durations.find(d => d.label === this.formState.selectedDurationLabel) || pkg.durations[0];

    const rawInputWeight = parseFloat(document.getElementById('trxWeightInput')?.value);
    const actualWeight = !isNaN(rawInputWeight) && rawInputWeight > 0 ? Number(rawInputWeight.toFixed(2)) : 0;

    const isKgService = pkg.unit === 'kg';
    const minWeightRule = isKgService && Number(pkg.minWeight) > 0 ? Number(pkg.minWeight) : 0;

    let chargeableWeight = actualWeight;
    let minWeightApplied = false;
    if (isKgService && minWeightRule > 0 && actualWeight > 0 && actualWeight < minWeightRule) {
      chargeableWeight = minWeightRule;
      minWeightApplied = true;
    }

    const pricePerUnit = dur ? Number(dur.price) : 0;
    const baseSubtotal = Math.round(chargeableWeight * pricePerUnit);

    const rawDiscount = Math.max(0, Math.round(parseFloat(document.getElementById('trxDiscountInput')?.value) || 0));
    const discount = Math.min(baseSubtotal, rawDiscount);

    const totalPrice = Math.max(0, baseSubtotal - discount);

    const paidInput = document.getElementById('trxAmountPaidInput');
    let amountPaid = 0;
    if (paidInput) {
      if (paidInput.dataset.autoLunas === 'true') {
        amountPaid = totalPrice;
        paidInput.value = totalPrice;
      } else {
        const parsedPaid = Math.round(parseFloat(paidInput.value) || 0);
        amountPaid = Math.min(totalPrice, Math.max(0, parsedPaid));
      }
    }

    const remainingBalance = Math.max(0, totalPrice - amountPaid);

    let paymentStatus = 'Belum Dibayar';
    if (amountPaid >= totalPrice && totalPrice > 0) {
      paymentStatus = 'Lunas';
    } else if (amountPaid > 0 && amountPaid < totalPrice) {
      paymentStatus = 'Sebagian Dibayar';
    } else if (totalPrice === 0 && actualWeight > 0) {
      paymentStatus = 'Lunas';
    }

    return {
      pkg,
      dur,
      actualWeight,
      chargeableWeight,
      minWeightRule,
      minWeightApplied,
      pricePerUnit,
      baseSubtotal,
      discount,
      totalPrice,
      amountPaid,
      remainingBalance,
      paymentStatus
    };
  },

  recalcTransactionForm() {
    const calc = this.computeTransactionBreakdown();
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt('calcPkgTitle', calc.pkg.name);
    setTxt('calcDurSubtitle', `Durasi: ${calc.dur ? calc.dur.label : '-'}`);

    const banner = document.getElementById('calcMinWeightBanner');
    if (banner) {
      if (calc.minWeightApplied) {
        banner.classList.remove('hidden');
        banner.textContent = `Berat aktual ${this.fmtWeight(calc.actualWeight)} kg di bawah batas minimum paket (${calc.minWeightRule} kg). Dihitung ${calc.minWeightRule} kg.`;
      } else {
        banner.classList.add('hidden');
      }
    }

    setTxt('calcWeightRowLabel', calc.pkg.unit === 'kg' ? 'Berat aktual:' : 'Jumlah item:');
    setTxt(
      'calcWeightRowVal',
      calc.minWeightApplied
        ? `${this.fmtWeight(calc.actualWeight)} kg (Dihitung ${this.fmtWeight(calc.chargeableWeight)} kg)`
        : `${this.fmtWeight(calc.actualWeight)} ${calc.pkg.unit}`
    );
    setTxt('calcUnitPriceVal', `${this.fmtRp(calc.pricePerUnit)}/${calc.pkg.unit}`);
    setTxt('calcFormulaVal', `${this.fmtWeight(calc.chargeableWeight)} ${calc.pkg.unit} × ${this.fmtRp(calc.pricePerUnit)}`);
    setTxt('calcSubtotalVal', this.fmtRp(calc.baseSubtotal));
    setTxt('calcDiscountVal', this.fmtRp(calc.discount));
    setTxt('calcTotalVal', this.fmtRp(calc.totalPrice));
    setTxt('calcPaidVal', this.fmtRp(calc.amountPaid));
    setTxt('calcRemainingVal', this.fmtRp(calc.remainingBalance));

    const badge = document.getElementById('calcPayStatusBadge');
    if (badge) {
      badge.className = `badge ${PAYMENT_BADGE_CLASS[calc.paymentStatus] || 'badge-belum'}`;
      badge.textContent = calc.paymentStatus;
    }
  },

  setQuickPayment(mode) {
    const calc = this.computeTransactionBreakdown();
    const paidInput = document.getElementById('trxAmountPaidInput');
    if (!paidInput) return;
    paidInput.dataset.autoLunas = 'false';

    if (mode === 'lunas') {
      paidInput.value = calc.totalPrice;
    } else if (mode === 'dp50') {
      paidInput.value = Math.round(calc.totalPrice / 2);
    } else {
      paidInput.value = 0;
    }
    this.recalcTransactionForm();
  },

  handleSaveTransaction(e) {
    e.preventDefault();
    const calc = this.computeTransactionBreakdown();
    const customerName = document.getElementById('trxCustomerName')?.value.trim();
    const customerPhone = document.getElementById('trxCustomerPhone')?.value.trim();

    if (!customerName || !customerPhone) {
      this.toast('Mohon lengkapi nama pelanggan dan nomor telepon.', 'danger');
      return;
    }
    if (calc.actualWeight <= 0) {
      this.toast('Berat atau jumlah cucian harus lebih dari 0.', 'danger');
      return;
    }

    const presetVal = document.getElementById('trxCustomerPreset')?.value || 'BARU';
    let customerId = presetVal;
    if (presetVal === 'BARU') {
      customerId = window.LaundryStore.generateId('PLG-', this.db.customers);
      this.db.customers.unshift({
        id: customerId,
        name: customerName,
        phone: customerPhone,
        notes: 'Terdaftar saat transaksi'
      });
    } else {
      const existingCust = this.db.customers.find(c => c.id === customerId);
      if (existingCust) {
        existingCust.name = customerName;
        existingCust.phone = customerPhone;
      }
    }

    const trxPayload = {
      id: this.editingTrxId || window.LaundryStore.generateId('TRX-', this.db.transactions),
      customerId,
      customerName,
      customerPhone,
      packageId: calc.pkg.id,
      packageName: calc.pkg.name,
      durationLabel: calc.dur.label,
      durationHours: calc.dur.hours,
      unit: calc.pkg.unit,
      actualWeight: calc.actualWeight,
      chargeableWeight: calc.chargeableWeight,
      minWeightApplied: calc.minWeightApplied,
      itemCount: parseInt(document.getElementById('trxItemCount')?.value, 10) || 1,
      pricePerUnit: calc.pricePerUnit,
      baseSubtotal: calc.baseSubtotal,
      discount: calc.discount,
      totalPrice: calc.totalPrice,
      amountPaid: calc.amountPaid,
      remainingBalance: calc.remainingBalance,
      paymentStatus: calc.paymentStatus,
      laundryStatus: document.getElementById('trxLaundryStatus')?.value || 'Diterima',
      transactionDate: document.getElementById('trxDateInput')?.value || window.formatDateISO(0),
      estimatedDate: document.getElementById('trxEstDateInput')?.value || window.formatDateISO(1),
      createdAt: new Date().toISOString(),
      notes: document.getElementById('trxNotesInput')?.value.trim() || ''
    };

    if (this.editingTrxId) {
      const idx = this.db.transactions.findIndex(t => t.id === this.editingTrxId);
      if (idx !== -1) {
        this.db.transactions[idx] = trxPayload;
      }
      this.toast(`Transaksi ${trxPayload.id} berhasil diperbarui.`);
    } else {
      this.db.transactions.unshift(trxPayload);
      this.toast(`Transaksi ${trxPayload.id} disimpan (${this.fmtWeight(trxPayload.actualWeight)} ${trxPayload.unit} = ${this.fmtRp(trxPayload.totalPrice)}).`);
    }

    window.LaundryStore.save();
    this.editingTrxId = null;
    this.navigate('riwayat');
    this.openReceiptModal(trxPayload.id);
  },

  /* ==========================================================================
     3. MODUL ADMIN: RIWAYAT TRANSAKSI
     ========================================================================== */
  renderRiwayat() {
    const filtered = this.getFilteredTransactions();
    const container = document.getElementById('workspaceContent');

    container.innerHTML = `
      <div class="filter-bar">
        <div class="filter-inputs">
          <div class="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              id="historySearchInput"
              class="form-control"
              placeholder="Cari nama pelanggan, nomor telepon, atau nomor transaksi..."
              value="${this.escapeHtml(this.historyFilters.search)}"
              oninput="App.updateHistoryFilters()"
            />
          </div>

          <select id="historyDateSelect" class="form-control" style="width:auto;min-width:155px;" onchange="App.updateHistoryFilters()">
            <option value="Semua" ${this.historyFilters.datePreset === 'Semua' ? 'selected' : ''}>Semua Tanggal</option>
            <option value="hari-ini" ${this.historyFilters.datePreset === 'hari-ini' ? 'selected' : ''}>Hari Ini (${window.formatDateISO(0)})</option>
            <option value="kemarin" ${this.historyFilters.datePreset === 'kemarin' ? 'selected' : ''}>Kemarin (${window.formatDateISO(-1)})</option>
            <option value="7-hari" ${this.historyFilters.datePreset === '7-hari' ? 'selected' : ''}>7 Hari Terakhir</option>
          </select>

          <select id="historyPaySelect" class="form-control" style="width:auto;min-width:165px;" onchange="App.updateHistoryFilters()">
            <option value="Semua" ${this.historyFilters.paymentStatus === 'Semua' ? 'selected' : ''}>Semua Status Bayar</option>
            <option value="Lunas" ${this.historyFilters.paymentStatus === 'Lunas' ? 'selected' : ''}>Lunas</option>
            <option value="Sebagian Dibayar" ${this.historyFilters.paymentStatus === 'Sebagian Dibayar' ? 'selected' : ''}>Sebagian Dibayar</option>
            <option value="Belum Dibayar" ${this.historyFilters.paymentStatus === 'Belum Dibayar' ? 'selected' : ''}>Belum Dibayar</option>
            <option value="Belum Lunas" ${this.historyFilters.paymentStatus === 'Belum Lunas' ? 'selected' : ''}>Semua Belum Lunas</option>
          </select>

          <select id="historyLaundrySelect" class="form-control" style="width:auto;min-width:165px;" onchange="App.updateHistoryFilters()">
            <option value="Semua" ${this.historyFilters.laundryStatus === 'Semua' ? 'selected' : ''}>Semua Status Cucian</option>
            ${LAUNDRY_STATUSES.map(st => `
              <option value="${st}" ${this.historyFilters.laundryStatus === st ? 'selected' : ''}>${st}</option>
            `).join('')}
          </select>
        </div>

        <button type="button" class="btn btn-primary btn-sm" onclick="App.openNewTransaction()">
          + Transaksi Baru
        </button>
      </div>

      <div class="surface-card desktop-table-only" style="padding:0;overflow:hidden;">
        <div class="desktop-table-wrap">
          <table class="clean-table">
            <thead>
              <tr>
                <th>No. Transaksi</th>
                <th>Pelanggan</th>
                <th>Tanggal</th>
                <th>Paket &amp; Durasi</th>
                <th>Berat</th>
                <th>Total Harga</th>
                <th>Status Bayar</th>
                <th>Status Laundry</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="historyDesktopTbody">
              ${this.renderDesktopHistoryRows(filtered)}
            </tbody>
          </table>
        </div>
      </div>

      <div class="mobile-cards-list" id="historyMobileCardsWrap">
        ${this.renderMobileTransactionCards(filtered)}
      </div>
    `;
  },

  getFilteredTransactions() {
    const q = (this.historyFilters.search || '').toLowerCase().trim();
    const dt = this.historyFilters.datePreset;
    const paySt = this.historyFilters.paymentStatus;
    const lndSt = this.historyFilters.laundryStatus;

    const today = window.formatDateISO(0);
    const yesterday = window.formatDateISO(-1);
    const weekAgo = window.formatDateISO(-7);

    return this.db.transactions.filter(t => {
      if (lndSt !== 'Semua' && t.laundryStatus !== lndSt) return false;
      if (paySt === 'Belum Lunas') {
        if (t.paymentStatus === 'Lunas') return false;
      } else if (paySt !== 'Semua' && t.paymentStatus !== paySt) {
        return false;
      }

      if (dt === 'hari-ini' && t.transactionDate !== today) return false;
      if (dt === 'kemarin' && t.transactionDate !== yesterday) return false;
      if (dt === '7-hari' && t.transactionDate < weekAgo) return false;

      if (q) {
        const hay = `${t.id} ${t.customerName} ${t.customerPhone} ${t.packageName} ${t.notes || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  },

  updateHistoryFilters() {
    const sIn = document.getElementById('historySearchInput');
    const dtSel = document.getElementById('historyDateSelect');
    const paySel = document.getElementById('historyPaySelect');
    const lndSel = document.getElementById('historyLaundrySelect');

    if (sIn) this.historyFilters.search = sIn.value;
    if (dtSel) this.historyFilters.datePreset = dtSel.value;
    if (paySel) this.historyFilters.paymentStatus = paySel.value;
    if (lndSel) this.historyFilters.laundryStatus = lndSel.value;

    const filtered = this.getFilteredTransactions();
    const tbody = document.getElementById('historyDesktopTbody');
    const mobWrap = document.getElementById('historyMobileCardsWrap');
    if (tbody) tbody.innerHTML = this.renderDesktopHistoryRows(filtered);
    if (mobWrap) mobWrap.innerHTML = this.renderMobileTransactionCards(filtered);
  },

  renderDesktopHistoryRows(list) {
    if (list.length === 0) {
      return `
        <tr>
          <td colspan="9" style="text-align:center;padding:42px 20px;color:var(--adm-ink-muted);">
            Tidak ada data transaksi yang sesuai dengan pencarian atau filter.
          </td>
        </tr>
      `;
    }

    return list
      .map(t => `
        <tr>
          <td>
            <span class="mono" style="font-weight:700;color:var(--adm-primary);cursor:pointer;" onclick="App.openTransactionDetailModal('${t.id}')">
              ${this.escapeHtml(t.id)}
            </span>
          </td>
          <td>
            <div style="font-weight:600;">${this.escapeHtml(t.customerName)}</div>
            <div style="font-size:0.75rem;color:var(--adm-ink-muted);">${this.escapeHtml(t.customerPhone)}</div>
          </td>
          <td>
            <div class="mono" style="font-size:0.8rem;">${this.escapeHtml(t.transactionDate)}</div>
            <div style="font-size:0.72rem;color:var(--adm-ink-muted);">Selesai: ${this.escapeHtml(t.estimatedDate)}</div>
          </td>
          <td>
            <div style="font-weight:600;">${this.escapeHtml(t.packageName)}</div>
            <div style="font-size:0.75rem;color:var(--adm-primary);font-weight:600;">${this.escapeHtml(t.durationLabel)} (${this.fmtRp(t.pricePerUnit)}/${t.unit})</div>
          </td>
          <td>
            <span class="mono" style="font-weight:700;">${this.fmtWeight(t.actualWeight)} ${this.escapeHtml(t.unit)}</span>
            ${t.minWeightApplied ? `<div style="font-size:0.7rem;color:#B45309;">Dihitung: ${this.fmtWeight(t.chargeableWeight)} kg</div>` : ''}
          </td>
          <td>
            <div class="mono" style="font-weight:700;">${this.fmtRp(t.totalPrice)}</div>
            ${t.remainingBalance > 0 ? `<div style="font-size:0.72rem;color:#B91C1C;">Sisa: ${this.fmtRp(t.remainingBalance)}</div>` : ''}
          </td>
          <td>
            <span class="badge ${PAYMENT_BADGE_CLASS[t.paymentStatus] || 'badge-belum'}">${this.escapeHtml(t.paymentStatus)}</span>
          </td>
          <td>
            <select
              class="form-control"
              style="min-height:32px;padding:4px 8px;font-size:0.78rem;font-weight:600;width:auto;"
              aria-label="Ubah Status Cucian ${t.id}"
              onchange="App.changeLaundryStatus('${t.id}', this.value)"
            >
              ${LAUNDRY_STATUSES.map(st => `
                <option value="${st}" ${t.laundryStatus === st ? 'selected' : ''}>${st}</option>
              `).join('')}
            </select>
          </td>
          <td>
            <div style="display:flex;gap:6px;flex-wrap:nowrap;">
              <button type="button" class="btn btn-secondary btn-xs" onclick="App.openTransactionDetailModal('${t.id}')">Detail</button>
              <button type="button" class="btn btn-secondary btn-xs" onclick="App.openReceiptModal('${t.id}')">Struk</button>
              <button type="button" class="btn btn-secondary btn-xs" onclick="App.openNewTransaction('${t.id}')">Edit</button>
              <button type="button" class="btn btn-danger btn-xs" onclick="App.deleteTransaction('${t.id}')">Hapus</button>
            </div>
          </td>
        </tr>
      `)
      .join('');
  },

  renderMobileTransactionCards(list) {
    if (list.length === 0) {
      return `
        <div class="surface-card" style="text-align:center;padding:32px;color:var(--adm-ink-muted);">
          Tidak ada transaksi yang ditemukan.
        </div>
      `;
    }

    return list
      .map(t => `
        <div class="mobile-trx-card">
          <div class="mobile-trx-top">
            <div>
              <span class="mono" style="font-weight:700;color:var(--adm-primary);font-size:0.95rem;" onclick="App.openTransactionDetailModal('${t.id}')">
                ${this.escapeHtml(t.id)}
              </span>
              <div style="font-weight:700;font-size:1rem;margin-top:2px;">${this.escapeHtml(t.customerName)}</div>
              <div style="font-size:0.78rem;color:var(--adm-ink-muted);">${this.escapeHtml(t.customerPhone)}</div>
            </div>
            <div style="text-align:right;display:flex;flex-direction:column;gap:4px;align-items:flex-end;">
              <span class="badge ${LAUNDRY_BADGE_CLASS[t.laundryStatus] || 'badge-diterima'}">${this.escapeHtml(t.laundryStatus)}</span>
              <span class="badge ${PAYMENT_BADGE_CLASS[t.paymentStatus] || 'badge-belum'}">${this.escapeHtml(t.paymentStatus)}</span>
            </div>
          </div>

          <div class="mobile-trx-body">
            <div>
              <span style="color:var(--adm-ink-muted);font-size:0.75rem;display:block;">Paket &amp; Waktu</span>
              <strong>${this.escapeHtml(t.packageName)} (${this.escapeHtml(t.durationLabel)})</strong>
            </div>
            <div>
              <span style="color:var(--adm-ink-muted);font-size:0.75rem;display:block;">Berat / Jumlah</span>
              <strong class="mono">${this.fmtWeight(t.actualWeight)} ${this.escapeHtml(t.unit)}</strong>
            </div>
            <div>
              <span style="color:var(--adm-ink-muted);font-size:0.75rem;display:block;">Tanggal Masuk</span>
              <strong class="mono">${this.escapeHtml(t.transactionDate)}</strong>
            </div>
            <div>
              <span style="color:var(--adm-ink-muted);font-size:0.75rem;display:block;">Total Harga</span>
              <strong class="mono" style="color:var(--adm-ink);">${this.fmtRp(t.totalPrice)}</strong>
              ${t.remainingBalance > 0 ? `<small style="display:block;color:#B91C1C;">Sisa: ${this.fmtRp(t.remainingBalance)}</small>` : ''}
            </div>
          </div>

          <div class="mobile-trx-actions">
            <button type="button" class="btn btn-secondary btn-xs" style="flex:1;" onclick="App.openTransactionDetailModal('${t.id}')">Detail</button>
            <button type="button" class="btn btn-primary btn-xs" style="flex:1;" onclick="App.openReceiptModal('${t.id}')">Struk Digital</button>
            <button type="button" class="btn btn-secondary btn-xs" onclick="App.openNewTransaction('${t.id}')">Edit</button>
            <button type="button" class="btn btn-danger btn-xs" onclick="App.deleteTransaction('${t.id}')">Hapus</button>
          </div>
        </div>
      `)
      .join('');
  },

  changeLaundryStatus(trxId, newStatus) {
    const trx = this.db.transactions.find(t => t.id === trxId);
    if (!trx) return;
    trx.laundryStatus = newStatus;
    window.LaundryStore.save();
    this.toast(`Status cucian ${trxId} diubah menjadi "${newStatus}".`);
    if (this.currentView === 'ringkasan') this.renderRingkasan();
    else if (this.currentView === 'riwayat') this.renderRiwayat();
  },

  advanceLaundryStatus(trxId) {
    const trx = this.db.transactions.find(t => t.id === trxId);
    if (!trx) return;
    const idx = LAUNDRY_STATUSES.indexOf(trx.laundryStatus);
    const nextStatus = LAUNDRY_STATUSES[Math.min(LAUNDRY_STATUSES.length - 1, idx + 1)];
    this.changeLaundryStatus(trxId, nextStatus);
  },

  deleteTransaction(trxId) {
    if (!confirm(`Apakah Anda yakin ingin menghapus transaksi ${trxId}? Data yang dihapus tidak dapat dikembalikan.`)) {
      return;
    }
    this.db.transactions = this.db.transactions.filter(t => t.id !== trxId);
    window.LaundryStore.save();
    this.updateNavBadges();
    this.toast(`Transaksi ${trxId} telah dihapus.`, 'warning');
    if (this.currentView === 'riwayat') this.renderRiwayat();
    else this.renderRingkasan();
  },

  openTransactionDetailModal(trxId) {
    const t = this.db.transactions.find(item => item.id === trxId);
    if (!t) return;

    const box = document.getElementById('appModalBox');
    box.innerHTML = `
      <div class="modal-head">
        <div>
          <span class="mono" style="font-size:0.8rem;color:var(--adm-primary);font-weight:700;">${this.escapeHtml(t.id)}</span>
          <h3 class="card-title">Detail Transaksi — ${this.escapeHtml(t.customerName)}</h3>
        </div>
        <button type="button" class="btn btn-secondary btn-xs" onclick="App.closeModal('appModal')">&times;</button>
      </div>

      <div style="background:var(--adm-surface-subtle);padding:14px;border-radius:10px;margin-bottom:16px;border:1px solid var(--adm-border);">
        <div style="font-size:0.78rem;font-weight:700;color:var(--adm-ink-secondary);margin-bottom:8px;">Ubah Cepat Status Cucian:</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${LAUNDRY_STATUSES.map(st => `
            <button
              type="button"
              class="btn btn-xs ${t.laundryStatus === st ? 'btn-primary' : 'btn-secondary'}"
              onclick="App.changeLaundryStatus('${t.id}', '${st}'); App.openTransactionDetailModal('${t.id}');"
            >
              ${st}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="form-row-2" style="font-size:0.88rem;margin-bottom:16px;">
        <div>
          <span style="color:var(--adm-ink-muted);">Nomor Telepon:</span>
          <div style="font-weight:600;">${this.escapeHtml(t.customerPhone)}</div>
        </div>
        <div>
          <span style="color:var(--adm-ink-muted);">Tanggal Masuk &amp; Estimasi Selesai:</span>
          <div class="mono" style="font-weight:600;">${this.escapeHtml(t.transactionDate)} &rarr; ${this.escapeHtml(t.estimatedDate)}</div>
        </div>
      </div>

      <div style="background:var(--adm-surface-subtle);padding:16px;border-radius:12px;border:1px solid var(--adm-border);margin-bottom:16px;font-size:0.88rem;">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span><strong>${this.escapeHtml(t.packageName)}</strong> (${this.escapeHtml(t.durationLabel)})</span>
          <span class="mono">${this.fmtRp(t.pricePerUnit)}/${this.escapeHtml(t.unit)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span>Berat Aktual:</span>
          <span class="mono" style="font-weight:700;">${this.fmtWeight(t.actualWeight)} ${this.escapeHtml(t.unit)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span>Perhitungan Harga:</span>
          <span class="mono">${this.fmtWeight(t.chargeableWeight)} ${this.escapeHtml(t.unit)} × ${this.fmtRp(t.pricePerUnit)} = ${this.fmtRp(t.baseSubtotal)}</span>
        </div>
        ${t.discount > 0 ? `
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
            <span>Diskon:</span>
            <span class="mono">-${this.fmtRp(t.discount)}</span>
          </div>
        ` : ''}
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid var(--adm-border-strong);font-size:1rem;font-weight:700;">
          <span>Total Harga:</span>
          <span class="mono" style="color:var(--adm-primary);">${this.fmtRp(t.totalPrice)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;">
          <span>Sudah Dibayar: <strong class="mono">${this.fmtRp(t.amountPaid)}</strong></span>
          <span>Sisa Pembayaran: <strong class="mono" style="color:${t.remainingBalance > 0 ? '#B91C1C' : '#15803D'};">${this.fmtRp(t.remainingBalance)}</strong></span>
        </div>
      </div>

      ${t.notes ? `<p style="font-size:0.84rem;color:var(--adm-ink-secondary);margin-bottom:16px;"><strong>Catatan:</strong> ${this.escapeHtml(t.notes)}</p>` : ''}

      <div style="display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;">
        ${t.remainingBalance > 0 ? `
          <button type="button" class="btn btn-seafoam btn-sm" onclick="App.settleTransactionPayment('${t.id}')">
            Lunasi Sisa (${this.fmtRp(t.remainingBalance)})
          </button>
        ` : ''}
        <button type="button" class="btn btn-secondary btn-sm" onclick="App.closeModal('appModal'); App.openNewTransaction('${t.id}');">
          Edit Transaksi
        </button>
        <button type="button" class="btn btn-primary btn-sm" onclick="App.closeModal('appModal'); App.openReceiptModal('${t.id}');">
          Lihat &amp; Cetak Struk
        </button>
      </div>
    `;

    document.getElementById('appModal').classList.remove('hidden');
  },

  settleTransactionPayment(trxId) {
    const t = this.db.transactions.find(item => item.id === trxId);
    if (!t) return;
    t.amountPaid = t.totalPrice;
    t.remainingBalance = 0;
    t.paymentStatus = 'Lunas';
    window.LaundryStore.save();
    this.toast(`Pembayaran transaksi ${t.id} telah dilunasi!`);
    this.openTransactionDetailModal(trxId);
    if (this.currentView === 'riwayat') this.renderRiwayat();
    else if (this.currentView === 'ringkasan') this.renderRingkasan();
  },

  /* ==========================================================================
     STRUK DIGITAL (PRINT RECEIPT & WHATSAPP SHARE LINK)
     ========================================================================== */
  openReceiptModal(trxId) {
    const t = this.db.transactions.find(item => item.id === trxId);
    if (!t) return;
    const s = this.db.settings;

    const content = document.getElementById('receiptModalContent');
    content.innerHTML = `
      <div class="receipt-paper">
        <div class="receipt-header-brand">
          <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:800;color:var(--adm-ink);">
            ${this.escapeHtml(s.businessName)}
          </div>
          <div style="font-size:0.8rem;color:var(--adm-ink-muted);margin-top:3px;">
            ${this.escapeHtml(s.address)}<br/>
            Telp/WA: ${this.escapeHtml(s.phone)}
          </div>
        </div>

        <div style="display:flex;justify-content:space-between;font-size:0.84rem;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--adm-border);">
          <div>
            <div>No. Transaksi: <strong class="mono">${this.escapeHtml(t.id)}</strong></div>
            <div>Pelanggan: <strong>${this.escapeHtml(t.customerName)}</strong></div>
            <div>Telepon: ${this.escapeHtml(t.customerPhone)}</div>
          </div>
          <div style="text-align:right;">
            <div>Tgl Masuk: <span class="mono">${this.escapeHtml(t.transactionDate)}</span></div>
            <div>Estimasi Selesai: <strong class="mono">${this.escapeHtml(t.estimatedDate)}</strong></div>
            <div>Status: <strong>${this.escapeHtml(t.laundryStatus)}</strong></div>
          </div>
        </div>

        <div style="font-size:0.86rem;margin-bottom:14px;">
          <div style="font-weight:700;margin-bottom:6px;color:var(--adm-ink);">Rincian Layanan Laundry:</div>
          <div style="display:flex;justify-content:space-between;padding:4px 0;">
            <span>Paket: ${this.escapeHtml(t.packageName)} (${this.escapeHtml(t.durationLabel)})</span>
            <span class="mono">${this.fmtRp(t.pricePerUnit)}/${this.escapeHtml(t.unit)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:4px 0;">
            <span>Berat Aktual (${t.itemCount || '-'} potong)</span>
            <span class="mono" style="font-weight:700;">${this.fmtWeight(t.actualWeight)} ${this.escapeHtml(t.unit)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:4px 0;">
            <span>Kalkulasi (${this.fmtWeight(t.chargeableWeight)} ${this.escapeHtml(t.unit)} × ${this.fmtRp(t.pricePerUnit)})</span>
            <span class="mono">${this.fmtRp(t.baseSubtotal)}</span>
          </div>
          ${t.discount > 0 ? `
            <div style="display:flex;justify-content:space-between;padding:3px 0;color:#15803D;">
              <span>Diskon</span>
              <span class="mono">-${this.fmtRp(t.discount)}</span>
            </div>
          ` : ''}
        </div>

        <div style="border-top:2px dashed rgba(15,29,74,0.22);padding-top:12px;font-size:0.9rem;">
          <div style="display:flex;justify-content:space-between;font-size:1.08rem;font-weight:800;margin-bottom:6px;">
            <span>Total Harga</span>
            <span class="mono">${this.fmtRp(t.totalPrice)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:3px 0;">
            <span>Jumlah Dibayar</span>
            <span class="mono">${this.fmtRp(t.amountPaid)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:3px 0;font-weight:700;">
            <span>Sisa Pembayaran</span>
            <span class="mono">${this.fmtRp(t.remainingBalance)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:6px 0 0;">
            <span>Status Pembayaran</span>
            <span class="badge ${PAYMENT_BADGE_CLASS[t.paymentStatus] || 'badge-belum'}">${this.escapeHtml(t.paymentStatus)}</span>
          </div>
        </div>

        ${t.notes ? `<div style="margin-top:12px;font-size:0.78rem;color:var(--adm-ink-secondary);"><strong>Catatan:</strong> ${this.escapeHtml(t.notes)}</div>` : ''}

        <div style="margin-top:18px;padding-top:12px;border-top:1px solid var(--adm-border);text-align:center;font-size:0.76rem;color:var(--adm-ink-muted);">
          ${this.escapeHtml(s.receiptFooter)}
        </div>
      </div>
    `;

    const cleanPhone = String(t.customerPhone || '').replace(/\D/g, '').replace(/^0/, '62');
    const waText = [
      `*STRUK DIGITAL ${s.businessName.toUpperCase()}*`,
      `No. Transaksi: ${t.id}`,
      `Pelanggan: ${t.customerName}`,
      `Layanan: ${t.packageName} (${t.durationLabel})`,
      `Berat: ${this.fmtWeight(t.actualWeight)} ${t.unit}`,
      `Harga per ${t.unit}: ${this.fmtRp(t.pricePerUnit)}`,
      `Total: ${this.fmtRp(t.totalPrice)}`,
      `Dibayar: ${this.fmtRp(t.amountPaid)}`,
      `Sisa Pembayaran: ${this.fmtRp(t.remainingBalance)} (${t.paymentStatus})`,
      `Estimasi Selesai: ${t.estimatedDate}`,
      `Terima kasih telah mencuci di ${s.businessName}!`
    ].join('\n');

    const waBtn = document.getElementById('receiptWhatsappLink');
    if (waBtn) {
      waBtn.href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;
    }

    document.getElementById('receiptModal').classList.remove('hidden');
  },

  /* ==========================================================================
     4. MODUL ADMIN: PAKET & TARIF MANAGEMENT (WITH SERVICE ILLUSTRATIONS)
     ========================================================================== */
  renderPaketTarif() {
    const container = document.getElementById('workspaceContent');
    container.innerHTML = `
      <div class="filter-bar">
        <div>
          <h3 class="card-title">Daftar Paket &amp; Tarif Laundry</h3>
          <p class="card-subtitle">Perubahan harga berlaku untuk transaksi berikutnya. Transaksi historis tetap menyimpan harga saat transaksi dibuat.</p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="App.openPackageFormModal()">
          + Tambah Paket Baru
        </button>
      </div>

      <div class="grid-2col-equal">
        ${this.db.packages.map(pkg => {
      const artSvg = this.getServiceIllustration(pkg);
      return `
            <div class="surface-card" style="opacity:${pkg.active ? '1' : '0.64'};display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;">
                  <div style="display:flex;align-items:center;gap:12px;">
                    <div class="pkg-mini-thumb" style="width:62px;height:54px;">${artSvg}</div>
                    <div>
                      <span class="badge ${pkg.active ? 'badge-siap' : 'badge-diterima'}">${pkg.active ? 'Aktif' : 'Nonaktif'}</span>
                      <h3 style="font-family:var(--font-display);font-size:1.22rem;font-weight:800;color:var(--adm-ink);margin-top:4px;">${this.escapeHtml(pkg.name)}</h3>
                    </div>
                  </div>
                  <span class="mono" style="font-size:0.75rem;color:var(--adm-ink-muted);">${this.escapeHtml(pkg.id)}</span>
                </div>

                <p style="font-size:0.85rem;color:var(--adm-ink-muted);margin-bottom:14px;">${this.escapeHtml(pkg.description || '')}</p>

                <div style="background:var(--adm-surface-subtle);border-radius:10px;padding:12px 14px;margin-bottom:18px;border:1px solid var(--adm-border);">
                  <div style="display:flex;justify-content:space-between;font-size:0.74rem;font-weight:800;color:var(--adm-ink-secondary);padding-bottom:6px;border-bottom:1px solid var(--adm-border-strong);margin-bottom:6px;">
                    <span>DURASI PENGERJAAN</span>
                    <span>HARGA TARIF (${pkg.unit === 'kg' && pkg.minWeight > 0 ? `Min. ${pkg.minWeight} kg` : `Per ${this.escapeHtml(pkg.unit)}`})</span>
                  </div>
                  ${pkg.durations.map(d => `
                    <div style="display:flex;justify-content:space-between;padding:6px 0;font-size:0.88rem;border-bottom:1px dashed var(--adm-border);">
                      <span style="font-weight:600;">${this.escapeHtml(d.label)}</span>
                      <span class="mono" style="font-weight:700;color:var(--adm-primary);">${this.fmtRp(d.price)}/${this.escapeHtml(pkg.unit)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;">
                <button type="button" class="btn btn-secondary btn-xs" onclick="App.togglePackageActive('${pkg.id}')">
                  ${pkg.active ? 'Nonaktifkan' : 'Aktifkan'}
                </button>
                <button type="button" class="btn btn-primary btn-xs" onclick="App.openPackageFormModal('${pkg.id}')">
                  Edit Paket &amp; Tarif
                </button>
                <button type="button" class="btn btn-danger btn-xs" onclick="App.deletePackage('${pkg.id}')">
                  Hapus
                </button>
              </div>
            </div>
          `;
    }).join('')}
      </div>
    `;
  },

  togglePackageActive(pkgId) {
    const pkg = this.db.packages.find(p => p.id === pkgId);
    if (!pkg) return;
    pkg.active = !pkg.active;
    window.LaundryStore.save();
    this.renderLandingCarousel();
    this.toast(`Paket "${pkg.name}" kini ${pkg.active ? 'Aktif' : 'Nonaktif'}.`);
    this.renderPaketTarif();
  },

  deletePackage(pkgId) {
    if (this.db.packages.length <= 1) {
      this.toast('Minimal harus ada 1 paket layanan yang tersimpan.', 'warning');
      return;
    }
    const pkg = this.db.packages.find(p => p.id === pkgId);
    if (!pkg || !confirm(`Hapus paket "${pkg.name}"? Transaksi historis tetap aman.`)) return;
    this.db.packages = this.db.packages.filter(p => p.id !== pkgId);
    window.LaundryStore.save();
    this.renderLandingCarousel();
    this.toast(`Paket "${pkg.name}" telah dihapus.`, 'warning');
    this.renderPaketTarif();
  },

  openPackageFormModal(pkgId = null) {
    const pkg = pkgId ? this.db.packages.find(p => p.id === pkgId) : null;
    const durations = pkg
      ? JSON.parse(JSON.stringify(pkg.durations))
      : [
        { id: 'DUR-1', label: '8 Jam', hours: 8, price: 12000 },
        { id: 'DUR-2', label: '1 Hari', hours: 24, price: 8000 }
      ];

    this._editingPkgDurations = durations;

    const box = document.getElementById('appModalBox');
    box.innerHTML = `
      <div class="modal-head">
        <h3 class="card-title">${pkg ? `Edit Paket: ${this.escapeHtml(pkg.name)}` : 'Tambah Paket Layanan Baru'}</h3>
        <button type="button" class="btn btn-secondary btn-xs" onclick="App.closeModal('appModal')">&times;</button>
      </div>

      <form onsubmit="App.handleSavePackage(event, '${pkg ? pkg.id : ''}')">
        <div class="form-group">
          <label class="form-label">Nama Paket *</label>
          <input type="text" id="pkgFormName" class="form-control" required placeholder="Contoh: Cuci Setrika" value="${this.escapeHtml(pkg ? pkg.name : '')}" />
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Satuan Perhitungan *</label>
            <select id="pkgFormUnit" class="form-control">
              <option value="kg" ${(!pkg || pkg.unit === 'kg') ? 'selected' : ''}>Kilogram (kg)</option>
              <option value="item" ${(pkg && pkg.unit === 'item') ? 'selected' : ''}>Per Potong / Satuan (item)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Berat Minimum (kg, isi 0 jika tanpa minimum)</label>
            <input type="number" id="pkgFormMinWeight" class="form-control mono" min="0" step="any" value="${pkg ? (pkg.minWeight || 0) : 0}" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Deskripsi Singkat</label>
          <input type="text" id="pkgFormDesc" class="form-control" value="${this.escapeHtml(pkg ? pkg.description : '')}" />
        </div>

        <div style="background:var(--adm-surface-subtle);padding:14px;border-radius:10px;margin-bottom:16px;border:1px solid var(--adm-border);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:0.84rem;font-weight:700;color:var(--adm-ink);">Daftar Durasi Pengerjaan &amp; Harga</span>
            <button type="button" class="btn btn-secondary btn-xs" onclick="App.addDurationRowInModal()">+ Tambah Durasi</button>
          </div>
          <div id="pkgDurationsEditorList">
            ${this.renderPkgDurationsEditorRows()}
          </div>
        </div>

        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="App.closeModal('appModal')">Batal</button>
          <button type="submit" class="btn btn-primary btn-sm">Simpan Paket &amp; Tarif</button>
        </div>
      </form>
    `;

    document.getElementById('appModal').classList.remove('hidden');
  },

  renderPkgDurationsEditorRows() {
    return (this._editingPkgDurations || [])
      .map((d, idx) => `
        <div style="display:grid;grid-template-columns:1.2fr 0.8fr 1.2fr auto;gap:8px;margin-bottom:8px;align-items:center;">
          <input
            type="text"
            class="form-control"
            style="min-height:36px;padding:6px 10px;font-size:0.84rem;"
            placeholder="Label (mis: 8 Jam)"
            value="${this.escapeHtml(d.label)}"
            oninput="App._editingPkgDurations[${idx}].label = this.value"
            required
          />
          <input
            type="number"
            class="form-control mono"
            style="min-height:36px;padding:6px 10px;font-size:0.84rem;"
            placeholder="Jam"
            min="1"
            value="${d.hours || 24}"
            oninput="App._editingPkgDurations[${idx}].hours = parseInt(this.value,10) || 24"
            title="Estimasi Jam"
            required
          />
          <input
            type="number"
            class="form-control mono"
            style="min-height:36px;padding:6px 10px;font-size:0.84rem;"
            placeholder="Harga (Rp)"
            min="500"
            step="any"
            value="${d.price}"
            oninput="App._editingPkgDurations[${idx}].price = parseInt(this.value,10) || 0"
            required
          />
          <button
            type="button"
            class="btn btn-danger btn-xs"
            onclick="App.removeDurationRowInModal(${idx})"
            aria-label="Hapus Durasi"
          >&times;</button>
        </div>
      `)
      .join('');
  },

  addDurationRowInModal() {
    this._editingPkgDurations.push({
      id: 'DUR-' + Date.now(),
      label: '2 Hari',
      hours: 48,
      price: 7000
    });
    const wrap = document.getElementById('pkgDurationsEditorList');
    if (wrap) wrap.innerHTML = this.renderPkgDurationsEditorRows();
  },

  removeDurationRowInModal(idx) {
    if (this._editingPkgDurations.length <= 1) {
      this.toast('Paket harus memiliki minimal 1 pilihan durasi pengerjaan.', 'warning');
      return;
    }
    this._editingPkgDurations.splice(idx, 1);
    const wrap = document.getElementById('pkgDurationsEditorList');
    if (wrap) wrap.innerHTML = this.renderPkgDurationsEditorRows();
  },

  handleSavePackage(e, existingId) {
    e.preventDefault();
    const name = document.getElementById('pkgFormName')?.value.trim();
    const unit = document.getElementById('pkgFormUnit')?.value || 'kg';
    const minWeight = parseFloat(document.getElementById('pkgFormMinWeight')?.value) || 0;
    const description = document.getElementById('pkgFormDesc')?.value.trim() || '';

    const cleanDurations = (this._editingPkgDurations || []).filter(d => d.label && d.price > 0);
    if (!name || cleanDurations.length === 0) {
      this.toast('Mohon isi nama paket dan minimal satu durasi beserta harganya.', 'danger');
      return;
    }

    if (existingId) {
      const idx = this.db.packages.findIndex(p => p.id === existingId);
      if (idx !== -1) {
        this.db.packages[idx] = {
          ...this.db.packages[idx],
          name,
          unit,
          minWeight: unit === 'kg' ? minWeight : 0,
          description,
          durations: cleanDurations
        };
      }
      this.toast(`Paket "${name}" berhasil diperbarui.`);
    } else {
      const newId = window.LaundryStore.generateId('PKT-', this.db.packages);
      this.db.packages.push({
        id: newId,
        name,
        unit,
        minWeight: unit === 'kg' ? minWeight : 0,
        description,
        active: true,
        durations: cleanDurations
      });
      this.toast(`Paket baru "${name}" berhasil ditambahkan.`);
    }

    window.LaundryStore.save();
    this.renderLandingCarousel();
    this.closeModal('appModal');
    this.renderPaketTarif();
  },

  /* ==========================================================================
     5. MODUL ADMIN: BIAYA OPERASIONAL
     ========================================================================== */
  renderBiayaOperasional() {
    const filtered = this.getFilteredExpenses();
    const totalFiltered = filtered.reduce((s, e) => s + (Number(e.amount) || 0), 0);
    const container = document.getElementById('workspaceContent');

    container.innerHTML = `
      <div class="filter-bar">
        <div class="filter-inputs">
          <div class="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              id="expSearchInput"
              class="form-control"
              placeholder="Cari nama pengeluaran atau keterangan..."
              value="${this.escapeHtml(this.expenseFilters.search)}"
              oninput="App.updateExpenseFilters()"
            />
          </div>

          <select id="expCatSelect" class="form-control" style="width:auto;min-width:165px;" onchange="App.updateExpenseFilters()">
            <option value="Semua" ${this.expenseFilters.category === 'Semua' ? 'selected' : ''}>Semua Kategori</option>
            ${this.db.expenseCategories.map(c => `
              <option value="${this.escapeHtml(c)}" ${this.expenseFilters.category === c ? 'selected' : ''}>${this.escapeHtml(c)}</option>
            `).join('')}
          </select>

          <select id="expDateSelect" class="form-control" style="width:auto;min-width:155px;" onchange="App.updateExpenseFilters()">
            <option value="Semua" ${this.expenseFilters.datePreset === 'Semua' ? 'selected' : ''}>Semua Tanggal</option>
            <option value="hari-ini" ${this.expenseFilters.datePreset === 'hari-ini' ? 'selected' : ''}>Hari Ini</option>
            <option value="7-hari" ${this.expenseFilters.datePreset === '7-hari' ? 'selected' : ''}>7 Hari Terakhir</option>
          </select>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="App.openManageCategoriesModal()">
            Kelola Kategori
          </button>
          <button type="button" class="btn btn-primary btn-sm" onclick="App.openExpenseModal()">
            + Catat Pengeluaran
          </button>
        </div>
      </div>

      <div class="surface-card" style="margin-bottom:16px;padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;background:var(--adm-surface-subtle);">
        <span style="font-weight:700;color:var(--adm-ink-secondary);">Total Biaya Operasional (Sesuai Filter):</span>
        <span class="mono" style="font-size:1.25rem;font-weight:800;color:#B45309;" id="expFilteredTotalEl">${this.fmtRp(totalFiltered)}</span>
      </div>

      <div class="surface-card desktop-table-only" style="padding:0;overflow:hidden;">
        <div class="desktop-table-wrap">
          <table class="clean-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Pengeluaran</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Keterangan</th>
                <th>Jumlah Biaya</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="expDesktopTbody">
              ${this.renderDesktopExpenseRows(filtered)}
            </tbody>
          </table>
        </div>
      </div>

      <div class="mobile-cards-list" id="expMobileCardsWrap">
        ${this.renderMobileExpenseCards(filtered)}
      </div>
    `;
  },

  getFilteredExpenses() {
    const q = (this.expenseFilters.search || '').toLowerCase().trim();
    const cat = this.expenseFilters.category;
    const dt = this.expenseFilters.datePreset;
    const today = window.formatDateISO(0);
    const weekAgo = window.formatDateISO(-7);

    return this.db.expenses.filter(e => {
      if (cat !== 'Semua' && e.category !== cat) return false;
      if (dt === 'hari-ini' && e.date !== today) return false;
      if (dt === '7-hari' && e.date < weekAgo) return false;
      if (q) {
        const hay = `${e.id} ${e.name} ${e.category} ${e.description || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  },

  updateExpenseFilters() {
    const sIn = document.getElementById('expSearchInput');
    const cSel = document.getElementById('expCatSelect');
    const dSel = document.getElementById('expDateSelect');
    if (sIn) this.expenseFilters.search = sIn.value;
    if (cSel) this.expenseFilters.category = cSel.value;
    if (dSel) this.expenseFilters.datePreset = dSel.value;

    const filtered = this.getFilteredExpenses();
    const total = filtered.reduce((s, e) => s + (Number(e.amount) || 0), 0);

    const totEl = document.getElementById('expFilteredTotalEl');
    const tbody = document.getElementById('expDesktopTbody');
    const mobWrap = document.getElementById('expMobileCardsWrap');
    if (totEl) totEl.textContent = this.fmtRp(total);
    if (tbody) tbody.innerHTML = this.renderDesktopExpenseRows(filtered);
    if (mobWrap) mobWrap.innerHTML = this.renderMobileExpenseCards(filtered);
  },

  renderDesktopExpenseRows(list) {
    if (list.length === 0) {
      return `<tr><td colspan="7" style="text-align:center;padding:36px;color:var(--adm-ink-muted);">Belum ada catatan biaya operasional yang sesuai.</td></tr>`;
    }
    return list
      .map(e => `
        <tr>
          <td><span class="mono" style="font-weight:600;color:var(--adm-ink-muted);">${this.escapeHtml(e.id)}</span></td>
          <td><div style="font-weight:600;">${this.escapeHtml(e.name)}</div></td>
          <td><span class="badge badge-diterima">${this.escapeHtml(e.category)}</span></td>
          <td><span class="mono">${this.escapeHtml(e.date)}</span></td>
          <td style="max-width:260px;font-size:0.83rem;color:var(--adm-ink-muted);">${this.escapeHtml(e.description || '—')}</td>
          <td><span class="mono" style="font-weight:700;color:#B45309;">${this.fmtRp(e.amount)}</span></td>
          <td>
            <div style="display:flex;gap:6px;">
              <button type="button" class="btn btn-secondary btn-xs" onclick="App.openExpenseModal('${e.id}')">Edit</button>
              <button type="button" class="btn btn-danger btn-xs" onclick="App.deleteExpense('${e.id}')">Hapus</button>
            </div>
          </td>
        </tr>
      `)
      .join('');
  },

  renderMobileExpenseCards(list) {
    if (list.length === 0) {
      return `<div class="surface-card" style="text-align:center;padding:30px;color:var(--adm-ink-muted);">Tidak ada catatan pengeluaran.</div>`;
    }
    return list
      .map(e => `
        <div class="mobile-trx-card">
          <div class="mobile-trx-top">
            <div>
              <span class="badge badge-diterima">${this.escapeHtml(e.category)}</span>
              <div style="font-weight:700;margin-top:4px;">${this.escapeHtml(e.name)}</div>
            </div>
            <div class="mono" style="font-weight:700;color:#B45309;">${this.fmtRp(e.amount)}</div>
          </div>
          <div style="font-size:0.82rem;color:var(--adm-ink-muted);margin-bottom:10px;">
            <div>Tanggal: <span class="mono">${this.escapeHtml(e.date)}</span></div>
            ${e.description ? `<div>${this.escapeHtml(e.description)}</div>` : ''}
          </div>
          <div class="mobile-trx-actions">
            <button type="button" class="btn btn-secondary btn-xs" style="flex:1;" onclick="App.openExpenseModal('${e.id}')">Edit</button>
            <button type="button" class="btn btn-danger btn-xs" style="flex:1;" onclick="App.deleteExpense('${e.id}')">Hapus</button>
          </div>
        </div>
      `)
      .join('');
  },

  openExpenseModal(expId = null) {
    const exp = expId ? this.db.expenses.find(e => e.id === expId) : null;
    const box = document.getElementById('appModalBox');
    box.innerHTML = `
      <div class="modal-head">
        <h3 class="card-title">${exp ? 'Edit Biaya Operasional' : 'Catat Biaya Operasional Baru'}</h3>
        <button type="button" class="btn btn-secondary btn-xs" onclick="App.closeModal('appModal')">&times;</button>
      </div>
      <form onsubmit="App.handleSaveExpense(event, '${exp ? exp.id : ''}')">
        <div class="form-group">
          <label class="form-label">Nama Pengeluaran *</label>
          <input type="text" id="expFormName" class="form-control" required placeholder="Contoh: Pembelian Detergen Cair 5L" value="${this.escapeHtml(exp ? exp.name : '')}" />
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Kategori *</label>
            <select id="expFormCat" class="form-control">
              ${this.db.expenseCategories.map(c => `
                <option value="${this.escapeHtml(c)}" ${(exp && exp.category === c) ? 'selected' : ''}>${this.escapeHtml(c)}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Tanggal *</label>
            <input type="date" id="expFormDate" class="form-control mono" required value="${exp ? exp.date : window.formatDateISO(0)}" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Nominal Biaya (Rp) *</label>
          <input type="number" id="expFormAmount" class="form-control mono" min="100" step="any" required placeholder="Contoh: 45000" value="${exp ? exp.amount : ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Keterangan / Deskripsi</label>
          <textarea id="expFormDesc" rows="2" class="form-control">${this.escapeHtml(exp ? exp.description : '')}</textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="App.closeModal('appModal')">Batal</button>
          <button type="submit" class="btn btn-primary btn-sm">${exp ? 'Simpan Perubahan' : 'Simpan Pengeluaran'}</button>
        </div>
      </form>
    `;
    document.getElementById('appModal').classList.remove('hidden');
  },

  handleSaveExpense(e, existingId) {
    e.preventDefault();
    const payload = {
      id: existingId || window.LaundryStore.generateId('EXP-', this.db.expenses),
      name: document.getElementById('expFormName')?.value.trim(),
      category: document.getElementById('expFormCat')?.value || 'Lainnya',
      date: document.getElementById('expFormDate')?.value || window.formatDateISO(0),
      amount: Math.max(0, Math.round(parseFloat(document.getElementById('expFormAmount')?.value) || 0)),
      description: document.getElementById('expFormDesc')?.value.trim() || ''
    };

    if (!payload.name || payload.amount <= 0) {
      this.toast('Mohon isi nama pengeluaran dan nominal yang valid.', 'danger');
      return;
    }

    if (existingId) {
      const idx = this.db.expenses.findIndex(x => x.id === existingId);
      if (idx !== -1) this.db.expenses[idx] = payload;
      this.toast('Catatan pengeluaran diperbarui.');
    } else {
      this.db.expenses.unshift(payload);
      this.toast(`Pengeluaran "${payload.name}" (${this.fmtRp(payload.amount)}) berhasil dicatat.`);
    }

    window.LaundryStore.save();
    this.closeModal('appModal');
    if (this.currentView === 'biaya') this.renderBiayaOperasional();
    else if (this.currentView === 'ringkasan') this.renderRingkasan();
    else if (this.currentView === 'laporan') this.renderLaporanKeuangan();
  },

  deleteExpense(expId) {
    if (!confirm('Hapus catatan pengeluaran ini?')) return;
    this.db.expenses = this.db.expenses.filter(e => e.id !== expId);
    window.LaundryStore.save();
    this.toast('Catatan pengeluaran dihapus.', 'warning');
    this.renderBiayaOperasional();
  },

  openManageCategoriesModal() {
    const box = document.getElementById('appModalBox');
    box.innerHTML = `
      <div class="modal-head">
        <h3 class="card-title">Kelola Kategori Biaya Operasional</h3>
        <button type="button" class="btn btn-secondary btn-xs" onclick="App.closeModal('appModal')">&times;</button>
      </div>
      <form onsubmit="App.handleAddExpenseCategory(event)" style="display:flex;gap:8px;margin-bottom:16px;">
        <input type="text" id="newCatInput" class="form-control" placeholder="Nama kategori baru (misal: Kemasan Plastik)" required />
        <button type="submit" class="btn btn-primary btn-sm">+ Tambah</button>
      </form>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${this.db.expenseCategories.map(c => `
          <span class="badge badge-diterima" style="padding:7px 12px;font-size:0.82rem;">
            ${this.escapeHtml(c)}
          </span>
        `).join('')}
      </div>
    `;
    document.getElementById('appModal').classList.remove('hidden');
  },

  handleAddExpenseCategory(e) {
    e.preventDefault();
    const val = document.getElementById('newCatInput')?.value.trim();
    if (!val) return;
    if (!this.db.expenseCategories.includes(val)) {
      this.db.expenseCategories.push(val);
      window.LaundryStore.save();
      this.toast(`Kategori "${val}" ditambahkan.`);
    }
    this.openManageCategoriesModal();
    if (this.currentView === 'biaya') this.renderBiayaOperasional();
  },

  /* ==========================================================================
     6. MODUL ADMIN: LAPORAN KEUANGAN
     Net profit = Gross revenue - Operational expenses
     ========================================================================== */
  setReportPeriodFilter(period) {
    this.reportPeriodFilter = period;
    this.renderLaporanKeuangan();
  },

  renderLaporanKeuangan() {
    const todayStr = window.formatDateISO(0);
    const weekAgoStr = window.formatDateISO(-7);
    const monthAgoStr = window.formatDateISO(-30);

    let minDate = null;
    let periodLabel = 'Semua Waktu';
    if (this.reportPeriodFilter === 'harian') {
      minDate = todayStr;
      periodLabel = `Harian (${todayStr})`;
    } else if (this.reportPeriodFilter === 'mingguan') {
      minDate = weekAgoStr;
      periodLabel = 'Mingguan (7 Hari Terakhir)';
    } else if (this.reportPeriodFilter === 'bulanan') {
      minDate = monthAgoStr;
      periodLabel = 'Bulanan (30 Hari Terakhir)';
    }

    const allTrxs = this.db.transactions;
    const allExps = this.db.expenses;
    const trxs = [];
    const exps = [];

    let totalGrossRevenue = 0;
    let totalCashReceived = 0;
    let totalReceivables = 0;
    let totalExpenses = 0;

    let dailyCount = 0, dailyRev = 0, dailyExp = 0;
    let weeklyCount = 0, weeklyRev = 0, weeklyExp = 0;
    let monthlyCount = 0, monthlyRev = 0, monthlyExp = 0;

    for (let i = 0; i < allTrxs.length; i++) {
      const t = allTrxs[i];
      const dt = t.transactionDate;
      const price = Number(t.totalPrice) || 0;
      if (dt >= todayStr) { dailyCount++; dailyRev += price; }
      if (dt >= weekAgoStr) { weeklyCount++; weeklyRev += price; }
      if (dt >= monthAgoStr) { monthlyCount++; monthlyRev += price; }
      if (!minDate || dt >= minDate) {
        trxs.push(t);
        totalGrossRevenue += price;
        totalCashReceived += Number(t.amountPaid) || 0;
        totalReceivables += Number(t.remainingBalance) || 0;
      }
    }

    const catSums = Object.create(null);
    for (let i = 0; i < allExps.length; i++) {
      const e = allExps[i];
      const dt = e.date;
      const amt = Number(e.amount) || 0;
      if (dt >= todayStr) dailyExp += amt;
      if (dt >= weekAgoStr) weeklyExp += amt;
      if (dt >= monthAgoStr) monthlyExp += amt;
      if (!minDate || dt >= minDate) {
        exps.push(e);
        totalExpenses += amt;
        catSums[e.category] = (catSums[e.category] || 0) + amt;
      }
    }

    const netProfit = totalGrossRevenue - totalExpenses;
    const daily = { count: dailyCount, rev: dailyRev, exp: dailyExp, profit: dailyRev - dailyExp };
    const weekly = { count: weeklyCount, rev: weeklyRev, exp: weeklyExp, profit: weeklyRev - weeklyExp };
    const monthly = { count: monthlyCount, rev: monthlyRev, exp: monthlyExp, profit: monthlyRev - monthlyExp };

    const catBreakdown = this.db.expenseCategories
      .map(cat => ({ category: cat, amount: catSums[cat] || 0 }))
      .filter(item => item.amount > 0)
      .sort((a, b) => b.amount - a.amount);

    const container = document.getElementById('workspaceContent');
    container.innerHTML = `
      <div class="filter-bar">
        <div>
          <h3 class="card-title">Filter Periode Laporan: ${this.escapeHtml(periodLabel)}</h3>
          <p class="card-subtitle">Rumus Laba Bersih = Pendapatan Kotor &minus; Total Biaya Operasional</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${[
        { id: 'semua', label: 'Semua Waktu' },
        { id: 'harian', label: 'Harian (Hari Ini)' },
        { id: 'mingguan', label: 'Mingguan (7 Hari)' },
        { id: 'bulanan', label: 'Bulanan (30 Hari)' }
      ].map(p => `
            <button
              type="button"
              class="btn btn-xs ${this.reportPeriodFilter === p.id ? 'btn-primary' : 'btn-secondary'}"
              onclick="App.setReportPeriodFilter('${p.id}')"
            >
              ${p.label}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="form-row-3" style="margin-bottom:18px;">
        <div class="surface-card" style="border-top:4px solid var(--adm-primary);">
          <div style="font-size:0.82rem;font-weight:700;color:var(--adm-ink-muted);">Pendapatan Kotor (Gross Revenue)</div>
          <div class="mono" style="font-size:1.55rem;font-weight:800;color:var(--adm-ink);margin:8px 0;">${this.fmtRp(totalGrossRevenue)}</div>
          <div style="font-size:0.78rem;color:var(--adm-ink-muted);">
            Total nilai dari <strong>${trxs.length} transaksi</strong>
          </div>
        </div>

        <div class="surface-card" style="border-top:4px solid #0284C7;">
          <div style="font-size:0.82rem;font-weight:700;color:var(--adm-ink-muted);">Uang Kas Diterima &amp; Piutang</div>
          <div class="mono" style="font-size:1.35rem;font-weight:800;color:#0369A1;margin:8px 0;">
            Diterima: ${this.fmtRp(totalCashReceived)}
          </div>
          <div style="font-size:0.78rem;color:#B91C1C;font-weight:700;">
            Sisa Belum Dibayar (Piutang): ${this.fmtRp(totalReceivables)}
          </div>
        </div>

        <div class="surface-card" style="border-top:4px solid #15803D;background:#F0FDF4;">
          <div style="font-size:0.82rem;font-weight:800;color:var(--adm-ink);">Laba Bersih (Net Profit)</div>
          <div class="mono" style="font-size:1.55rem;font-weight:800;color:${netProfit >= 0 ? '#15803D' : '#B91C1C'};margin:8px 0;">
            ${this.fmtRp(netProfit)}
          </div>
          <div style="font-size:0.78rem;color:var(--adm-ink-secondary);">
            Pendapatan Kotor (${this.fmtRp(totalGrossRevenue)}) &minus; Biaya Operasional (${this.fmtRp(totalExpenses)})
          </div>
        </div>
      </div>

      <div class="form-row-3" style="margin-bottom:22px;">
        <div class="surface-card">
          <h4 style="font-size:0.95rem;color:var(--adm-ink);margin-bottom:10px;">Ringkasan Harian (Hari Ini)</h4>
          <div style="font-size:0.85rem;display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;justify-content:space-between;"><span>Jumlah Transaksi:</span><strong class="mono">${daily.count} nota</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Pendapatan Kotor:</span><strong class="mono">${this.fmtRp(daily.rev)}</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Biaya Operasional:</span><strong class="mono" style="color:#B45309;">${this.fmtRp(daily.exp)}</strong></div>
            <div style="display:flex;justify-content:space-between;padding-top:6px;border-top:1px dashed var(--adm-border-strong);">
              <span>Laba Bersih Hari Ini:</span>
              <strong class="mono" style="color:${daily.profit >= 0 ? '#15803D' : '#B91C1C'};">${this.fmtRp(daily.profit)}</strong>
            </div>
          </div>
        </div>

        <div class="surface-card">
          <h4 style="font-size:0.95rem;color:var(--adm-ink);margin-bottom:10px;">Ringkasan Mingguan (7 Hari)</h4>
          <div style="font-size:0.85rem;display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;justify-content:space-between;"><span>Jumlah Transaksi:</span><strong class="mono">${weekly.count} nota</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Pendapatan Kotor:</span><strong class="mono">${this.fmtRp(weekly.rev)}</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Biaya Operasional:</span><strong class="mono" style="color:#B45309;">${this.fmtRp(weekly.exp)}</strong></div>
            <div style="display:flex;justify-content:space-between;padding-top:6px;border-top:1px dashed var(--adm-border-strong);">
              <span>Laba Bersih 7 Hari:</span>
              <strong class="mono" style="color:${weekly.profit >= 0 ? '#15803D' : '#B91C1C'};">${this.fmtRp(weekly.profit)}</strong>
            </div>
          </div>
        </div>

        <div class="surface-card">
          <h4 style="font-size:0.95rem;color:var(--adm-ink);margin-bottom:10px;">Ringkasan Bulanan (30 Hari)</h4>
          <div style="font-size:0.85rem;display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;justify-content:space-between;"><span>Jumlah Transaksi:</span><strong class="mono">${monthly.count} nota</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Pendapatan Kotor:</span><strong class="mono">${this.fmtRp(monthly.rev)}</strong></div>
            <div style="display:flex;justify-content:space-between;"><span>Biaya Operasional:</span><strong class="mono" style="color:#B45309;">${this.fmtRp(monthly.exp)}</strong></div>
            <div style="display:flex;justify-content:space-between;padding-top:6px;border-top:1px dashed var(--adm-border-strong);">
              <span>Laba Bersih 30 Hari:</span>
              <strong class="mono" style="color:${monthly.profit >= 0 ? '#15803D' : '#B91C1C'};">${this.fmtRp(monthly.profit)}</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-2col-asym">
        <div class="surface-card">
          <div class="card-header">
            <div>
              <h3 class="card-title">Tren Pendapatan Kotor vs Biaya Operasional (7 Hari)</h3>
              <p class="card-subtitle">Biru Laut: Pendapatan Kotor • Terakota: Biaya Operasional</p>
            </div>
          </div>
          <div class="chart-box">
            <canvas id="financialComparisonCanvas"></canvas>
          </div>
        </div>

        <div class="surface-card">
          <div class="card-header">
            <div>
              <h3 class="card-title">Rincian Biaya Operasional (${this.fmtRp(totalExpenses)})</h3>
              <p class="card-subtitle">Proporsi pengeluaran per kategori</p>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px;">
            ${catBreakdown.length === 0
        ? `<p style="color:var(--adm-ink-muted);font-size:0.85rem;">Belum ada pengeluaran pada periode ini.</p>`
        : catBreakdown.map(item => {
          const pct = totalExpenses > 0 ? Math.round((item.amount / totalExpenses) * 100) : 0;
          return `
                    <div>
                      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:5px;">
                        <span style="font-weight:600;">${this.escapeHtml(item.category)}</span>
                        <span class="mono" style="font-weight:700;">${this.fmtRp(item.amount)} <small style="color:var(--adm-ink-muted);font-weight:400;">(${pct}%)</small></span>
                      </div>
                      <div style="height:8px;background:var(--adm-surface-subtle);border-radius:99px;overflow:hidden;">
                        <div style="height:100%;width:${pct}%;background:var(--coral-pink);border-radius:99px;"></div>
                      </div>
                    </div>
                  `;
        }).join('')
      }
          </div>
        </div>
      </div>
    `;

    this.drawFinancialReportChart();
  },

  drawFinancialReportChart() {
    const revByDate = Object.create(null);
    const expByDate = Object.create(null);
    const trxs = this.db.transactions;
    const exps = this.db.expenses;
    for (let i = 0; i < trxs.length; i++) {
      const t = trxs[i];
      revByDate[t.transactionDate] = (revByDate[t.transactionDate] || 0) + (Number(t.totalPrice) || 0);
    }
    for (let i = 0; i < exps.length; i++) {
      const e = exps[i];
      expByDate[e.date] = (expByDate[e.date] || 0) + (Number(e.amount) || 0);
    }
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const series = [];
    for (let i = 6; i >= 0; i--) {
      const dateStr = window.formatDateISO(-i);
      const d = new Date(dateStr + 'T12:00:00');
      const label = i === 0 ? 'Hari Ini' : dayNames[d.getDay()];
      series.push({
        label,
        revenue: revByDate[dateStr] || 0,
        expense: expByDate[dateStr] || 0
      });
    }
    window.LaundryCharts.renderComparisonBars('financialComparisonCanvas', series);
  },

  /* ==========================================================================
     7. MODUL ADMIN: PENGATURAN
     ========================================================================== */
  renderPengaturan() {
    const s = this.db.settings;
    const container = document.getElementById('workspaceContent');

    container.innerHTML = `
      <div class="grid-2col-asym">
        <div class="surface-card">
          <div class="card-header">
            <div>
              <h3 class="card-title">Identitas Usaha &amp; Pengaturan Aplikasi</h3>
              <p class="card-subtitle">Informasi ini ditampilkan pada Halaman Utama, Panel Admin, dan struk digital.</p>
            </div>
          </div>

          <form onsubmit="App.handleSaveSettings(event)">
            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Nama Usaha Laundry *</label>
                <input type="text" id="setBizName" class="form-control" required value="${this.escapeHtml(s.businessName)}" />
              </div>
              <div class="form-group">
                <label class="form-label">Nama Admin / Kasir *</label>
                <input type="text" id="setAdminName" class="form-control" required value="${this.escapeHtml(s.adminName)}" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Deskripsi Singkat Layanan</label>
              <input type="text" id="setDesc" class="form-control" value="${this.escapeHtml(s.description)}" />
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label">Nomor Telepon / WhatsApp Toko *</label>
                <input type="text" id="setPhone" class="form-control" required value="${this.escapeHtml(s.phone)}" />
              </div>
              <div class="form-group">
                <label class="form-label">Jam Operasional</label>
                <input type="text" id="setHours" class="form-control" value="${this.escapeHtml(s.operatingHours)}" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Alamat Lengkap Toko *</label>
              <input type="text" id="setAddress" class="form-control" required value="${this.escapeHtml(s.address)}" />
            </div>

            <div class="form-group">
              <label class="form-label">Catatan Kaki Struk Digital</label>
              <textarea id="setReceiptFooter" rows="3" class="form-control">${this.escapeHtml(s.receiptFooter)}</textarea>
            </div>

            <button type="submit" class="btn btn-primary">Simpan Pengaturan</button>
          </form>
        </div>

        <div class="surface-card" style="align-self:start;">
          <h3 class="card-title" style="margin-bottom:8px;">Manajemen Data Demo &amp; Reset</h3>
          <p style="font-size:0.86rem;color:var(--adm-ink-muted);margin-bottom:18px;">
            Seluruh transaksi, paket tarif, pelanggan, dan biaya operasional disimpan secara otomatis di LocalStorage peramban.
          </p>

          <div style="background:var(--adm-surface-subtle);padding:16px;border-radius:12px;border:1px solid var(--adm-border);">
            <div style="font-weight:700;font-size:0.92rem;color:var(--adm-ink);margin-bottom:4px;">Reset ke Data Demo Awal</div>
            <p style="font-size:0.82rem;color:var(--adm-ink-secondary);margin-bottom:14px;">
              Kembalikan seluruh transaksi, paket tarif, dan biaya operasional ke kondisi demo awal Fresh &amp; Clean Laundry.
            </p>
            <button type="button" class="btn btn-danger btn-sm" onclick="App.handleResetDemoData()">
              Reset Data Demo
            </button>
          </div>
        </div>
      </div>
    `;
  },

  handleSaveSettings(e) {
    e.preventDefault();
    const s = this.db.settings;
    s.businessName = document.getElementById('setBizName')?.value.trim() || 'Fresh & Clean Laundry';
    s.adminName = document.getElementById('setAdminName')?.value.trim() || 'Admin';
    s.description = document.getElementById('setDesc')?.value.trim() || '';
    s.phone = document.getElementById('setPhone')?.value.trim() || '';
    s.operatingHours = document.getElementById('setHours')?.value.trim() || '';
    s.address = document.getElementById('setAddress')?.value.trim() || '';
    s.receiptFooter = document.getElementById('setReceiptFooter')?.value.trim() || '';

    window.LaundryStore.save();
    this.syncSidebarBranding();
    this.toast('Pengaturan usaha berhasil disimpan.');
  },

  handleResetDemoData() {
    if (!confirm('Apakah Anda yakin ingin mengatur ulang semua data transaksi, paket tarif, dan biaya operasional ke kondisi demo awal?')) {
      return;
    }
    window.LaundryStore.resetDemoData();
    this.syncSidebarBranding();
    this.updateNavBadges();
    this.renderLandingCarousel();
    this.toast('Seluruh data berhasil dikembalikan ke pengaturan demo awal.');
    this.navigate('ringkasan');
  }
};

window.App = App;
document.addEventListener('DOMContentLoaded', () => App.init());
