import { TrainingOption } from '../types/game'

export const trainingsReona: TrainingOption[] = [
  // ━━━ 연심 (Libido) ━━━
  {
    id: 'libido-1', name: '모닝 펠라 봉사', emoji: '💋', level: 1,
    description: '아침부터 로얄 메이드 레오나에게 입 봉사를 시킨다. 드릴 트윈테일이 흔들리며 에메랄드 눈이 올려다본다. "이, 이 사이온지 가문의 영애가 이런 짓을…!"',
    statEffects: [{ stat: 'libido', min: 25, max: 50 }, { stat: 'technique', min: 0, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -10 }, { condition: 'mental', value: -5 }],
    successText: '쥬루쥬루… 꼴깍♡ 레오나의 에메랄드 눈이 풀리고 드릴 트윈테일이 축 늘어진다. "흐응… 이 맛에 중독되면 안 되는데…♡" 로얄 메이드복 치마 안쪽이 흠뻑.',
    failText: '"흐읏…! 이, 이 사이온지 레오나가 이런 추한 모습을…!" 구역질하며 실패. 귀족의 자존심이 아직 남아있다.',
  },
  {
    id: 'libido-2', name: '공개 발정 유도', emoji: '🎰', level: 2, unlockTurn: 12,
    description: '관중 앞에서 레오나의 로얄 메이드복 안에 리모콘 바이브를 넣는다. "이, 이런 곳에서…?! 나나시나 란이 보고 있다고…!"',
    statEffects: [{ stat: 'libido', min: 40, max: 80 }, { stat: 'charm', min: 10, max: 25 }, { stat: 'capacity', min: 0, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -18 }, { condition: 'mental', value: -12 }],
    successText: '"아아앙♡ 모두 보는 앞에서… 사이온지 가문의 영애가 이렇게…♡" 에메랄드 눈에 하트가 뜨고 분수가 뿜어진다. 나나시가 무표정으로, 란이 입을 쩍 벌리고 지켜본다.',
    failText: '"나, 나나시한테 이런 모습을 보이다니…!" 수치심에 도주. 귀족의 체면이 한계를 넘지 못했다.',
  },
  {
    id: 'libido-3', name: '철야 마라톤', emoji: '🔥', level: 3, unlockStat: { stat: 'libido', value: 500 },
    description: '레오나 전용 메이드 침실에서 밤새 논스톱. 드릴 트윈테일을 손잡이 삼아 체위 12번. "이, 이 레오나에게 이런 짓을 밤새…! 하, 하지만 멈추지 마…♡"',
    statEffects: [{ stat: 'libido', min: 60, max: 120 }, { stat: 'technique', min: 15, max: 35 }, { stat: 'endurance', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -30 }, { condition: 'mental', value: -15 }],
    successText: '"오호오오♡ 자지 더 넣어… 사이온지 가문의 보지로 전부 빨아줄게♡" 귀족 말투가 완전히 붕괴. 드릴이 풀려 흐트러진 머리카락 사이로 아헤가오.',
    failText: '체력 고갈로 기절. 나나시가 "…교대." 하며 기계적으로 레오나를 간호한다.',
  },

  // ━━━ 기교 (Technique) ━━━
  {
    id: 'technique-1', name: '헌신 클리닝', emoji: '✋', level: 1,
    description: '사이온지 가문 전통의 봉사 기술. 레오나가 무릎 꿇고 혀로 구석구석 정성스럽게 클리닝한다. "이, 이건 메이드로서의 의무일 뿐이야…!"',
    statEffects: [{ stat: 'technique', min: 25, max: 50 }, { stat: 'charm', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -8 }, { condition: 'mental', value: -8 }],
    successText: '레오나의 섬세한 혀가 구석구석을 핥는다. 에메랄드 눈으로 올려다보며 "깨끗해졌나요, 선생님…♡" 메이드의 헌신이 기교로 승화되었다.',
    failText: '"으… 이런 저속한 행위는 사이온지 가문에…!" 귀족의 자존심이 리듬을 방해한다.',
  },
  {
    id: 'technique-2', name: '딥스로트 전수', emoji: '👅', level: 2, unlockTurn: 12,
    description: '목구멍 깊숙이까지 삼키는 고급 기술. 레오나의 드릴 트윈테일이 격렬하게 흔들린다. "크르르… 나나시한테는 절대 지지 않아…!"',
    statEffects: [{ stat: 'technique', min: 40, max: 80 }, { stat: 'capacity', min: 15, max: 30 }],
    conditionEffects: [{ condition: 'stamina', value: -15 }, { condition: 'mental', value: -12 }],
    successText: '쥬루쥬루… 목구멍이 불룩. "크르르♡ 나나시보다 깊이 삼킬 수 있어… 이게 사이온지의 기술이야♡" 에메랄드 눈에 경쟁심과 쾌감이 뒤섞인다.',
    failText: '구토 반사. "으윽… 나, 나나시라면 이런 실수 안 할 텐데…" 라이벌 의식에 멘탈 데미지.',
  },
  {
    id: 'technique-3', name: '명기 완성 훈련', emoji: '💎', level: 3, unlockStat: { stat: 'technique', value: 500 },
    description: '레오나의 보지 내벽을 극한까지 개발. 12단계 조임을 귀족의 우아함으로 컨트롤. "이 사이온지의 보지가 최고의 명기라는 걸 증명하겠어…!"',
    statEffects: [{ stat: 'technique', min: 60, max: 120 }, { stat: 'libido', min: 15, max: 35 }, { stat: 'charm', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -25 }, { condition: 'mental', value: -15 }],
    successText: '보지벽이 자지를 12단계로 쫙쫙 조여든다. "후후… 이것이 사이온지 가문의 명기♡ 란의 야수적인 체질 따위와는 격이 달라♡" 우아한 미소를 지으면서도 눈은 완전히 풀려있다.',
    failText: '"크… 집중이…!" 란의 전화 한 통에 경쟁심이 폭발해 조임이 풀렸다.',
  },

  // ━━━ 수용 (Capacity) ━━━
  {
    id: 'capacity-1', name: '기초 삽입 적응', emoji: '📏', level: 1,
    description: '서서히 깊이를 늘려가며 레오나의 내성을 키운다. "이, 이 정도는 사이온지 가문의 영애로서 당연히 견딜 수 있어…!"',
    statEffects: [{ stat: 'capacity', min: 25, max: 50 }, { stat: 'endurance', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -12 }, { condition: 'mental', value: -8 }],
    successText: '주뿌… 레오나가 "아앙… 안에서 닿아요…♡ 이, 이런 느낌은 처음이에요, 선생님…♡" 에메랄드 눈이 윤기를 띤다. 로얄 메이드복이 흐트러진다.',
    failText: '"아팟…! 이, 이 정도에 눈물을 보이다니… 사이온지 가문의 수치야…" 자존심 상한 레오나가 입술을 깨문다.',
  },
  {
    id: 'capacity-2', name: '이중 구멍 개발', emoji: '⚡', level: 2, unlockTurn: 16,
    description: '레오나의 보지와 항문을 동시 개발. "히이익! 두, 두 곳을 동시에…?! 란한테도 이런 건 안 하잖아…?!"',
    statEffects: [{ stat: 'capacity', min: 40, max: 80 }, { stat: 'technique', min: 10, max: 25 }, { stat: 'endurance', min: 5, max: 20 }],
    conditionEffects: [{ condition: 'stamina', value: -20 }, { condition: 'mental', value: -15 }],
    successText: '"히이익♡ 두 구멍 다… 사이온지 가문의 영애가 이렇게 되다니♡" 에메랄드 눈이 뒤집히며 드릴 트윈테일이 미친듯이 흔들린다.',
    failText: '"무, 무리야…! 이건 야수인 란한테나 시켜…!" 한계를 넘지 못하고 의무실행.',
  },
  {
    id: 'capacity-3', name: '한계 돌파 수용', emoji: '🌀', level: 3, unlockStat: { stat: 'capacity', value: 500 },
    description: '자궁구 완전 관통. 레오나의 배가 불룩불룩 튀어나온다. "이, 이건… 사이온지 가문의 역사에 남을… 으아앙♡"',
    statEffects: [{ stat: 'capacity', min: 65, max: 130 }, { stat: 'libido', min: 20, max: 40 }],
    conditionEffects: [{ condition: 'stamina', value: -28 }, { condition: 'mental', value: -18 }],
    successText: '메이드복 위로 배가 불룩. "자궁이… 자지로 가득♡ 사이온지의 자궁은 선생님 전용이에요♡" 귀족 말투의 잔해와 음란한 애걸이 뒤섞인다.',
    failText: '과부하로 기절. 나나시가 무표정하게 응급 조치. "…과도한 부하."',
  },

  // ━━━ 인내 (Endurance) ━━━
  {
    id: 'endurance-1', name: '가벼운 SM 징계', emoji: '🗡️', level: 1,
    description: '귀족 레오나에게 채찍과 구속. "이, 이 사이온지 가문의 영애를 묶는다고?! …하지만 왜 보지가 뜨거워지는 거야…"',
    statEffects: [{ stat: 'endurance', min: 25, max: 50 }, { stat: 'charm', min: 0, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -10 }, { condition: 'mental', value: -12 }],
    successText: '"아파… 그런데 더 때려주세요♡ 이, 이건 훈련이니까… 사이온지 가문의 의무니까…♡" 로얄 메이드복이 찢어지며 하얀 살에 붉은 자국.',
    failText: '"참을 수 없어! 사이온지 가문을 이런 식으로 다루다니…!" 분노에 도망.',
  },
  {
    id: 'endurance-2', name: '고강도 예절 교정', emoji: '📐', level: 2, unlockTurn: 12,
    description: '완벽한 메이드 자세를 유지한 채 채찍과 바이브. 레오나의 에메랄드 눈에 눈물이 고인다. "이것이… 완벽한 메이드가 되는 길이라면…!"',
    statEffects: [{ stat: 'endurance', min: 40, max: 80 }, { stat: 'capacity', min: 10, max: 25 }, { stat: 'libido', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -16 }, { condition: 'mental', value: -16 }],
    successText: '눈물을 흘리면서도 완벽한 메이드 커츠시. "이것이 사이온지의… 으응♡ 자세가 흐트러지면 안 돼♡" 란이 감탄하고, 나나시가 데이터를 기록한다.',
    failText: '자세 무너짐. "크… 란한테 졌어…" 경쟁심에 자존심 붕괴.',
  },
  {
    id: 'endurance-3', name: '전기 자극 공개 쇼', emoji: '⚡', level: 3, unlockStat: { stat: 'endurance', value: 500 },
    description: '관중 앞에서 전기 패드와 바이브. 레오나가 로얄 메이드복 차림으로 절규하며 버틴다. "사, 사이온지 가문은… 무릎 꿇지 않아…!"',
    statEffects: [{ stat: 'endurance', min: 60, max: 120 }, { stat: 'libido', min: 20, max: 40 }, { stat: 'charm', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -25 }, { condition: 'mental', value: -22 }],
    successText: '"으아아앙♡ 전기가 보지 안에서♡ 하지만… 사이온지는… 무릎 꿇지…♡" 드릴 트윈테일이 미친듯이 흔들리며 분수. 관중 열광.',
    failText: '아헤가오 상태로 실신. "사이온지의… 체면이…" 나나시가 담요를 덮어준다.',
  },

  // ━━━ 매혹 (Charm) ━━━
  {
    id: 'charm-1', name: '더티 토크 연습', emoji: '💬', level: 1,
    description: '"선생님 자지… 이 사이온지 레오나의 보지에 넣어주세요♡" 귀족 말투로 음란한 말을 뱉는 연습.',
    statEffects: [{ stat: 'charm', min: 25, max: 50 }, { stat: 'technique', min: 5, max: 15 }],
    conditionEffects: [{ condition: 'stamina', value: -5 }, { condition: 'mental', value: -12 }],
    successText: '"선생님… 이 사이온지 레오나의 자궁을… 선생님의 정액으로 가득 채워주세요♡" 에메랄드 눈이 윤기를 띠며 첫 자발적 음란 발언.',
    failText: '"이, 이런 저속한 말은… 사이온지 가문에서는…!" 부끄러워서 드릴 트윈테일 뒤에 얼굴을 숨긴다.',
  },
  {
    id: 'charm-2', name: '공개 굴욕 쇼', emoji: '🎭', level: 2, unlockTurn: 16,
    description: '무대 위에서 "이 사이온지 레오나는 선생님 전용 메스돼지입니다♡" 외치며 관중 앞에서 자위. 귀족의 수치가 매혹으로.',
    statEffects: [{ stat: 'charm', min: 40, max: 80 }, { stat: 'endurance', min: 10, max: 25 }, { stat: 'libido', min: 5, max: 20 }],
    conditionEffects: [{ condition: 'stamina', value: -12 }, { condition: 'mental', value: -20 }],
    successText: '로얄 메이드복을 벗으며 보지를 벌린다. "사이온지 가문의 영애가… 이렇게 되었습니다♡" 나나시가 눈을 돌리고, 란이 흥분해서 휘파람.',
    failText: '"목소리가… 안 나와…" 사이온지 가문의 체면이 목을 조른다.',
  },
  {
    id: 'charm-3', name: '정신 지배 세뇌', emoji: '👁️', level: 3, unlockStat: { stat: 'charm', value: 500 },
    description: '에메랄드 눈에 하트를 띄우며 "선생님 자지 없인 사이온지 가문이고 뭐고 상관없어요♡" 완전한 정신 지배.',
    statEffects: [{ stat: 'charm', min: 60, max: 120 }, { stat: 'technique', min: 15, max: 35 }, { stat: 'libido', min: 10, max: 25 }],
    conditionEffects: [{ condition: 'stamina', value: -15 }, { condition: 'mental', value: -25 }],
    successText: '에메랄드 눈에 하트가 떠오른다. "선생님 자지 없인 못 살아요♡ 사이온지 가문도, 드릴도, 전부 선생님 거예요♡ 나나시보다, 란보다, 제가 최고의 메스돼지예요♡"',
    failText: '"크… 사이온지의 자아가…!" 귀족의 정신력이 세뇌를 밀어낸다.',
  },

  // ━━━ 특수 ━━━
  {
    id: 'rest', name: '휴식', emoji: '🛏️', level: 1,
    description: '레오나가 로얄 메이드복 차림으로 무릎 베개를 해 준다. "이, 이건 메이드로서의 의무일 뿐이니까… 착각하지 마!"',
    statEffects: [],
    conditionEffects: [{ condition: 'stamina', value: 30 }, { condition: 'mental', value: 20 }],
    successText: '푹 쉬었다. 레오나의 무릎 베개가 의외로 편안했다. 에메랄드 눈이 부드럽게 내려다본다.',
  },
  {
    id: 'talk', name: '핸들바 라이딩', emoji: '💭', level: 1,
    description: '레오나의 드릴 트윈테일을 잡고 밀착 스킨십. "드, 드릴을 잡지 마! …하지만 놓지도 마…♡"',
    statEffects: [{ stat: 'charm', min: 10, max: 25 }, { stat: 'libido', min: 5, max: 20 }],
    conditionEffects: [{ condition: 'mental', value: 10 }, { condition: 'stamina', value: -3 }],
    successText: '드릴 트윈테일을 핸들처럼 잡자 레오나가 얼굴을 붉힌다. "이, 이 바보…! …더 꽉 잡아도 돼♡" 경계심이 녹아내리며 스스로 안겨든다.',
  },
]
