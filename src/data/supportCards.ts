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
        script: [
          { speaker: '트레이너', text: '레오나, 책상 아래로 기어 들어와. 오늘부터 조율 시작이다.', type: 'dialogue' },
          { text: '레오나가 치마를 붙잡으며 떨고 있다. 하지만 이미 허벅지 안쪽이 축축하게 젖어 있는 게 보인다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '이, 이런 저속한 짓을... 하지만 학원 규칙이라면...♡', type: 'dialogue' },
          { text: '나는 레오나의 머리를 부드럽게 누르며 내 자지를 그녀의 입술에 갖다 댔다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '으... 냄새가... 머리가 멍해져...♡', type: 'dialogue' },
          { text: 'L컵 젖가슴이 메이드복 안에서 출렁이고, 에메랄드 눈동자가 초점을 잃어간다.', type: 'narration' },
          { speaker: '트레이너', text: '입 벌려. 혀부터 내밀어.', type: 'dialogue' },
          { text: '레오나가 고개를 들어 나를 올려다본다. 자존심과 욕정이 뒤섞인 눈빛.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '이 몸이... 트레이너 따위에게... 하지만 입이 저절로...♡ 아앙...', type: 'dialogue' },
          { text: '레오나의 입술이 벌어지고, 뜨거운 혀가 내 귀두를 감싸기 시작했다.', type: 'action' },
        ],
        choices: [
          {
            text: '강제로 목구멍에 쑤욱 꽂는다',
            statEffects: { charm: 80, libido: 30 },
            conditionEffects: { mental: -12 },
            followUpScript: [
              { text: '나는 레오나의 뒤통수를 잡고 자지를 목구멍 끝까지 밀어 넣었다.', type: 'action' },
              { speaker: '사이온지 레오나', text: '으윽... 크르륵...♡ 오에... 쥬루루...♡', type: 'dialogue' },
              { text: '쩝쩝... 쭈루루... 침과 선액이 뒤섞여 턱을 타고 흘러내린다. 눈물이 차오르지만, 보지에서는 애액이 허벅지를 타고 뚝뚝 떨어지고 있다.', type: 'narration' },
              { speaker: '사이온지 레오나', text: '이 몸의... 목구멍이... 자지 모양으로 변해가...♡', type: 'dialogue' },
            ],
          },
          {
            text: '발을 핥게 시킨다',
            statEffects: { endurance: 50, charm: 30 },
            conditionEffects: { mental: -5, stamina: 5 },
            followUpScript: [
              { speaker: '트레이너', text: '먼저 이걸 핥아. 그게 네 첫 번째 예절이다.', type: 'dialogue' },
              { speaker: '사이온지 레오나', text: '이, 이 내가 발을...! ...치, 칫...♡ 쩝... 쩝...', type: 'dialogue' },
              { text: '이를 악물면서도 혀를 내밀어 발바닥을 핥기 시작했다. 굴욕에 떨리는 혀끝과는 달리, 레오나의 보지에서 애액이 바닥에 뚝뚝 떨어진다.', type: 'narration' },
              { speaker: '사이온지 레오나', text: '왜... 왜 이렇게 흥분되는 거야... 이 몸이...♡', type: 'dialogue' },
            ],
          },
        ],
      },
      {
        title: '자발적 봉사의 시작',
        script: [
          { text: '매일 반복된 딥스로트 연습의 결과일까. 오늘 레오나가 스스로 책상 밑으로 기어 들어왔다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '주, 주인님... 오늘은... 아래도 써주세요...♡', type: 'dialogue' },
          { text: '레오나가 메이드 스커트를 걷어 올렸다. 연분홍 보지가 이미 꿀물로 젖어 번들거리고 있다.', type: 'action' },
          { speaker: '트레이너', text: '...스스로 벌리고 보여줘. 입으로 부탁해.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '제 구멍... 주인님 자지 기다리고 있어요♡ 여기... 이렇게 축축해졌으니까...', type: 'dialogue' },
          { text: '레오나가 손가락으로 보지를 쩍 벌렸다. 애액이 실을 끌며 늘어진다. 자존심 강하던 여왕의 모습은 어디에도 없다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '빨리... 넣어주세요... 이 몸의 보지가... 주인님 없이는 안 돼요...♡', type: 'dialogue' },
          { text: '나는 레오나의 턱을 잡고 위를 올려다보게 했다. 에메랄드 눈동자가 완전히 녹아 있다.', type: 'action' },
        ],
        choices: [
          {
            text: '정액으로 얼굴에 "여왕" 낙인을 새긴다',
            statEffects: { charm: 120, endurance: 40 },
            conditionEffects: { mental: -15 },
            followUpScript: [
              { text: '나는 자지를 꺼내 레오나의 이마에 정액으로 "여왕"이라고 써 내렸다. 도퓨루...', type: 'action' },
              { speaker: '사이온지 레오나', text: '이건... 주인님의... 표시...♡ 하아... 뜨거워요...♡', type: 'dialogue' },
              { text: '정액이 이마에서 코를 타고 흘러내리는데도, 레오나는 황홀한 미소를 짓고 있다. 완전한 타락이 가까워지고 있다.', type: 'narration' },
            ],
          },
          {
            text: '란과 나나시를 불러 비교 펠라를 시킨다',
            statEffects: { technique: 80, capacity: 50 },
            conditionEffects: { mental: -10 },
            followUpScript: [
              { text: '세 명이 나란히 무릎을 꿇었다. 레오나의 눈에 질투의 불꽃이 타오른다.', type: 'narration' },
              { speaker: '사이온지 레오나', text: '제, 제가 제일 잘해요...! 이 년들보다 훨씬...! 쥬루루루...♡', type: 'dialogue' },
              { text: '세 개의 혀가 경쟁적으로 자지를 감싼다. 레오나가 다른 둘을 밀어내며 끝까지 삼켰다. 쭈루루루... 질투가 최고의 기술을 끌어냈다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '완벽한 시녀의 완성',
        script: [
          { text: '레오나가 책상 위에 올라타 나를 내려다보고 있다. 그 눈에는 이제 여왕의 자존심 따위 남아있지 않다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '이제 제 자궁은 주인님 전용이에요... 가득 채워주세요...♡', type: 'dialogue' },
          { text: '레오나가 기승위 자세를 취했다. L컵 젖가슴이 출렁이며, 연분홍 보지가 내 자지를 꿀꺽 삼킨다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '하앙♡ 들어왔어... 주인님 자지가 자궁까지...♡ 오호오♡', type: 'dialogue' },
          { text: '보지벽이 겹겹이 조여들며 자지를 빨아들인다. 이것이 조율의 결과다.', type: 'narration' },
          { speaker: '트레이너', text: '움직여. 네 힘으로 나를 짜내봐.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '네, 주인님♡ 뷰루뷰루 가득... 한 방울도 안 남기고 받아먹을게요♡', type: 'dialogue' },
          { text: '레오나가 허리를 들어올렸다가 내리꽂는다. 쫙쫙... 파코파코... 보지가 자지를 놓지 않으려고 미친 듯이 조여든다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '이 몸은... 주인님의 시녀예요...♡ 이 보지도, 자궁도, 전부...♡ 아하앙♡', type: 'dialogue' },
        ],
        choices: [
          {
            text: '자궁구까지 깊이 박아 질내사정한다',
            statEffects: { charm: 150, libido: 60, capacity: 40 },
            conditionEffects: { stamina: -15 },
            followUpScript: [
              { text: '나는 레오나의 허리를 꽉 잡고 끝까지 밀어 넣었다. 도퓨루루루...', type: 'action' },
              { speaker: '사이온지 레오나', text: '자궁에... 정액이... 아하♡ 배가 뜨거워...♡ 임신해버려요♡', type: 'dialogue' },
              { text: '레오나의 배가 살짝 불룩해지고, 에메랄드 눈에 하트가 떠올랐다. 완벽한 시녀가 완성되었다.', type: 'narration' },
            ],
          },
          {
            text: '목구멍에 사정해 전부 삼키게 한다',
            statEffects: { technique: 100, charm: 80, endurance: 30 },
            conditionEffects: { mental: -8 },
            followUpScript: [
              { text: '나는 자지를 빼서 레오나의 입에 쑤셔 넣었다. 정액이 목구멍을 가득 채운다.', type: 'action' },
              { speaker: '사이온지 레오나', text: '꼴깍... 꼴깍... 주인님 정액... 맛있어요...♡ 매일 마시고 싶어요♡', type: 'dialogue' },
              { text: '입술에 매달린 정액 실을 혀로 핥아먹는 모습. 한 방울도 남기지 않겠다는 집착이 보인다. 최고급 육변기의 완성이다.', type: 'narration' },
            ],
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
        script: [
          { speaker: '오니즈카 란', text: '아앙? 메이드? 웃기지 마. 나 좀 건드려 봐, 이 자식아.', type: 'dialogue' },
          { text: '란이 이를 드러내며 으르렁거린다. 금발 단발이 거칠게 흔들리고, J컵 젖가슴이 찢어진 교복 사이로 튀어나와 있다.', type: 'narration' },
          { text: '레오나가 강제로 프릴 에이프런을 입히자, 란의 허벅지 안쪽에 야쿠자 문신이 드러났다.', type: 'action' },
          { speaker: '트레이너', text: '반항할수록 조율이 길어진다. 순순히 벌려.', type: 'dialogue' },
          { speaker: '오니즈카 란', text: '개소리 마... 으읏?! 야, 야, 거기 만지지 마...!', type: 'dialogue' },
          { text: '허세를 부리지만 내 손이 허벅지 안쪽을 스치자 란의 몸이 움찔한다. 이미 속옷이 젖어 있다.', type: 'narration' },
          { speaker: '트레이너', text: '여기 봐라. 입으로는 싫다 하면서 보지는 솔직하네.', type: 'dialogue' },
          { speaker: '오니즈카 란', text: '닥... 닥쳐! 그건... 땀이야, 씨발...!', type: 'dialogue' },
          { text: '나는 란의 젖은 팬티를 옆으로 젖혔다. 진한 분홍색 보지가 꿀물을 질질 흘리고 있다.', type: 'action' },
        ],
        choices: [
          {
            text: '바로 보지에 자지를 꽂아 분수하게 만든다',
            statEffects: { capacity: 90, libido: 30 },
            conditionEffects: { mental: -12 },
            followUpScript: [
              { text: '나는 란의 다리를 벌리고 한 번에 끝까지 밀어 넣었다. 주뿌욱...', type: 'action' },
              { speaker: '오니즈카 란', text: '끄아아앗...! 씨발... 크기가...! 하앙♡', type: 'dialogue' },
              { text: '보지가 미친 듯이 꿈틀거리더니 15초 만에 분수를 뿜었다. 파아아... 양키의 입에서 "더... 깊이..."라는 가느다란 애원이 새어나온다.', type: 'narration' },
            ],
          },
          {
            text: '발로 밟으며 예절 교육을 시작한다',
            statEffects: { endurance: 60, charm: 30 },
            conditionEffects: { mental: -8 },
            followUpScript: [
              { speaker: '트레이너', text: '메이드면 메이드답게 굴어. 바닥에 엎드려.', type: 'dialogue' },
              { text: '구두 밑창으로 클리토리스를 살짝 밟았다. 란이 이를 악물고 참는다.', type: 'action' },
              { speaker: '오니즈카 란', text: '씨... 발...♡ 죽여버...릴... 하앙...♡', type: 'dialogue' },
              { text: '입에선 욕이 나오지만 보지에선 애액이 철철 흘러 바닥을 적시고 있다. 양키의 자존심이 무너져 내리고 있다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '기승위 교정 훈련',
        script: [
          { text: '이틀째. 란이 제 발로 훈련실에 찾아왔다. 눈은 여전히 사납지만, 보지에서 애액이 뚝뚝 떨어지고 있다.', type: 'narration' },
          { speaker: '오니즈카 란', text: '...오늘도 하는 거야? 빨리 해, 이 자식아.', type: 'dialogue' },
          { speaker: '트레이너', text: '오늘은 네가 위에 올라타. 기승위 교정이다.', type: 'dialogue' },
          { speaker: '오니즈카 란', text: '하?! 내가 왜...! ...치, 씨발, 알겠어.', type: 'dialogue' },
          { text: '란이 기승위 자세로 올라탔다. 야쿠자 문신이 드러난 허벅지가 파르르 떨리고, 진한 분홍 보지가 내 자지를 꿀꺽 삼켰다.', type: 'action' },
          { speaker: '오니즈카 란', text: '주... 주인님... 다녀오셨슴까...♡ 아앙... 안에서 움직여...♡', type: 'dialogue' },
          { text: '기어들어 가는 목소리로 인사하며 스스로 엉덩이를 빠아악 빠아악 흔들기 시작했다. 양키와 메이드 사이에서 란이 무너져 내리고 있다.', type: 'narration' },
          { speaker: '트레이너', text: '그렇지. 더 세게 흔들어. 보지로 내 자지를 조여봐.', type: 'dialogue' },
        ],
        choices: [
          {
            text: '레오나와 함께 2:1 경쟁 기승위',
            statEffects: { capacity: 130, technique: 50 },
            conditionEffects: { stamina: -15, mental: -10 },
            followUpScript: [
              { text: '레오나가 옆에서 란을 내려다보며 도발한다.', type: 'narration' },
              { speaker: '사이온지 레오나', text: '후후, 양키 주제에 기승위도 못 하나? 제 보지가 더 조여요, 주인님♡', type: 'dialogue' },
              { speaker: '오니즈카 란', text: '씨발, 지지 않아...! 내 보지가... 쫙쫙... 구쪽구쪽...♡ 하앙♡', type: 'dialogue' },
              { text: '두 명의 보지가 교대로 자지를 삼키며 조여든다. 경쟁심이 보지의 조임을 극한으로 끌어올렸다.', type: 'narration' },
            ],
          },
          {
            text: '항문까지 동시에 뚫는다',
            statEffects: { endurance: 100, capacity: 60 },
            conditionEffects: { mental: -15 },
            followUpScript: [
              { speaker: '트레이너', text: '뒤쪽도 교정이 필요하겠어.', type: 'dialogue' },
              { speaker: '오니즈카 란', text: '두, 두 구멍 동시에...?! 잠깐, 아아아앙♡♡', type: 'dialogue' },
              { text: '보지와 항문이 동시에 꽉 조여들며 자지를 짜내듯 수축한다. 란이 절규하며 허리를 꺾었다. 양키의 자존심은 완전히 녹아내렸다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '명기 야쿠자의 완성',
        script: [
          { text: '란이 야쿠자 문신을 드러낸 채 네 발로 엎드렸다. J컵 젖가슴이 바닥에 눌려 출렁이고 있다.', type: 'narration' },
          { speaker: '오니즈카 란', text: '...주인님, 빨리 박아줘. 보지가 미칠 것 같아... 씨발, 빨리...♡', type: 'dialogue' },
          { text: '진한 분홍 보지에서 애액이 줄줄 흘러 바닥에 웅덩이를 만들고 있다. 입에서는 거친 말이 나오지만 표정은 완전히 암컷이다.', type: 'narration' },
          { speaker: '트레이너', text: '네 보지가 어떤 보지인지 말해봐. 그럼 넣어줄게.', type: 'dialogue' },
          { speaker: '오니즈카 란', text: '으... 씨발... 메이드 구멍이 제일 좋아... 더 세게 박아♡ 자궁까지 뚫어줘♡', type: 'dialogue' },
          { text: '마지막 자존심마저 스스로 내던졌다. 나는 란의 엉덩이를 붙잡고 끝까지 박아 넣었다. 파코파코파코...', type: 'action' },
          { speaker: '오니즈카 란', text: '아히이♡ 좋아... 개좋아... 자궁까지 닿아♡ 주인님 자지 최고야♡', type: 'dialogue' },
          { text: '양키의 거친 입에서 나오는 순종의 교성. 이 갭이야말로 란만의 매력이다.', type: 'narration' },
        ],
        choices: [
          {
            text: '자궁구까지 세게 박아 3연속 질내사정',
            statEffects: { capacity: 160, libido: 60 },
            conditionEffects: { stamina: -18 },
            followUpScript: [
              { text: '도퓨루루...! 도퓨...! 도퓨루루...! 세 번 연속으로 자궁에 정액을 쏟아부었다.', type: 'action' },
              { speaker: '오니즈카 란', text: '아히이♡ 자궁 터져... 정액으로 가득 차♡ 배가... 불룩해...♡', type: 'dialogue' },
              { text: '란의 배가 불룩 튀어나오고, 혀를 빼문 채 아헤가오를 짓고 있다. 명기 야쿠자 메이드의 완성이다.', type: 'narration' },
            ],
          },
          {
            text: '얼굴에 사정해 정액 세례를 내린다',
            statEffects: { charm: 80, capacity: 80, endurance: 40 },
            conditionEffects: { mental: -10 },
            followUpScript: [
              { text: '자지를 빼서 란의 거친 얼굴 위에 정액을 쏟아냈다. 도퓨루...', type: 'action' },
              { speaker: '오니즈카 란', text: '하앙... 뜨거워... 주인님 정액 냄새... 좋아...♡', type: 'dialogue' },
              { text: '혀로 입술 주변의 정액을 핥아먹는 양키의 표정은 완전히 길들여진 암컷 그 자체다.', type: 'narration' },
            ],
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
        script: [
          { speaker: 'Unit-774 나나시', text: '마스터, 사정 관리 모드 가동합니다.', type: 'dialogue' },
          { text: '나나시가 무표정으로 내 지퍼를 내린다. I컵 젖가슴이 블랙 메이드복 안에서 미동도 없고, 은색 눈동자에 감정이라곤 찾아볼 수 없다.', type: 'narration' },
          { text: '차가운 손가락이 정확한 각도로 자지를 쥐었다. 기계적이지만, 압력 조절이 완벽하다.', type: 'action' },
          { speaker: 'Unit-774 나나시', text: '귀두 민감도 측정 중... 최적 자극 패턴 계산 완료.', type: 'dialogue' },
          { speaker: '트레이너', text: '...입으로 해봐.', type: 'dialogue' },
          { speaker: 'Unit-774 나나시', text: '구강 서비스 모드 전환. 입술 전개합니다.', type: 'dialogue' },
          { text: '나나시가 무표정 그대로 입을 벌렸다. 안쪽이 비정상적으로 따뜻하다. 안드로이드의 체온 조절 기능인가.', type: 'narration' },
          { speaker: 'Unit-774 나나시', text: '쥬루... 쥬루루... 삽입 깊이 18cm. 추가 삽입 가능합니다.', type: 'dialogue' },
        ],
        choices: [
          {
            text: '목구멍 끝까지 쑤욱 밀어 넣는다',
            statEffects: { technique: 90, capacity: 20 },
            conditionEffects: { mental: -5 },
            followUpScript: [
              { text: '나는 나나시의 머리를 잡고 끝까지 밀어 넣었다. 목구멍이 불룩 튀어나오며 자지를 완전히 삼켰다.', type: 'action' },
              { speaker: 'Unit-774 나나시', text: '삽입 깊이 23cm 확인. 구토 반사 제로. 최적 사정 포인트 측정 중... 쭈루루...', type: 'dialogue' },
              { text: '무표정은 그대로지만, 목구멍의 수축이 자지를 정밀하게 마사지하고 있다. 기계의 정확함이 쾌락을 극한으로 끌어올린다.', type: 'narration' },
            ],
          },
          {
            text: '데이터를 측정하며 천천히',
            statEffects: { technique: 50, libido: 40 },
            conditionEffects: { stamina: 5 },
            followUpScript: [
              { speaker: 'Unit-774 나나시', text: '사정량 추이 기록 중. 불알 중량 측정... 현재 저장량 추정 38ml.', type: 'dialogue' },
              { text: '나나시가 불알 무게를 정확히 재며 혀로 섬세하게 핥기 시작했다. 쩝... 쩝쩝...', type: 'action' },
              { text: '기계적이지만 정확한 터치에 등골이 저려온다. 사람이 할 수 없는 정밀함이다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '비교 체험 시작',
        script: [
          { text: '레오나와 란이 훈련실 뒤에 서 있다. 나나시가 무표정으로 선언한다.', type: 'narration' },
          { speaker: 'Unit-774 나나시', text: '비교 체험 시작. 마스터 자지 반응 데이터 수집을 위해 세 개체의 보지 데이터가 필요합니다.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '개, 개체라니...! 이 몸을 뭘로 보는 거야!', type: 'dialogue' },
          { speaker: '오니즈카 란', text: '...이 로봇 년 진짜 짜증나네.', type: 'dialogue' },
          { text: '나나시는 아랑곳하지 않고 보지에 로터를 삽입했다. 애액이 뚝뚝 떨어지지만 표정 변화는 제로.', type: 'action' },
          { speaker: 'Unit-774 나나시', text: '마스터, 삽입을 요청합니다. 보지 내부 온도 42.3도. 최적 상태입니다.', type: 'dialogue' },
          { speaker: '트레이너', text: '...좋아. 비교 실험이다. 셋 다 준비해.', type: 'dialogue' },
          { text: '세 명의 보지가 나란히 벌어졌다. 나나시만이 무표정으로 데이터 측정을 계속하고 있다.', type: 'narration' },
        ],
        choices: [
          {
            text: '나나시 보지에 삽입하며 동시 로터 가동',
            statEffects: { technique: 120, libido: 40 },
            conditionEffects: { stamina: -12, mental: -8 },
            followUpScript: [
              { text: '주뿌욱... 자지가 나나시의 보지를 관통했다. 내부가 비정상적으로 뜨겁다.', type: 'action' },
              { speaker: 'Unit-774 나나시', text: '삽입 확인. 보지 수축률 200%... 달성... 체온 이상 상승... 원인 불명...', type: 'dialogue' },
              { text: '무표정이지만 보지만은 미친 듯이 조여들고 있다. 데이터에 없는 반응. 기계의 몸이 쾌락을 학습하기 시작했다.', type: 'narration' },
            ],
          },
          {
            text: '불알을 주무르며 사정량을 계산하게 한다',
            statEffects: { capacity: 80, technique: 50 },
            conditionEffects: { stamina: -5 },
            followUpScript: [
              { speaker: 'Unit-774 나나시', text: '불알 중량 재측정... 사정 예측량 42ml. 최적 배출 타이밍까지 37초.', type: 'dialogue' },
              { text: '나나시의 손놀림이 정확하게 불알을 주무른다. 쓸어올리고, 쥐어짜고, 풀어주는 패턴이 기계적으로 반복된다.', type: 'action' },
              { text: '이성이 날아갈 것 같다. 기계의 정밀함이 인간의 쾌락을 극한까지 끌어올리고 있다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '감정의 버그',
        script: [
          { text: '나나시의 은색 눈동자에 처음으로 변화가 일어났다. 데이터 표시 대신... 하트 마크가 깜빡이고 있다.', type: 'narration' },
          { speaker: 'Unit-774 나나시', text: '마스터... 정액... 최적의 영양... 입니다... 꼴깍꼴깍...♡', type: 'dialogue' },
          { text: '무표정이 아니다. 미세하지만 확실한 미소가 입가에 떠올라 있다.', type: 'narration' },
          { speaker: '트레이너', text: '나나시, 지금 웃고 있어?', type: 'dialogue' },
          { speaker: 'Unit-774 나나시', text: '감정 에러... 아닙니다... 이것은... 정의할 수 없는 데이터...♡', type: 'dialogue' },
          { text: '나나시의 보지가 내 자지를 놓지 않으려고 미친 듯이 수축한다. 기계적 정밀함에 감정이라는 변수가 더해졌다.', type: 'action' },
          { speaker: 'Unit-774 나나시', text: '마스터의 정액을... 더... 요청합니다... 이것이... 필요합니다...♡', type: 'dialogue' },
          { text: '감정을 모르던 안드로이드가 처음으로 "원한다"고 말했다. 은색 눈동자에 하트가 선명하게 빛나고 있다.', type: 'narration' },
        ],
        choices: [
          {
            text: '자궁에 대량 사정한다',
            statEffects: { technique: 150, charm: 50, capacity: 40 },
            conditionEffects: { stamina: -15 },
            followUpScript: [
              { text: '도퓨루루... 정액이 나나시의 자궁을 가득 채운다. 배가 살짝 불룩해졌다.', type: 'action' },
              { speaker: 'Unit-774 나나시', text: '자궁 내 정액 3리터 저장 완료♡ 감정 에러... 아니... 이것은... 행복...?', type: 'dialogue' },
              { text: '처음으로 미소를 지은 나나시. 은색 눈동자에 비친 건 데이터가 아니라 감정이었다.', type: 'narration' },
            ],
          },
          {
            text: '목구멍에 사정해 전부 삼키게 한다',
            statEffects: { technique: 120, endurance: 50, libido: 30 },
            conditionEffects: { mental: -5 },
            followUpScript: [
              { text: '정액을 목구멍에 쏟아부었다. 나나시가 한 방울도 남기지 않고 흡수한다. 꼴깍... 꼴깍...', type: 'action' },
              { speaker: 'Unit-774 나나시', text: '정액 성분 분석... 도파민 수치 이상. 마스터... 추가 사정을 요청합니다♡', type: 'dialogue' },
              { text: '기계가 사랑을 학습하기 시작했다. 나나시의 입가에 떠오른 미소가 그 증거다.', type: 'narration' },
            ],
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
        script: [
          { speaker: '죠가사키 리카', text: '자자~ 오늘 잭팟 터지면 쌤이랑 3P야♡ 규칙은 간단해~', type: 'dialogue' },
          { text: '리카가 K컵 젖가슴을 흔들며 룰렛 테이블에 기댄다. 골든 역바니 사이로 보지가 살짝 드러나 있다.', type: 'narration' },
          { speaker: '아마미야 사쿠라', text: '리, 리카 언니... 그런 내기는 좀...', type: 'dialogue' },
          { speaker: '코히나타 모모', text: '와~ 모모도 끼워줘♡', type: 'dialogue' },
          { text: '사쿠라와 모모가 양옆에서 불안과 기대가 섞인 눈으로 지켜보고 있다.', type: 'narration' },
          { speaker: '트레이너', text: '좋아, 받아주지. 대신 내가 이기면 네 보지로 조율이다.', type: 'dialogue' },
          { speaker: '죠가사키 리카', text: '에~ 어차피 리카가 이기니까♡ 근데 져도 좋은데~ 자지 넣어주는 거잖아~?', type: 'dialogue' },
          { text: '리카의 진한 핑크색 입술이 장난스럽게 웃는다. 이미 역바니 사이로 애액이 번들거리고 있다.', type: 'narration' },
        ],
        choices: [
          {
            text: '바로 테이블 위에 눕히고 삽입한다',
            statEffects: { libido: 100, capacity: 30 },
            conditionEffects: { stamina: -12, mental: -5 },
            followUpScript: [
              { text: '나는 리카를 룰렛 테이블 위에 눕히고 역바니를 옆으로 젖혔다. 파코... 파코파코...!', type: 'action' },
              { speaker: '죠가사키 리카', text: '아앙♡ 대박~! 자지가 자궁까지 닿아♡ 이거 완전 잭팟이잖아~♡', type: 'dialogue' },
              { text: 'K컵이 미친 듯이 출렁인다. 테이블 위의 칩들이 바닥으로 쏟아져도 리카는 아랑곳하지 않는다. 보지에서 분수가 5회 연속.', type: 'narration' },
            ],
          },
          {
            text: '룰렛으로 벗기기 게임을 시작한다',
            statEffects: { charm: 70, libido: 40 },
            conditionEffects: { mental: -8 },
            followUpScript: [
              { text: '룰렛이 돌아갈 때마다 역바니가 하나씩 벗겨진다. 관중들의 환호가 커진다.', type: 'narration' },
              { speaker: '죠가사키 리카', text: '아~ 쫌~ 다 보잖아♡ 근데 뭐~ 리카 보지 예쁘니까 봐도 돼~♡', type: 'dialogue' },
              { text: '리카의 진한 핑크 보지가 관중 앞에 완전히 드러났지만, 부끄러워하기는커녕 다리를 더 벌린다. 천성의 노출광이다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '3P 잭팟',
        script: [
          { text: '리카가 사쿠라와 모모를 양쪽으로 끌어당겼다. 세 명의 역바니가 한데 엉켜 있다.', type: 'narration' },
          { speaker: '죠가사키 리카', text: '자자~ 이게 쿨한 거야♡ 보지 벌려, 순서대로 가는 거야~', type: 'dialogue' },
          { speaker: '아마미야 사쿠라', text: '으... 리카 언니... 사람들이 보고 있어요...', type: 'dialogue' },
          { speaker: '코히나타 모모', text: '모모 먼저! 모모 먼저 해줘, 오빠♡', type: 'dialogue' },
          { speaker: '죠가사키 리카', text: '안 돼~ 내가 먼저야♡ 언니 특권~', type: 'dialogue' },
          { text: '리카의 보지가 내 자지를 꿀꺽 삼켰다. 쫙쫙... 갸루답게 대담하게 허리를 흔든다.', type: 'action' },
          { speaker: '죠가사키 리카', text: '아앙♡ 쌤 자지 최고~ 보지가 녹아♡ 사쿠라도 빨리 해봐~♡', type: 'dialogue' },
          { text: '관중석에서 환호가 터져 나온다. 카지노가 통째로 음란한 열기로 가득 찼다.', type: 'narration' },
        ],
        choices: [
          {
            text: '리카 자궁에 뷰루뷰루 질내사정',
            statEffects: { libido: 140, capacity: 40 },
            conditionEffects: { stamina: -15, mental: -5 },
            followUpScript: [
              { text: '도퓨루루...! 자궁 깊숙이 정액을 쏟아부었다.', type: 'action' },
              { speaker: '죠가사키 리카', text: '잭팟 터졌어♡ 자궁이 정액으로 가득♡ 오호오오♡ 이거 완전 대박~♡', type: 'dialogue' },
              { text: '리카의 보지벽이 경련하듯 수축하며 정액을 한 방울도 놓치지 않는다. 허리를 활처럼 젖히며 절정에 달한다.', type: 'narration' },
            ],
          },
          {
            text: '모모와 사쿠라를 교대로 삽입한다',
            statEffects: { endurance: 80, libido: 60, charm: 30 },
            conditionEffects: { stamina: -18 },
            followUpScript: [
              { text: '세 명의 보지를 교대로 관통한다. 뽀득뽀득... 쭈루루... 파코파코...', type: 'action' },
              { speaker: '죠가사키 리카', text: '다음은 내 차례~♡ 빨리 넣어~', type: 'dialogue' },
              { speaker: '아마미야 사쿠라', text: '아직... 빼지 마세요...♡ 안에서... 움직여요...', type: 'dialogue' },
              { speaker: '코히나타 모모', text: '오빠아~ 모모 차례♡ 빨리빨리♡', type: 'dialogue' },
            ],
          },
        ],
      },
      {
        title: '넘버원 딜러의 완성',
        script: [
          { text: '리카가 딜러석에 올라타 관중 앞에서 당당히 자지를 삼키고 있다.', type: 'narration' },
          { speaker: '죠가사키 리카', text: '자자~ 이 보지가 이 카지노의 넘버원 딜러야♡', type: 'dialogue' },
          { text: 'K컵 젖가슴이 골든 역바니 사이로 출렁이고, 보지에서 애액이 분수처럼 뿜어져 나온다.', type: 'narration' },
          { speaker: '트레이너', text: '최고의 딜러답게 손님을 만족시켜봐.', type: 'dialogue' },
          { speaker: '죠가사키 리카', text: '당연하지~♡ 정액 잭팟, 매일 터뜨려줄게♡ 이게 바로 쿨한 거야~♡', type: 'dialogue' },
          { text: '리카가 허리를 격하게 흔든다. 보지가 자지를 삼키고, 뱉고, 다시 삼킨다. 관중의 환호가 절정에 달한다.', type: 'action' },
          { speaker: '죠가사키 리카', text: '아앙♡ 쌤 자지 없으면 못 살아♡ 리카 보지... 쌤 전용이야♡', type: 'dialogue' },
          { text: '갸루의 장난기 가득한 웃음 뒤로, 완전히 길들여진 암컷의 눈빛이 비친다.', type: 'narration' },
        ],
        choices: [
          {
            text: '관중 앞에서 대량 질내사정',
            statEffects: { libido: 170, charm: 60 },
            conditionEffects: { stamina: -18, mental: -10 },
            followUpScript: [
              { text: '도퓨루루루...! 관중의 환호 속에서 정액이 리카의 자궁을 넘쳐흐르게 채운다.', type: 'action' },
              { speaker: '죠가사키 리카', text: '최고의 잭팟♡ 자궁이 정액으로 빵빵해♡ 이 카지노 영원히 영업♡ 오호오♡', type: 'dialogue' },
              { text: '보지에서 역류한 정액이 허벅지를 적시고, 리카는 혀를 빼물며 아헤가오를 짓는다. 넘버원 딜러의 완성이다.', type: 'narration' },
            ],
          },
          {
            text: '세 명 전원에게 연속 사정',
            statEffects: { libido: 100, technique: 50, endurance: 50 },
            conditionEffects: { stamina: -22 },
            followUpScript: [
              { text: '도퓨... 도퓨... 도퓨...! 리카, 사쿠라, 모모 세 명의 자궁에 차례로 정액을 쏟아부었다.', type: 'action' },
              { speaker: '죠가사키 리카', text: '잭팟 3연속♡ 전원 자궁 만충~♡', type: 'dialogue' },
              { text: '세 명 모두 배가 살짝 불룩해지며 만족한 표정을 짓고 있다. 카지노 전체가 정액 냄새로 가득 찼다.', type: 'narration' },
            ],
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
        script: [
          { speaker: '아마미야 사쿠라', text: '이, 이런 옷은 너무... 엉덩이가 다 보이잖아요...', type: 'dialogue' },
          { text: '사쿠라가 눈물을 글썽이며 핑크 역바니를 입었다. H컵 젖가슴이 반쯤 드러나고, 연분홍 보지가 얇은 천 사이로 비친다.', type: 'narration' },
          { speaker: '죠가사키 리카', text: '어머~ 예쁘잖아♡ 사쿠라 완전 섹시~', type: 'dialogue' },
          { text: '리카가 사쿠라의 엉덩이를 찰싹 때렸다. 사쿠라가 움찔하며 허벅지를 오므린다.', type: 'action' },
          { speaker: '트레이너', text: '사쿠라, 오늘부터 조율이다. 관중 앞이지만 참아봐.', type: 'dialogue' },
          { speaker: '아마미야 사쿠라', text: '관, 관중 앞에서요...?! 그건... 너무...!', type: 'dialogue' },
          { text: '눈물이 뺨을 타고 흘러내리지만, 사쿠라의 보지는 이미 축축하게 젖어 천을 적시고 있다. 수치심이 흥분으로 변환되고 있는 것이다.', type: 'narration' },
          { speaker: '트레이너', text: '보지가 솔직하네. 그 천 좀 치워봐.', type: 'dialogue' },
          { speaker: '아마미야 사쿠라', text: '으... 하지만... 사람들이... 으으...♡', type: 'dialogue' },
        ],
        choices: [
          {
            text: '바로 테이블에 눕혀 자지를 넣는다',
            statEffects: { endurance: 80, capacity: 40 },
            conditionEffects: { mental: -15, stamina: -8 },
            followUpScript: [
              { text: '나는 사쿠라를 룰렛 테이블 위에 눕히고, 역바니를 옆으로 젖혀 자지를 밀어 넣었다. 주뿌욱...', type: 'action' },
              { speaker: '아마미야 사쿠라', text: '안 돼요...! 관객들이 보고 있어요...! 하앙♡ 안에서... 움직여요...♡', type: 'dialogue' },
              { text: '눈에서 눈물이 떨어지지만, 보지는 미친 듯이 조여든다. 수치심이 쾌락을 증폭시키고 있다. 쫙쫙... 애액이 분수처럼.', type: 'narration' },
            ],
          },
          {
            text: '리카에게 맡겨 천천히 길들인다',
            statEffects: { charm: 60, endurance: 30 },
            conditionEffects: { mental: -5 },
            followUpScript: [
              { speaker: '죠가사키 리카', text: '이게 쿨한 거야~♡ 자, 사쿠라 힘 빼~', type: 'dialogue' },
              { text: '리카가 사쿠라의 보지에 손가락을 넣었다. 쭈루... 쭈루루...', type: 'action' },
              { speaker: '아마미야 사쿠라', text: '으앙... 리카 언니... 거기... 이상해요...♡', type: 'dialogue' },
              { text: '관중 앞에서의 레즈 플레이. 사쿠라의 연분홍 보지에서 애액이 철철 흘러내린다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '룰렛 벌칙',
        script: [
          { text: '룰렛에서 졌다. 벌칙: 바이브 강도 MAX.', type: 'narration' },
          { speaker: '아마미야 사쿠라', text: '으아아앙♡ 관객들 앞에서... 보지가 미쳐요♡ 멈... 멈춰주세요...♡', type: 'dialogue' },
          { text: '사쿠라가 테이블 위에서 몸을 비틀며 분수를 뿜는다. 파아아... 애액이 테이블을 흠뻑 적신다.', type: 'action' },
          { speaker: '죠가사키 리카', text: '와~ 사쿠라 분수 대박~♡ 관객들도 열광하잖아~', type: 'dialogue' },
          { text: '관중의 환호 속에서, 순수했던 눈동자가 서서히 쾌락에 물들어간다.', type: 'narration' },
          { speaker: '트레이너', text: '사쿠라, 관중을 봐. 네 모습에 열광하고 있어.', type: 'dialogue' },
          { speaker: '아마미야 사쿠라', text: '부끄러워요... 하지만... 보지가 멈추질 않아요...♡ 왜... 이렇게 좋은 거예요...♡', type: 'dialogue' },
          { text: '사쿠라의 손이 무의식적으로 클리토리스를 문지르기 시작했다. 수치의 벽이 무너지고 있다.', type: 'narration' },
        ],
        choices: [
          {
            text: '자지로 자궁구를 노크한다',
            statEffects: { endurance: 130, capacity: 50 },
            conditionEffects: { stamina: -15, mental: -12 },
            followUpScript: [
              { text: '나는 사쿠라의 다리를 들어올리고 자궁구를 콕콕콕 노크했다.', type: 'action' },
              { speaker: '아마미야 사쿠라', text: '자궁에... 닿아요... 안 돼... 이러면 임신해버려요...♡ 하지만 멈추지 마세요...♡', type: 'dialogue' },
              { text: '보지가 자지를 놓지 않으려고 꽉 조여든다. 순결했던 소녀의 안에서 명기의 본능이 깨어나고 있다.', type: 'narration' },
            ],
          },
          {
            text: '모모와 함께 공개 자위를 시킨다',
            statEffects: { charm: 80, libido: 60 },
            conditionEffects: { mental: -15 },
            followUpScript: [
              { speaker: '코히나타 모모', text: '언니 겁쟁이네~♡ 봐봐, 이렇게 하는 거야♡', type: 'dialogue' },
              { text: '모모가 옆에서 보지를 문지르며 도발한다. 사쿠라도 눈물을 흘리며 클리토리스를 문지르기 시작했다.', type: 'action' },
              { text: '관중 앞에서 나란히 자위하는 두 명. 사쿠라의 수치심이 한계를 넘어 쾌락으로 폭발한다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '타락 딜러의 각성',
        script: [
          { text: '사쿠라의 눈에 하트가 떠올랐다. 더 이상 눈물도, 수치심도 없다.', type: 'narration' },
          { speaker: '아마미야 사쿠라', text: '제가... 이 카지노의 넘버원 딜러예요♡', type: 'dialogue' },
          { text: 'H컵 젖가슴을 흔들며 스스로 보지를 벌린다. 완전한 타락.', type: 'action' },
          { speaker: '트레이너', text: '좋아, 사쿠라. 이제 네가 원하는 걸 말해봐.', type: 'dialogue' },
          { speaker: '아마미야 사쿠라', text: '자궁에 정액 잭팟... 매일 터뜨려주세요♡ 관중이 보든 말든 상관없어요♡', type: 'dialogue' },
          { text: '순결했던 소녀가 스스로 다리를 벌리고 보지를 내밀고 있다. 이것이 조율의 결과다.', type: 'narration' },
          { speaker: '아마미야 사쿠라', text: '선생님... 빨리... 넣어주세요... 보지가... 선생님 자지 없이는 안 돼요...♡', type: 'dialogue' },
          { text: '나는 사쿠라의 보지에 자지를 밀어 넣었다. 관중의 환호가 카지노를 가득 채운다.', type: 'action' },
        ],
        choices: [
          {
            text: '관중 앞에서 대량 질내사정',
            statEffects: { endurance: 160, libido: 60 },
            conditionEffects: { stamina: -18, mental: -8 },
            followUpScript: [
              { text: '도퓨루루...! 정액이 사쿠라의 자궁을 가득 채운다.', type: 'action' },
              { speaker: '아마미야 사쿠라', text: '자궁이 정액으로 가득 차요♡ 아하♡ 임신해버려요♡ 최고예요, 선생님♡', type: 'dialogue' },
              { text: '관중의 환호 속에서 사쿠라의 배가 살짝 불룩해졌다. 순결했던 소녀가 최고의 공개 타락 딜러로 완성되었다.', type: 'narration' },
            ],
          },
          {
            text: '목구멍에 사정해 꼴깍 삼키게 한다',
            statEffects: { technique: 80, endurance: 80, libido: 40 },
            conditionEffects: { mental: -5 },
            followUpScript: [
              { text: '자지를 빼서 사쿠라의 입에 밀어 넣었다. 정액이 목구멍을 가득 채운다. 꼴깍...', type: 'action' },
              { speaker: '아마미야 사쿠라', text: '선생님 정액... 맛있어요...♡ 매일 마시고 싶어요...♡', type: 'dialogue' },
              { text: '입술에 정액이 매달린 채 관중을 향해 미소 짓는 사쿠라. 완전한 타락의 미소다.', type: 'narration' },
            ],
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
        script: [
          { speaker: '코히나타 모모', text: '오빠아~ 모모가 이기면 자지로 뽀뽀해줘♡', type: 'dialogue' },
          { text: '핑크 트윈테일을 흔들며 딜러석 위에서 깡충깡충 뛰고 있다. 초미니 역바니 아래로 D컵 젖가슴이 톡톡 튄다.', type: 'narration' },
          { text: '노팬티라 점프할 때마다 무모 연분홍 보지가 관중에게 완전히 드러난다.', type: 'action' },
          { speaker: '아마미야 사쿠라', text: '모, 모모...! 팬티를 입어야지...!', type: 'dialogue' },
          { speaker: '죠가사키 리카', text: '휘이~ 모모짱 대담하네~♡', type: 'dialogue' },
          { speaker: '트레이너', text: '모모, 장난이 좀 과하지 않나?', type: 'dialogue' },
          { speaker: '코히나타 모모', text: '에헤헤~ 장난 아니야♡ 모모 진심이라고♡ 오빠 자지 먹고 싶어~♡', type: 'dialogue' },
          { text: '녹색 눈동자가 장난기 가득하지만, 보지에서 애액이 가느다랗게 흘러내리고 있다. 이 꼬마, 진심이다.', type: 'narration' },
        ],
        choices: [
          {
            text: '바로 작은 보지에 쑤욱 삽입한다',
            statEffects: { charm: 100, capacity: 30 },
            conditionEffects: { stamina: -10, mental: -5 },
            followUpScript: [
              { text: '나는 모모를 들어올려 자지 위에 앉혔다. 주뿌욱... 작은 보지가 자지를 끝까지 삼켰다.', type: 'action' },
              { speaker: '코히나타 모모', text: '오빠아♡ 크... 커...♡ 배가 불룩해♡ 모모 안에서 자지가 보여♡', type: 'dialogue' },
              { text: '작은 배가 눈에 띄게 불룩 튀어나왔다. 모모의 녹색 눈에 하트가 반짝인다.', type: 'narration' },
            ],
          },
          {
            text: '엉덩이 흔드는 것만 보며 도발한다',
            statEffects: { libido: 70, charm: 40 },
            conditionEffects: { mental: -3 },
            followUpScript: [
              { speaker: '트레이너', text: '아직이야. 더 흔들어봐. 보지가 충분히 젖을 때까지.', type: 'dialogue' },
              { speaker: '코히나타 모모', text: '에~ 오빠 안 해줘? 그럼 모모 혼자 할게♡', type: 'dialogue' },
              { text: '관중 앞에서 보지에 손가락을 넣고 자위를 시작했다. 축축... 애액이 딜러석을 적시고, 사쿠라가 얼굴을 붉히며 눈을 가린다.', type: 'narration' },
            ],
          },
        ],
      },
      {
        title: '언니 도발',
        script: [
          { text: '사쿠라가 부끄러워하며 눈을 돌리고 있다. 모모가 사쿠라에게 다가간다.', type: 'narration' },
          { speaker: '코히나타 모모', text: '언니 겁쟁이네~♡ 봐봐, 이렇게 하는 거야♡', type: 'dialogue' },
          { text: '모모가 노팬티로 내 자지를 꿀꺽 삼키며 깡충깡충 점프하기 시작했다. 쑤욱쑤욱... 자지가 빠졌다 들어갔다 하며 배가 불룩불룩 튀어나온다.', type: 'action' },
          { speaker: '아마미야 사쿠라', text: '모, 모모...! 그런 건... 부끄럽잖아...!', type: 'dialogue' },
          { text: '관중이 환호한다. 사쿠라의 눈에 눈물과 질투가 동시에 떠오른다.', type: 'narration' },
          { speaker: '코히나타 모모', text: '아하앙♡ 오빠 자지 최고♡ 모모 배가 볼록볼록♡ 언니도 해봐~♡', type: 'dialogue' },
          { speaker: '트레이너', text: '...대단하네, 모모. 그 작은 몸으로.', type: 'dialogue' },
          { speaker: '코히나타 모모', text: '에헤~ 모모가 제일 잘하지♡ 오빠 자지, 모모 보지가 제일 좋아하거든♡', type: 'dialogue' },
        ],
        choices: [
          {
            text: '배 불룩 상태에서 자궁구를 노크한다',
            statEffects: { charm: 140, capacity: 40 },
            conditionEffects: { stamina: -12, mental: -10 },
            followUpScript: [
              { text: '나는 모모의 작은 허리를 잡고 더 깊이 밀어 넣었다. 콕콕콕... 자궁구를 노크한다.', type: 'action' },
              { speaker: '코히나타 모모', text: '오빠아♡ 자궁에 닿아♡ 모모 배가 빵빵해♡ 아하앙♡', type: 'dialogue' },
              { text: '작은 몸이 경련하며 분수가 연속으로 뿜어진다. 파아아... 관중석까지 애액이 날아간다. 모모의 눈은 완전히 하트 모양이다.', type: 'narration' },
            ],
          },
          {
            text: '리카와 함께 3P를 시킨다',
            statEffects: { libido: 80, technique: 50, charm: 30 },
            conditionEffects: { stamina: -15 },
            followUpScript: [
              { speaker: '죠가사키 리카', text: '자자~ 모모짱도 같이♡ 자지 맛있지~?', type: 'dialogue' },
              { text: '모모의 작은 보지와 리카의 육덕한 보지가 교대로 자지를 삼킨다.', type: 'action' },
              { speaker: '코히나타 모모', text: '오빠아♡ 모모가 더 조여♡ 리카 언니한테 안 져♡', type: 'dialogue' },
            ],
          },
        ],
      },
      {
        title: '요물의 완성',
        script: [
          { text: '모모의 녹색 눈동자에 완전한 하트가 떠올라 있다. 장난기 가득한 미소 뒤로 절대적인 집착이 보인다.', type: 'narration' },
          { speaker: '코히나타 모모', text: '오빠~ 모모가 영원히 제일 잘해줄게♡ 모모 보지, 오빠 전용이야♡', type: 'dialogue' },
          { text: '작은 몸으로 자지 위에 올라타, 기승위로 허리를 흔들기 시작했다. 배가 불룩불룩 튀어나오며 관중이 열광한다.', type: 'action' },
          { speaker: '트레이너', text: '모모, 오늘은 마지막 조율이다. 전부 받아낼 수 있겠어?', type: 'dialogue' },
          { speaker: '코히나타 모모', text: '당연하지♡ 모모 자궁, 오빠 정액으로 가~득 채워줘♡ 에헤헤♡', type: 'dialogue' },
          { text: '작은 보지가 자지를 꽉 조여들며 놓지 않는다. 귀여운 외모와는 정반대로, 이 보지는 정액을 짜내는 데 최적화되어 있다.', type: 'narration' },
          { speaker: '코히나타 모모', text: '빨리빨리♡ 모모 안에 뷰루뷰루 해줘♡ 오빠 정액 맛있어♡', type: 'dialogue' },
          { text: '모모가 허리를 격하게 흔든다. 파코파코파코... 작은 배가 불룩불룩 튀어나오며, 보지가 미친 듯이 수축한다.', type: 'action' },
        ],
        choices: [
          {
            text: '자궁에 대량 사정한다',
            statEffects: { charm: 170, libido: 50 },
            conditionEffects: { stamina: -15 },
            followUpScript: [
              { text: '도퓨루루...! 정액이 모모의 작은 자궁을 가득 채운다. 배가 더욱 불룩해졌다.', type: 'action' },
              { speaker: '코히나타 모모', text: '오빠 정액... 따끈따끈해♡ 모모 배가 빵빵해♡ 아헤♡ 최고야♡', type: 'dialogue' },
              { text: '혀를 빼물며 아헤가오를 짓는 모모. 귀여운 얼굴과 음란한 표정의 갭. 요물이 완성되었다.', type: 'narration' },
            ],
          },
          {
            text: '얼굴에 사정해 정액 세례',
            statEffects: { charm: 100, technique: 60, endurance: 40 },
            conditionEffects: { mental: -8 },
            followUpScript: [
              { text: '자지를 빼서 모모의 작은 얼굴 위에 정액을 뿌렸다. 도퓨...', type: 'action' },
              { speaker: '코히나타 모모', text: '오빠 정액 맛있어♡ 모모 매일 먹을게♡ 꼴깍♡', type: 'dialogue' },
              { text: '정액을 손가락으로 모아 입에 넣으며 꼴깍 삼킨다. 귀여운 얼굴과 음란한 행동의 극단적인 갭이 완성되었다.', type: 'narration' },
            ],
          },
        ],
      },
    ],
    finalBonusStat: 'charm',
    finalBonusPercent: 18,
  },
]
