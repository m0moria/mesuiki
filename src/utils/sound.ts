// ── Sound Effect System ──

export type SoundCategory =
  | 'kiss' | 'cunnilingus' | 'spanking' | 'paizuri'
  | 'piston_fast' | 'piston_slow' | 'fellatio' | 'bukkake'
  | 'creampie' | 'fingering' | 'squirting'

const SOUND_FILES: Record<SoundCategory, string[]> = {
  kiss: [
    'sound_effect/キス/se_kiss01.ogg',
    'sound_effect/キス/se_kiss02.ogg',
    'sound_effect/キス/se_kiss03.ogg',
    'sound_effect/キス/se_kiss04.ogg',
  ],
  cunnilingus: [
    'sound_effect/クンニリングス/se_kuni01.ogg',
  ],
  spanking: [
    'sound_effect/スパンキング/se_span01.ogg',
    'sound_effect/スパンキング/se_span01b.ogg',
    'sound_effect/スパンキング/se_span02.ogg',
    'sound_effect/スパンキング/se_span02b.ogg',
  ],
  paizuri: [
    'sound_effect/パイズリ/se_paiz01.ogg',
    'sound_effect/パイズリ/se_paiz02.ogg',
  ],
  piston_fast: [
    'sound_effect/ピストン早い/se_hame01.ogg',
    'sound_effect/ピストン早い/se_hame03.ogg',
  ],
  piston_slow: [
    'sound_effect/ピストン遅い/se_hame02.ogg',
    'sound_effect/ピストン遅い/se_hame04.ogg',
  ],
  fellatio: [
    'sound_effect/フェラ/se_bust01.ogg',
    'sound_effect/フェラ/se_bust02.ogg',
    'sound_effect/フェラ/se_fera01.ogg',
    'sound_effect/フェラ/se_fera02.ogg',
  ],
  bukkake: [
    'sound_effect/射精＿ぶっかけ/se_syas02.ogg',
  ],
  creampie: [
    'sound_effect/射精＿中出し/se_syas01.ogg',
  ],
  fingering: [
    'sound_effect/手マン/se_loti01.ogg',
    'sound_effect/手マン/se_yubi01.ogg',
    'sound_effect/手マン/se_yubi02.ogg',
  ],
  squirting: [
    'sound_effect/潮吹き/se_sio01.ogg',
  ],
}

const currentAudios: HTMLAudioElement[] = []

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function playSound(category: SoundCategory): void {
  const files = SOUND_FILES[category]
  if (!files || files.length === 0) return

  const audio = new Audio(pickRandom(files))
  audio.volume = 0.5
  currentAudios.push(audio)
  audio.addEventListener('ended', () => {
    const idx = currentAudios.indexOf(audio)
    if (idx !== -1) currentAudios.splice(idx, 1)
  })
  audio.play().catch(() => {})
}

export function playSoundDelayed(category: SoundCategory, delayMs: number): void {
  setTimeout(() => playSound(category), delayMs)
}

export function stopAllSounds(): void {
  for (const audio of currentAudios) {
    audio.pause()
    audio.currentTime = 0
  }
  currentAudios.length = 0
}

// ── Training ID → Sound Category mapping ──

const TRAINING_SOUND_MAP: Record<string, SoundCategory> = {
  'libido-1': 'fellatio',
  'libido-2': 'fingering',
  'libido-3': 'piston_fast',
  'technique-1': 'cunnilingus',
  'technique-2': 'fellatio',
  'technique-3': 'piston_slow',
  'capacity-1': 'piston_slow',
  'capacity-2': 'piston_fast',
  'capacity-3': 'piston_fast',
  'endurance-1': 'spanking',
  'endurance-2': 'spanking',
  'endurance-3': 'squirting',
  'charm-1': 'kiss',
  'charm-2': 'fingering',
  'charm-3': 'piston_slow',
  'talk': 'kiss',
}

export function getTrainingSound(trainingId: string): SoundCategory | null {
  return TRAINING_SOUND_MAP[trainingId] ?? null
}

// ── Battle action card → Sound Category mapping ──

const BATTLE_ACTION_SOUND_MAP: Record<string, SoundCategory> = {
  'attack': 'piston_fast',
  'technique': 'piston_slow',
  'seduce': 'kiss',
  'allout': 'piston_fast',
}

export function getBattleActionSound(cardId: string): SoundCategory | null {
  return BATTLE_ACTION_SOUND_MAP[cardId] ?? null
}

// ── Intensity-based narration sound ──

export function getNarrationSound(pleasure: number, satisfaction: number): SoundCategory {
  const intensity = Math.max(pleasure, satisfaction)
  if (intensity >= 60) return 'piston_fast'
  if (intensity >= 30) return 'piston_slow'
  return 'fingering'
}

// ── VN keyword → Sound Category matching ──

const KEYWORD_MAP: [RegExp, SoundCategory][] = [
  [/뷰루|정액.*자궁|자궁.*정액|중출/, 'creampie'],
  [/시오후키|분수.*뿜|뿜어.*분수/, 'squirting'],
  [/팡팡|격렬.*피스톤|세게.*박|내리꽂/, 'piston_fast'],
  [/삽입|천천히|서서히|쑤욱|주뿌/, 'piston_slow'],
  [/펠라|딥스로트|목구멍.*삼|빨아.*자지|쥬루/, 'fellatio'],
  [/꼴깍|얼굴.*정액|정액.*얼굴/, 'bukkake'],
  [/채찍|때리|엉덩이.*빨갛|SM/, 'spanking'],
  [/손가락|쩔걱|자위|수음/, 'fingering'],
  [/혀.*핥|클리.*혀|핥.*혀/, 'cunnilingus'],
  [/입술|입맞|키스/, 'kiss'],
  [/조여.*들|쫙.*조|꿈틀/, 'piston_slow'],
]

export function detectSoundFromText(text: string): SoundCategory | null {
  for (const [regex, category] of KEYWORD_MAP) {
    if (regex.test(text)) return category
  }
  return null
}
