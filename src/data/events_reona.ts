import { GameEvent } from '../types/game'

export const eventsReona: GameEvent[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 봄 (Turn 1~12): 싹트는 욕망
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 프롤로그
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 봄 (Turn 1~12): 오만의 탑 — 철벽 저항
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 프롤로그 (기존 재작성 버전 유지)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 프롤로그 — 국가 최후의 카드
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{
  id: 'prologue',
  title: '국가 최후의 카드 — 자궁 조율사의 탄생',
  trigger: { type: 'turn', turn: 1 },
  heroineId: 'leona',
  script: [
    { text: '2047년. 인류는 이미 15년째 출생률 0.3명을 기록하며 멸종의 문턱에 서 있었다.', type: 'narration' },
    { text: '도쿄의 거리는 텅 비어 있었다. 한때는 사람으로 가득했던 신주쿠 거리는 이제 드문드문 지나가는 노인들과, 출산 장려 포스터만이 바람에 펄럭이고 있었다.', type: 'narration' },
    { text: '정부는 마지막 카드를 꺼냈다. 더 이상 말로, 정책으로, 돈으로 해결할 수 없는 상황. 여성의 몸 자체를 국가의 생산 공장으로 재정의하는 극단적인 선택.', type: 'narration' },
    { text: '그 이름은 — 사립 메스이키 학원.', type: 'narration' },
    { text: '지하 300미터에 건설된 거대한 원형 홀. 천장에는 국가 상징인 황금 자궁 문양이 새겨져 있고, 수백 명의 정치인, 과학자, 군 장성들이 숨죽인 채 단상을 바라보고 있었다.', type: 'narration' },
    { text: '조명 하나가 켜지며, 하얀 가운을 입은 여자가 단상 위로 올라왔다. 키리시마 레이카. 국가 최상위 생체공학 책임자이자, 이 프로젝트의 실질적 총책임자.', type: 'narration' },
    { speaker: '키리시마 레이카', text: '여러분. 더 이상 숨길 필요 없습니다. 우리는 이제 여성의 자궁을 국가의 최종 병기로 삼아야 합니다.', type: 'dialogue' },
    { speaker: '키리시마 레이카', text: '출생률 0.3. 이 숫자는 인류의 사형선고입니다. 하지만 우리는 포기하지 않습니다. 최고의 미소녀들, 최고의 혈통, 최고의 육체를 선별하여… 한 명이 평생 50명 이상의 아이를 낳을 수 있는 완벽한 착유기로 개조합니다.', type: 'dialogue' },
    { speaker: '키리시마 레이카', text: '그리고 그 개조를 가능하게 할 단 하나의 열쇠.', type: 'dialogue' },
    { text: '레이카의 목소리가 낮아졌다. 홀 전체가 숨을 죽였다.', type: 'narration' },
    { speaker: '키리시마 레이카', text: '세계에 단 7명뿐인 초월 자지 소유자. 여성의 자궁을 본능적으로 깨우고, 타락시키고, 완전한 메스로 만드는… 자궁 조율사.', type: 'dialogue' },
    { text: '조명이 당신을 비췄다. 검은 정장, 차분한 걸음걸이, 그러나 그 안에서 뿜어져 나오는 압도적인 존재감. 홀 안의 모든 여성이 본능적으로 허벅지를 오므렸다.', type: 'narration' },
    { speaker: '키리시마 레이카', text: '그리고 오늘, 첫 번째 대상이 결정되었습니다.', type: 'dialogue' },
    { text: '거대한 홀로그램이 떠올랐다. 금발 드릴 트윈테일, 에메랄드빛 눈동자, 완벽한 L컵과 잘록한 허리, 그리고 그 모든 것을 압도하는 오만한 미소.', type: 'narration' },
    { speaker: '키리시마 레이카', text: '사이온지 가문의 장녀, 사이온지 레오나. 국가 최고 혈통이자, 가장 완고하고 가장 고귀한 오만의 화신.', type: 'dialogue' },
    { speaker: '키리시마 레이카', text: '이 아이를… 당신의 자지로 완벽한 메스이키로 만들어 주십시오. 그녀의 자존심을, 혈통을, 영혼까지 철저히 짓밟아서… 국가를 위해, 인류를 위해, 그리고 당신의 쾌락을 위해.', type: 'dialogue' },
    { text: '홀이 술렁였다. 일부 정치인은 얼굴을 붉혔고, 일부 과학자는 침을 삼켰다.', type: 'narration' },
    { text: '당신은 조용히 미소 지었다.', type: 'thought' },
    { text: '사이온지 레오나… 최고의 혈통, 최고의 자존심. 부수는 맛이 정말로 기대되는군.', type: 'thought' },
    { text: '레이카가 당신을 바라보며 낮게 속삭였다.', type: 'narration' },
    { speaker: '키리시마 레이카', text: '그녀는 이미 대기실에서 기다리고 있습니다. 상당히… 불만스러운 표정으로요.', type: 'dialogue' },
  ],
  choices: [
    {
      text: '받아들인다 — "내 자지에 맡겨라."',
      statEffects: { charm: 20, libido: 10 },
      conditionEffects: { mental: 8 },
      followUpScript: [
        { speaker: '트레이너', text: '좋아. 맡기지. 그 오만한 영애의 보지부터 항문까지, 자궁구까지… 전부 내 자지에 맞춰서 완벽한 메스로 개조해 주겠다.', type: 'dialogue' },
        { text: '레이카의 입꼬리가 올라갔다. 그녀의 눈동자에 탐욕과 기대가 동시에 번뜩였다.', type: 'narration' },
        { speaker: '키리시마 레이카', text: '기대하고 있겠습니다. 사이온지 레오나는 이미 당신을 기다리고 있어요. …그리고 그녀의 몸은 아직 아무도 건드리지 않은, 완벽한 원석입니다.', type: 'dialogue' },
        { text: '당신은 천천히 걸음을 옮겼다. 대기실로 향하는 복도마다, 당신의 발소리가 메아리쳤다. 곧 만날 그 오만한 영애의 몸이, 이미 당신의 손끝에서 떨리고 있는 것처럼 느껴졌다.', type: 'narration' },
      ],
    },
    {
      text: '조건을 건다 — "전권을 보장해라. 사이온지 가문이건 뭐건 간섭하지 마."',
      statEffects: { technique: 15, charm: 15 },
      conditionEffects: { mental: 5 },
      followUpScript: [
        { speaker: '트레이너', text: '한 가지 조건이 있다. 사이온지 가문이건, 국가건, 누구도 내 조교 방식에 간섭하지 마. 그녀는 내 앞에선 그저 하나의 암컷일 뿐이다.', type: 'dialogue' },
        { speaker: '키리시마 레이카', text: '…좋습니다. 결과만 내 주신다면, 사이온지 가문의 항의든 뭐든 제가 전부 막아드리죠.', type: 'dialogue' },
        { text: '레이카가 깊이 고개를 숙였다. 당신은 만족스럽게 웃었다. 이제 그 오만한 영애는, 완전히 당신의 손아귀 안에 들어왔다.', type: 'narration' },
      ],
    },
  ],
},
  // 첫 만남 — 완전 거부
  {
    id: 'first-refusal',
    title: '첫 번째 조율 — 철벽의 영애',
    trigger: { type: 'turn', turn: 3 },
    heroineId: 'leona',
    script: [
      { text: '빈 교실. 석양이 커튼 사이로 길게 드리워져 있다.', type: 'narration' },
      { text: '사이온지 레오나가 팔짱을 끼고 서 있다. 로얄 메이드복의 치마는 짧지만, 그녀의 태도는 더없이 높다. 에메랄드 눈동자가 당신을 내려다보고 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '흥. 당신이 그 유명한 자궁 조율사인가요? 사이온지 가문의 영애에게 손을 대겠다는 오만은 가상하지만… 불가능합니다.', type: 'dialogue' },
      { speaker: '사이온지 레오나', text: '내 몸은 고귀합니다. 당신 같은 자가 만질 수 있는 곳이 아니에요. 대신…', type: 'dialogue' },
      { text: '레오나가 손가락을 튕겼다. 문이 열리고 Unit-774 나나시가 무표정하게 들어왔다.', type: 'action' },
      { speaker: '사이온지 레오나', text: '나나시. 네가 대신 처리해. 완벽하게. 사이온지 가문의 메이드로서 부족함이 없도록.', type: 'dialogue' },
      { speaker: 'Unit-774 나나시', text: '마스터, 사정 관리 모드 가동. 효율 98.7%.', type: 'dialogue' },
      { text: '나나시가 무릎을 꿇고 당신의 바지를 내리기 시작했다. 레오나는 팔짱을 낀 채 벽에 기대서 지켜보고 있다. 그녀의 에메랄드 눈에 미세한 동요가 스친다.', type: 'narration' },
    ],
    choices: [
      {
        text: '나나시에게 맡긴다 — 레오나를 계속 지켜본다',
        statEffects: { charm: 25, endurance: 15 },
        conditionEffects: { mental: -8 },
        followUpScript: [
          { text: '나나시의 딥스로트는 완벽했다. 레오나의 눈이 점점 커진다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '……흥. 역시 기계는 효율적이라니까요.', type: 'dialogue' },
          { text: '하지만 그녀의 손가락이 팔짱을 더 세게 움켜쥐고 있다. 질투의 씨앗이 아주 조금씩 싹트기 시작했다.', type: 'narration' },
        ],
      },
      {
        text: '레오나에게 직접 명령한다 — "네가 직접 해라"',
        statEffects: { technique: 20, charm: 20 },
        conditionEffects: { mental: -15 },
        followUpScript: [
          { speaker: '트레이너', text: '명령이다, 영애님. 네가 직접 무릎 꿇어.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '……절대. 사이온지 가문의 영애가 그런 천박한 짓을 할 리가 없잖아요!', type: 'dialogue' },
          { text: '레오나의 목소리가 살짝 떨렸다. 그러나 그녀는 끝까지 고개를 돌리지 않았다.', type: 'narration' },
        ],
      },
    ],
  },

  // 라이벌 스파크 — 나나시와 란의 활약
  {
    id: 'rivalry-spark',
    title: '비교 체험 — 영애의 소외감',
    trigger: { type: 'turn', turn: 6 },
    heroineId: 'leona',
    script: [
      { text: '훈련실. 당신 앞에 란과 나나시가 동시에 무릎 꿇어 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '오늘은 나나시와 란에게 맡기겠어요. 사이온지 가문의 영애는… 지켜보는 역할이 적합하니까요.', type: 'dialogue' },
      { text: '란은 야쿠자 문신이 드러난 채 거칠게 자지를 삼키고, 나나시는 무표정으로 완벽한 딥스로트를 선보인다.', type: 'action' },
      { speaker: '오니즈카 란', text: '아앙? 주인님 자지… 진짜 맛있네…♡', type: 'dialogue' },
      { speaker: 'Unit-774 나나시', text: '사정량 94%. 최적 배출 준비 완료.', type: 'dialogue' },
      { text: '레오나는 팔짱을 낀 채 벽에 기대서 보고 있다. 그러나 그녀의 손가락은 점점 더 세게 팔을 움켜쥐고 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '(속으로) …저런 천박한 년들이… 왜 그렇게 좋아 보이는 거지?', type: 'thought' },
    ],
    choices: [
      {
        text: '란과 나나시를 극찬한다',
        statEffects: { libido: 30, charm: 25 },
        conditionEffects: { mental: -12 },
        followUpScript: [
          { speaker: '트레이너', text: '란, 나나시… 둘 다 최고야.', type: 'dialogue' },
          { text: '레오나의 에메랄드 눈이 순간 흔들렸다. 그녀는 아무 말 없이 고개를 돌렸다.', type: 'narration' },
        ],
      },
      {
        text: '레오나를 일부러 무시한다',
        statEffects: { charm: 35, endurance: 20 },
        conditionEffects: { mental: -18 },
        followUpScript: [
          { text: '당신은 레오나를 한 번도 쳐다보지 않고 두 사람에게만 집중했다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '……흥.', type: 'dialogue' },
          { text: '레오나의 손톱이 자신의 팔에 파고들었다. 질투가 서서히 불타오르고 있다.', type: 'narration' },
        ],
      },
    ],
  },

  // 숨겨진 질투
  {
    id: 'hidden-jealousy',
    title: '숨겨진 질투 — 영애의 부정',
    trigger: { type: 'turn', turn: 9 },
    heroineId: 'leona',
    script: [
      { text: '늦은 밤, 로얄 메이드부 부실.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '…오늘도 나나시와 란이 당신을 즐겁게 해 드렸나요?', type: 'dialogue' },
      { text: '레오나는 창가에 서서 달을 보고 있다. 목소리는 평소처럼 거만하지만, 미세하게 떨리고 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '흥. 저런 천박한 년들에게 맡겨두는 게 편하시다면… 사이온지 가문의 영애는 상관없어요. 저는… 그냥 지켜보고 있을게요.', type: 'dialogue' },
      { text: '그녀의 손이 치마 자락을 세게 움켜쥐고 있다. 속으로는 완전히 다른 말이 맴돌고 있다.', type: 'thought' },
      { text: '(속으로) 왜… 왜 저년들이 그렇게 좋아 보이는 거지? 내가… 내가 더 고귀한데…', type: 'thought' },
    ],
    choices: [
      {
        text: '“네가 직접 해볼래?”라고 물어본다',
        statEffects: { charm: 30, libido: 25 },
        conditionEffects: { mental: -20 },
        followUpScript: [
          { speaker: '사이온지 레오나', text: '……절대. 사이온지 가문의 영애가 그런 천박한 짓을 할 리가 없잖아요!', type: 'dialogue' },
          { text: '레오나는 고개를 홱 돌렸다. 그러나 그녀의 귀가 붉게 물들어 있었다.', type: 'narration' },
        ],
      },
      {
        text: '그냥 웃으며 넘어간다',
        statEffects: { endurance: 35, charm: 25 },
        conditionEffects: { mental: -15 },
        followUpScript: [
          { text: '당신이 미소만 지으며 고개를 끄덕이자, 레오나의 눈에 순간적으로 절망 비슷한 빛이 스쳤다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '……흥. 역시.', type: 'dialogue' },
        ],
      },
    ],
  },

  // 봄의 위기 — 저항의 한계
  {
    id: 'spring-crisis',
    title: '봄의 위기 — 영애의 한계',
    trigger: { type: 'turn', turn: 12 },
    heroineId: 'leona',
    script: [
      { text: '훈련실. 레오나가 벽에 기대서 서 있다. 드릴 트윈테일이 살짝 흐트러져 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '……오늘도 나나시와 란이 당신을 만족시켰나요?', type: 'dialogue' },
      { text: '그녀의 목소리가 평소보다 낮다. 에메랄드 눈에 피로와 함께, 이제는 숨길 수 없는 질투가 드러나고 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '흥… 좋아요. 저는… 사이온지 가문의 영애니까… 지켜보는 역할로 충분해요. 당신이 원하는 대로… 계속 그렇게 하세요.', type: 'dialogue' },
      { text: '레오나는 고개를 돌렸다. 그러나 그녀의 다리는 미세하게 떨리고 있었다. 12주 동안 쌓인 질투와 소외감이, 이제 그녀의 자존심을 서서히 갉아먹고 있다.', type: 'narration' },
    ],
    choices: [
      {
        text: '“이제 네 차례다, 레오나.”',
        statEffects: { charm: 40, libido: 30 },
        conditionEffects: { mental: -25 },
        followUpScript: [
          { speaker: '사이온지 레오나', text: '……아직… 아직은… 안 돼요. 사이온지 가문의 영애가 그렇게 쉽게…!', type: 'dialogue' },
          { text: '레오나는 이를 악물었다. 그러나 그녀의 눈은 이미 흔들리고 있었다.', type: 'narration' },
        ],
      },
      {
        text: '그냥 미소만 지으며 나간다',
        statEffects: { endurance: 45, charm: 35 },
        conditionEffects: { mental: -30 },
        followUpScript: [
          { text: '당신이 아무 말 없이 미소만 지으며 방을 나가자, 레오나는 혼자 남겨졌다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '……왜… 왜 나만…', type: 'dialogue' },
          { text: '그녀는 벽에 기대어 천천히 주저앉았다. 드릴 트윈테일이 바닥에 늘어졌다. 저항의 끝이, 서서히 보이기 시작했다.', type: 'narration' },
        ],
      },
    ],
  },

  // 봄 끝 — 레오나의 자각
  {
    id: 'spring-awakening',
    title: '선생님... 이건 메이드의 의무예요',
    trigger: { type: 'stat', stat: 'libido', threshold: 200, direction: 'above' },
    heroineId: 'leona',
    script: [
      { text: '훈련실. 하루 일과가 끝나고 레오나가 로얄 메이드복 차림으로 나를 찾아왔다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님… 저… 요즘 이상해요. 밤마다 몸이 뜨거워지고, 로얄 메이드복 안쪽이 자꾸 축축해져서…', type: 'dialogue' },
      { text: '레오나가 드릴 트윈테일을 만지작거리며 허벅지를 비비고 있다. 치마 안쪽이 이미 젖어있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '이, 이건 사이온지 가문의 영애로서 있을 수 없는 일이에요! 하지만… 선생님이 만져줄 때만 나아지는 것 같아서… 이건 그, 그냥 메이드의 의무로 부탁하는 거예요!', type: 'dialogue' },
      { text: '귀족의 자존심으로 포장하고 있지만, 본질은 같다. 의존이 시작되고 있다.', type: 'thought' },
    ],
    choices: [
      {
        text: '"사이온지의 몸이 내게 길들여지고 있는 거야."',
        statEffects: { libido: 45, charm: 25 },
        conditionEffects: { mental: -5 },
        followUpScript: [
          { speaker: '트레이너', text: '정상이야. 네 몸이 나한테 맞춰지고 있는 거다. 사이온지 가문의 혈통이 좋은 증거지.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '그, 그런 건가요… 혈통이 좋아서… 그렇다면 어쩔 수 없네요…♡ 사이온지의 몸이 선생님에게 인정받았다니 안심이에요.', type: 'dialogue' },
          { text: '레오나가 약간 웃었다. 에메랄드 눈에 안도감이 떠오른다. 이 순간부터 나는 "유일하게 사이온지의 몸을 이해해주는 사람"이 됐다.', type: 'narration' },
        ],
      },
      {
        text: '"그럼 지금 당장 확인해 줄까, 영애님?"',
        statEffects: { technique: 40, capacity: 20 },
        conditionEffects: { stamina: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '말로 설명하는 것보다 직접 보여주는 게 빠르지. 여기 앉아, 레오나.', type: 'dialogue' },
          { text: '레오나를 내 무릎 위에 앉히고, 로얄 메이드복 치마 안쪽으로 손을 넣었다. 레이스 속옷이 흠뻑 젖어있다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '아앗… 선생님 손가락… 이, 이건 메이드로서의 검진이에요…♡ 착각하지 마세요…♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 여름 (Turn 13~24): 뜨거운 일탈
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 라이벌 등장
  {
    id: 'rival-appears',
    title: '라이벌 등장 — "이 사이온지한테 도전?"',
    trigger: { type: 'turn', turn: 15 },
    heroineId: 'leona',
    script: [
      { text: '합동 훈련장. 타교의 에이스 트레이너와 그 히로인이 도발적인 눈빛으로 이쪽을 바라본다.', type: 'narration' },
      { speaker: '라이벌 히로인', text: '후후... 이게 사이온지 가문의 영애? 귀족이면 몸도 잘 쓸 줄 알아야 하는 거 아냐?', type: 'dialogue' },
      { text: '라이벌 히로인이 레오나의 가슴을 손가락으로 톡 건드렸다. L컵 젖가슴이 출렁인다.', type: 'action' },
      { speaker: '사이온지 레오나', text: '이, 이 무례한! 사이온지 가문의 영애에게 손을 대다니! 나나시나 란도 상대 안 되는 주제에!', type: 'dialogue' },
      { speaker: '라이벌 히로인', text: '1:1 배틀 하자. 누가 더 빨리 자기 트레이너를 싸게 하는지. 진 쪽은 관중 앞에서 알몸 사죄.', type: 'dialogue' },
      { text: '레오나의 에메랄드 눈이 타오르지만, 한편으로 불안하게 흔들린다.', type: 'narration' },
    ],
    choices: [
      {
        text: '"받아들여. 사이온지의 실력을 증명할 기회다."',
        statEffects: { endurance: 50, technique: 30 },
        conditionEffects: { mental: -15 },
        followUpScript: [
          { text: '배틀이 시작됐다. 하지만 결과는 참패. 라이벌의 테크닉에 레오나는 제대로 된 봉사조차 하지 못했다.', type: 'narration' },
          { speaker: '라이벌 히로인', text: '이 정도가 사이온지의 한계야? 귀족 타이틀만 번지르르하네~', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '크…! 이 사이온지가… 이런 치욕을…! 나나시한테도 란한테도 이런 모습은 절대 보이지 않겠어!', type: 'dialogue' },
          { text: '에메랄드 눈에 눈물이 고여있지만, 그 안에 불꽃이 타오르기 시작했다. 사이온지의 자존심이 최고의 연료다.', type: 'narration' },
        ],
      },
      {
        text: '"거절해. 사이온지는 이런 도발에 흔들리지 않아."',
        statEffects: { charm: 40, libido: 25 },
        conditionEffects: { mental: 5 },
        followUpScript: [
          { speaker: '트레이너', text: '싫다. 이 아이 조교가 안 끝났어. 사이온지의 영애는 그랑프리에서 빛나게 해 줄 거야.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '흥! 당연하지! 이 사이온지 레오나가 저런 잡것들한테 상대할 가치도 없어!', type: 'dialogue' },
          { text: '입으로는 그렇게 말하지만, 레오나가 내 소매를 살짝 잡고 있다. 드릴 트윈테일 뒤에 숨긴 안도의 미소가 보인다.', type: 'narration' },
        ],
      },
    ],
  },

  // 여름 합숙
  {
    id: 'summer-camp',
    title: '여름 합숙 — 해변의 로얄 메이드',
    trigger: { type: 'turn', turn: 20 },
    heroineId: 'leona',
    script: [
      { text: '바닷가 합숙소. 레오나가 로얄 메이드복 위에 비키니를 걸친 기묘한 차림으로 서 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '이, 이건 사이온지 가문의 전통 수영복이에요! 비키니 위에 메이드복은 당연한 거예요!', type: 'dialogue' },
      { speaker: '트레이너', text: '라이벌한테 진 설욕은 여기서 한다. 낮에는 체력, 밤에는 감도. 나나시보다, 란보다 강해져야 해.', type: 'dialogue' },
      { speaker: '사이온지 레오나', text: '흥! 당연하죠! 이 사이온지 레오나가 나나시(기계)나 란(야수) 따위에게 질 리가 없잖아요!', type: 'dialogue' },
      { text: '밤. 불꽃놀이 소리가 멀리서 들려온다. 해변의 바위 뒤에서 레오나가 메이드복의 리본을 풀기 시작했다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님… 오늘 밤은 제가 먼저 할게요. 사이온지 가문의 헌신을 보여드리겠어요. 란한테 졌던 거… 전부 되갚을 수 있게 가르쳐 주세요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '헌신 클리닝 특훈 — 사이온지 전통의 봉사 기술을 극한까지',
        statEffects: { technique: 70, libido: 40 },
        conditionEffects: { stamina: -15, mental: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아, 사이온지 전통의 클리닝을 완성시켜 줄게. 무릎 꿇고 입 벌려.', type: 'dialogue' },
          { text: '레오나가 메이드복 차림으로 무릎을 꿇고 혀를 내밀었다. 불꽃놀이가 터질 때마다 드릴 트윈테일이 흔들린다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '쭈루루… 으응♡ 이것이 사이온지의 헌신 클리닝이에요♡ 나나시의 기계적인 봉사 따위와는 격이 달라요♡', type: 'dialogue' },
          { text: '파앗— 불꽃놀이가 밤하늘에 터지는 순간, 레오나의 혀가 완벽한 테크닉을 완성했다. 에메랄드 눈에 자부심과 쾌감이 공존한다.', type: 'narration' },
        ],
      },
      {
        text: '핸들바 라이딩 — 드릴 트윈테일을 잡고 야외 삽입',
        statEffects: { capacity: 60, endurance: 45 },
        conditionEffects: { stamina: -12, mental: -10 },
        followUpScript: [
          { text: '모래사장에 레오나를 눕히고 드릴 트윈테일을 양손에 쥐었다. "핸들바" 라이딩 자세로 허리를 밀어 넣는다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '아앗…♡ 드, 드릴 잡지 말라고…! 하지만 파도랑 같이… 들어왔다 나갔다…♡ 사이온지의 보지가 미쳐가요…!♡', type: 'dialogue' },
          { speaker: '트레이너', text: '좋아, 이 리듬을 기억해. 사이온지의 보지에 각인시켜줄게.', type: 'dialogue' },
          { text: '불꽃놀이가 하늘을 물들이는 동안, 레오나는 내 자지에 맞춰 스스로 허리를 움직이기 시작했다. 귀족의 본능이 깨어나고 있다.', type: 'narration' },
        ],
      },
    ],
  },

  // 여름 끝 — 독점욕
  {
    id: 'summer-possessive',
    title: '선생님 자지는 사이온지 거예요!',
    trigger: { type: 'stat', stat: 'technique', threshold: 350, direction: 'above' },
    heroineId: 'leona',
    script: [
      { text: '합숙 마지막 날 밤. 레오나가 내 방문을 두드렸다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님… 한 가지 물어볼 게 있어요.', type: 'dialogue' },
      { text: '레오나의 에메랄드 눈이 진지하다. 로얄 메이드복 위에 얇은 가디건만 걸치고 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님은… 나나시한테도 이런 거 해 줘요? 란한테도? 이 사이온지 레오나한테만… 아닌 거예요?', type: 'dialogue' },
      { text: '질투다. 사이온지의 독점욕이 폭발하기 직전이다. 나나시와 란에 대한 경쟁심이 연료가 되고 있어.', type: 'thought' },
    ],
    choices: [
      {
        text: '"사이온지만 특별하다고 생각해?"',
        statEffects: { charm: 55, endurance: 30 },
        conditionEffects: { mental: -10 },
        followUpScript: [
          { speaker: '트레이너', text: '사이온지의 몸은 특별하니까 특별히 대해주는 거야. 나나시든 란이든 네 보지에는 못 미쳐.', type: 'dialogue' },
          { text: '레오나의 에메랄드 눈에 기쁨과 안도가 동시에 번졌다. 드릴 트윈테일이 부끄러운 듯 흔들린다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '당, 당연하죠! 사이온지의 보지는 최고니까! 선생님 자지는… 사이온지 전용이에요. 나나시한테도 란한테도 절대 안 줄 거예요…♡', type: 'dialogue' },
        ],
      },
      {
        text: '"질투하는 거야? 사이온지답지 않게?"',
        statEffects: { libido: 50, technique: 30 },
        conditionEffects: { mental: -15 },
        followUpScript: [
          { speaker: '트레이너', text: '질투할 시간에 실력으로 증명해. 사이온지의 보지가 나나시보다, 란보다 낫다는 걸 보여 줘.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '흥! 질투 같은 거 안 해! 이건 사이온지의 자존심 문제야!', type: 'dialogue' },
          { text: '레오나가 갑자기 메이드복의 리본을 풀기 시작했다. 에메랄드 눈이 경쟁심으로 타오른다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '지금 당장 증명할게요! 사이온지의 보지가 최고라는 거…!♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 가을 (Turn 25~36): 깊어지는 타락
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 예비 그랑프리 위기
  {
    id: 'fall-crisis',
    title: '예비 그랑프리 — 사이온지의 위기',
    trigger: { type: 'turn', turn: 28 },
    heroineId: 'leona',
    script: [
      { text: '예비 그랑프리(G2) 대회장. 레오나가 로얄 메이드복 정장 차림으로 대기하고 있다.', type: 'narration' },
      { text: '그런데 경기 규칙이 갑자기 바뀌었다. 심사위원 전원이 직접 참가자를 테스트한다고.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '이, 이런…! 사이온지 가문의 영애가 모르는 남자들한테…! 절대 있을 수 없는 일이에요!', type: 'dialogue' },
      { text: '레오나의 드릴 트윈테일이 분노로 곤두선다. 하지만 그 안에 공포도 숨겨져 있다.', type: 'action' },
      { speaker: '사이온지 레오나', text: '전… 선생님한테만… 만져지고 싶어요… 다른 사람은 싫어요… 이, 이건 사이온지의 순결을 지키기 위한 거예요!', type: 'dialogue' },
    ],
    choices: [
      {
        text: '심사위원석에 난입 — "사이온지의 몸에 손대는 건 나뿐이다."',
        statEffects: { charm: 65, endurance: 40 },
        conditionEffects: { mental: 10, stamina: -15 },
        followUpScript: [
          { text: '나는 심사위원석으로 뛰어올라가 테이블을 쳤다.', type: 'action' },
          { speaker: '트레이너', text: '이 아이 몸은 내 관할이다. 사이온지의 보지든 항문이든 내 허가 없이는 아무도 못 건드려.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '선생님… 사이온지를 위해 저렇게까지…', type: 'dialogue' },
          { text: '에메랄드 눈에 눈물이 흘러내린다. 드릴 트윈테일이 감동으로 떨린다. "이 사람을 위해서라면 사이온지의 모든 것을 바치겠다"는 결의.', type: 'narration' },
        ],
      },
      {
        text: '레오나를 믿고 내보낸다 — "사이온지의 실력을 보여 줘."',
        statEffects: { technique: 50, libido: 35 },
        conditionEffects: { mental: -20 },
        followUpScript: [
          { speaker: '트레이너', text: '걱정 마. 사이온지의 몸은 내가 조율한 거야. 심사위원 따위에게 반응할 리 없어.', type: 'dialogue' },
          { text: '레오나가 무대에 올라갔다. 심사위원들의 손길에 처음엔 몸이 굳었지만…', type: 'narration' },
          { speaker: '사이온지 레오나', text: '…쓸데없어요. 사이온지의 몸은 선생님 전용이에요. 나나시의 기계도, 란의 야수도 아닌, 선생님만의 거예요.', type: 'dialogue' },
        ],
      },
    ],
  },

  // 가을 — 각성
  {
    id: 'fall-nolimit',
    title: '각성 — 사이온지의 한계를 넘어서',
    trigger: { type: 'stat', stat: 'capacity', threshold: 500, direction: 'above' },
    heroineId: 'leona',
    script: [
      { text: '훈련실. 레오나가 로얄 메이드복을 스스로 벗기 시작한다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님. 더 세게 해 주세요. 사이온지의 몸이 망가져도 좋아요.', type: 'dialogue' },
      { text: '예전의 오만한 영애는 온데간데없다. 에메랄드 눈에 각오만이 가득하다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '나나시보다 강해져야 해요. 란보다 강해져야 해요. 사이온지 레오나가 최고라는 걸 증명하려면… 선생님이 저를 한계까지 밀어붙여 주세요.', type: 'dialogue' },
      { speaker: '트레이너', text: '...후회 없지, 영애님?', type: 'dialogue' },
      { speaker: '사이온지 레오나', text: '사이온지는 후회하지 않아요. 선생님을 위해서라면… 뭐든 할 수 있어요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '풀파워 — 자궁구를 직접 공략한다',
        statEffects: { capacity: 80, libido: 50 },
        conditionEffects: { stamina: -18, mental: -12 },
        followUpScript: [
          { text: '레오나를 책상 위에 올리고 드릴 트윈테일을 양손에 쥐었다. 핸들바 라이딩 자세로 끝까지 밀어 넣는다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '아아앗…♡ 자궁 직격…! 사이온지의 자궁이 자지에♡ 이 느낌… 나나시도 란도 모르는… 사이온지만의…♡♡', type: 'dialogue' },
          { text: '자궁구가 내 자지 끝을 빨아들이기 시작했다. 사이온지의 명기, 드디어 본성을 드러냈군.', type: 'narration' },
        ],
      },
      {
        text: '단계별로 — 사이온지의 한계를 우아하게 늘려간다',
        statEffects: { endurance: 60, technique: 45 },
        conditionEffects: { stamina: -10, mental: -5 },
        followUpScript: [
          { speaker: '트레이너', text: '급하게 굴면 안 돼. 사이온지의 몸은 귀하니까, 천천히 확실하게.', type: 'dialogue' },
          { text: '손가락부터 시작해서 단계적으로. 레오나의 에메랄드 눈이 단계마다 새로운 반응을 보여준다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '으응…♡ 사이온지의 보지가… 선생님 자지에 맞춰서… 변해가고 있어요…♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // 가을 끝 — 헌신
  {
    id: 'fall-devotion',
    title: '선생님을 위해서라면 사이온지를 버릴 수 있어요',
    trigger: { type: 'stat', stat: 'charm', threshold: 500, direction: 'above' },
    heroineId: 'leona',
    script: [
      { text: '심야. 레오나가 로얄 메이드복 잠옷 차림으로 내 숙소에 왔다. 드릴 트윈테일이 풀려 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님… 잠이 안 와요. 사이온지의 메이드로서 곁에 있어도 될까요?', type: 'dialogue' },
      { text: '레오나가 이불 속으로 기어 들어왔다. 풀린 드릴 사이로 에메랄드 눈이 반짝인다.', type: 'action' },
      { speaker: '사이온지 레오나', text: '선생님 냄새… 이것만으로도 안이 뜨거워져요… 사이온지 가문이고 뭐고 상관없어요… 전 이제 선생님 없이는 안 돼요.', type: 'dialogue' },
      { text: '레오나가 내 손을 잡아 L컵 젖가슴 위에 올려놓았다. 심장이 미친 듯이 뛰고 있다.', type: 'action' },
      { speaker: '사이온지 레오나', text: '몸도, 마음도, 사이온지의 전부가 선생님 거예요. 이건… 메이드의 의무가 아니에요. 제 진심이에요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '받아들인다 — 오늘 밤은 조교가 아니라 둘만의 시간',
        statEffects: { charm: 70, libido: 40 },
        conditionEffects: { mental: 10, stamina: -10 },
        followUpScript: [
          { speaker: '트레이너', text: '...오늘은 트레이너가 아니라 그냥 나로서 안아 주지. 사이온지의 영애가 아니라, 그냥 레오나를.', type: 'dialogue' },
          { text: '레오나를 부드럽게 안았다. 풀린 드릴 사이로 보이는 에메랄드 눈이 촉촉하다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '선생님… 좋아해요…♡ 사이온지로서가 아니라… 그냥 레오나로서… 진심으로…♡', type: 'dialogue' },
          { text: '레오나가 내 가슴에 얼굴을 묻고 잠들었다. 내일부터 다시 지옥의 훈련이지만, 오늘 밤의 기억이 사이온지의 영애를 더 강하게 만들 것이다.', type: 'narration' },
        ],
      },
      {
        text: '"그 마음을 몸으로 증명해, 레오나."',
        statEffects: { libido: 55, technique: 40 },
        conditionEffects: { mental: -8, stamina: -12 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아. 사이온지의 헌신이 진짜인지 확인시켜 줘.', type: 'dialogue' },
          { text: '레오나가 스스로 잠옷을 벗었다. 달빛 아래 드러난 L컵 젖가슴과 연분홍 보지가 아름답다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '선생님… 사이온지의 전부를 보여줄게요… 나나시에게도, 란에게도 보여주지 않은… 선생님만을 위한 사이온지의 몸…♡', type: 'dialogue' },
          { text: '오늘 밤, 레오나는 내가 시키지 않은 것까지 스스로 해냈다. 사이온지의 영혼까지 바친다는 게 이런 것인가.', type: 'narration' },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 겨울 (Turn 37~48): 완성형 암컷
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 최종 조율
  {
    id: 'winter-final-tuning',
    title: '준 그랑프리 — 사이온지 최종 조율',
    trigger: { type: 'turn', turn: 38 },
    heroineId: 'leona',
    script: [
      { text: '눈 내리는 노천온천. 겨울 합숙의 마지막 밤. 레오나가 온천 속에서 나를 올려다보고 있다.', type: 'narration' },
      { text: '로얄 메이드복을 벗은 레오나의 L컵 젖가슴이 온천 수면 위로 떠오른다. 드릴 트윈테일이 물에 젖어 흘러내린다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님. 사이온지가 먼저 말할게요. 여기를… 이 안쪽을 더 개발해 주세요.', type: 'dialogue' },
      { text: '레오나가 내 손을 잡아 자기 아랫배에 갖다 대며 수줍게 웃었다. 에메랄드 눈에 결의가 서려 있다.', type: 'action' },
      { speaker: '사이온지 레오나', text: '아직 선생님 자지가 완전히 닿지 않는 곳이 있어요. 사이온지의 자궁… 전부 선생님 것으로 만들어 주세요. 나나시보다, 란보다 완벽하게.', type: 'dialogue' },
      { speaker: '트레이너', text: '...사이온지의 영애가 먼저 그렇게 말해주다니. 정말 성장했어, 레오나.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '온천 속에서 천천히 — 사이온지의 합체',
        statEffects: { charm: 80, libido: 50, endurance: 30 },
        conditionEffects: { mental: 15, stamina: -10 },
        followUpScript: [
          { text: '온천물 속에서 레오나를 안고 천천히 하나가 됐다. L컵 젖가슴이 내 가슴에 밀착된다.', type: 'action' },
          { speaker: '사이온지 레오나', text: '으응…♡ 선생님… 사이온지의 안에서 선생님 심장 소리가 느껴져요… 하나가 되는 것 같아…♡', type: 'dialogue' },
          { text: '눈꽃이 레오나의 어깨 위에 내려앉는다. 풀린 드릴 트윈테일이 온천물에 떠다닌다. 육체와 정신, 모든 유대가 완성된 순간.', type: 'narration' },
        ],
      },
      {
        text: '전력 조교 — 사이온지의 마지막 벽을 철저하게 부순다',
        statEffects: { capacity: 70, technique: 55 },
        conditionEffects: { stamina: -18, mental: -5 },
        followUpScript: [
          { speaker: '트레이너', text: '사이온지의 마지막 벽을 부순다. 봐 주는 거 없어.', type: 'dialogue' },
          { text: '온천에서 끌어올려 눈밭 위에 눕혔다. 차가운 눈과 뜨거운 몸의 온도차. 드릴 트윈테일을 핸들바로 잡고.', type: 'action' },
          { speaker: '사이온지 레오나', text: '아아아…♡ 차가운데 안은 뜨거워…! 사이온지의 자궁이… 선생님 자지에 완전히…♡♡', type: 'dialogue' },
          { text: '레오나의 몸에서 김이 피어오른다. 사이온지의 마지막 벽이 무너지는 소리가 들렸다.', type: 'narration' },
        ],
      },
    ],
  },

  // 그랑프리 전야
  {
    id: 'grandprix-eve',
    title: '결전 전야 — 사이온지의 각오',
    trigger: { type: 'turn', turn: 44 },
    heroineId: 'leona',
    script: [
      { text: '그랑프리 전날 밤. 대기실에서 레오나와 둘이서 마주 앉아 있다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '선생님… 내일이에요. 드디어 그랑프리. 사이온지 가문의 이름을 건 최종전.', type: 'dialogue' },
      { speaker: '트레이너', text: '긴장돼?', type: 'dialogue' },
      { speaker: '사이온지 레오나', text: '흥. 이 사이온지 레오나가 긴장할 리가 없잖아요. …선생님이 옆에 있으니까.', type: 'dialogue' },
      { text: '레오나가 내 손을 잡았다. 처음 만났을 때 오만하게 팔짱 끼던 그 손이 이제는 단단하다.', type: 'narration' },
      { speaker: '사이온지 레오나', text: '전부 선생님 덕분이에요. 사이온지의 몸도, 마음도, 전부 선생님이 만들어 준 거예요. 나나시보다, 란보다, 제가 최고라는 걸… 내일 증명할게요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '"사이온지의 모든 걸 보여 줘."',
        statEffects: { charm: 45, endurance: 35 },
        conditionEffects: { mental: 15 },
        followUpScript: [
          { speaker: '트레이너', text: '사이온지가 지금까지 쌓아온 모든 걸 내일 터뜨려. 전국이 보는 앞에서.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '네…♡ 사이온지 레오나가 선생님의 최고 걸작이라는 걸 온 세상에 증명할게요. 나나시도, 란도 압도해 보일게요.', type: 'dialogue' },
          { text: '에메랄드 눈이 빛난다. 드릴 트윈테일이 자부심으로 곧게 선다. 이 미소를 볼 수 있는 건 나뿐이다.', type: 'narration' },
        ],
      },
      {
        text: '마지막 리허설 — 사이온지의 몸 최종 확인',
        statEffects: { libido: 40, technique: 30 },
        conditionEffects: { stamina: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아. 그 전에 마지막으로 사이온지의 몸 상태를 확인하자. 옷 벗어, 레오나.', type: 'dialogue' },
          { text: '레오나가 망설임 없이 로얄 메이드복을 벗었다. 드릴 트윈테일을 풀며 에메랄드 눈으로 나를 바라본다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '확인해 주세요, 선생님. 사이온지의 이 몸은 선생님이 만든 걸작이에요. 어디든 마음대로 해 주세요♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // 최종전
  {
    id: 'grandprix-final',
    title: '메스이키 그랑프리 — 사이온지의 여왕 즉위',
    trigger: { type: 'turn', turn: 46 },
    heroineId: 'leona',
    script: [
      { text: '전 국민이 지켜보는 콜로세움. 결승 무대의 조명이 눈부시다.', type: 'narration' },
      { text: '결승 상대는 "퀸 오브 섹스" — 전대 우승자. 나나시가 관중석에서 무표정하게, 란이 환호하며 지켜보고 있다.', type: 'narration' },
      { speaker: '실황', text: '메스이키 그랑프리 결승! 사이온지 가문의 영애 사이온지 레오나 vs 전대 여왕! 모든 것을 건 총력전입니다!', type: 'dialogue' },
      { speaker: '사이온지 레오나', text: '선생님… 갈게요. 사이온지의 모든 것을 걸고.', type: 'dialogue' },
      { speaker: '트레이너', text: '이기고 와. 사이온지가 최고라는 걸 증명해, 레오나.', type: 'dialogue' },
      { text: '레오나가 로얄 메이드복을 펄럭이며 무대에 올라간다. 드릴 트윈테일이 조명 아래에서 황금빛으로 빛난다.', type: 'narration' },
      { text: 'Phase 1 — 헌신 클리닝 대결. 사이온지 전통의 봉사 기술이 상대를 압도한다.', type: 'narration' },
      { text: 'Phase 2 — 핸들바 라이딩 내구전. 드릴 트윈테일을 핸들 삼아 끝까지 버텼다.', type: 'narration' },
      { text: 'Phase 3 — 트레이너와의 합체기. 내가 무대에 올라간다. 마지막은 둘이 함께.', type: 'narration' },
    ],
    choices: [
      {
        text: '전력 투구 — 사이온지의 모든 스킬을 쏟아 붓는다',
        statEffects: { libido: 60, technique: 60, capacity: 40, endurance: 40, charm: 40 },
        conditionEffects: { stamina: -25, mental: -10 },
        followUpScript: [
          { text: '무대 위에서 레오나와 하나가 됐다. 드릴 트윈테일을 핸들바로 잡고 최종 합체기.', type: 'action' },
          { speaker: '사이온지 레오나', text: '선생님…♡ 사이온지의 안에서 전부 맞물려…♡ 이것이 사이온지 레오나의 최고의 합체기…! 나나시도 란도 넘어서…!♡', type: 'dialogue' },
          { text: '레오나의 몸이 빛나는 것 같았다. 에메랄드 눈에 하트가 떠오른다. 관중이 숨을 멈추고 지켜본다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '아아아…♡♡ 선생님… 해냈어요… 사이온지가… 최고라는 걸 증명했어요…!♡', type: 'dialogue' },
          { text: '심사위원 전원 만점. 기립 박수. 레오나가 내 품에 안겨 운다. 드릴 트윈테일이 승리의 왕관처럼 빛난다.', type: 'narration' },
        ],
      },
      {
        text: '레오나에게 맡긴다 — "사이온지의 여왕은 네가 되어야 해."',
        statEffects: { charm: 80, endurance: 50 },
        conditionEffects: { mental: 10, stamina: -15 },
        followUpScript: [
          { speaker: '트레이너', text: '마지막은 네가 리드해. 사이온지의 모든 걸 보여 줘, 레오나.', type: 'dialogue' },
          { text: '레오나가 고개를 끄덕이고, 처음으로 완벽하게 주도했다. 사이온지의 모든 기술이 하나로 연결된다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '봐 주세요, 선생님…♡ 이것이 선생님이 만든 사이온지 레오나예요…!♡ 나나시도, 란도, 아무도 이 사이온지를 넘을 수 없어요♡', type: 'dialogue' },
          { text: '압도적인 승리. 레오나가 무대 위에서 드릴 트윈테일을 펄럭이며 내게 달려와 안겼다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '선생님… 사이온지 레오나가… 선생님의 최고 걸작이 된 거죠…?♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // 스탯 기반 이벤트
  {
    id: 'endurance-milestone',
    title: '사이온지는 무릎 꿇지 않아',
    trigger: { type: 'stat', stat: 'endurance', threshold: 700, direction: 'above' },
    heroineId: 'leona',
    script: [
      { text: '심야 훈련실. 레오나가 5시간째 훈련을 멈추지 않는다. 로얄 메이드복이 땀으로 흠뻑 젖어 있다.', type: 'narration' },
      { speaker: '트레이너', text: '그만해, 레오나. 오늘은 충분했어.', type: 'dialogue' },
      { speaker: '사이온지 레오나', text: '아직이에요! 나나시는 감정 없이 12시간 연속 가능하고, 란은 야수 본능으로 끝없이 달려요! 이 사이온지가 지면 안 돼요!', type: 'dialogue' },
      { text: '에메랄드 눈에 광기에 가까운 경쟁심. 사이온지의 자존심이 레오나를 밀어붙이고 있다.', type: 'narration' },
    ],
    choices: [
      {
        text: '강제로 멈춘다 — "사이온지의 몸은 네 것이기도 해."',
        statEffects: { endurance: 40, charm: 30 },
        conditionEffects: { mental: 10, stamina: 15 },
        followUpScript: [
          { text: '드릴 트윈테일을 잡고 멈추게 했다. 레오나가 놀란 에메랄드 눈으로 올려다본다.', type: 'action' },
          { speaker: '트레이너', text: '무리하면 그랑프리에서 못 써. 나나시나 란한테 이기려면 체력 관리도 전략이야.', type: 'dialogue' },
          { speaker: '사이온지 레오나', text: '…네. 선생님 말이 맞아요. 사이온지가 너무 욕심부렸어요. …드릴 잡으면 안 빠져나갈 수가 없잖아요.', type: 'dialogue' },
        ],
      },
      {
        text: '끝까지 함께한다 — "좋아. 사이온지와 함께 지옥 가자."',
        statEffects: { endurance: 70, libido: 35 },
        conditionEffects: { stamina: -20, mental: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아. 대신 나도 같이 한다. 사이온지의 한계가 어딘지 같이 확인하자.', type: 'dialogue' },
          { text: '새벽 4시까지 함께 훈련했다. 레오나가 결국 내 가슴에 기대어 쓰러졌다. 드릴 트윈테일이 풀려 흘러내린다.', type: 'narration' },
          { speaker: '사이온지 레오나', text: '선생님… 같이 있으니까… 나나시보다, 란보다, 어디까지든 갈 수 있을 것 같아요…♡', type: 'dialogue' },
        ],
      },
    ],
  },
]
