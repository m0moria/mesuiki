import { SupportCard } from '../types/game'

export const supportCards: SupportCard[] = [
  // ━━━ 로얄 메이드부 ━━━
  {
    id: 'leona-support',
    characterName: '사이온지 레오나',
    cardName: '타락한 여왕의 책상 아래 충성',
    attribute: 'charm',
    rarity: 'SSR',
    portrait: '👸',
    flavorText: '"이, 이 내가… 주인님의 자지를 이렇게… 제 구멍보다 먼저… 하아♡"',
    trainingBonus: [
      { stat: 'charm', percent: 28 },
      { stat: 'libido', percent: 12 },
    ],
    skillName: '여왕의 질투 펠라',
    skillDesc: '매혹 훈련 시 매혹 +35%. "제 구멍이 더 조여요!" 3턴간 전체 훈련 효율 +25%',
    story: [
      {
        title: '책상 아래의 굴욕',
        text: '레오나가 "이, 이 내가 트레이너의 책상 밑에…!" 하며 처음엔 거부한다. 하지만 당신이 자지를 꺼내자 에메랄드 눈동자가 흔들린다. L컵 젖가슴이 메이드복 안에서 출렁이고, 입술이 무의식적으로 벌어진다.',
        choices: [
          {
            text: '강제로 목구멍에 쑤욱 꽂는다',
            statEffects: { charm: 80, libido: 30, technique: 0, capacity: 0, endurance: 0 },
            conditionEffects: { mental: -12 },
            followUpText: '레오나의 목구멍이 자지를 끝까지 삼켰다. 쥬루쥬루… 침과 프리컴이 뒤섞여 턱을 타고 흘러내린다. "으윽… 크르륵…♡" 눈물이 차오르지만, 보지에서는 애액이 허벅지를 적시고 있다.',
          },
          {
            text: '발을 핥게 시킨다',
            statEffects: { endurance: 50, charm: 30, libido: 0, technique: 0, capacity: 0 },
            conditionEffects: { mental: -5, stamina: 5 },
            followUpText: '"이, 이 내가 발을…!" 치를 떨면서도 혀를 내밀었다. 쩝… 쩝… 발바닥을 핥는 동안 레오나의 보지에서 애액이 바닥에 뚝뚝 떨어진다. 굴욕이 흥분으로 변하고 있다.',
          },
        ],
      },
      {
        title: '자발적 봉사의 시작',
        text: '매일 책상 밑에서 딥스로트 연습을 반복한 결과, 레오나가 스스로 메이드 스커트를 걷어 올렸다. 연분홍 보지를 손가락으로 쩍 벌리며 애액을 철철 흘린다.\n\n"제 구멍… 주인님 자지 기다리고 있어요♡ 오늘은… 아래도 써주세요…"',
        choices: [
          {
            text: '정액으로 얼굴에 "여왕" 낙인을 새긴다',
            statEffects: { charm: 120, endurance: 40, libido: 0, technique: 0, capacity: 0 },
            conditionEffects: { mental: -15 },
            followUpText: '도퓨… 뜨거운 정액이 레오나의 이마에 "여왕"이라고 써졌다. "이건… 주인님의… 표시…♡" 정액이 흘러내리는 얼굴로 황홀한 미소를 짓는다. 완전한 타락이 가까워지고 있다.',
          },
          {
            text: '란과 나나시를 불러 비교 펠라를 시킨다',
            statEffects: { technique: 80, capacity: 50, libido: 0, charm: 0, endurance: 0 },
            conditionEffects: { mental: -10 },
            followUpText: '세 명이 나란히 무릎을 꿇었다. 레오나의 눈에 질투의 불꽃이 타오른다. "제, 제 구멍이 가장 조여요…!" 경쟁적으로 자지를 깊이 삼키며, 보지에서 애액이 바닥을 적신다.',
          },
        ],
      },
      {
        title: '완벽한 시녀의 완성',
        text: '레오나가 책상 위에 올라타 L컵 젖가슴을 출렁이며 기승위 자세를 취했다. 연분홍 보지가 자지를 꿀꺽 삼킨다. 보지벽이 12단계로 쫙쫙 조여들며 정액을 한 방울도 새지 않게 빨아들인다.\n\n"이제 제 자궁은 주인님 전용입니다… 뷰루뷰루 가득 채워주세요♡ 오호오오♡"',
        choices: [
          {
            text: '자궁구까지 깊이 박아 질내사정한다',
            statEffects: { charm: 150, libido: 60, capacity: 40, technique: 0, endurance: 0 },
            conditionEffects: { stamina: -15 },
            followUpText: '도퓨루루… 정액이 자궁을 가득 채운다. 레오나의 배가 살짝 불룩해지고, 눈에 하트가 떠오른다. "주인님 정액… 자궁에… 아하♡ 임신해버려요♡" 완벽한 시녀가 완성되었다.',
          },
          {
            text: '목구멍에 사정해 전부 삼키게 한다',
            statEffects: { technique: 100, charm: 80, endurance: 30, libido: 0, capacity: 0 },
            conditionEffects: { mental: -8 },
            followUpText: '꼴깍… 꼴깍… 정액을 한 방울도 남기지 않고 삼켰다. "주인님 정액… 맛있어요… 매일 마시고 싶어요♡" 입술에 매달린 정액 실을 혀로 핥아먹는 모습은 최고급 온아홀 그 자체.',
          },
        ],
      },
    ],
    finalBonusStat: 'charm',
    finalBonusPercent: 12,
  },

  {
    id: 'ran-support',
    characterName: '오니즈카 란',
    cardName: '갭 모에 야쿠자 메이드의 기승위 교정',
    attribute: 'capacity',
    rarity: 'SSR',
    portrait: '🔥',
    flavorText: '"아앙? 이게 메이드냐고? …씨발, 너무 좋아… 더 박아♡"',
    trainingBonus: [
      { stat: 'capacity', percent: 32 },
      { stat: 'endurance', percent: 15 },
    ],
    skillName: '야쿠자 메이드의 쫙쫙 조임',
    skillDesc: '수용 훈련 시 수용 +40%. 기승위 자세로 정액을 한 방울도 흘리지 않고 짜낸다.',
    story: [
      {
        title: '반항하는 양키',
        text: '"아앙? 메이드? 웃기지 마!" 란이 이를 드러내며 으르렁거린다. 금발 단발이 거칠게 흔들리고, J컵 젖가슴이 찢어진 교복 사이로 튀어나온다.\n\n레오나가 강제로 프릴 에이프런을 입히자, 란의 야쿠자 문신이 허벅지 안쪽에 드러난다.',
        choices: [
          {
            text: '바로 보지에 자지를 꽂아 분수하게 만든다',
            statEffects: { capacity: 90, libido: 30, technique: 0, charm: 0, endurance: 0 },
            conditionEffects: { mental: -12 },
            followUpText: '주뿌… 쑤욱 삽입하자 란이 허리를 뒤로 젖혔다. "끄아아…! 씨발… 크기가…!" 보지가 미친 듯이 꿈틀거리며 15초 만에 분수. 파아아… 애액이 뿜어져 나온다. 양키의 입에서 "더… 깊이…♡" 가느다란 애원이.',
          },
          {
            text: '발로 밟으며 예절 교육을 시작한다',
            statEffects: { endurance: 60, charm: 30, libido: 0, technique: 0, capacity: 0 },
            conditionEffects: { mental: -8 },
            followUpText: '란이 이를 악물고 참는다. 하지만 발이 클리토리스를 밟을 때마다 허벅지가 파르르 떨린다. "씨… 발…♡" 입에선 욕이 나오지만 보지에선 애액이 철철.',
          },
        ],
      },
      {
        title: '기승위 교정 훈련',
        text: '란이 기승위 자세로 올라탔다. 야쿠자 문신이 드러난 허벅지가 파르르 떨리고, 진한 분홍 보지가 자지를 꿀꺽 삼킨다.\n\n"주… 주인님… 다녀오셨슴까…♡" 기어들어 가는 목소리로 인사하며 스스로 엉덩이를 빠아악 빠아악 흔들기 시작한다.',
        choices: [
          {
            text: '레오나와 함께 2:1 경쟁 기승위',
            statEffects: { capacity: 130, technique: 50, libido: 0, charm: 0, endurance: 0 },
            conditionEffects: { stamina: -15, mental: -10 },
            followUpText: '"제 보지가 더 조여요!" 레오나와 란이 경쟁적으로 자지를 삼킨다. 쫙쫙… 구쪽구쪽… 두 명의 보지가 교대로 조여들며, 정액이 역류해 허벅지를 타고 흘러내린다.',
          },
          {
            text: '항문까지 동시에 뚫는다',
            statEffects: { endurance: 100, capacity: 60, libido: 0, technique: 0, charm: 0 },
            conditionEffects: { mental: -15 },
            followUpText: '"두, 두 구멍 동시에…?! 아아아앙♡" 란이 절규한다. 보지와 항문이 동시에 꽉 조여들며, 정액을 짜내듯 수축한다. 양키의 자존심은 완전히 녹아내렸다.',
          },
        ],
      },
      {
        title: '명기 야쿠자의 완성',
        text: '란이 야쿠자 문신을 드러낸 채 네 발로 엎드렸다. J컵 젖가슴이 바닥에 출렁이고, 진한 분홍 보지에서 애액이 줄줄 흘러 바닥에 웅덩이를 만든다.\n\n"씨발… 메이드 구멍이 제일 좋아… 더 세게 박아♡ 자궁까지 뚫어줘♡"',
        choices: [
          {
            text: '자궁구까지 세게 박아 3연속 질내사정',
            statEffects: { capacity: 160, libido: 60, technique: 0, charm: 0, endurance: 0 },
            conditionEffects: { stamina: -18 },
            followUpText: '파코파코파코… 도퓨루루! 세 번 연속 자궁에 정액을 쏟아붓자 란의 배가 불룩 튀어나온다. "아히이♡ 자궁 터져… 정액으로 가득 차♡" 아헤가오를 지으며 혀를 빼문다.',
          },
          {
            text: '얼굴에 사정해 정액 세례를 내린다',
            statEffects: { charm: 80, capacity: 80, endurance: 40, libido: 0, technique: 0 },
            conditionEffects: { mental: -10 },
            followUpText: '도퓨… 란의 거친 얼굴 위에 정액이 쏟아진다. "하앙… 뜨거워… 주인님 정액 맛있어…♡" 혀로 입술 주변의 정액을 핥아먹는 양키의 표정은 완전한 암퇘지.',
          },
        ],
      },
    ],
    finalBonusStat: 'capacity',
    finalBonusPercent: 15,
  },

  {
    id: 'nanashi-support',
    characterName: 'Unit-774 나나시',
    cardName: '무표정 안드로이드의 사정 관리 모드',
    attribute: 'technique',
    rarity: 'SSR',
    portrait: '🤖',
    flavorText: '"감정 불필요. 마스터의 정액만이 나의 목적입니다."',
    trainingBonus: [
      { stat: 'technique', percent: 35 },
      { stat: 'charm', percent: 10 },
    ],
    skillName: '최적 사정 관리 딥스로트',
    skillDesc: '기교 훈련 시 기교 +38%. 사정 타이밍 완벽 제어, 랜덤 훈련 효율 150% 버프.',
    story: [
      {
        title: '사정 관리 모드 가동',
        text: '"마스터, 사정 관리 모드 가동." 나나시가 무표정으로 지퍼를 내린다. I컵 젖가슴이 블랙 메이드복 안에서 미동도 없고, 은색 눈동자에 감정이라곤 없다.\n\n자지를 한 손으로 정확히 쥐고, 최적의 각도로 입술을 벌린다.',
        choices: [
          {
            text: '목구멍 끝까지 쑤욱 밀어 넣는다',
            statEffects: { technique: 90, capacity: 20, libido: 0, charm: 0, endurance: 0 },
            conditionEffects: { mental: -5 },
            followUpText: '쥬루… 쥬루쥬루… 목구멍이 불룩 튀어나오며 자지를 끝까지 삼켰다. 구토 반사 제로. "마스터, 깊이 23cm 확인. 최적 사정 포인트 측정 중." 무표정 그대로.',
          },
          {
            text: '데이터를 측정하며 천천히',
            statEffects: { technique: 50, libido: 40, charm: 0, capacity: 0, endurance: 0 },
            conditionEffects: { stamina: 5 },
            followUpText: '"사정량 추이 기록 중…" 나나시가 불알 무게를 정확히 재며 혀로 섬세하게 핥는다. 기계적이지만 정확한 터치에 등골이 저려온다.',
          },
        ],
      },
      {
        title: '비교 체험 시작',
        text: '레오나와 란이 부끄러워하며 뒤에 서 있다. 나나시가 무표정으로 선언한다.\n\n"비교 체험 시작. 마스터 자지 반응 데이터 수집을 위해 세 개체의 보지 데이터가 필요합니다."\n\n보지에 로터를 꽂은 채 애액을 뚝뚝 떨어뜨리면서도 표정 변화는 제로.',
        choices: [
          {
            text: '나나시 보지에 로터 꽂고 동시 삽입',
            statEffects: { technique: 120, libido: 40, capacity: 0, charm: 0, endurance: 0 },
            conditionEffects: { stamina: -12, mental: -8 },
            followUpText: '주뿌… 자지가 나나시의 보지를 관통한다. 보지 온도가 42도로 상승. "마스터, 삽입 확인. 보지 수축률 200% 달성." 무표정이지만 보지만은 미친 듯이 조여든다.',
          },
          {
            text: '불알을 주무르며 사정량을 계산하게 한다',
            statEffects: { capacity: 80, technique: 50, libido: 0, charm: 0, endurance: 0 },
            conditionEffects: { stamina: -5 },
            followUpText: '"불알 중량 측정… 사정 예측량 42ml. 최적 배출 타이밍까지 37초." 정확한 손놀림에 이성이 날아간다. 기계의 정밀함이 쾌락을 극대화시킨다.',
          },
        ],
      },
      {
        title: '감정의 버그',
        text: '나나시의 은색 눈동자에 처음으로 변화가 일어났다. 데이터 표시 대신… 하트 마크가 깜빡인다.\n\n"마스터 정액… 최적의 영양입니다… 꼴깍꼴깍…♡"\n\n무표정이 아니다. 미세하지만 확실한 미소. 보지가 자지를 놓지 않으려고 미친 듯이 수축한다.',
        choices: [
          {
            text: '자궁에 대량 사정한다',
            statEffects: { technique: 150, charm: 50, capacity: 40, libido: 0, endurance: 0 },
            conditionEffects: { stamina: -15 },
            followUpText: '도퓨루루… 자궁이 정액으로 가득 찬다. 나나시의 배가 살짝 불룩. "마스터 정액… 자궁 3리터 저장 완료♡ 감정 에러… 아니, 이것은… 행복?" 처음으로 미소.',
          },
          {
            text: '목구멍에 사정해 전부 삼키게 한다',
            statEffects: { technique: 120, endurance: 50, libido: 30, charm: 0, capacity: 0 },
            conditionEffects: { mental: -5 },
            followUpText: '꼴깍… 꼴깍… 한 방울도 남기지 않고 흡수. "정액 성분 분석… 도파민 수치 이상. 마스터, 추가 사정을 요청합니다♡" 기계가 사랑을 배우기 시작했다.',
          },
        ],
      },
    ],
    finalBonusStat: 'technique',
    finalBonusPercent: 14,
  },

  // ━━━ 역바니 카지노부 ━━━
  {
    id: 'rika-support',
    characterName: '죠가사키 리카',
    cardName: '갸루 딜러의 잭팟 3P 유혹',
    attribute: 'libido',
    rarity: 'SSR',
    portrait: '💄',
    flavorText: '"이게 쿨한 거야~ 자, 같이 미쳐보자고♡"',
    trainingBonus: [
      { stat: 'libido', percent: 30 },
      { stat: 'technique', percent: 12 },
    ],
    skillName: '갸루의 잭팟 3P',
    skillDesc: '연심 훈련 시 연심 +40%. 3P 이벤트 발생 시 전체 능력치 +15%.',
    story: [
      {
        title: '판을 키우는 갸루',
        text: '"자자~ 오늘 잭팟 터지면 쌤이랑 3P야♡" 리카가 K컵 젖가슴을 흔들며 룰렛 테이블에 기댄다. 골든 역바니 사이로 보지가 살짝 드러나고, 진한 핑크색 입술에서 애액이 번들거린다.\n\n사쿠라와 모모가 양옆에서 불안한 눈으로 지켜보고 있다.',
        choices: [
          {
            text: '바로 테이블 위에 눕히고 삽입한다',
            statEffects: { libido: 100, capacity: 30, technique: 0, charm: 0, endurance: 0 },
            conditionEffects: { stamina: -12, mental: -5 },
            followUpText: '파코… 파코파코…! 테이블 위에서 리카의 K컵이 미친 듯이 출렁인다. "아앙♡ 대박~! 자지가 자궁까지 닿아♡" 포르치오를 자극하자 보지에서 분수가 5회 연속. 테이블 위가 애액으로 흥건하다.',
          },
          {
            text: '룰렛으로 벗기기 게임을 시작한다',
            statEffects: { charm: 70, libido: 40, technique: 0, capacity: 0, endurance: 0 },
            conditionEffects: { mental: -8 },
            followUpText: '룰렛이 돌아갈 때마다 역바니가 하나씩 벗겨진다. 리카의 진한 핑크 보지가 관중 앞에 완전히 드러나자 "아, 쫌~ 다 보잖아♡" 하면서도 다리를 벌린다. 관중의 환호.',
          },
        ],
      },
      {
        title: '3P 잭팟',
        text: '리카가 사쿠라와 모모를 양쪽으로 끌어당겼다. "이게 쿨한 거야~ 자, 보지 벌려♡"\n\n사쿠라가 울먹이고 모모가 깡충거리는 사이, 리카의 보지가 자지를 꿀꺽 삼킨다.\n\n"자자~ 순서대로 가자고♡ 근데 내가 먼저야~"',
        choices: [
          {
            text: '리카 자궁에 뷰루뷰루 질내사정',
            statEffects: { libido: 140, capacity: 40, technique: 0, charm: 0, endurance: 0 },
            conditionEffects: { stamina: -15, mental: -5 },
            followUpText: '도퓨루루…! 자궁 깊숙이 정액을 쏟아붓자 리카가 허리를 활처럼 젖혔다. "잭팟 터졌어♡ 자궁이 정액으로 가득♡ 오호오오♡" 보지벽이 15단계로 수축하며 정액을 한 방울도 놓치지 않는다.',
          },
          {
            text: '모모와 사쿠라를 교대로 삽입한다',
            statEffects: { endurance: 80, libido: 60, charm: 30, technique: 0, capacity: 0 },
            conditionEffects: { stamina: -18 },
            followUpText: '세 명의 보지를 교대로 관통한다. 리카가 "다음은 내 차례~♡" 사쿠라가 "아직… 빼지 마세요…♡" 모모가 "오빠아~ 모모 차례♡" 삼중 합창. 테이블 위는 애액과 정액의 바다.',
          },
        ],
      },
      {
        title: '넘버원 딜러의 완성',
        text: '리카가 딜러석에 올라타 관중 앞에서 자지를 삼키고 있다. K컵 젖가슴이 골든 역바니 사이로 출렁이고, 보지에서 애액이 분수처럼 뿜어져 나온다.\n\n"자자~ 이 보지가 이 카지노의 넘버원 딜러야♡ 정액 잭팟, 매일 터뜨려줄게♡"',
        choices: [
          {
            text: '관중 앞에서 대량 질내사정',
            statEffects: { libido: 170, charm: 60, capacity: 0, technique: 0, endurance: 0 },
            conditionEffects: { stamina: -18, mental: -10 },
            followUpText: '도퓨루루루…! 관중의 환호 속에서 리카의 자궁이 정액으로 넘쳐흐른다. 보지에서 정액이 역류해 허벅지를 적시고, 리카는 혀를 빼물며 아헤가오. "최고의 잭팟♡ 이 카지노 영원히 영업♡"',
          },
          {
            text: '세 명 전원에게 연속 사정',
            statEffects: { libido: 100, technique: 50, endurance: 50, charm: 0, capacity: 0 },
            conditionEffects: { stamina: -22 },
            followUpText: '도퓨… 도퓨… 도퓨…! 리카, 사쿠라, 모모 세 명의 자궁에 차례로 정액을 쏟아붓는다. "잭팟 3연속♡" 세 명 모두 배가 불룩해지며 만족한 아헤가오.',
          },
        ],
      },
    ],
    finalBonusStat: 'libido',
    finalBonusPercent: 16,
  },

  {
    id: 'sakura-support',
    characterName: '아마미야 사쿠라',
    cardName: '순결 딜러의 룰렛 테이블 공개 타락',
    attribute: 'endurance',
    rarity: 'SSR',
    portrait: '🌸',
    flavorText: '"리카 언니… 이게… 쾌락인가요… 더… 세게…♡"',
    trainingBonus: [
      { stat: 'endurance', percent: 33 },
      { stat: 'libido', percent: 12 },
    ],
    skillName: '공개 타락 squirting',
    skillDesc: '인내 훈련 시 인내 +42%. 관중 앞에서의 수치가 쾌락으로 변환된다.',
    story: [
      {
        title: '역바니의 수치',
        text: '"이, 이런 옷은 너무… 엉덩이가 다 보이잖아요…" 사쿠라가 눈물을 글썽이며 핑크 역바니를 입었다. H컵 젖가슴이 반쯤 드러나고, 연분홍 보지가 얇은 천 사이로 비친다.\n\n리카가 "어머~ 예쁘잖아♡" 하며 엉덩이를 찰싹.',
        choices: [
          {
            text: '바로 테이블에 눕혀 자지를 넣는다',
            statEffects: { endurance: 80, capacity: 40, libido: 0, technique: 0, charm: 0 },
            conditionEffects: { mental: -15, stamina: -8 },
            followUpText: '주뿌… "안 돼요…! 관객들이 보고 있어요…!" 사쿠라의 눈에서 눈물이 떨어지지만, 보지는 미친 듯이 조여든다. 수치심이 쾌락을 증폭시킨다. 쫙쫙… 애액이 분수처럼.',
          },
          {
            text: '리카에게 맡겨 천천히 길들인다',
            statEffects: { charm: 60, endurance: 30, libido: 0, technique: 0, capacity: 0 },
            conditionEffects: { mental: -5 },
            followUpText: '리카가 "이게 쿨한 거야~♡" 하며 사쿠라의 보지에 손가락을 넣는다. "으앙… 리카 언니… 거기…♡" 관중 앞에서 레즈 플레이. 사쿠라의 연분홍 보지에서 애액이 철철.',
          },
        ],
      },
      {
        title: '룰렛 벌칙',
        text: '룰렛에서 졌다. 벌칙: 바이브 강도 MAX.\n\n"으아아앙♡ 관객들 앞에서… 보지가 미쳐요♡" 사쿠라가 테이블 위에서 몸을 비틀며 분수를 뿜는다. 파아아… 애액이 관중석까지 날아간다.\n\n순수했던 눈동자가 서서히 쾌락에 물들어간다.',
        choices: [
          {
            text: '자지로 자궁구를 노크한다',
            statEffects: { endurance: 130, capacity: 50, libido: 0, technique: 0, charm: 0 },
            conditionEffects: { stamina: -15, mental: -12 },
            followUpText: '콕콕콕… 자궁구를 노크할 때마다 사쿠라의 몸이 경련한다. "자궁에… 닿아요… 안 돼… 임신해버려요…♡" 하지만 보지가 자지를 놓지 않는다. 명기의 본능이 깨어나고 있다.',
          },
          {
            text: '모모와 함께 공개 자위를 시킨다',
            statEffects: { charm: 80, libido: 60, endurance: 0, technique: 0, capacity: 0 },
            conditionEffects: { mental: -15 },
            followUpText: '"언니 겁쟁이네~♡" 모모가 옆에서 보지를 문지르며 도발한다. 사쿠라도 눈물을 흘리며 클리토리스를 문지르기 시작한다. 관중 앞 쌍둥이 자위. 수치심이 폭발한다.',
          },
        ],
      },
      {
        title: '넘버원 딜러의 각성',
        text: '사쿠라의 눈에 하트가 떠올랐다. 더 이상 눈물도, 수치심도 없다.\n\n"제가… 이 카지노의 넘버원 딜러예요♡ 자궁에 정액 잭팟… 매일 터뜨려주세요♡"\n\nH컵 젖가슴을 흔들며 스스로 보지를 벌린다. 완전한 타락.',
        choices: [
          {
            text: '관중 앞에서 대량 질내사정',
            statEffects: { endurance: 160, libido: 60, charm: 0, technique: 0, capacity: 0 },
            conditionEffects: { stamina: -18, mental: -8 },
            followUpText: '도퓨루루…! "자궁이 정액으로 가득 차요♡ 아하♡ 임신해버려요♡" 관중의 환호 속에서 사쿠라의 배가 불룩. 순결했던 소녀가 최고의 공개 타락 딜러로 완성되었다.',
          },
          {
            text: '목구멍에 사정해 꼴깍 삼키게 한다',
            statEffects: { technique: 80, endurance: 80, libido: 40, charm: 0, capacity: 0 },
            conditionEffects: { mental: -5 },
            followUpText: '꼴깍… "선생님 정액… 맛있어요…♡ 매일 마시고 싶어요…♡" 입술에 정액이 매달린 채 관중을 향해 미소. 완전한 타락의 미소.',
          },
        ],
      },
    ],
    finalBonusStat: 'endurance',
    finalBonusPercent: 15,
  },

  {
    id: 'momo-support',
    characterName: '코히나타 모모',
    cardName: '위험한 로리 마스코트의 노팬티 딜러 댄스',
    attribute: 'charm',
    rarity: 'SSR',
    portrait: '🎀',
    flavorText: '"언니들은 겁쟁이네~ 모모가 제일 잘해줄게♡"',
    trainingBonus: [
      { stat: 'charm', percent: 30 },
      { stat: 'libido', percent: 15 },
    ],
    skillName: '로리 딜러의 점프 삼키기',
    skillDesc: '매혹 훈련 시 매혹 +45%. 작은 보지로 인한 배 불룩 효과로 다음 턴 전체 스탯 +10%.',
    story: [
      {
        title: '깡충깡충 도발',
        text: '"오빠아~ 모모가 이기면 자지로 뽀뽀해줘♡" 핑크 트윈테일을 흔들며 딜러석 위에서 깡충깡충. 초미니 역바니 아래로 D컵 젖가슴이 톡톡 튀고, 노팬티라 무모 연분홍 보지가 점프할 때마다 관중에게 완전히 드러난다.\n\n사쿠라가 얼굴을 붉히고, 리카가 휘파람을 분다.',
        choices: [
          {
            text: '바로 작은 보지에 쑤욱 삽입한다',
            statEffects: { charm: 100, capacity: 30, libido: 0, technique: 0, endurance: 0 },
            conditionEffects: { stamina: -10, mental: -5 },
            followUpText: '주뿌… "오빠아♡ 크… 커…♡ 배가 불룩해♡" 작은 보지가 자지를 끝까지 삼키자 배가 눈에 띄게 불룩 튀어나온다. 모모의 녹색 눈에 하트가 반짝인다.',
          },
          {
            text: '엉덩이 흔드는 것만 보며 도발한다',
            statEffects: { libido: 70, charm: 40, technique: 0, capacity: 0, endurance: 0 },
            conditionEffects: { mental: -3 },
            followUpText: '"에~ 오빠 안 해줘? 그럼 모모 혼자 할게♡" 관중 앞에서 보지에 손가락을 넣고 자위를 시작한다. 축축… 애액이 딜러석을 적시며, 사쿠라가 경악한다.',
          },
        ],
      },
      {
        title: '언니 도발',
        text: '사쿠라가 부끄러워할 때, 모모가 다가간다.\n\n"언니 겁쟁이네~♡ 봐봐, 이렇게 하는 거야♡" 노팬티로 자지를 꿀꺽 삼키며 깡충깡충 점프. 자지가 쑤욱쑤욱 빠졌다 들어갔다 하며 배가 불룩불룩.\n\n관중 환호. 사쿠라의 눈에서 눈물과 질투가 동시에.',
        choices: [
          {
            text: '배 불룩 상태에서 자궁구를 노크한다',
            statEffects: { charm: 140, capacity: 40, libido: 0, technique: 0, endurance: 0 },
            conditionEffects: { stamina: -12, mental: -10 },
            followUpText: '콕콕콕… "오빠아♡ 자궁에 닿아♡ 모모 임신해♡" 작은 몸이 경련하며 분수가 6회 연속. 파아아… 관중석까지 애액이 날아간다. 모모의 눈은 완전히 하트.',
          },
          {
            text: '리카와 함께 3P를 시킨다',
            statEffects: { libido: 80, technique: 50, charm: 30, capacity: 0, endurance: 0 },
            conditionEffects: { stamina: -15 },
            followUpText: '리카가 "자자~ 모모짱도 같이♡" 하며 끌어당긴다. 모모의 작은 보지와 리카의 육덕 보지가 교대로 자지를 삼킨다. "오빠아♡ 모모가 더 조여♡" "아라~ 내가 먼저야♡" 경쟁 삼키기.',
          },
        ],
      },
      {
        title: '요물의 완성',
        text: '모모의 녹색 눈동자에 완전한 하트가 떠올랐다. 작은 몸으로 자지 위에 올라타, 배가 불룩불룩 튀어나오며 기승위를 즐기고 있다.\n\n"모모 자궁… 오빠 정액으로 가득 찼어♡ 모모가 제일 잘해줄게♡ 영원히♡"',
        choices: [
          {
            text: '자궁에 대량 사정한다',
            statEffects: { charm: 170, libido: 50, capacity: 0, technique: 0, endurance: 0 },
            conditionEffects: { stamina: -15 },
            followUpText: '도퓨루루…! 작은 배가 더욱 불룩해진다. "오빠 정액… 따끈따끈해♡ 모모 배가 불러♡ 임신이야♡" 아헤가오를 지으며 혀를 빼문다. 요물이 완성되었다.',
          },
          {
            text: '얼굴에 사정해 정액 세례',
            statEffects: { charm: 100, technique: 60, endurance: 40, libido: 0, capacity: 0 },
            conditionEffects: { mental: -8 },
            followUpText: '도퓨… 작은 얼굴 위에 정액이 뿌려진다. "오빠 정액 맛있어♡ 모모 매일 먹을게♡" 정액을 손가락으로 모아 입에 넣으며 꼴깍. 귀여운 얼굴과 음란한 행동의 갭.',
          },
        ],
      },
    ],
    finalBonusStat: 'charm',
    finalBonusPercent: 18,
  },
]
