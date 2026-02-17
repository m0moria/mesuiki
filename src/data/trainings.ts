import { TrainingOption } from '../types/game'

export const trainings: TrainingOption[] = [
  // ━━━ 연심 (Libido) ━━━
  {
    id: 'libido-1', name: '모닝 펠라 봉사', emoji: '💋', level: 1,
    description: '아침부터 입으로 봉사시켜 성욕을 깨운다. 자지를 목구멍까지 삼키며 쥬루쥬루… 정액이 하루의 에너지원.',
    statEffects: [{ stat: 'libido', min: 25, max: 50 }, { stat: 'technique', min: 0, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -10 }, { condition: 'mental', value: -5 }],
    successText: '쥬루쥬루… 꼴깍♡ 히로인의 눈이 풀리고 입술에서 정액 실이 늘어진다. 보지에서 애액이 허벅지를 적신다.',
    failText: '아직 각성이 부족하다. 구역질하며 실패. 보지도 말라있다.',
  },
  {
    id: 'libido-2', name: '공개 발정 유도', emoji: '🎰', level: 2, unlockTurn: 12,
    description: '관중 앞에서 리모콘 바이브를 보지 깊숙이 넣고 발정을 유도. 수치심이 쾌락으로 변하는 순간.',
    statEffects: [{ stat: 'libido', min: 40, max: 80 }, { stat: 'charm', min: 10, max: 25 }, { stat: 'capacity', min: 0, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -18 }, { condition: 'mental', value: -12 }],
    successText: '"아아앙♡ 관객들 보는 앞에서… 보지가 미쳐요♡" 분수가 뿜어져 나오며 관중이 환호한다.',
    failText: '수치심에 도주 시도. 강제로 잡아 되돌려 보지에 바이브를 다시 넣어야 했다.',
  },
  {
    id: 'libido-3', name: '철야 마라톤', emoji: '🔥', level: 3, unlockStat: { stat: 'libido', value: 500 },
    description: '부실 문을 잠그고 밤새 논스톱. 체위 12번 변경, 보지와 항문 교대, 자궁에 정액 6발 이상 뷰루뷰루 주입.',
    statEffects: [{ stat: 'libido', min: 60, max: 120 }, { stat: 'technique', min: 15, max: 35 }, { stat: 'endurance', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -30 }, { condition: 'mental', value: -15 }],
    successText: '"오호오오♡ 더… 자지 더 박아줘♡" 연속 절정 12회. 눈에 하트가 뜨고, 보지에서 정액이 역류해 허벅지를 적신다.',
    failText: '체력 고갈로 기절. 다른 히로인이 "대신 빨아줄게…" 하며 집단 착정.',
  },

  // ━━━ 기교 (Technique) ━━━
  {
    id: 'technique-1', name: '손발 기술 교정', emoji: '✋', level: 1,
    description: '손가락과 혀의 움직임을 세밀하게 교정. 불알 주무르기부터 혀끝 테크닉까지.',
    statEffects: [{ stat: 'technique', min: 25, max: 50 }, { stat: 'charm', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -8 }, { condition: 'mental', value: -8 }],
    successText: '섬세한 혀놀림이 자지를 감싸고, 불알을 정확하게 주무른다. 사정 타이밍을 컨트롤하기 시작했다.',
    failText: '리듬을 놓쳤다. 벌칙으로 채찍 20대. 엉덩이가 빨갛게 물든다.',
  },
  {
    id: 'technique-2', name: '딥스로트 전수', emoji: '👅', level: 2, unlockTurn: 12,
    description: '목구멍 깊숙이까지 자지를 삼키는 고급 테크닉. 침과 눈물이 뒤섞이며 목구멍이 불룩.',
    statEffects: [{ stat: 'technique', min: 40, max: 80 }, { stat: 'capacity', min: 15, max: 30 }],
    conditionEffects: [{ condition: 'stamina', value: -15 }, { condition: 'mental', value: -12 }],
    successText: '쥬루쥬루… 목구멍이 자지 모양으로 불룩. "크르르… 자지 목구멍에 각인돼요♡" 침이 줄줄 흘러내린다.',
    failText: '구토 반사. 로터로 보지와 항문 동시 자극 5분의 벌칙.',
  },
  {
    id: 'technique-3', name: '명기 완성 훈련', emoji: '💎', level: 3, unlockStat: { stat: 'technique', value: 500 },
    description: '보지 내벽의 모든 근육을 자유자재로 조절. 12단계 조임, 흡입, 꿈틀거림. 궁극의 명기.',
    statEffects: [{ stat: 'technique', min: 60, max: 120 }, { stat: 'libido', min: 15, max: 35 }, { stat: 'charm', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -25 }, { condition: 'mental', value: -15 }],
    successText: '보지벽이 자지를 12단계로 쫙쫙 조여들며 정액을 한 방울도 새지 않고 빨아들인다. 몸 자체가 최고급 명기.',
    failText: '집중력 흐트러져 조임이 풀렸다. 관중의 야유.',
  },

  // ━━━ 수용 (Capacity) ━━━
  {
    id: 'capacity-1', name: '기초 삽입 적응', emoji: '📏', level: 1,
    description: '서서히 깊이를 늘려가며 내성을 키운다. 자궁구까지 도달하는 것이 목표.',
    statEffects: [{ stat: 'capacity', min: 25, max: 50 }, { stat: 'endurance', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -12 }, { condition: 'mental', value: -8 }],
    successText: '주뿌… 쑤욱 들어가자 히로인이 "아앙… 안에서 닿아요…♡" 자궁구에 처음 닿은 순간의 표정이 아름답다.',
    failText: '너무 아프다며 눈물. 오늘은 여기까지.',
  },
  {
    id: 'capacity-2', name: '이중 구멍 개발', emoji: '⚡', level: 2, unlockTurn: 16,
    description: '보지와 항문을 동시에 개발. 딜도와 자지로 두 구멍을 동시 관통. 고통과 쾌락의 경계가 무너진다.',
    statEffects: [{ stat: 'capacity', min: 40, max: 80 }, { stat: 'technique', min: 10, max: 25 }, { stat: 'endurance', min: 5, max: 20 }],
    conditionEffects: [{ condition: 'stamina', value: -20 }, { condition: 'mental', value: -15 }],
    successText: '"히이익! 두 구멍 다… 찢어질 것 같아요♡" 비명이 신음으로 바뀌는 순간. 두 구멍이 동시에 쫙 조여든다.',
    failText: '한계를 넘지 못했다. 의무실행.',
  },
  {
    id: 'capacity-3', name: '한계 돌파 수용', emoji: '🌀', level: 3, unlockStat: { stat: 'capacity', value: 500 },
    description: '자궁구를 완전 관통. 배가 불룩불룩 튀어나오는 극한 수용 훈련. 어떤 것이든 받아들이는 몸.',
    statEffects: [{ stat: 'capacity', min: 65, max: 130 }, { stat: 'libido', min: 20, max: 40 }],
    conditionEffects: [{ condition: 'stamina', value: -28 }, { condition: 'mental', value: -18 }],
    successText: '배가 불룩 튀어나올 정도의 극한… "자궁… 자지로 가득 차요… 뷰루뷰루♡" 환희의 아헤가오.',
    failText: '과부하로 기절. 전원 달려와 응급 조치.',
  },

  // ━━━ 인내 (Endurance) ━━━
  {
    id: 'endurance-1', name: '가벼운 SM 징계', emoji: '🗡️', level: 1,
    description: '채찍과 구속으로 고통 내성을 키운다. 때릴수록 보지가 조여드는 체질을 만든다.',
    statEffects: [{ stat: 'endurance', min: 25, max: 50 }, { stat: 'charm', min: 0, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -10 }, { condition: 'mental', value: -12 }],
    successText: '"아파… 그런데… 더 때려주세요…♡" 엉덩이가 빨갛게 물들고, 보지에서 애액이 줄줄. 고통이 쾌락으로.',
    failText: '참지 못하고 도망. 정신력 부족.',
  },
  {
    id: 'endurance-2', name: '고강도 예절 교정', emoji: '📐', level: 2, unlockTurn: 12,
    description: '완벽한 자세를 유지한 채 채찍과 바이브를 동시에 견딘다. 눈물이 아름다운 훈련.',
    statEffects: [{ stat: 'endurance', min: 40, max: 80 }, { stat: 'capacity', min: 10, max: 25 }, { stat: 'libido', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -16 }, { condition: 'mental', value: -16 }],
    successText: '눈물을 흘리면서도 완벽한 자세 유지. 보지는 바이브에 반응해 쿨쿨 울며 애액을 뿜는다. 아름답다.',
    failText: '자세 무너짐. 질투한 다른 히로인이 경쟁적으로 끼어든다.',
  },
  {
    id: 'endurance-3', name: '전기 자극 공개 쇼', emoji: '⚡', level: 3, unlockStat: { stat: 'endurance', value: 500 },
    description: '관중 앞에서 전기 패드와 바이브 동시 사용. 절규하면서도 절대 무릎 꿇지 않는 극한 인내.',
    statEffects: [{ stat: 'endurance', min: 60, max: 120 }, { stat: 'libido', min: 20, max: 40 }, { stat: 'charm', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -25 }, { condition: 'mental', value: -22 }],
    successText: '"으아아앙♡ 전기가… 보지 안에서 터져요♡" 절규하며 분수. 그래도 무릎 꿇지 않았다. 관중 열광.',
    failText: '정신 붕괴 직전. 아헤가오 상태로 실신.',
  },

  // ━━━ 매혹 (Charm) ━━━
  {
    id: 'charm-1', name: '더티 토크 연습', emoji: '💬', level: 1,
    description: '"선생님 자지… 제 보지에 넣어주세요♡" 음란한 말을 자연스럽게 뱉을 때까지 반복.',
    statEffects: [{ stat: 'charm', min: 25, max: 50 }, { stat: 'technique', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -5 }, { condition: 'mental', value: -12 }],
    successText: '"선생님… 제 보지를… 마음대로 써주세요… 자궁에 정액 가득 채워주세요♡" 처음으로 자발적 음란 발언.',
    failText: '부끄러워서 더듬음. 벌칙으로 로터 강제 장착.',
  },
  {
    id: 'charm-2', name: '공개 굴욕 쇼', emoji: '🎭', level: 2, unlockTurn: 16,
    description: '무대 위에서 "저는 선생님 전용 정액 변기예요♡" 외치며 관중 앞에서 자위. 수치가 매혹으로.',
    statEffects: [{ stat: 'charm', min: 40, max: 80 }, { stat: 'endurance', min: 10, max: 25 }, { stat: 'libido', min: 5, max: 20 }],
    conditionEffects: [{ condition: 'stamina', value: -12 }, { condition: 'mental', value: -20 }],
    successText: '관중 앞에서 보지를 벌리며 자위. 분수가 뿜어지는데도 당당하다. 모두가 넋을 잃었다.',
    failText: '목소리가 너무 작았다. 채찍 벌칙.',
  },
  {
    id: 'charm-3', name: '정신 지배 세뇌', emoji: '👁️', level: 3, unlockStat: { stat: 'charm', value: 500 },
    description: '눈에 하트를 띄우며 "선생님 자지 없인 못 살아… 제 자궁은 선생님 소유예요♡" 완전한 정신 지배.',
    statEffects: [{ stat: 'charm', min: 60, max: 120 }, { stat: 'technique', min: 15, max: 35 }, { stat: 'libido', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -15 }, { condition: 'mental', value: -25 }],
    successText: '눈에 하트가 떠오른다. "선생님 자지 없인 못 살아요♡ 자궁도 보지도 항문도 전부 선생님 거예요♡" 완전한 매혹.',
    failText: '정신력 버티지 못해 자아가 잠시 돌아왔다.',
  },

  // ━━━ 특수 ━━━
  {
    id: 'rest', name: '휴식', emoji: '🛏️', level: 1,
    description: '몸과 마음을 회복시킨다. 능력치는 오르지 않지만 컨디션 대폭 회복.',
    statEffects: [],
    conditionEffects: [{ condition: 'stamina', value: 30 }, { condition: 'mental', value: 20 }],
    successText: '푹 쉬었다. 내일은 더 격렬한 훈련을 견딜 수 있다.',
  },
  {
    id: 'talk', name: '밀착 스킨십', emoji: '💭', level: 1,
    description: '히로인과 밀착 대화. 머리를 쓰다듬고 안아주며 심리적 유대를 형성한다.',
    statEffects: [{ stat: 'charm', min: 10, max: 25 }, { stat: 'libido', min: 5, max: 20 }],
    conditionEffects: [{ condition: 'mental', value: 10 }, { condition: 'stamina', value: -3 }],
    successText: '경계심이 허물어졌다. 히로인이 스스로 안겨들며 "선생님… 더 가까이…♡"',
  },
]
