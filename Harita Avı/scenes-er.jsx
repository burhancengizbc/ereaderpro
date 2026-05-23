// scenes-er.jsx — E-ReaderPro premium reklam sahneleri (75s)
// Edebi / sinematik / sıcak sepia tonu

const E = {
  cream:    '#F0E7D2',
  creamLi:  '#F6EFE1',
  creamWa:  '#E8DCC4',
  sepia:    '#D9CAB0',
  paper:    '#EFE6CF',
  brown:    '#3C2A1F',
  brownMid: '#5A3E2B',
  brownLi:  '#8A6B53',
  terra:    '#B85A2D',
  terraLi:  '#D87148',
  gold:     '#E8B945',
  amoled:   '#0A0807',
  ink:      '#1A1410',
  forest:   '#2F5142',
  graypap:  '#C8C2B5',
  burgundy: '#6B3F4A',
  teal:     '#1C6E78',
  navy:     '#15203D',
  burnt:    '#8A3A1E',
  brick:    '#A2452D',
  white:    '#FFFFFF',
  ash:      '#9B8E78',
};

const FD = '"Cormorant Garamond", "Lora", Georgia, serif';     // display
const FS = '"Lora", "Merriweather", Georgia, serif';            // serif headings
const FB = '"Inter", system-ui, sans-serif';                    // ui body
const FM = '"Merriweather", "Lora", Georgia, serif';            // body reading

const useStageSize = () => window.__STAGE_SIZE || { w: 1080, h: 1920, aspect: 'vertical' };

const fadeIO = (lt, total, inD = 0.4, outD = 0.35) => {
  const fIn = Math.min(lt / inD, 1);
  const fOut = lt < total - outD ? 1 : Math.max(0, 1 - (lt - (total - outD)) / outD);
  return Math.min(fIn, fOut);
};

// ── Phone frame ───────────────────────────────────────────────────────
function Phone({ x, y, w = 360, src, rotate = 0, scale = 1, opacity = 1, glow, children }) {
  const h = w * 2.06;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: w, height: h,
      transform: `translate(-50%,-50%) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      filter: glow
        ? `drop-shadow(0 24px 50px rgba(0,0,0,0.4)) drop-shadow(0 0 ${glow}px ${E.gold}80)`
        : 'drop-shadow(0 28px 56px rgba(40,25,15,0.45))',
      willChange: 'transform,opacity',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: '#0a0807',
        borderRadius: w * 0.115,
        padding: w * 0.028,
        boxSizing: 'border-box',
      }}>
        <div style={{
          width: '100%', height: '100%',
          borderRadius: w * 0.09,
          overflow: 'hidden', position: 'relative',
          background: E.cream,
        }}>
          {src && <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>}
          {children}
          <div style={{
            position: 'absolute', top: 7, left: '50%',
            transform: 'translateX(-50%)',
            width: w * 0.3, height: w * 0.042,
            background: '#0a0807', borderRadius: 999,
          }}/>
        </div>
      </div>
    </div>
  );
}

// ── Tablet frame ──────────────────────────────────────────────────────
function Tablet({ x, y, w = 800, src, scale = 1, opacity = 1, children, rotate = 0 }) {
  const h = w * 0.75; // 4:3 iPad
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: w, height: h,
      transform: `translate(-50%,-50%) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      filter: 'drop-shadow(0 32px 64px rgba(40,25,15,0.5))',
      willChange: 'transform,opacity',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: '#0a0807',
        borderRadius: 28,
        padding: 18,
        boxSizing: 'border-box',
      }}>
        <div style={{
          width: '100%', height: '100%',
          borderRadius: 16,
          overflow: 'hidden', position: 'relative',
          background: E.cream,
        }}>
          {src && <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>}
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Book cover ────────────────────────────────────────────────────────
function BookCover({ title, author, color1, color2, w = 220, x, y, rotate = 0, scale = 1, opacity = 1, accent = E.gold }) {
  const h = w * 1.5;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: w, height: h,
      transform: `translate(-50%,-50%) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      borderRadius: 10,
      background: `linear-gradient(155deg, ${color1} 0%, ${color2} 100%)`,
      boxShadow: '0 20px 40px rgba(40,25,15,0.4), inset 0 1px 0 rgba(255,255,255,0.12), inset -3px 0 0 rgba(0,0,0,0.18)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 14%',
      textAlign: 'center',
      fontFamily: FS,
      color: '#fff',
      gap: 12,
      willChange: 'transform,opacity',
    }}>
      <div style={{
        fontSize: w * 0.105, fontWeight: 600,
        lineHeight: 1.15, letterSpacing: '0.005em',
        textShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}>{title}</div>
      <div style={{ width: w * 0.22, height: 1.5, background: accent, opacity: 0.85 }}/>
      <div style={{
        fontSize: w * 0.06, fontStyle: 'italic',
        opacity: 0.85, color: accent,
        fontFamily: FS,
      }}>{author}</div>
    </div>
  );
}

const BOOKS = [
  { t: 'Bilim ve Hayal Gücü',         a: 'Dr. Ayhan Demir',    c1: '#2A8893', c2: '#0F4E58', ac: E.gold },
  { t: 'Yıldızların Altında',         a: 'Cemal Yörük',         c1: '#243B5C', c2: '#0C1426', ac: E.gold },
  { t: 'Şehrin Sırları',              a: 'Tuna Akın',           c1: '#A04428', c2: '#5C1F0F', ac: E.gold },
  { t: 'Anadolu Şiirleri Antolojisi', a: 'Çeşitli Şairler',     c1: '#7B304D', c2: '#3B1623', ac: E.gold },
  { t: 'İstanbul Sokaklarında',       a: 'Selma Kara',          c1: '#9C5A2E', c2: '#4B2613', ac: E.gold },
  { t: 'Sessiz Kitap',                a: 'Murat Erdoğan',       c1: '#4A6B4F', c2: '#1F3023', ac: E.gold },
];

// ── Paper grain bg ────────────────────────────────────────────────────
function PaperBG({ tone = E.cream }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: tone,
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, mixBlendMode: 'multiply' }}>
        <filter id="paperNoise">
          <feTurbulence baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
          <feColorMatrix values="0 0 0 0 0.23 0 0 0 0 0.16 0 0 0 0 0.12 0 0 0 0.6 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoise)"/>
      </svg>
    </div>
  );
}

// ── Animated serif heading ─────────────────────────────────────────────
function H({ text, x, y, size, color = E.brown, font = FS, weight = 600, ls = '0', lh = 1.05,
            maxWidth, lt, total, inD = 0.4, outD = 0.35, italic = false, align = 'center' }) {
  const op = fadeIO(lt, total, inD, outD);
  const eIn = Easing.easeOutCubic(Math.min(lt / inD, 1));
  const ty = (1 - eIn) * 28;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      transform: `translate(-50%,-50%) translateY(${ty}px)`,
      opacity: op,
      fontFamily: font, fontWeight: weight,
      fontStyle: italic ? 'italic' : 'normal',
      fontSize: size, color, letterSpacing: ls, lineHeight: lh,
      textAlign: align, maxWidth,
      whiteSpace: maxWidth ? 'normal' : 'pre',
      willChange: 'transform,opacity',
    }}>{text}</div>
  );
}

// Typewriter line — text reveals char-by-char
function Typewriter({ text, x, y, size, color = E.brown, font = FS, weight = 500,
                      lt, total, startDelay = 0, revealDur = 1.5,
                      ls = '0', lh = 1.1, maxWidth, align = 'center', italic = false }) {
  const t = Math.max(0, lt - startDelay);
  const ch = Math.floor((t / revealDur) * text.length);
  const shown = text.slice(0, Math.min(ch, text.length));
  const op = fadeIO(lt - startDelay, total - startDelay, 0.2, 0.4);
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      transform: 'translate(-50%,-50%)',
      opacity: op > 0 ? op : 0,
      fontFamily: font, fontWeight: weight,
      fontStyle: italic ? 'italic' : 'normal',
      fontSize: size, color, letterSpacing: ls, lineHeight: lh,
      textAlign: align, maxWidth,
      whiteSpace: maxWidth ? 'normal' : 'pre',
    }}>
      {shown}
      <span style={{
        display: 'inline-block', width: '0.05em',
        marginLeft: '0.05em',
        opacity: ch >= text.length ? 0 : (Math.sin(t * 12) > 0 ? 0.7 : 0),
        background: color, height: '0.9em',
        verticalAlign: 'baseline',
      }}/>
    </div>
  );
}

// ── Decorative flourish (top/bottom of titles) ─────────────────────────
function Flourish({ x, y, w = 200, color = E.terra, lt, total, inD = 0.5, outD = 0.35 }) {
  const op = fadeIO(lt, total, inD, outD);
  const draw = Easing.easeOutCubic(Math.min(lt / inD, 1));
  return (
    <svg width={w} height={20} viewBox="0 0 200 20"
      style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)', opacity: op }}>
      <line x1="20" y1="10" x2={20 + (160 * draw)} y2="10" stroke={color} strokeWidth="1.5"/>
      <circle cx="100" cy="10" r={3 * draw} fill={color}/>
      <circle cx="60" cy="10" r={1.5 * draw} fill={color}/>
      <circle cx="140" cy="10" r={1.5 * draw} fill={color}/>
    </svg>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 1 — QUOTE OPENING (0-6s)
// "Bir kütüphane... cebinde." cinematic typewriter
// ══════════════════════════════════════════════════════════════════════
function S1_Quote({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        // Slow camera zoom
        const zoom = 1 + (lt / dur) * 0.08;
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 50% 45%, ${E.creamLi} 0%, ${E.cream} 50%, ${E.creamWa} 100%)`,
              transform: `scale(${zoom})`,
            }}/>
            <PaperBG tone="transparent"/>

            {/* Decorative book silhouette */}
            <div style={{
              position: 'absolute', left: w/2, top: v ? h*0.72 : h*0.78,
              transform: 'translate(-50%,-50%)',
              opacity: 0.08,
              fontSize: v ? 600 : 480, lineHeight: 1,
              filter: 'blur(2px)',
            }}>📖</div>

            {/* Top flourish */}
            <Flourish x={w/2} y={v ? h*0.18 : h*0.18}
              w={v ? 280 : 320}
              color={E.terra} lt={lt} total={dur}/>

            {/* Eyebrow */}
            <H text="2026 · YENİ" x={w/2} y={v ? h*0.225 : h*0.225}
              size={v ? 22 : 18}
              color={E.terra}
              font={FB} weight={700} ls="0.32em"
              lt={lt-0.2} total={dur-0.2}/>

            {/* Main quote */}
            <Typewriter
              text={'"Bir kütüphane,'}
              x={w/2} y={v ? h*0.38 : h*0.38}
              size={v ? 100 : 78}
              color={E.brown}
              italic={true}
              font={FD} weight={500}
              lt={lt} total={dur}
              startDelay={0.4} revealDur={1.0}
              maxWidth={v ? 900 : 1500}
            />
            <Typewriter
              text={'avucunun içinde."'}
              x={w/2} y={v ? h*0.46 : h*0.48}
              size={v ? 100 : 78}
              color={E.terra}
              italic={true}
              font={FD} weight={500}
              lt={lt} total={dur}
              startDelay={1.6} revealDur={1.2}
              maxWidth={v ? 900 : 1500}
            />

            {/* Attribution */}
            {lt > 3.4 && (
              <H text="— okumanın yeni biçimi"
                x={w/2} y={v ? h*0.56 : h*0.58}
                size={v ? 30 : 26}
                color={E.brownLi}
                font={FS} weight={500} italic={true}
                ls="0.04em"
                lt={lt-3.4} total={dur-3.4}/>
            )}

            {/* Bottom flourish */}
            <Flourish x={w/2} y={v ? h*0.64 : h*0.66}
              w={v ? 200 : 240}
              color={E.terra} lt={lt-0.5} total={dur-0.5}/>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 2 — LOGO & NAME REVEAL (6-11s)
// ══════════════════════════════════════════════════════════════════════
function S2_LogoReveal({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const logoE = Easing.easeOutBack(clamp(lt / 0.9, 0, 1));
        const titleE = clamp((lt - 0.7) / 0.6, 0, 1);
        const subE = clamp((lt - 1.4) / 0.5, 0, 1);
        const halo = (Math.sin(lt * 1.5) + 1) / 2;
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 50% 38%, ${E.creamLi} 0%, ${E.cream} 60%, ${E.creamWa} 100%)`,
            }}/>
            <PaperBG tone="transparent"/>

            {/* Glow halo */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.38 : h*0.4,
              width: v ? 720 : 580, height: v ? 720 : 580,
              transform: `translate(-50%,-50%) scale(${0.7 + logoE * 0.3})`,
              opacity: logoE * 0.6,
              background: `radial-gradient(circle, ${E.gold}30 0%, ${E.terra}15 35%, transparent 65%)`,
              borderRadius: '50%',
              filter: `blur(${20 + halo * 12}px)`,
            }}/>

            {/* Logo */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.38 : h*0.4,
              width: v ? 460 : 380, height: v ? 460 : 380,
              transform: `translate(-50%,-50%) scale(${0.5 + logoE * 0.5}) rotate(${(1-logoE) * -8}deg)`,
              opacity: logoE,
              filter: 'drop-shadow(0 22px 44px rgba(40,25,15,0.35))',
            }}>
              <img src="assets4/logo.png" alt="" style={{
                width: '100%', height: '100%', objectFit: 'contain',
                borderRadius: '24%',
              }}/>
            </div>

            {/* Name — "E-Reader Pro" */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.72 : h*0.74,
              transform: `translate(-50%,-50%) translateY(${(1-titleE) * 24}px)`,
              opacity: titleE,
              fontFamily: FS, fontWeight: 700,
              fontSize: v ? 160 : 120,
              color: E.brown, letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>
              E-Reader<span style={{ color: E.terra, fontStyle: 'italic', fontWeight: 600 }}>Pro</span>
            </div>

            {/* Subtitle */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.82 : h*0.86,
              transform: `translate(-50%,-50%) translateY(${(1-subE) * 16}px)`,
              opacity: subE,
              fontFamily: FB, fontWeight: 500,
              fontSize: v ? 30 : 24,
              color: E.brownLi, letterSpacing: '0.4em',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
            }}>OKUMANIN  ·  YENİ  ·  HALİ</div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 3 — LIBRARY REVEAL (11-17s)
// Beautiful book covers float in
// ══════════════════════════════════════════════════════════════════════
function S3_Library({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const bookW = v ? 250 : 210;
        const positions = v
          ? [
              { x: 0.22, y: 0.45, r: -8, d: 0.1 },
              { x: 0.5,  y: 0.4,  r: 0,  d: 0.25 },
              { x: 0.78, y: 0.45, r: 8,  d: 0.4 },
              { x: 0.32, y: 0.78, r: -5, d: 0.55 },
              { x: 0.65, y: 0.78, r: 5,  d: 0.7 },
            ]
          : [
              { x: 0.18, y: 0.6, r: -6, d: 0.1 },
              { x: 0.34, y: 0.55, r: -2, d: 0.2 },
              { x: 0.5,  y: 0.55, r: 0,  d: 0.3 },
              { x: 0.66, y: 0.55, r: 2,  d: 0.4 },
              { x: 0.82, y: 0.6,  r: 6,  d: 0.5 },
            ];

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: E.cream }}/>
            <PaperBG tone="transparent"/>

            {/* Eyebrow */}
            <H text="KÜTÜPHANEN, CEBİNDE" x={w/2} y={v ? h*0.1 : h*0.13}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            {/* Title */}
            <H text="Tüm kitapların," x={w/2} y={v ? h*0.18 : h*0.22}
              size={v ? 110 : 88} color={E.brown}
              font={FD} weight={500} italic={true}
              ls="-0.01em"
              lt={lt} total={dur}/>
            <H text="tek bir uygulamada." x={w/2} y={v ? h*0.26 : h*0.32}
              size={v ? 110 : 88} color={E.terra}
              font={FD} weight={500} italic={true}
              ls="-0.01em"
              lt={lt-0.2} total={dur-0.2}/>

            {/* Books float in */}
            {BOOKS.slice(0, 5).map((b, i) => {
              const p = positions[i];
              const slt = lt - p.d;
              const e = Easing.easeOutBack(clamp(slt / 0.6, 0, 1));
              const op = Math.min(slt / 0.4, 1);
              const float = Math.sin((lt + i * 0.7) * 0.8) * (v ? 6 : 4);
              return (
                <BookCover key={i}
                  title={b.t} author={b.a} color1={b.c1} color2={b.c2} accent={b.ac}
                  w={bookW}
                  x={w * p.x}
                  y={h * p.y + float}
                  rotate={p.r * (0.3 + e * 0.7)}
                  scale={0.5 + e * 0.5}
                  opacity={op > 0 ? op : 0}
                />
              );
            })}

            {/* Bottom caption */}
            {lt > 2.5 && (
              <H text="Kişisel kitaplığın — her zaman seninle."
                x={w/2} y={v ? h*0.94 : h*0.94}
                size={v ? 32 : 26}
                color={E.brownMid}
                font={FS} weight={500} italic={true}
                lt={lt-2.5} total={dur-2.5}/>
            )}
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 4 — READING EXPERIENCE & FONTS (17-23s)
// Show reading view + cycle through fonts
// ══════════════════════════════════════════════════════════════════════
const FONTS_LIST = [
  { name: 'Lora',         family: '"Lora", Georgia, serif' },
  { name: 'Merriweather', family: '"Merriweather", Georgia, serif' },
  { name: 'Crimson Pro',  family: '"Crimson Pro", Georgia, serif' },
  { name: 'Vollkorn',     family: '"Vollkorn", Georgia, serif' },
  { name: 'Spectral',     family: '"Spectral", Georgia, serif' },
  { name: 'Fraunces',     family: '"Fraunces", Georgia, serif' },
  { name: 'DM Serif',     family: '"DM Serif Display", Georgia, serif' },
  { name: 'Literata',     family: '"Literata", Georgia, serif' },
];

function S4_FontsTypography({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        // Cycle through fonts every 0.65s
        const fIdx = Math.floor(lt / 0.65) % FONTS_LIST.length;
        const current = FONTS_LIST[fIdx];
        const localF = (lt % 0.65) / 0.65;
        const fadeF = localF < 0.2 ? localF / 0.2 : localF > 0.85 ? (1 - localF) / 0.15 : 1;

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(165deg, ${E.creamLi} 0%, ${E.cream} 50%, ${E.creamWa} 100%)`,
            }}/>
            <PaperBG tone="transparent"/>

            <H text="10+ EDİTÖR KALİTESİNDE FONT" x={w/2} y={v ? h*0.08 : h*0.1}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.3em"
              lt={lt} total={dur}/>
            <H text="Senin gözüne, senin tadına." x={w/2} y={v ? h*0.15 : h*0.18}
              size={v ? 80 : 64} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.15} total={dur-0.15}/>

            {/* Big "Aa" sample */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.5 : h*0.5,
              transform: 'translate(-50%,-50%)',
              opacity: fadeF,
              fontFamily: current.family,
              fontSize: v ? 600 : 440,
              fontWeight: 500, lineHeight: 1,
              color: E.brown,
            }}>Aa</div>

            {/* Font name */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.82 : h*0.83,
              transform: 'translate(-50%,-50%)',
              fontFamily: FB, fontWeight: 600,
              fontSize: v ? 56 : 44,
              color: E.terra,
              letterSpacing: '0.02em',
              opacity: fadeF,
            }}>{current.name}</div>

            {/* Dots indicator */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.89 : h*0.91,
              transform: 'translate(-50%,-50%)',
              display: 'flex', gap: 10,
            }}>
              {FONTS_LIST.map((_, i) => (
                <div key={i} style={{
                  width: i === fIdx ? 24 : 6, height: 6,
                  borderRadius: 3,
                  background: i === fIdx ? E.terra : E.ash,
                  opacity: i === fIdx ? 1 : 0.4,
                  transition: 'all 250ms',
                }}/>
              ))}
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 5 — 8 THEMES (23-29s)
// Reading view morphs through all themes
// ══════════════════════════════════════════════════════════════════════
const THEMES = [
  { name: 'Aydınlık',    bg: '#FFFFFF', fg: '#1A1410', label: '#5A3E2B' },
  { name: 'Kitap (Sepya)', bg: '#F0E7D2', fg: '#3C2A1F', label: '#B85A2D' },
  { name: 'Göz Yormayan', bg: '#F2E6BB', fg: '#3C2A1F', label: '#B85A2D' },
  { name: 'Karanlık',     bg: '#1A1A1A', fg: '#D5C9B0', label: '#E8B945' },
  { name: 'AMOLED Siyah', bg: '#000000', fg: '#A89A82', label: '#E8B945' },
  { name: 'Gri Kâğıt',    bg: '#C8C2B5', fg: '#2A2620', label: '#6B3F4A' },
  { name: 'Orman',        bg: '#23382C', fg: '#C9D8C2', label: '#A8B884' },
  { name: 'Özel Tema',    bg: '#1F1B2E', fg: '#D5C9B0', label: '#D87148' },
];

const SAMPLE_TEXT = `Önsöz: Neden Hayal Kurarız?\n\nBilim insanlarına çok sık sorulan soru şudur: "Bir keşfe nasıl varırsınız?" İnsanlar bu soruya cevap olarak genellikle uzun saatler süren laboratuvar deneylerini, kalın kitapları, karmaşık denklemleri duymayı bekler. Bütün bunlar elbette doğrudur — ama yetersizdir.`;

function S5_Themes({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const tIdx = Math.floor(lt / 0.7) % THEMES.length;
        const t = THEMES[tIdx];
        const localT = (lt % 0.7) / 0.7;
        const fadeT = localT < 0.18 ? localT / 0.18 : localT > 0.85 ? (1 - localT) / 0.15 : 1;

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(160deg, ${E.brown} 0%, ${E.ink} 100%)`,
            }}/>

            <H text="8 OKUMA TEMASI" x={w/2} y={v ? h*0.07 : h*0.08}
              size={v ? 22 : 18} color={E.gold}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            <H text="Sabah, akşam, gece —" x={w/2} y={v ? h*0.13 : h*0.15}
              size={v ? 72 : 58} color={E.creamLi}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>
            <H text="okuma seninle değişir." x={w/2} y={v ? h*0.19 : h*0.22}
              size={v ? 72 : 58} color={E.gold}
              font={FD} weight={500} italic={true}
              lt={lt-0.25} total={dur-0.25}/>

            {/* Reading page mockup */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.55 : h*0.55,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.78 : w*0.5,
              height: v ? h*0.46 : h*0.6,
              background: t.bg,
              borderRadius: 18,
              padding: v ? '50px 56px' : '40px 50px',
              boxShadow: '0 28px 60px rgba(0,0,0,0.45)',
              overflow: 'hidden',
              transition: 'background 200ms',
              opacity: fadeT,
            }}>
              <div style={{
                fontFamily: FS, fontWeight: 700,
                fontSize: v ? 36 : 28,
                color: t.fg, lineHeight: 1.3,
                marginBottom: v ? 24 : 18,
              }}>Önsöz: Neden Hayal Kurarız?</div>
              <div style={{
                fontFamily: FM, fontWeight: 400,
                fontSize: v ? 22 : 17,
                color: t.fg, lineHeight: 1.7,
                opacity: 0.88,
                textAlign: 'justify',
              }}>{SAMPLE_TEXT.split('\n\n')[1]}</div>
            </div>

            {/* Theme name pill */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.91 : h*0.93,
              transform: `translate(-50%,-50%) scale(${0.95 + fadeT * 0.05})`,
              background: t.label,
              color: t.bg,
              fontFamily: FB, fontWeight: 700,
              fontSize: v ? 32 : 26,
              padding: '12px 28px',
              borderRadius: 999,
              letterSpacing: '0.04em',
              opacity: fadeT,
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            }}>{t.name}</div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 6 — 14 PAGE TRANSITIONS (29-37s)
// Show some real CSS transitions on book pages
// ══════════════════════════════════════════════════════════════════════
const TRANSITIONS = [
  'Gerçek Kıvırma', 'Kıvırma',  'Kaydırma',
  '3D Çevirme',     'Solma',    'Yakınlaşma',
  'Küp Geçişi',     'Çözünme',  'Kapak Akışı',
  'Katlanma',       'İtme',     'Süpürme',
  'Kart Deste',     'Yok',
];

function S6_Transitions({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';

  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        // Active transition animates a page; cycle every 0.6s
        const cycle = 0.65;
        const tIdx = Math.floor(lt / cycle) % 4; // animate 4 hero transitions
        const phaseT = (lt % cycle) / cycle;

        // Define hero transitions
        const heroTransforms = [
          // 3D flip
          (p) => ({
            transform: `perspective(1200px) rotateY(${p * 180}deg)`,
            transformStyle: 'preserve-3d',
          }),
          // Cube
          (p) => ({
            transform: `perspective(1200px) rotateY(${p * 90}deg) translateZ(0)`,
            transformOrigin: 'right center',
          }),
          // Curl (rotate from corner)
          (p) => ({
            transform: `rotateZ(${p * -25}deg) translateX(${p * -200}px) translateY(${p * 120}px)`,
            transformOrigin: 'bottom right',
          }),
          // Slide
          (p) => ({
            transform: `translateX(${p * -100}%)`,
          }),
        ][tIdx];

        const heroNames = ['3D Çevirme', 'Küp Geçişi', 'Gerçek Kıvırma', 'Kaydırma'];

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(165deg, ${E.sepia} 0%, ${E.creamWa} 100%)`,
            }}/>
            <PaperBG tone="transparent"/>

            <H text="14 SAYFA GEÇİŞ EFEKTİ" x={w/2} y={v ? h*0.07 : h*0.08}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            <H text="Her sayfada bir hikâye." x={w/2} y={v ? h*0.13 : h*0.16}
              size={v ? 88 : 72} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>

            {/* Page being flipped */}
            <div style={{
              position: 'absolute',
              left: v ? w/2 : w*0.32,
              top: v ? h*0.5 : h*0.55,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.62 : w*0.32,
              height: v ? w*0.84 : w*0.43,
              perspective: 1400,
            }}>
              {/* Back page (next) */}
              <div style={{
                position: 'absolute', inset: 0,
                background: E.creamLi,
                borderRadius: 12,
                boxShadow: '0 18px 36px rgba(0,0,0,0.25)',
                padding: 24, boxSizing: 'border-box',
                fontFamily: FM, fontSize: v ? 16 : 13,
                color: E.brown, lineHeight: 1.7,
                overflow: 'hidden',
              }}>
                <div style={{ fontWeight: 700, fontSize: v ? 24 : 18, marginBottom: 12, color: E.terra }}>II. Bölüm</div>
                Çünkü hiçbir keşif, sadece kitap okumaktan ya da deney tüpü çalkalamaktan doğmaz. Her büyük keşfin başında küçük bir hayal vardır: "Acaba böyle olabilir mi?"
              </div>
              {/* Front page (current) — animating */}
              <div style={{
                position: 'absolute', inset: 0,
                background: E.cream,
                borderRadius: 12,
                boxShadow: '0 18px 36px rgba(0,0,0,0.3)',
                padding: 24, boxSizing: 'border-box',
                fontFamily: FM, fontSize: v ? 16 : 13,
                color: E.brown, lineHeight: 1.7,
                overflow: 'hidden',
                backfaceVisibility: 'visible',
                ...heroTransforms(phaseT),
                transition: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: v ? 24 : 18, marginBottom: 12, color: E.terra }}>I. Bölüm</div>
                Bilim insanlarına çok sık sorulan soru şudur: "Bir keşfe nasıl varırsınız?" İnsanlar bu soruya cevap olarak genellikle uzun saatler süren laboratuvar deneylerini, kalın kitapları, karmaşık denklemleri duymayı bekler.
              </div>
            </div>

            {/* Transition name badge */}
            <div style={{
              position: 'absolute',
              left: v ? w/2 : w*0.32,
              top: v ? h*0.88 : h*0.93,
              transform: `translate(-50%,-50%)`,
              background: E.brown,
              color: E.creamLi,
              fontFamily: FB, fontWeight: 700,
              fontSize: v ? 32 : 26,
              padding: '12px 28px',
              borderRadius: 999,
              letterSpacing: '0.04em',
              opacity: phaseT < 0.85 ? 1 : 0.3,
              transition: 'opacity 200ms',
            }}>{heroNames[tIdx]}</div>

            {/* Grid of all 14 names (horizontal layout only) or list (vertical) */}
            <div style={{
              position: 'absolute',
              left: v ? w/2 : w*0.7,
              top: v ? h*0.78 : h*0.5,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.92 : w*0.5,
              display: 'grid',
              gridTemplateColumns: v ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
              gap: v ? 10 : 12,
            }}>
              {TRANSITIONS.map((nm, i) => {
                const slt = lt - 1.2 - i * 0.06;
                const e = Easing.easeOutCubic(clamp(slt / 0.4, 0, 1));
                const isHero = heroNames.includes(nm) && heroNames[tIdx] === nm;
                return (
                  <div key={i} style={{
                    background: isHero ? E.terra : 'transparent',
                    border: isHero ? 'none' : `1.5px solid ${E.brownLi}40`,
                    color: isHero ? '#fff' : E.brown,
                    fontFamily: FB, fontWeight: 600,
                    fontSize: v ? 19 : 18,
                    padding: v ? '12px 8px' : '12px 14px',
                    borderRadius: 12,
                    textAlign: 'center',
                    opacity: e,
                    transform: `translateY(${(1-e) * 8}px)`,
                    transition: isHero ? 'background 200ms, color 200ms' : 'none',
                    whiteSpace: 'nowrap',
                  }}>{nm}</div>
                );
              })}
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 7 — TYPOGRAPHY DIAL-IN (37-42s)
// Sliders animate: font-size, line-height, margin, weight
// ══════════════════════════════════════════════════════════════════════
function S7_Typography({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const tp = (lt % 4) / 4;
        // animate via sin
        const sizePx = 18 + Math.sin(lt * 0.8) * 4 + 4;
        const lineH = 1.5 + Math.sin(lt * 0.6 + 1) * 0.3;
        const marginPx = 24 + Math.sin(lt * 0.7 + 2) * 16;
        const weight = 400 + Math.round(Math.sin(lt * 0.5 + 1.2) * 100 + 100);

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: E.cream }}/>
            <PaperBG tone="transparent"/>

            <H text="MİLİMETRİK KONTROL" x={w/2} y={v ? h*0.07 : h*0.08}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            <H text="Her ayrıntı senin." x={w/2} y={v ? h*0.13 : h*0.16}
              size={v ? 88 : 72} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>

            {/* Reading sample */}
            <div style={{
              position: 'absolute',
              left: v ? w/2 : w*0.32,
              top: v ? h*0.5 : h*0.55,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.78 : w*0.36,
              height: v ? h*0.4 : h*0.62,
              background: E.creamLi,
              borderRadius: 18,
              padding: `40px ${marginPx + 20}px`,
              boxShadow: '0 20px 44px rgba(40,25,15,0.2)',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}>
              <div style={{
                fontFamily: FM, fontWeight: weight,
                fontSize: sizePx * (v ? 2 : 1.5),
                color: E.brown,
                lineHeight: lineH,
                textAlign: 'justify',
              }}>
                Çünkü hiçbir keşif, sadece kitap okumaktan ya da deney tüpü çalkalamaktan doğmaz. Her büyük keşfin başında küçük bir hayal vardır: "Acaba böyle olabilir mi?" diye soran, kuralları henüz tam bilmeyen ama soru sormaktan vazgeçmeyen bir zihnin sezgisi.
              </div>
            </div>

            {/* Sliders panel */}
            <div style={{
              position: 'absolute',
              left: v ? w/2 : w*0.7,
              top: v ? h*0.86 : h*0.5,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.85 : w*0.42,
              background: '#fff',
              borderRadius: 20,
              padding: v ? '24px 30px' : '26px 32px',
              boxShadow: '0 16px 36px rgba(40,25,15,0.18)',
              fontFamily: FB,
              display: 'flex', flexDirection: 'column', gap: v ? 14 : 18,
            }}>
              <Slider label="Punto"    value={Math.round(sizePx)} unit="px"  min={14} max={28} color={E.terra} v={v}/>
              <Slider label="Satır"    value={lineH.toFixed(1)}              min={1.2} max={2.0} color={E.terra} v={v}/>
              <Slider label="Marj"     value={(marginPx / 24).toFixed(1)}    min={0.5} max={1.8} color={E.terra} v={v}/>
              <Slider label="Kalınlık" value={weight}                        min={300} max={700} color={E.terra} v={v}/>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Slider({ label, value, unit = '', min, max, color, v }) {
  const pct = ((parseFloat(value) - min) / (max - min)) * 100;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{
        flexShrink: 0, fontWeight: 600,
        fontSize: v ? 22 : 18,
        color: E.brown, width: v ? 130 : 100,
      }}>{label}</div>
      <div style={{ flex: 1, height: 6, background: E.sepia, borderRadius: 3, position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0,
          width: `${pct}%`, height: '100%',
          background: color, borderRadius: 3,
        }}/>
        <div style={{
          position: 'absolute',
          left: `${pct}%`, top: '50%',
          transform: 'translate(-50%,-50%)',
          width: 18, height: 18,
          borderRadius: '50%',
          background: '#fff',
          border: `2px solid ${color}`,
          boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
        }}/>
      </div>
      <div style={{
        flexShrink: 0, fontWeight: 700,
        fontSize: v ? 20 : 16,
        color: E.brown, width: v ? 80 : 64,
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
      }}>{value}{unit}</div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 8 — AI READING ASSISTANT (42-47s)
// ══════════════════════════════════════════════════════════════════════
function S8_AI({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const ansP = clamp((lt - 1.8) / 1.2, 0, 1);
        const chars = Math.floor(ansP * 180);
        const aiAnswer = 'Bu paragrafta yazar, bilimsel keşiflerin kuru akıl değil, hayal gücüyle başladığını anlatıyor. "Acaba böyle olabilir mi?" sorusu — büyük keşiflerin tohumudur.';
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 50% 30%, ${E.creamLi} 0%, ${E.cream} 70%)`,
            }}/>
            <PaperBG tone="transparent"/>

            <H text="AI OKUMA ASİSTANI" x={w/2} y={v ? h*0.07 : h*0.08}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            <H text="Anlamadın mı? Sor." x={w/2} y={v ? h*0.135 : h*0.16}
              size={v ? 88 : 70} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>

            {/* Conversation card */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.56 : h*0.6,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.86 : w*0.7,
              background: '#fff',
              borderRadius: 24,
              padding: v ? '36px 40px' : '32px 36px',
              boxShadow: '0 24px 56px rgba(40,25,15,0.22)',
              fontFamily: FB,
              display: 'flex', flexDirection: 'column', gap: 22,
            }}>
              {/* Highlighted excerpt */}
              <div style={{
                background: `${E.gold}22`,
                borderLeft: `4px solid ${E.gold}`,
                padding: v ? '18px 22px' : '16px 20px',
                borderRadius: 8,
                fontFamily: FM, fontSize: v ? 22 : 18,
                color: E.brown, lineHeight: 1.5,
                fontStyle: 'italic',
                opacity: clamp(lt / 0.4, 0, 1),
              }}>
                "Bütün bunlar elbette doğrudur — ama yetersizdir."
              </div>

              {/* User question */}
              {lt > 0.5 && (
                <div style={{
                  background: E.sepia,
                  padding: v ? '16px 22px' : '14px 20px',
                  borderRadius: 16,
                  borderTopLeftRadius: 4,
                  alignSelf: 'flex-start',
                  maxWidth: '78%',
                  fontSize: v ? 22 : 18,
                  color: E.brown, fontWeight: 500,
                  opacity: clamp((lt - 0.5) / 0.4, 0, 1),
                }}>
                  💬 Burada yazar ne demek istiyor?
                </div>
              )}

              {/* AI answer */}
              {lt > 1.5 && (
                <div style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: v ? 50 : 42, height: v ? 50 : 42,
                    background: `linear-gradient(135deg, ${E.terra}, ${E.gold})`,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: v ? 24 : 20,
                    boxShadow: `0 4px 14px ${E.terra}50`,
                  }}>✦</div>
                  <div style={{
                    background: `linear-gradient(135deg, ${E.terra}10, ${E.gold}10)`,
                    border: `1.5px solid ${E.terra}30`,
                    padding: v ? '18px 24px' : '16px 22px',
                    borderRadius: 16,
                    borderTopLeftRadius: 4,
                    flex: 1,
                    fontSize: v ? 22 : 18,
                    color: E.brown, lineHeight: 1.55,
                  }}>
                    {aiAnswer.slice(0, chars)}
                    <span style={{
                      opacity: chars >= aiAnswer.length ? 0 : 0.7,
                      animation: 'none',
                      borderRight: `2px solid ${E.terra}`,
                      paddingLeft: 1,
                    }}>&nbsp;</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom tagline */}
            <H text="Kitabın seninle konuşuyor."
              x={w/2} y={v ? h*0.92 : h*0.93}
              size={v ? 32 : 26}
              color={E.brownLi}
              font={FS} weight={500} italic={true}
              lt={lt-3.5} total={dur-3.5}/>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 9 — DICTIONARY & TRANSLATION (47-52s)
// Tap word → instant card with definition + translation
// ══════════════════════════════════════════════════════════════════════
function S9_Dictionary({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const tapAt = 0.8;
        const tapped = lt > tapAt;
        const cardE = Easing.easeOutBack(clamp((lt - tapAt) / 0.45, 0, 1));
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: E.creamWa }}/>
            <PaperBG tone="transparent"/>

            <H text="12 DİLDE SÖZLÜK · OFFLINE" x={w/2} y={v ? h*0.07 : h*0.08}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.3em"
              lt={lt} total={dur}/>
            <H text="Dokun — anlamı parlasın." x={w/2} y={v ? h*0.135 : h*0.16}
              size={v ? 84 : 68} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>

            {/* Text page with highlighted word */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.52 : h*0.55,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.84 : w*0.62,
              background: '#fff',
              borderRadius: 18,
              padding: v ? '40px 44px' : '36px 44px',
              boxShadow: '0 22px 48px rgba(40,25,15,0.22)',
              fontFamily: FM,
              fontSize: v ? 26 : 22,
              color: E.brown,
              lineHeight: 1.7,
              textAlign: 'justify',
            }}>
              Bilim insanlarına çok sık sorulan soru şudur: "Bir{' '}
              <span style={{
                background: tapped ? `${E.gold}55` : 'transparent',
                padding: tapped ? '2px 6px' : '0',
                borderRadius: 6,
                transition: 'background 200ms',
                color: tapped ? E.terra : E.brown,
                fontWeight: tapped ? 700 : 400,
              }}>keşfe</span>{' '}
              nasıl varırsınız?" İnsanlar bu soruya cevap olarak genellikle uzun saatler süren laboratuvar deneylerini, kalın kitapları, karmaşık denklemleri duymayı bekler.
            </div>

            {/* Dictionary card overlay */}
            {tapped && (
              <div style={{
                position: 'absolute',
                left: w/2, top: v ? h*0.84 : h*0.85,
                transform: `translate(-50%,-50%) scale(${0.7 + cardE * 0.3})`,
                opacity: cardE,
                background: '#fff',
                borderRadius: 22,
                padding: v ? '24px 32px' : '20px 28px',
                width: v ? w*0.84 : w*0.55,
                boxShadow: '0 24px 56px rgba(40,25,15,0.32)',
                border: `2px solid ${E.gold}`,
                fontFamily: FB,
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    fontFamily: FS, fontWeight: 700,
                    fontSize: v ? 44 : 36,
                    color: E.terra,
                  }}>keşif</div>
                  <div style={{
                    fontSize: v ? 18 : 14,
                    color: E.brownLi, fontStyle: 'italic',
                    fontFamily: FS,
                  }}>isim · /keʃif/</div>
                </div>
                <div style={{
                  fontSize: v ? 22 : 18,
                  color: E.brown, lineHeight: 1.5,
                }}>
                  <b style={{ color: E.terra, fontFamily: FB }}>1.</b> Var olduğu önceden bilinmeyen bir şeyi bulma; ortaya çıkarma.
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  marginTop: 6,
                  paddingTop: 12,
                  borderTop: `1px solid ${E.sepia}`,
                }}>
                  <div style={{
                    background: E.terra, color: '#fff',
                    fontSize: v ? 16 : 13, fontWeight: 700,
                    padding: '4px 10px', borderRadius: 6,
                    letterSpacing: '0.06em',
                  }}>EN</div>
                  <div style={{
                    fontSize: v ? 22 : 18,
                    color: E.brown, fontStyle: 'italic',
                    fontFamily: FS,
                  }}>discovery, exploration</div>
                </div>
              </div>
            )}

            {/* Language chips */}
            {lt > 2.5 && (
              <div style={{
                position: 'absolute',
                left: w/2, top: v ? h*0.97 : h*0.97,
                transform: 'translate(-50%,-50%)',
                display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap',
                width: v ? w*0.9 : w*0.7,
                opacity: clamp((lt - 2.5) / 0.4, 0, 1),
              }}>
                {['TR', 'EN', 'DE', 'FR', 'ES', 'IT', 'PT', 'RU', 'AR', 'ZH', 'JA', 'KO'].map((l, i) => (
                  <div key={i} style={{
                    background: 'transparent',
                    border: `1.5px solid ${E.terra}80`,
                    color: E.terra,
                    fontFamily: FB, fontWeight: 700,
                    fontSize: v ? 16 : 13,
                    padding: '4px 11px',
                    borderRadius: 6, letterSpacing: '0.1em',
                  }}>{l}</div>
                ))}
              </div>
            )}
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 10 — SESLİ OKUMA (TTS) + AUTO-SCROLL (52-56s)
// ══════════════════════════════════════════════════════════════════════
function S10_Audio({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        // Animated audio waveform
        const bars = 24;
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(170deg, ${E.brown} 0%, ${E.ink} 100%)`,
            }}/>

            <H text="SESLİ OKUMA · OTOMATİK KAYDIRMA" x={w/2} y={v ? h*0.08 : h*0.1}
              size={v ? 20 : 16} color={E.gold}
              font={FB} weight={700} ls="0.28em"
              lt={lt} total={dur}/>
            <H text="Kitabı dinle." x={w/2} y={v ? h*0.16 : h*0.22}
              size={v ? 130 : 100} color={E.creamLi}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>
            <H text="Gözlerine mola ver." x={w/2} y={v ? h*0.24 : h*0.34}
              size={v ? 78 : 62} color={E.gold}
              font={FD} weight={400} italic={true}
              lt={lt-0.3} total={dur-0.3}/>

            {/* Audio player card */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.55 : h*0.6,
              transform: 'translate(-50%,-50%)',
              width: v ? w*0.86 : w*0.6,
              background: `${E.cream}E0`,
              backdropFilter: 'blur(20px)',
              borderRadius: 28,
              padding: v ? '40px 44px' : '32px 38px',
              boxShadow: '0 28px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.4)',
              fontFamily: FB,
              display: 'flex', flexDirection: 'column', gap: v ? 24 : 22,
            }}>
              {/* Book title bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <BookCover title="Yıldızların Altında" author="Cemal Yörük"
                  color1='#243B5C' color2='#0C1426'
                  w={v ? 80 : 64}
                  x={(v ? 80 : 64) / 2} y={(v ? 80 : 64) * 0.75}/>
                <div style={{ marginLeft: v ? 90 : 74 }}>
                  <div style={{ fontFamily: FS, fontWeight: 700, fontSize: v ? 28 : 22, color: E.brown }}>
                    Yıldızların Altında
                  </div>
                  <div style={{ fontFamily: FS, fontStyle: 'italic', fontSize: v ? 18 : 14, color: E.brownLi, marginTop: 2 }}>
                    Bölüm I · 14:32 / 38:21
                  </div>
                </div>
              </div>

              {/* Waveform */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: v ? 60 : 50 }}>
                {Array.from({ length: bars }).map((_, i) => {
                  const playing = i < bars * 0.45;
                  const wave = Math.sin(lt * 6 + i * 0.4) * 0.5 + 0.5;
                  const height = playing ? (15 + wave * 35) : (10 + Math.sin(i * 1.3) * 8);
                  return (
                    <div key={i} style={{
                      flex: 1,
                      height: `${height}px`,
                      background: playing ? E.terra : `${E.brownLi}60`,
                      borderRadius: 2,
                      transition: 'height 50ms',
                    }}/>
                  );
                })}
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: v ? 54 : 44, height: v ? 54 : 44,
                  background: `${E.brown}15`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: E.brown, fontSize: v ? 22 : 18,
                }}>⏮</div>
                <div style={{
                  width: v ? 74 : 64, height: v ? 74 : 64,
                  background: E.terra, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: v ? 28 : 22,
                  boxShadow: `0 8px 22px ${E.terra}80`,
                }}>⏸</div>
                <div style={{
                  width: v ? 54 : 44, height: v ? 54 : 44,
                  background: `${E.brown}15`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: E.brown, fontSize: v ? 22 : 18,
                }}>⏭</div>
                <div style={{
                  background: E.brown, color: E.creamLi,
                  fontFamily: FB, fontWeight: 700,
                  fontSize: v ? 18 : 15,
                  padding: '8px 16px',
                  borderRadius: 8,
                  letterSpacing: '0.04em',
                }}>1.2× HIZ</div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 11 — STREAKS & STATS (56-60s)
// ══════════════════════════════════════════════════════════════════════
function S11_Streaks({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const flameP = Easing.easeOutBack(clamp(lt / 0.7, 0, 1));
        const countNum = Math.floor(clamp((lt - 0.5) / 1.0, 0, 1) * 47);
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 50% 40%, #FBF1DC 0%, ${E.creamWa} 70%)`,
            }}/>
            <PaperBG tone="transparent"/>

            <H text="ALIŞKANLIK YARAT" x={w/2} y={v ? h*0.07 : h*0.09}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            <H text="Her gün, biraz daha." x={w/2} y={v ? h*0.135 : h*0.17}
              size={v ? 86 : 70} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>

            {/* Big flame counter */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.46 : h*0.5,
              transform: `translate(-50%,-50%) scale(${0.6 + flameP * 0.4})`,
              opacity: flameP,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: v ? 180 : 140, lineHeight: 1, filter: 'drop-shadow(0 8px 20px rgba(184,90,45,0.4))' }}>🔥</div>
              <div style={{
                fontFamily: FD, fontWeight: 600,
                fontSize: v ? 220 : 160,
                color: E.terra,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                marginTop: 12,
              }}>{countNum}</div>
              <div style={{
                fontFamily: FB, fontWeight: 700,
                fontSize: v ? 36 : 30,
                color: E.brown,
                letterSpacing: '0.16em',
                marginTop: 6,
              }}>GÜN SERİSİ</div>
            </div>

            {/* Weekly grid */}
            {lt > 1.5 && (
              <div style={{
                position: 'absolute',
                left: w/2, top: v ? h*0.85 : h*0.85,
                transform: 'translate(-50%,-50%)',
                display: 'flex', gap: v ? 14 : 18,
                opacity: clamp((lt - 1.5) / 0.5, 0, 1),
              }}>
                {['P', 'S', 'Ç', 'P', 'C', 'C', 'P'].map((d, i) => {
                  const filled = i <= 5;
                  return (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: v ? 56 : 48, height: v ? 56 : 48,
                        borderRadius: 14,
                        background: filled ? E.terra : `${E.brownLi}30`,
                        color: filled ? '#fff' : E.brownLi,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: v ? 28 : 22,
                        boxShadow: filled ? `0 6px 16px ${E.terra}50` : 'none',
                      }}>{filled ? '✓' : '·'}</div>
                      <div style={{
                        fontFamily: FB, fontSize: v ? 18 : 14,
                        color: E.brown, fontWeight: 600,
                        marginTop: 8,
                      }}>{d}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 12 — BACKUP & SYNC (60-63s)
// ══════════════════════════════════════════════════════════════════════
function S12_Backup({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(165deg, ${E.creamLi} 0%, ${E.cream} 100%)`,
            }}/>
            <PaperBG tone="transparent"/>

            <H text="YEREL · BULUT YEDEKLEME" x={w/2} y={v ? h*0.08 : h*0.1}
              size={v ? 22 : 18} color={E.terra}
              font={FB} weight={700} ls="0.3em"
              lt={lt} total={dur}/>
            <H text="Kitapların hep güvende." x={w/2} y={v ? h*0.16 : h*0.2}
              size={v ? 78 : 64} color={E.brown}
              font={FD} weight={500} italic={true}
              lt={lt-0.1} total={dur-0.1}/>

            {/* Diagram: phone → cloud → tablet */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.58 : h*0.62,
              transform: 'translate(-50%,-50%)',
              display: 'flex',
              flexDirection: v ? 'column' : 'row',
              alignItems: 'center', gap: v ? 36 : 60,
            }}>
              <DeviceCard icon="📱" label="Telefonun" v={v}/>
              <SyncBeam vertical={v} lt={lt}/>
              <CloudIcon v={v} lt={lt}/>
              <SyncBeam vertical={v} lt={lt} reverse/>
              <DeviceCard icon="📖" label="Tabletin" v={v}/>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function DeviceCard({ icon, label, v }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: v ? 130 : 110, height: v ? 130 : 110,
        background: '#fff',
        borderRadius: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: v ? 64 : 56,
        boxShadow: '0 12px 26px rgba(40,25,15,0.18)',
      }}>{icon}</div>
      <div style={{
        fontFamily: FB, fontWeight: 700,
        fontSize: v ? 26 : 20,
        color: E.brown,
        marginTop: 12, letterSpacing: '0.03em',
      }}>{label}</div>
    </div>
  );
}

function CloudIcon({ v, lt }) {
  const pulse = (Math.sin(lt * 2) + 1) / 2;
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <div style={{
        width: v ? 170 : 140, height: v ? 170 : 140,
        background: `linear-gradient(135deg, ${E.terra}, ${E.terraLi})`,
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: v ? 76 : 64,
        color: '#fff',
        boxShadow: `0 16px 36px ${E.terra}60, 0 0 ${20 + pulse * 30}px ${E.gold}80`,
      }}>☁︎</div>
      <div style={{
        fontFamily: FB, fontWeight: 700,
        fontSize: v ? 24 : 18,
        color: E.terra, letterSpacing: '0.06em',
        marginTop: 12,
      }}>BULUT</div>
    </div>
  );
}

function SyncBeam({ vertical, lt, reverse = false }) {
  // animated dots flowing
  return (
    <div style={{
      width: vertical ? 4 : 60, height: vertical ? 60 : 4,
      position: 'relative',
      display: 'flex', flexDirection: vertical ? 'column' : 'row',
      justifyContent: 'space-between',
    }}>
      {[0, 1, 2].map(i => {
        const tBase = (lt * 1.2 + i * 0.33 + (reverse ? 0.5 : 0)) % 1;
        return (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: '50%',
            background: E.terra,
            opacity: 0.3 + Math.sin(tBase * Math.PI) * 0.7,
            transform: `scale(${0.7 + Math.sin(tBase * Math.PI) * 0.5})`,
          }}/>
        );
      })}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 13 — FEATURE WALL (63-67s)
// ══════════════════════════════════════════════════════════════════════
const FEATURES = [
  { t: '8 Tema',             ic: '🎨' },
  { t: '10+ Font',           ic: 'Aa' },
  { t: '14 Sayfa Geçişi',    ic: '⌖' },
  { t: 'AI Asistan',         ic: '✦' },
  { t: 'Sesli Okuma',        ic: '◍' },
  { t: '12 Sözlük',          ic: '⇄' },
  { t: 'Stylus Desteği',     ic: '✎' },
  { t: 'Bulut Yedek',        ic: '☁︎' },
  { t: 'Streak Takibi',      ic: '🔥' },
  { t: 'Hatırlatıcılar',     ic: '⏰' },
];

function S13_Features({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';

  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const cols = v ? 2 : 5;
        const rows = Math.ceil(FEATURES.length / cols);
        const gridW = v ? w * 0.88 : w * 0.78;
        const gridH = v ? h * 0.62 : h * 0.5;
        const cellW = gridW / cols;
        const cellH = gridH / rows;
        const x0 = (w - gridW) / 2;
        const y0 = v ? h * 0.25 : h * 0.32;
        const pad = 12;

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(160deg, ${E.brown} 0%, ${E.ink} 100%)`,
            }}/>

            <H text="HEPSI · TEK UYGULAMADA" x={w/2} y={v ? h*0.08 : h*0.1}
              size={v ? 22 : 18} color={E.gold}
              font={FB} weight={700} ls="0.32em"
              lt={lt} total={dur}/>
            <H text={v ? 'Premium\nokuma deneyimi' : 'Premium okuma deneyimi'}
              x={w/2} y={v ? h*0.16 : h*0.19}
              size={v ? 78 : 72} color={E.creamLi}
              font={FD} weight={500} italic={true}
              maxWidth={v ? 900 : 1600}
              lt={lt-0.1} total={dur-0.1}/>

            {FEATURES.map((f, i) => {
              const r = Math.floor(i / cols), c = i % cols;
              const fx = x0 + c * cellW + pad;
              const fy = y0 + r * cellH + pad;
              const enter = i * 0.05;
              const slt = lt - enter;
              const e = Easing.easeOutBack(clamp(slt / 0.4, 0, 1));
              const op = Math.min(slt / 0.3, 1);
              return (
                <div key={i} style={{
                  position: 'absolute',
                  left: fx, top: fy,
                  width: cellW - pad * 2, height: cellH - pad * 2,
                  background: `linear-gradient(155deg, ${E.brownMid} 0%, ${E.ink} 100%)`,
                  border: `1px solid ${E.gold}30`,
                  borderRadius: 18,
                  display: 'flex',
                  flexDirection: v ? 'row' : 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: v ? 16 : 10,
                  color: E.creamLi,
                  fontFamily: FS, fontWeight: 600,
                  fontSize: v ? 30 : 22,
                  padding: 16,
                  transform: `scale(${0.5 + e * 0.5})`,
                  opacity: op > 0 ? op : 0,
                  boxShadow: '0 12px 28px rgba(0,0,0,0.32)',
                }}>
                  <div style={{
                    fontSize: v ? 42 : 36,
                    color: E.gold,
                    fontFamily: FB, fontWeight: 700,
                  }}>{f.ic}</div>
                  <div>{f.t}</div>
                </div>
              );
            })}
          </div>
        );
      }}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 14 — TESTIMONIALS (67-71s)
// ══════════════════════════════════════════════════════════════════════
function S14_Reviews({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(170deg, ${E.creamLi} 0%, ${E.sepia} 100%)`,
          }}/>
          <PaperBG tone="transparent"/>

          <H text="OKUYUCULAR NE DİYOR?" x={w/2} y={v ? h*0.08 : h*0.1}
            size={v ? 22 : 18} color={E.terra}
            font={FB} weight={700} ls="0.32em"
            lt={lt} total={dur}/>

          {/* Stars */}
          <div style={{
            position: 'absolute', left: w/2, top: v ? h*0.16 : h*0.18,
            transform: 'translate(-50%,-50%)',
            fontSize: v ? 72 : 58, color: E.gold, letterSpacing: '0.08em',
            opacity: clamp((lt - 0.2) / 0.3, 0, 1),
            textShadow: '0 4px 12px rgba(232,185,69,0.4)',
          }}>★★★★★</div>
          <div style={{
            position: 'absolute', left: w/2, top: v ? h*0.215 : h*0.25,
            transform: 'translate(-50%,-50%)',
            fontFamily: FS, fontStyle: 'italic',
            fontSize: v ? 30 : 24,
            color: E.brownMid,
            opacity: clamp((lt - 0.4) / 0.3, 0, 1),
          }}>4.9 / 5.0 — App Store</div>

          {/* 3 testimonial cards */}
          {[
            { q: '"Kitap okumayı bıraktığımı düşünüyordum. Bu uygulama beni geri kazandı."', a: '— Elif S., 28', d: 1.0 },
            { q: '"3D çevirme efekti gerçek bir kitabı eline alıyor gibi hissettiriyor."', a: '— Murat T., 41', d: 1.5 },
            { q: '"AI asistanı her zor cümleyi açıklıyor. Edebiyat hocam gibi."', a: '— Zeynep K., 19', d: 2.0 },
          ].map((tt, i) => {
            const slt = lt - tt.d;
            const e = Easing.easeOutCubic(clamp(slt / 0.5, 0, 1));
            const op = Math.min(slt / 0.3, 1);
            const yPos = v ? h * (0.36 + i * 0.18) : h * (0.4 + i * 0.18);
            return (
              <div key={i} style={{
                position: 'absolute',
                left: w/2, top: yPos,
                transform: `translate(-50%,-50%) translateX(${(1-e) * (i % 2 ? 60 : -60)}px)`,
                opacity: op > 0 ? op : 0,
                background: '#fff',
                borderLeft: `5px solid ${E.terra}`,
                borderRadius: 16,
                padding: v ? '22px 30px' : '20px 28px',
                width: v ? w*0.84 : w*0.55,
                boxShadow: '0 14px 32px rgba(40,25,15,0.15)',
                fontFamily: FS,
              }}>
                <div style={{
                  fontSize: v ? 26 : 22,
                  color: E.brown, fontStyle: 'italic',
                  lineHeight: 1.4, fontWeight: 500,
                  marginBottom: 8,
                }}>{tt.q}</div>
                <div style={{
                  fontFamily: FB,
                  fontSize: v ? 20 : 16, fontWeight: 700,
                  color: E.terra, letterSpacing: '0.04em',
                }}>{tt.a}</div>
              </div>
            );
          })}
        </div>
      )}
    </Sprite>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCENE 15 — LOGO + CTA FINAL (71-78s)
// ══════════════════════════════════════════════════════════════════════
function S15_CTA({ start, end }) {
  const { w, h, aspect } = useStageSize();
  const v = aspect === 'vertical';
  return (
    <Sprite start={start} end={end}>
      {({ localTime: lt, duration: dur }) => {
        const logoE = Easing.easeOutBack(clamp(lt / 0.9, 0, 1));
        const nameE = clamp((lt - 0.7) / 0.6, 0, 1);
        const tagE = clamp((lt - 1.2) / 0.5, 0, 1);
        const ctaE = Easing.easeOutBack(clamp((lt - 1.8) / 0.6, 0, 1));
        const badgeE = Easing.easeOutBack(clamp((lt - 2.4) / 0.6, 0, 1));
        const halo = (Math.sin(lt * 1.4) + 1) / 2;

        return (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 50% 38%, ${E.creamLi} 0%, ${E.cream} 50%, ${E.creamWa} 100%)`,
            }}/>
            <PaperBG tone="transparent"/>

            {/* Radiant rays */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.3 : h*0.34,
              width: v ? 980 : 780, height: v ? 980 : 780,
              transform: `translate(-50%,-50%) rotate(${lt * 4}deg) scale(${0.7 + logoE * 0.3})`,
              opacity: logoE * 0.5,
              background: `conic-gradient(from 0deg, transparent 0deg, ${E.gold}40 24deg, transparent 60deg, ${E.terra}40 120deg, transparent 156deg, ${E.gold}40 240deg, transparent 280deg)`,
              borderRadius: '50%',
              filter: 'blur(28px)',
            }}/>

            {/* Glow halo behind logo */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.3 : h*0.34,
              width: v ? 620 : 520, height: v ? 620 : 520,
              transform: 'translate(-50%,-50%)',
              opacity: logoE * 0.7,
              background: `radial-gradient(circle, ${E.gold}40 0%, transparent 60%)`,
              borderRadius: '50%',
              filter: `blur(${24 + halo * 12}px)`,
            }}/>

            {/* Logo */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.3 : h*0.34,
              width: v ? 460 : 380, height: v ? 460 : 380,
              transform: `translate(-50%,-50%) scale(${0.4 + logoE * 0.6}) rotate(${(1-logoE) * -10}deg)`,
              opacity: logoE,
              filter: 'drop-shadow(0 24px 50px rgba(40,25,15,0.4))',
            }}>
              <img src="assets4/logo.png" alt="" style={{
                width: '100%', height: '100%', objectFit: 'contain',
                borderRadius: '24%',
              }}/>
            </div>

            {/* Name */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.55 : h*0.62,
              transform: `translate(-50%,-50%) translateY(${(1-nameE) * 24}px)`,
              opacity: nameE,
              fontFamily: FS, fontWeight: 700,
              fontSize: v ? 160 : 124,
              color: E.brown, letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>
              E-Reader<span style={{ color: E.terra, fontStyle: 'italic', fontWeight: 600 }}>Pro</span>
            </div>

            {/* Tagline */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.64 : h*0.71,
              transform: `translate(-50%,-50%) translateY(${(1-tagE) * 16}px)`,
              opacity: tagE,
              fontFamily: FS, fontStyle: 'italic',
              fontSize: v ? 38 : 30,
              color: E.brownLi,
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
            }}>okumanın yeni biçimi</div>

            {/* CTA */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.74 : h*0.81,
              transform: `translate(-50%,-50%) scale(${0.7 + ctaE * 0.3})`,
              opacity: ctaE,
              fontFamily: FD, fontWeight: 600, fontStyle: 'italic',
              fontSize: v ? 80 : 64,
              color: E.terra, letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}>Hemen İndir · Ücretsiz</div>

            {/* Badges */}
            <div style={{
              position: 'absolute',
              left: w/2, top: v ? h*0.86 : h*0.92,
              transform: `translate(-50%,-50%) scale(${badgeE})`,
              opacity: badgeE,
              display: 'flex',
              flexDirection: v ? 'column' : 'row',
              gap: v ? 18 : 24, alignItems: 'center',
            }}>
              <Badge kind="apple" w={v ? 380 : 320} h={v ? 108 : 92}/>
              <Badge kind="google" w={v ? 380 : 320} h={v ? 108 : 92}/>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Badge({ kind, w = 340, h = 100 }) {
  const apple = kind === 'apple';
  return (
    <div style={{
      width: w, height: h, background: E.brown,
      border: `1.5px solid ${E.gold}40`,
      borderRadius: 14,
      display: 'flex', alignItems: 'center', gap: 14, padding: '0 22px',
      color: E.creamLi, fontFamily: FB,
      flexShrink: 0,
      boxShadow: '0 10px 24px rgba(40,25,15,0.25)',
    }}>
      <div style={{ fontSize: h * 0.5, lineHeight: 1, color: E.gold }}>
        {apple ? '' : '▶'}
      </div>
      <div style={{ flexDirection: 'column', display: 'flex', lineHeight: 1.1 }}>
        <span style={{ fontSize: h * 0.17, opacity: 0.72, letterSpacing: '0.06em' }}>
          {apple ? 'Download on the' : 'GET IT ON'}
        </span>
        <span style={{ fontSize: h * 0.31, fontWeight: 700 }}>
          {apple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ROOT — 75 saniye
// ══════════════════════════════════════════════════════════════════════
function AdER() {
  return (
    <>
      <S1_Quote          start={0}   end={6}/>
      <S2_LogoReveal     start={6}   end={11}/>
      <S3_Library        start={11}  end={17}/>
      <S4_FontsTypography start={17} end={23}/>
      <S5_Themes         start={23}  end={29}/>
      <S6_Transitions    start={29}  end={37}/>
      <S7_Typography     start={37}  end={42}/>
      <S8_AI             start={42}  end={48}/>
      <S9_Dictionary     start={48}  end={53}/>
      <S10_Audio         start={53}  end={57}/>
      <S11_Streaks       start={57}  end={61}/>
      <S12_Backup        start={61}  end={64}/>
      <S13_Features      start={64}  end={68}/>
      <S14_Reviews       start={68}  end={72}/>
      <S15_CTA           start={72}  end={78}/>
    </>
  );
}

Object.assign(window, { AdER, E, FD, FS, FB, FM, BookCover, Phone, Tablet, Badge });
