import { GameEvent } from '../types/game'

export const events: GameEvent[] = [
  // ━━━ 초반 (1~10턴) ━━━
  {
    id: 'intro',
    title: '첫날의 대면',
    text: '조교실에 히로인이 끌려왔다. 차가운 시선으로 이쪽을 노려보고 있다.\n\n첫 만남. 이 아이의 몸과 마음을 완전히 지배하는 것이 당신의 임무다.\n\n히로인의 허벅지 안쪽이 미세하게 떨리고 있다 — 두려움인가, 기대인가.',
    trigger: { type: 'turn', turn: 1 },
    phase: 'early',
    choices: [
      {
        text: '턱을 잡아 올려 눈을 마주치게 한다',
        statEffects: { endurance: 15, charm: 10, libido: 0, technique: 0, capacity: 0 },
        conditionEffects: { mental: -10 },
        followUpText: '히로인이 숨을 삼켰다. 당신의 눈빛에 본능적으로 보지가 쫙 조여든다. 아직 자각하지 못하지만, 몸은 이미 반응하고 있다.',
      },
      {
        text: '머리를 쓰다듬으며 "걱정 마" 라고 속삭인다',
        statEffects: { libido: 15, charm: 10, technique: 0, capacity: 0, endurance: 0 },
        conditionEffects: { mental: 5 },
        followUpText: '예상 밖의 부드러움에 히로인의 경계가 풀렸다. 하지만 손이 닿은 곳에서 뜨거운 열이 번진다. 보지에서 최초의 애액이 한 방울.',
      },
      {
        text: '바로 옷을 벗기라고 명령한다',
        statEffects: { capacity: 10, libido: 10, technique: 0, endurance: 0, charm: 0 },
        conditionEffects: { mental: -15 },
        followUpText: '"...뭐라고요?!" 당혹과 분노. 하지만 명령에 거부하지 못하고 떨리는 손으로 단추를 푼다. 드러나는 피부에 소름이 돋는다 — 수치심과 흥분이 뒤섞인.',
      },
    ],
  },
  {
    id: 'first_touch',
    title: '최초의 자극',
    text: '첫 번째 실전 훈련. 히로인을 앞에 세우고 몸을 확인한다.\n\n손가락이 보지에 처음 닿은 순간 — 히로인이 "끄윽...!" 하며 허리를 뒤로 젖혔다. 연분홍색 보지가 손가락에 반응해 애액을 철철 흘리기 시작한다.\n\n"왜... 몸이 이렇게... 반응하는 거예요..."',
    trigger: { type: 'turn', turn: 3 },
    phase: 'early',
    choices: [
      {
        text: '클리토리스를 톡톡 건드려 반응을 본다',
        statEffects: { technique: 20, libido: 15, charm: 0, capacity: 0, endurance: 0 },
        conditionEffects: { mental: -8 },
        followUpText: '"히잉♡" 클리토리스에 닿자마자 보지에서 애액이 분수처럼 뿜었다. 히로인이 허벅지를 조이며 체액을 막으려 하지만 역부족. 몸은 이미 자지를 갈망하고 있다.',
      },
      {
        text: '손가락을 보지 안에 넣어 내벽을 확인한다',
        statEffects: { capacity: 20, technique: 10, libido: 0, charm: 0, endurance: 0 },
        conditionEffects: { mental: -12 },
        followUpText: '주뿌… 손가락 두 개가 보지 안으로. "아앙…! 안에… 넣지 마세요…!" 하지만 보지벽이 손가락을 쫙쫙 조여든다. 자궁구까지 도달하자 온몸이 경련. 명기의 원석.',
      },
    ],
  },
  {
    id: 'night_visit',
    title: '한밤의 방문',
    text: '새벽 2시. 문 앞에서 히로인이 서 있다. 얇은 잠옷 사이로 젖꼭지가 뻣뻣하게 서 있고, 허벅지 안쪽이 애액으로 번들거린다.\n\n"...잠을 잘 수가 없어요. 몸이 계속... 뜨겁고... 보지가 쿨쿨 울어요... 선생님이 아니면..."',
    trigger: { type: 'turn', turn: 6 },
    phase: 'early',
    choices: [
      {
        text: '안으로 들여보내고 보지를 직접 확인한다',
        statEffects: { libido: 25, technique: 10, charm: 10, capacity: 0, endurance: 0 },
        conditionEffects: { stamina: -10, mental: -5 },
        followUpText: '잠옷을 걷어올리자 보지가 애액으로 흥건하다. 손가락을 넣자 "아앙♡ 선생님... 거기... 좋아요..." 허리를 흔들기 시작한다. 밤마다 이 아이의 보지가 당신을 불렀다.',
      },
      {
        text: '"참아. 내일 가르쳐 줄게" 돌려보낸다',
        statEffects: { endurance: 20, charm: 10, libido: 0, technique: 0, capacity: 0 },
        conditionEffects: { mental: -8 },
        followUpText: '히로인이 다리를 비비며 돌아갔다. 거절당한 것이 오히려 더 깊은 갈증을 낳는다. 내일의 훈련이 더 격렬해질 것이다.',
      },
    ],
  },

  // ━━━ 중반 (11~25턴) ━━━
  {
    id: 'libido_awakening',
    title: '발정의 각성',
    text: '훈련 도중, 히로인의 몸이 격하게 떨리기 시작했다. 보지에서 애액이 허벅지를 타고 바닥까지 흘러내린다.\n\n"뭐, 뭐야 이거...?! 몸이 멋대로... 보지가 쿨쿨 울어... 자지가 없으면 안 돼...!"\n\n자신의 발정에 스스로 놀라고 있다.',
    trigger: { type: 'stat', stat: 'libido', threshold: 300, direction: 'above' },
    phase: 'mid',
    choices: [
      {
        text: '"이게 네 진짜 모습이야" 속삭이며 자지를 보여준다',
        statEffects: { libido: 30, capacity: 15, technique: 0, charm: 0, endurance: 0 },
        conditionEffects: { mental: -12 },
        followUpText: '자지를 보자마자 보지에서 애액이 철철. "아... 아니야... 이런 건..." 부정하면서도 눈이 자지에서 떨어지지 않는다. 입술이 벌어지고 침이 흘러내린다. 몸이 자지를 갈망한다.',
      },
      {
        text: '훈련을 중단하고 진정시킨다',
        statEffects: { endurance: 20, charm: 10, libido: 0, technique: 0, capacity: 0 },
        conditionEffects: { mental: 10, stamina: 5 },
        followUpText: '안아주자 히로인이 떨림을 멈추었다. 하지만 그 안도의 표정 속에... 미세한 실망이 보인다. 자지를 원했던 것이다.',
      },
    ],
  },
  {
    id: 'technique_bloom',
    title: '기교의 개화',
    text: '오늘의 히로인은 달랐다. 자발적으로 무릎을 꿇고 자지를 입에 물었다.\n\n쥬루쥬루… 쥬루… 가르치지 않은 혀놀림으로 자지를 감싸고, 불알을 손바닥으로 주무른다.\n\n"이렇게 하면... 선생님 더 기분 좋죠? 반응으로 알 수 있어요♡"',
    trigger: { type: 'stat', stat: 'technique', threshold: 300, direction: 'above' },
    phase: 'mid',
    choices: [
      {
        text: '"잘했어" 칭찬하며 머리를 쓰다듬는다',
        statEffects: { technique: 20, charm: 15, libido: 10, capacity: 0, endurance: 0 },
        conditionEffects: { mental: 10 },
        followUpText: '쓰다듬어주자 히로인의 눈이 촉촉해졌다. 칭찬받는 것이 이렇게 기쁠 줄이야. "감사합니다♡ 더... 잘해줄게요♡" 자지를 더 깊이 삼킨다. 명기로의 진화.',
      },
      {
        text: '"아직 멀었어. 목구멍까지 삼켜"',
        statEffects: { technique: 15, endurance: 15, capacity: 10, libido: 0, charm: 0 },
        conditionEffects: { mental: -8 },
        followUpText: '입술을 깨물더니 목구멍 끝까지 자지를 밀어넣었다. 크르르… 눈물이 차올라도 멈추지 않는다. "이... 정도면 되나요...?" 인정받고 싶은 욕구.',
      },
    ],
  },
  {
    id: 'club_rivalry',
    title: '클럽 대항전',
    text: '다른 클럽과의 합동 훈련일. 여러 히로인들 앞에서 당신의 히로인이 실력을 증명해야 한다.\n\n"선, 선생님... 다들 보고 있어요... 보지를 보여주기 싫은데..."\n\n하지만 당신은 안다. 이 아이에게는 관중 앞에서 빛나는 재능이 있다.',
    trigger: { type: 'turn', turn: 15 },
    phase: 'mid',
    choices: [
      {
        text: '"보여줘. 네 보지가 얼마나 조이는지"',
        statEffects: { charm: 25, technique: 15, libido: 10, capacity: 0, endurance: 0 },
        conditionEffects: { mental: -10, stamina: -10 },
        followUpText: '관중 앞에서 보지를 벌려 보인다. 쫙… 연분홍 보지에서 애액이 흘러내리자 관중이 감탄. 끝나고 나서 무릎이 풀려 주저앉는다. "선생님... 잘했죠...?"',
      },
      {
        text: '"긴장하지 마. 내가 옆에 있을게"',
        statEffects: { endurance: 15, libido: 15, charm: 10, technique: 0, capacity: 0 },
        conditionEffects: { mental: 5 },
        followUpText: '당신 옆에서 히로인이 용기를 냈다. 떨리면서도 훈련을 마쳤다. "선생님이 옆에 있으니까... 보지도 안심해요..." 의존이 깊어진다.',
      },
    ],
  },
  {
    id: 'midpoint',
    title: '절반의 고백',
    text: '육성 기간의 절반. 히로인이 창가에서 당신을 올려다본다.\n\n"선생님... 저 많이 변했죠? 처음엔 이런 훈련 죽어도 싫었는데... 지금은... 보지가 선생님 자지 없으면 허전해요..."\n\n고백이다. 타락의 중간점.',
    trigger: { type: 'turn', turn: 20 },
    phase: 'mid',
    choices: [
      {
        text: '"좋은 방향으로 변하고 있어. 네 보지는 최고야"',
        statEffects: { libido: 10, charm: 10, technique: 10, capacity: 0, endurance: 0 },
        conditionEffects: { mental: 15 },
        followUpText: '히로인이 작게 웃었다. 처음 보는 자연스러운 미소. "감사해요... 보지도 자궁도, 전부 선생님이 만들어준 거예요♡"',
      },
      {
        text: '"아직 부족해. 더 깊이 빠져"',
        statEffects: { capacity: 25, endurance: 10, libido: 0, technique: 0, charm: 0 },
        conditionEffects: { mental: -15 },
        followUpText: '히로인의 눈에서 빛이 사라진다. 하지만 어둔 눈동자 깊은 곳에서 위험한 불꽃이. "...네. 보지를... 더 개발해주세요."',
      },
    ],
  },

  // ━━━ 후반 (26~37턴) ━━━
  {
    id: 'darkness_call',
    title: '어둠의 부름',
    text: '깊은 밤, 히로인이 벌거벗은 채 조교실에 나타났다. 보지에서 애액이 허벅지를 타고 흘러내리고, 눈의 초점이 살짝 풀려있다.\n\n"...잠을 잘 수가 없어요. 보지가 밤새 쿨쿨 울어요. 자궁이 정액을 원해요. 선생님이 아니면... 미쳐버릴 것 같아요..."',
    trigger: { type: 'stat', stat: 'capacity', threshold: 500, direction: 'above' },
    phase: 'late',
    choices: [
      {
        text: '원하는 만큼 자궁에 정액을 채워준다',
        statEffects: { capacity: 30, libido: 20, technique: 10, charm: 0, endurance: 0 },
        conditionEffects: { stamina: -15, mental: -10 },
        followUpText: '도퓨루루… 자궁에 정액이 가득 찼다. "아하♡ 선생님 정액… 자궁이 행복해요♡" 배가 살짝 불룩. 돌이킬 수 없다 — 히로인 자신이 원하고 있다.',
      },
      {
        text: '"방으로 돌아가" 돌려보낸다',
        statEffects: { endurance: 20, charm: 10, libido: 0, technique: 0, capacity: 0 },
        conditionEffects: { mental: -5 },
        followUpText: '상처받은 눈으로 돌아갔다. 하지만 복도에서 쪼그려 앉아 보지를 문지르는 소리가 들린다. 거절이 더 깊은 집착을 낳았다.',
      },
    ],
  },
  {
    id: 'charm_mastery',
    title: '매혹의 완성',
    text: '히로인의 눈빛이 변했다. 더 이상 당하기만 하는 존재가 아니다.\n\n보지를 스스로 벌리며 다가온다. "선생님... 오늘은 제가 리드할게요♡ 제 보지로... 선생님 자지를 기분 좋게 해줄게요♡"\n\n능동적 유혹. 매혹이 완성 단계.',
    trigger: { type: 'stat', stat: 'charm', threshold: 500, direction: 'above' },
    phase: 'late',
    choices: [
      {
        text: '허락한다 — 어디까지 할 수 있는지 보겠다',
        statEffects: { charm: 30, technique: 20, libido: 10, capacity: 0, endurance: 0 },
        conditionEffects: { mental: 5 },
        followUpText: '히로인이 자지 위에 올라타 기승위. 보지벽이 쫙쫙 조여들며 정액을 짜낸다. "기분 좋아요♡ 선생님 자지... 제 보지가 제일 잘 알아요♡" 유혹하는 마성의 존재.',
      },
      {
        text: '"주제를 알아. 네가 리드할 수준이 아니야"',
        statEffects: { endurance: 25, capacity: 10, libido: 0, technique: 0, charm: 0 },
        conditionEffects: { mental: -10 },
        followUpText: '입술을 깨물었다. 굴욕감... 하지만 보지가 더 젖어든다. 거부당하는 것조차 쾌락으로 변환. "죄송합니다... 보지를 벌리고 기다릴게요..."',
      },
    ],
  },
  {
    id: 'breaking_point',
    title: '한계점',
    text: '히로인의 정신이 위험 수위에 도달했다. 눈동자에 하트가 깜빡이고, 보지에서 애액이 끊임없이 흘러내린다.\n\n"...더 이상 뭐가 맞는지 모르겠어요... 보지가 선생님 자지 없으면 울어요... 전부 다 선생님이 정해주세요... 제 몸도 자궁도 전부..."\n\n이대로 몰아붙일까, 케어할까.',
    trigger: { type: 'stat', stat: 'endurance', threshold: 700, direction: 'above' },
    phase: 'late',
    choices: [
      {
        text: '더 몰아붙인다 — 한계를 넘어야 완성된다',
        statEffects: { endurance: 40, capacity: 25, libido: 15, technique: 0, charm: 0 },
        conditionEffects: { mental: -25, stamina: -15 },
        followUpText: '히로인의 눈에 하트가 완전히 떠올랐다. "네♡ 선생님 전용 정액 변기예요♡ 보지도 항문도 자궁도 전부 선생님 거예요♡" 완전한 복종. 하지만 인형과 무엇이 다른가.',
      },
      {
        text: '부드럽게 안아준다',
        statEffects: { charm: 25, libido: 15, endurance: 0, technique: 0, capacity: 0 },
        conditionEffects: { mental: 25, stamina: 5 },
        followUpText: '히로인이 소리 내어 울었다. 오래 참았던 감정이 터진다. "선생님... 선생님...♡" 안겨들며 보지를 밀착시킨다. 이 눈물은 회복의 시작이자, 더 깊은 의존의 시작.',
      },
    ],
  },
  {
    id: 'pre_final',
    title: '최후의 밤',
    text: '내일이면 메스 그랑프리. 히로인과의 마지막 밤.\n\n"선생님... 처음 왔을 때의 저 기억나요? 자지가 뭔지도 몰랐던 바보..."\n\n자조적으로 웃으며 스스로 옷을 벗는다. 완벽하게 개발된 몸이 달빛에 드러난다.\n\n"지금의 이 보지는... 선생님이 만들어 준 거예요. 내일, 꼭 보여드릴게요."',
    trigger: { type: 'turn', turn: 35 },
    phase: 'late',
    choices: [
      {
        text: '"넌 내 최고의 작품이야" 마지막 밤을 함께한다',
        statEffects: { charm: 15, technique: 15, libido: 15, capacity: 0, endurance: 0 },
        conditionEffects: {},
        followUpText: '마지막 밤, 부드럽게 자궁까지 채웠다. 도퓨루… "선생님 정액… 자궁이 기억할게요… 영원히♡" 눈물과 정액이 뒤섞인 아름다운 밤.',
      },
      {
        text: '"앞으로도 곁에 있을게"',
        statEffects: { libido: 25, charm: 25, technique: 0, capacity: 0, endurance: 0 },
        conditionEffects: { mental: 15 },
        followUpText: '눈에서 눈물이 넘친다. "비겁해요... 그런 말 들으면, 보지가 더 젖어요... 영원히 선생님 옆에 있을게요♡"',
      },
    ],
  },

  // ━━━ 최종 (38~40턴) ━━━
  {
    id: 'grand_prix',
    title: '메스 그랑프리',
    text: '드디어 그날이 왔다. 관중석이 가득 찬 대무대.\n\n완벽하게 개발된 히로인이 당신 옆에 서 있다. 역바니 의상 사이로 보지가 이미 애액으로 번들거린다.\n\n"선생님... 이 보지로, 최고의 모습 보여줄게요. 관중 모두에게, 선생님이 만들어 준 이 몸을♡"',
    trigger: { type: 'turn', turn: 38 },
    phase: 'final',
    choices: [
      {
        text: '"가서 보여줘 — 네 보지가 세계 최고라는 걸"',
        statEffects: { technique: 25, charm: 25, libido: 15, capacity: 10, endurance: 10 },
        conditionEffects: { stamina: -20, mental: -10 },
        followUpText: '무대 위의 히로인은 빛났다. 완벽한 기교로 관중을 사로잡고, 분수가 스포트라이트 아래서 무지개를 만든다. 당신이 만든 최고의 명기가 세상에 공개되는 순간.',
      },
      {
        text: '"함께 무대에 올라가자. 관중 앞에서 보여주마"',
        statEffects: { libido: 25, capacity: 25, endurance: 15, technique: 0, charm: 0 },
        conditionEffects: { stamina: -15, mental: 5 },
        followUpText: '관중 앞에서 자지를 삽입했다. 파코파코… "아하앙♡ 관객 여러분… 이 보지는 선생님 전용이에요♡" 둘이서 무대 위에서. 관중 열광. 함께이기에 두렵지 않다.',
      },
    ],
  },
]
