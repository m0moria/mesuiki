import { GameEvent } from '../types/game'

export const events: GameEvent[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 봄 (Turn 1~12): 싹트는 욕망
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 프롤로그 — 자궁 조율사의 탄생
  {
    id: 'prologue',
    title: '국가 최종 병기, 자궁 조율사의 탄생',
    trigger: { type: 'turn', turn: 1 },
    script: [
      { text: '2047년. 출생률이 바닥을 찍은 지 이미 10년이 지났다. 정부는 마지막 카드를 꺼내 들었다.', type: 'narration' },
      { text: '거대한 원형 홀. 수백 명의 정치인과 과학자들이 웅성거리는 가운데, 단상 위에 검은 정장의 여자가 올라섰다.', type: 'narration' },
      { speaker: '키리시마 레이카', text: '더 이상 말로 해결할 때가 아닙니다. 우리는 최고급 메스이키를 육성합니다. 미소녀들의 몸을 완벽한 착유기로 개조하여, 한 명이 평생 50명의 아이를 낳게 만듭니다.', type: 'dialogue' },
      { speaker: '키리시마 레이카', text: '그 이름은 — 사립 메스이키 학원.', type: 'dialogue' },
      { text: '홀이 술렁인다. 나는 VIP석 뒤편에서 조용히 지켜보고 있었다.', type: 'narration' },
      { speaker: '키리시마 레이카', text: '그리고 이 프로젝트의 핵심 병기. 세계에서 단 7명뿐인 초월 자지 소유자... 자궁 조율사를 소개합니다.', type: 'dialogue' },
      { text: '레이카의 손이 나를 가리켰다. 홀 전체의 시선이 나에게 쏠린다.', type: 'action' },
      { speaker: '키리시마 레이카', text: '당신은 이미 검증됐습니다. 삽입 3초 만에 자궁구가 열리고, 30초 안에 메스이키 상태를 만들어내는 능력. 당신이야말로 국가의 마지막 희망입니다.', type: 'dialogue' },
      { text: '...좋다. 내 자지로 이 나라를 구해 주지.', type: 'thought' },
    ],
    choices: [
      {
        text: '받아들인다 — "내 자지에 맡겨라."',
        statEffects: { charm: 15 },
        conditionEffects: { mental: 5 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아. 맡기지. 내 자지로 모든 히로인의 몸을 완벽하게 개조해 주겠다.', type: 'dialogue' },
          { text: '레이카가 미소를 지었다. 이 여자도 내 자지의 가치를 정확히 알고 있다.', type: 'narration' },
          { speaker: '키리시마 레이카', text: '기대하고 있겠습니다. 첫 번째 대상... 이미 준비되어 있으니까요.', type: 'dialogue' },
        ],
      },
      {
        text: '조건을 건다 — "전권을 보장해라."',
        statEffects: { technique: 10, charm: 10 },
        conditionEffects: {},
        followUpScript: [
          { speaker: '트레이너', text: '한 가지 조건이 있다. 조교 방식에 대한 전권을 보장해. 언제, 어디서, 어떻게 박든 간섭하지 마.', type: 'dialogue' },
          { speaker: '키리시마 레이카', text: '...좋습니다. 결과만 내 주세요. 방법은 당신 자유입니다.', type: 'dialogue' },
          { text: '완벽하다. 이제 이 학원의 모든 구멍은 내 마음대로다.', type: 'thought' },
        ],
      },
    ],
  },

  // 첫 만남 — 히로인과의 첫 접촉
  {
    id: 'first-encounter',
    title: '첫 번째 조율 — 몸의 기억',
    trigger: { type: 'turn', turn: 3 },
    script: [
      { text: '빈 교실. 커튼이 내려진 창 사이로 붉은 석양이 새어 들어온다.', type: 'narration' },
      { text: '히로인이 책상 앞에 서 있다. 치마가 짧아서 허벅지 위쪽의 하얀 살결이 선명하게 드러나 있다.', type: 'narration' },
      { speaker: '트레이너', text: '좋아, 오늘이 첫 번째 조율이다. 먼저 기초 감도부터 확인할게. 책상 위에 앉아.', type: 'dialogue' },
      { text: '히로인이 입술을 깨문다. 하지만 거부하지는 않는다. 학원 규칙이라는 걸 이미 알고 있으니까.', type: 'narration' },
      { speaker: '트레이너', text: '다리 벌려. 팬티는 그대로 입고 있어. 바깥에서부터 천천히 확인한다.', type: 'dialogue' },
      { text: '내 손가락이 팬티 위를 가볍게 스쳤다. 이미 축축하게 젖어 있었다. 이 몸, 감도가 상당하다.', type: 'action' },
    ],
    choices: [
      {
        text: '부드럽게 — 클리토리스 위를 천천히 원을 그린다',
        statEffects: { libido: 40, charm: 20 },
        conditionEffects: { mental: -5 },
        followUpScript: [
          { text: '팬티 위로 클리토리스를 찾아 천천히 원을 그렸다. 히로인의 허벅지가 부르르 떨리기 시작한다.', type: 'action' },
          { speaker: '히로인', text: '으응... 거기... 이상해요... 뭔가 아래에서 쭉쭉 올라와...♡', type: 'dialogue' },
          { text: '팬티가 완전히 젖어서 속살의 윤곽이 비쳐 보인다. 첫날부터 이 정도면 기대해도 되겠군.', type: 'narration' },
        ],
      },
      {
        text: '직접적으로 — 팬티를 옆으로 젖히고 손가락을 밀어 넣는다',
        statEffects: { technique: 30, capacity: 25 },
        conditionEffects: { mental: -10 },
        followUpScript: [
          { text: '팬티를 옆으로 젖히자 투명한 애액이 실처럼 길게 늘어졌다. 손가락 두 개를 천천히 밀어 넣는다.', type: 'action' },
          { speaker: '히로인', text: '아앗...! 손가락이... 안에... 들어와...♡ 안 돼, 이런 거 처음이라...!', type: 'dialogue' },
          { text: '안쪽 벽이 내 손가락을 꽉 조여온다. 이 보지, 제대로 개발하면 명기가 되겠어.', type: 'narration' },
        ],
      },
    ],
  },

  // 신입생 오리엔테이션 — 첫 번째 평가전
  {
    id: 'spring-evaluation',
    title: '신입생 오리엔테이션 — 기초 감도 테스트',
    trigger: { type: 'turn', turn: 8 },
    script: [
      { text: '학원 대강당. 신입생 전원이 모여 있다. 무대 위에 커다란 스크린과 바이브레이터가 줄지어 놓여 있다.', type: 'narration' },
      { speaker: '키리시마 레이카', text: '신입생 오리엔테이션을 시작합니다. 기초 감도 테스트 — 무대 위에서 바이브를 삽입하고, 누가 가장 빨리, 가장 예쁘게 절정에 도달하는지 측정합니다.', type: 'dialogue' },
      { text: '히로인의 얼굴이 새하얗게 질렸다. 하지만 무대 위로 올라가야 한다.', type: 'narration' },
      { speaker: '트레이너', text: '긴장하지 마. 내 눈만 봐. 내가 시키는 대로만 하면 돼.', type: 'dialogue' },
      { text: '무대 조명이 켜지고, 히로인이 관중석을 마주한다. 수백 명의 시선이 그녀의 몸에 꽂힌다.', type: 'action' },
      { speaker: '히로인', text: '선생님... 다들 보고 있어요... 이런 데서 그런 걸...', type: 'dialogue' },
      { speaker: '트레이너', text: '다른 건 신경 쓰지 마. 그냥 느끼는 대로 몸을 맡겨. 네 몸은 내가 알아서 조율해 줄 테니까.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '무대 뒤에서 귓속말로 리드한다',
        statEffects: { libido: 55, charm: 35 },
        conditionEffects: { mental: -8 },
        followUpScript: [
          { text: '무대 뒤에서 이어폰을 통해 히로인의 귀에 직접 속삭였다.', type: 'action' },
          { speaker: '트레이너', text: '좋아, 바이브가 안에서 진동하고 있지? 힘 빼. 그대로 골반에 힘 주고... 안쪽 벽으로 바이브를 꽉 조여봐.', type: 'dialogue' },
          { speaker: '히로인', text: '으응...♡ 선생님 목소리 들으니까... 안에서 뭔가 쭉쭉... 아앗♡ 이, 이거 느껴져요...!', type: 'dialogue' },
          { text: '히로인이 무대 위에서 허리를 떨며 첫 절정에 도달했다. 관중석에서 탄성이 터져 나온다. D랭크 탈출. 첫 걸음으로는 충분하다.', type: 'narration' },
        ],
      },
      {
        text: '직접 무대에 올라가 손으로 도와준다',
        statEffects: { technique: 45, libido: 30 },
        conditionEffects: { stamina: -10, mental: -12 },
        followUpScript: [
          { text: '내가 직접 무대 위로 올라갔다. 관중이 웅성거린다.', type: 'action' },
          { speaker: '트레이너', text: '내가 직접 해 주지. 다리 벌려.', type: 'dialogue' },
          { text: '바이브 위에 내 손가락을 겹쳐서, 클리토리스를 동시에 자극했다. 히로인의 등이 활처럼 휘어진다.', type: 'action' },
          { speaker: '히로인', text: '아아아앗...♡ 선생님 손가락이...! 바이브랑 같이... 이건 너무...! 가, 간다...♡♡', type: 'dialogue' },
          { text: '관중 앞에서 분수를 뿜으며 절정에 도달했다. 충격적인 데뷔. 이 학원에서 내 이름이 알려지기 시작했다.', type: 'narration' },
        ],
      },
    ],
  },

  // 봄 끝 — 히로인의 자각
  {
    id: 'spring-awakening',
    title: '선생님... 덕분이에요',
    trigger: { type: 'stat', stat: 'libido', threshold: 200, direction: 'above' },
    script: [
      { text: '훈련실. 하루 일과가 끝나고 히로인이 나를 찾아왔다.', type: 'narration' },
      { speaker: '히로인', text: '선생님... 저... 요즘 이상해요. 밤마다 몸이 뜨거워지고, 아래가 자꾸 축축해져서...', type: 'dialogue' },
      { text: '히로인이 고개를 숙인 채 허벅지를 비비고 있다. 치마 안쪽이 이미 젖어 있는 게 보인다.', type: 'narration' },
      { speaker: '히로인', text: '선생님이 만져줄 때만 기분이 좋아져요... 이거 정상인 건가요...?', type: 'dialogue' },
      { text: '착실하게 의존이 시작되고 있다. 내 자지 없이는 잠도 못 자는 몸으로 만들어 주마.', type: 'thought' },
    ],
    choices: [
      {
        text: '"정상이야. 네 몸이 나한테 길들여지고 있는 거니까."',
        statEffects: { libido: 45, charm: 25 },
        conditionEffects: { mental: -5 },
        followUpScript: [
          { speaker: '트레이너', text: '정상이야. 네 몸이 나한테 맞춰지고 있는 거다. 좋은 징조야.', type: 'dialogue' },
          { speaker: '히로인', text: '그, 그런 건가요... 그러면 다행이에요...♡ 선생님한테 인정받으니까 안심이 돼요.', type: 'dialogue' },
          { text: '히로인이 살짝 웃었다. 이 순간부터 그녀에게 나는 "유일하게 자신을 알아주는 사람"이 됐다.', type: 'narration' },
        ],
      },
      {
        text: '"그럼 지금 당장 확인해 줄까?"',
        statEffects: { technique: 40, capacity: 20 },
        conditionEffects: { stamina: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '말로 설명하는 것보다 직접 보여 주는 게 빠르지. 여기 앉아.', type: 'dialogue' },
          { text: '히로인을 내 무릎 위에 앉히고, 치마 안쪽으로 손을 넣었다. 이미 속옷이 흠뻑 젖어 있다.', type: 'action' },
          { speaker: '히로인', text: '아앗... 선생님 손가락... 따뜻해요...♡ 역시 선생님한테 만져지면 달라요...', type: 'dialogue' },
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
    title: '라이벌 등장 — "너 따위한테 질 수 없어"',
    trigger: { type: 'turn', turn: 15 },
    script: [
      { text: '합동 훈련장. 타교의 에이스 트레이너와 그 히로인이 도발적인 눈빛으로 이쪽을 바라보고 있다.', type: 'narration' },
      { speaker: '라이벌 히로인', text: '후후... 이게 그 유명한 자궁 조율사의 히로인? 이 정도 몸으로 트레이너를 만족시킬 수 있겠어?', type: 'dialogue' },
      { text: '라이벌 히로인이 히로인의 가슴팍을 손가락으로 톡 건드렸다. 노골적인 도발.', type: 'action' },
      { speaker: '라이벌 히로인', text: '1:1 배틀 하자. 누가 더 빨리 자기 트레이너를 싸게 하는지. 진 쪽은 관객 앞에서 알몸 사죄.', type: 'dialogue' },
      { speaker: '히로인', text: '선생님... 저... 할 수 있을까요...?', type: 'dialogue' },
      { text: '히로인이 불안한 눈으로 나를 올려다본다. 아직 자신감이 부족하다.', type: 'narration' },
    ],
    choices: [
      {
        text: '"받아들여. 네 실력을 증명할 기회다."',
        statEffects: { endurance: 50, technique: 30 },
        conditionEffects: { mental: -15 },
        followUpScript: [
          { text: '배틀이 시작됐다. 하지만 결과는 참패. 라이벌의 압도적인 테크닉에 밀려 히로인은 제대로 된 봉사조차 하지 못했다.', type: 'narration' },
          { text: '라이벌 히로인이 자기 트레이너의 정액을 입 가득 머금은 채 비웃었다.', type: 'action' },
          { speaker: '라이벌 히로인', text: '이 정도가 한계야? 불쌍하다~', type: 'dialogue' },
          { text: '히로인의 눈에 눈물이 고여 있었다. 하지만 그 안에 불꽃이 타오르기 시작한 것도 보였다. 열등감은 최고의 연료다.', type: 'narration' },
        ],
      },
      {
        text: '"거절해. 아직 때가 아니야."',
        statEffects: { charm: 40, libido: 25 },
        conditionEffects: { mental: 5 },
        followUpScript: [
          { speaker: '트레이너', text: '싫다. 아직 이 아이 조교가 안 끝났어. 네가 도발하고 싶으면 그랑프리에서 해.', type: 'dialogue' },
          { speaker: '라이벌 히로인', text: '겁쟁이네? 도망치는 거잖아~', type: 'dialogue' },
          { text: '무시하고 히로인의 손을 잡아 끌고 나왔다. 히로인이 내 손을 꽉 쥐고 있다. 이 순간의 신뢰가 나중에 큰 힘이 될 거다.', type: 'narration' },
        ],
      },
    ],
  },

  // 여름 합숙 — 지옥의 특훈
  {
    id: 'summer-camp',
    title: '여름 합숙 — 해변의 야외 훈련',
    trigger: { type: 'turn', turn: 20 },
    script: [
      { text: '바닷가 합숙소. 한낮의 뜨거운 모래사장 위에 히로인이 비키니 차림으로 서 있다.', type: 'narration' },
      { text: '낮 동안은 체력 훈련. 밤에는 본격적인 조교. 일주일 간의 지옥 합숙이 시작됐다.', type: 'narration' },
      { speaker: '트레이너', text: '라이벌한테 진 설욕은 여기서 한다. 낮에는 체력, 밤에는 감도. 쉴 시간 없어.', type: 'dialogue' },
      { speaker: '히로인', text: '네... 선생님. 이번엔 절대 지지 않을 거예요.', type: 'dialogue' },
      { text: '히로인의 눈에 결의가 서려 있다. 패배의 수치심이 그녀를 단단하게 만들었다.', type: 'narration' },
      { text: '밤이 되자 불꽃놀이 소리가 멀리서 들려온다. 해변의 바위 뒤, 달빛 아래서 히로인이 비키니 끈을 풀기 시작했다.', type: 'narration' },
      { speaker: '히로인', text: '선생님... 오늘 밤은 제가 먼저 할게요. 라이벌한테 졌던 거... 다 되갚을 수 있게 가르쳐 주세요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '딥스로트 특훈 — 목구멍 깊숙이 삼키는 법을 가르친다',
        statEffects: { technique: 70, libido: 40 },
        conditionEffects: { stamina: -15, mental: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '입 크게 벌려. 내 자지를 끝까지 삼켜. 목구멍이 거부하더라도 참아.', type: 'dialogue' },
          { text: '히로인이 내 자지를 입에 물었다. 처음에는 반 정도까지만 들어갔지만, 불꽃놀이가 터질 때마다 조금씩 더 깊이 삼킨다.', type: 'action' },
          { speaker: '히로인', text: '쭈루루... 으윽... 목구멍까지... 쩝... 선생님 자지... 전부 들어왔어요...♡', type: 'dialogue' },
          { text: '파앗— 불꽃놀이가 밤하늘에 터지는 순간, 히로인의 목구멍이 내 자지를 끝까지 삼켰다. 이 기술이면 라이벌 따위 상대도 안 된다.', type: 'narration' },
        ],
      },
      {
        text: '야외 삽입 훈련 — 파도 소리에 맞춰 리듬을 가르친다',
        statEffects: { capacity: 60, endurance: 45 },
        conditionEffects: { stamina: -12, mental: -10 },
        followUpScript: [
          { text: '모래사장에 히로인을 눕히고 다리를 벌렸다. 파도가 밀려올 때마다 허리를 밀어 넣고, 빠질 때 뺀다.', type: 'action' },
          { speaker: '히로인', text: '아앗...♡ 파도랑... 같이... 들어왔다 나갔다...♡ 바다 소리가 들릴 때마다 안에서 쿵쿵 울려요...!', type: 'dialogue' },
          { speaker: '트레이너', text: '좋아, 이 리듬을 기억해. 밀고 당기는 타이밍이 중요하다.', type: 'dialogue' },
          { text: '불꽃놀이가 하늘을 물들이는 동안, 히로인은 내 자지에 맞춰 스스로 허리를 움직이기 시작했다. 본능이 깨어나고 있다.', type: 'narration' },
        ],
      },
    ],
  },

  // 여름 끝 — 독점욕 폭발
  {
    id: 'summer-possessive',
    title: '선생님 자지는 내 거야!',
    trigger: { type: 'stat', stat: 'technique', threshold: 350, direction: 'above' },
    script: [
      { text: '합숙 마지막 날 밤. 히로인이 내 방문을 두드렸다.', type: 'narration' },
      { speaker: '히로인', text: '선생님... 저, 한 가지 물어볼 게 있어요.', type: 'dialogue' },
      { text: '히로인의 눈이 진지하다. 비키니 위에 얇은 가디건 하나만 걸치고 있다.', type: 'narration' },
      { speaker: '히로인', text: '선생님은... 다른 애들한테도 이런 거 해 줘요? 나한테만... 아닌 거예요?', type: 'dialogue' },
      { text: '질투다. 독점욕이 싹트기 시작했다. 이건 좋은 신호다.', type: 'thought' },
    ],
    choices: [
      {
        text: '"너만 특별하다고 생각해?"',
        statEffects: { charm: 55, endurance: 30 },
        conditionEffects: { mental: -10 },
        followUpScript: [
          { speaker: '트레이너', text: '내가 특별히 대하는 건 네가 특별하니까야. 다른 애들과는 다르게 해 줄게.', type: 'dialogue' },
          { text: '히로인의 눈에 기쁨과 안도가 동시에 번졌다. 그녀가 내 가슴에 얼굴을 묻었다.', type: 'narration' },
          { speaker: '히로인', text: '선생님 자지는... 제 거예요. 아무한테도 안 줄 거예요...♡', type: 'dialogue' },
          { text: '가디건 아래로 손을 넣자 이미 비키니 아래가 흠뻑 젖어 있었다. 오늘 밤은 길어질 것 같다.', type: 'narration' },
        ],
      },
      {
        text: '"질투하는 거야? 그러면 증명해 봐."',
        statEffects: { libido: 50, technique: 30 },
        conditionEffects: { mental: -15 },
        followUpScript: [
          { speaker: '트레이너', text: '질투할 시간에 실력으로 증명해. 네 몸이 다른 누구보다 내 자지에 맞는다는 걸 보여 줘.', type: 'dialogue' },
          { text: '히로인이 눈물을 글썽이더니, 갑자기 내 바지 앞을 잡아당겼다.', type: 'action' },
          { speaker: '히로인', text: '그, 그럼... 지금 당장... 증명할게요...!♡ 제 몸이 선생님한테 제일 맞는다는 거...!', type: 'dialogue' },
          { text: '히로인이 스스로 비키니를 벗기 시작했다. 질투심이 적극성으로 변했다. 이 방향이 맞다.', type: 'narration' },
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
    title: '예비 그랑프리 — 최악의 시련',
    trigger: { type: 'turn', turn: 28 },
    script: [
      { text: '예비 그랑프리(G2) 대회장. 관중석이 가득 차 있다. 히로인이 무대 옆에서 대기하고 있다.', type: 'narration' },
      { text: '그런데 무언가 이상하다. 심사위원석에 낯선 얼굴들이 앉아 있고, 경기 규칙이 갑자기 바뀌었다.', type: 'narration' },
      { speaker: '심사위원', text: '이번 G2의 특별 규칙입니다. 심사위원 전원이 직접 참가자의 감도를 테스트합니다.', type: 'dialogue' },
      { text: '스폰서의 압력이다. 히로인의 얼굴이 창백해졌다.', type: 'narration' },
      { speaker: '히로인', text: '선생님... 심사위원들이 저를 직접... 이건 아니잖아요...', type: 'dialogue' },
      { text: '히로인이 내 소매를 꽉 붙잡았다. 손이 떨리고 있다.', type: 'action' },
      { speaker: '히로인', text: '전 그냥... 선생님한테만... 만져지고 싶어요... 다른 사람은 싫어요...', type: 'dialogue' },
    ],
    choices: [
      {
        text: '심사위원석에 난입한다 — "이 아이 몸에 손대는 건 나뿐이다."',
        statEffects: { charm: 65, endurance: 40 },
        conditionEffects: { mental: 10, stamina: -15 },
        followUpScript: [
          { text: '나는 심사위원석으로 뛰어올라가 테이블을 쳤다.', type: 'action' },
          { speaker: '트레이너', text: '이 아이 몸은 내 관할이다. 감도 테스트가 필요하면 내가 직접 한다. 네놈들 손은 필요 없어.', type: 'dialogue' },
          { text: '회장이 술렁였다. 하지만 내 트레이너 자격증과 국가 프로젝트 권한은 심사위원 따위보다 위다.', type: 'narration' },
          { speaker: '히로인', text: '선생님... 저를 위해 저렇게까지...', type: 'dialogue' },
          { text: '히로인의 눈에 눈물이 흘러내렸다. 하지만 그 눈빛은 달라져 있었다. "이 사람을 위해서라면 뭐든 하겠다"는 결의.', type: 'narration' },
        ],
      },
      {
        text: '히로인을 믿고 내보낸다 — "네 실력을 보여 줘."',
        statEffects: { technique: 50, libido: 35 },
        conditionEffects: { mental: -20 },
        followUpScript: [
          { speaker: '트레이너', text: '걱정 마. 심사위원이 뭘 하든 네 몸은 내가 조율한 거야. 자신감 가져.', type: 'dialogue' },
          { text: '히로인이 무대에 올라갔다. 심사위원들의 손길에 처음에는 몸이 굳었지만...', type: 'narration' },
          { text: '내 조교가 몸에 새겨져 있었다. 내 리듬이 아닌 자극에는 반응하지 않는 몸. 심사위원들이 당황하기 시작했다.', type: 'narration' },
          { speaker: '히로인', text: '...쓸데없어요. 제 몸은 선생님 전용이에요. 다른 사람 손에는 반응 안 해요.', type: 'dialogue' },
        ],
      },
    ],
  },

  // 가을 — 노리미트 각성
  {
    id: 'fall-nolimit',
    title: '각성 — 망가져도 좋아',
    trigger: { type: 'stat', stat: 'capacity', threshold: 500, direction: 'above' },
    script: [
      { text: '훈련실. 예비 그랑프리에서의 사건 이후, 히로인이 달라졌다.', type: 'narration' },
      { speaker: '히로인', text: '선생님. 저... 더 세게 해 주세요. 몸이 망가져도 좋아요.', type: 'dialogue' },
      { text: '히로인이 스스로 옷을 벗기 시작했다. 예전의 부끄러워하던 모습은 온데간데없다.', type: 'narration' },
      { speaker: '히로인', text: '그랑프리에서 이기려면 지금보다 더 강해져야 해요. 선생님이 저를 한계까지 밀어붙여 주세요.', type: 'dialogue' },
      { speaker: '트레이너', text: '...후회 없지?', type: 'dialogue' },
      { speaker: '히로인', text: '네. 선생님을 위해서라면 뭐든 할 수 있어요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '풀파워 — 자궁구를 직접 공략한다',
        statEffects: { capacity: 80, libido: 50 },
        conditionEffects: { stamina: -18, mental: -12 },
        followUpScript: [
          { text: '히로인을 책상 위에 올리고 다리를 최대한 벌렸다. 내 자지를 한 번에 끝까지 밀어 넣는다.', type: 'action' },
          { speaker: '히로인', text: '아아아앗...♡ 자궁... 직접 닿았어...! 이 느낌... 이거야...♡♡ 더 세게, 선생님...!', type: 'dialogue' },
          { text: '자궁구가 내 자지 끝을 입 벌리듯 빨아들이기 시작했다. 이 보지, 드디어 본성을 드러냈군.', type: 'narration' },
        ],
      },
      {
        text: '단계별로 — 한계를 조금씩 늘려간다',
        statEffects: { endurance: 60, technique: 45 },
        conditionEffects: { stamina: -10, mental: -5 },
        followUpScript: [
          { speaker: '트레이너', text: '급하게 굴면 안 돼. 천천히, 하지만 확실하게 한계를 넓혀 주지.', type: 'dialogue' },
          { text: '손가락 한 개부터 시작해서, 두 개, 세 개... 그리고 마지막으로 내 자지. 히로인의 몸이 단계마다 새로운 반응을 보여준다.', type: 'action' },
          { speaker: '히로인', text: '으응...♡ 점점 안이 넓어져요... 선생님 자지에 맞춰서... 제 몸이 바뀌어 가고 있어요...♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // 가을 끝 — 헌신의 증명
  {
    id: 'fall-devotion',
    title: '선생님을 위해서라면',
    trigger: { type: 'stat', stat: 'charm', threshold: 500, direction: 'above' },
    script: [
      { text: '심야. 히로인이 내 숙소로 찾아왔다. 잠옷 차림에 맨발이다.', type: 'narration' },
      { speaker: '히로인', text: '선생님... 잠이 안 와요. 선생님 옆에 있어도 될까요?', type: 'dialogue' },
      { text: '히로인이 내 이불 속으로 기어 들어왔다. 체온이 뜨겁다.', type: 'action' },
      { speaker: '히로인', text: '선생님 냄새... 이것만으로도 안이 뜨거워져요... 미안해요, 이런 말 하면 이상하죠...', type: 'dialogue' },
      { text: '히로인이 내 손을 잡아서 자기 가슴 위에 올려놓았다. 심장이 미친 듯이 뛰고 있다.', type: 'action' },
      { speaker: '히로인', text: '전 이제... 선생님 없이는 안 돼요. 몸도, 마음도 전부 선생님 거예요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '받아들인다 — 오늘 밤은 조교가 아니라 둘만의 시간',
        statEffects: { charm: 70, libido: 40 },
        conditionEffects: { mental: 10, stamina: -10 },
        followUpScript: [
          { speaker: '트레이너', text: '...오늘은 트레이너가 아니라 그냥 나로서 안아 주지.', type: 'dialogue' },
          { text: '히로인을 부드럽게 안았다. 오늘 밤은 기술도 조교도 아닌, 순수한 유대의 밤이다.', type: 'narration' },
          { speaker: '히로인', text: '선생님... 좋아해요...♡ 정말로... 진심으로...', type: 'dialogue' },
          { text: '히로인이 내 가슴에 얼굴을 묻고 잠들었다. 내일부터 다시 지옥의 훈련이 시작되겠지만, 오늘 밤의 기억이 그녀를 더 강하게 만들 거다.', type: 'narration' },
        ],
      },
      {
        text: '"그 마음을 몸으로 증명해."',
        statEffects: { libido: 55, technique: 40 },
        conditionEffects: { mental: -8, stamina: -12 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아. 그 헌신이 진짜인지 확인시켜 줘.', type: 'dialogue' },
          { text: '히로인이 스스로 잠옷을 벗었다. 달빛 아래 드러난 몸이 너무 아름답다.', type: 'narration' },
          { speaker: '히로인', text: '선생님... 전부 보여줄게요... 선생님만을 위한 제 몸...♡', type: 'dialogue' },
          { text: '오늘 밤, 히로인은 내가 시키지 않은 것까지 스스로 해냈다. 영혼까지 바친다는 게 이런 건가.', type: 'narration' },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 겨울 (Turn 37~48): 완성형 암컷
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // 겨울 합숙 — 최종 조율
  {
    id: 'winter-final-tuning',
    title: '준 그랑프리 — 마지막 약점 보완',
    trigger: { type: 'turn', turn: 38 },
    script: [
      { text: '눈 내리는 노천온천. 겨울 합숙의 마지막 밤이다.', type: 'narration' },
      { text: '히로인이 온천 속에서 나를 올려다보고 있다. 김이 모락모락 피어오르는 사이로 그녀의 표정이 보인다. 두려움이 아닌, 기대.', type: 'narration' },
      { speaker: '히로인', text: '선생님. 제가 먼저 말할게요. 여기를 더 개발해 주세요.', type: 'dialogue' },
      { text: '히로인이 내 손을 잡아 자기 아랫배에 갖다 대며 수줍게 웃었다.', type: 'action' },
      { speaker: '히로인', text: '이 안쪽... 아직 선생님 자지가 완전히 닿지 않는 곳이 있어요. 거기까지 전부 선생님 것으로 만들어 주세요.', type: 'dialogue' },
      { speaker: '트레이너', text: '...네가 먼저 그렇게 말해 주다니. 정말 성장했어.', type: 'dialogue' },
      { text: '눈이 소리 없이 내리는 가운데, 나는 히로인을 안아 올렸다. 오늘은 조교가 아니다. 마지막 파트너십의 완성이다.', type: 'narration' },
    ],
    choices: [
      {
        text: '온천 속에서 천천히 — 영혼의 합체',
        statEffects: { charm: 80, libido: 50, endurance: 30 },
        conditionEffects: { mental: 15, stamina: -10 },
        followUpScript: [
          { text: '온천물 속에서 히로인을 안고 천천히 하나가 됐다. 뜨거운 물과 체온이 섞여 경계가 사라진다.', type: 'action' },
          { speaker: '히로인', text: '으응...♡ 선생님... 이 느낌... 안에서 선생님 심장 소리가 느껴져요... 하나가 되는 것 같아...♡', type: 'dialogue' },
          { speaker: '트레이너', text: '나도 느껴. 네 몸이 내 자지에 완벽하게 맞아 들어가는 게.', type: 'dialogue' },
          { text: '눈꽃이 히로인의 어깨 위에 내려앉는다. 이 순간, 육체만이 아닌 정신적인 유대가 완성됐다.', type: 'narration' },
        ],
      },
      {
        text: '전력 조교 — 마지막 약점을 철저하게 짓밟는다',
        statEffects: { capacity: 70, technique: 55 },
        conditionEffects: { stamina: -18, mental: -5 },
        followUpScript: [
          { speaker: '트레이너', text: '결승 전이니까 봐 주는 거 없다. 네 몸에 남은 마지막 벽을 부순다.', type: 'dialogue' },
          { text: '온천에서 끌어올려 눈밭 위에 눕혔다. 차가운 눈과 뜨거운 몸의 온도차가 감도를 극한까지 끌어올린다.', type: 'action' },
          { speaker: '히로인', text: '아아아...♡ 차가운데 안은 뜨거워...! 선생님 자지가 더 크게 느껴져...! 이 자세... 자궁 직격이에요...♡♡', type: 'dialogue' },
          { text: '히로인의 몸에서 김이 피어오른다. 마지막 벽이 무너지는 소리가 들렸다.', type: 'narration' },
        ],
      },
    ],
  },

  // 그랑프리 전야 — 최종 점검
  {
    id: 'grandprix-eve',
    title: '결전 전야 — 최종 점검',
    trigger: { type: 'turn', turn: 44 },
    script: [
      { text: '그랑프리 전날 밤. 대기실에서 히로인과 둘이서 마주 앉아 있다.', type: 'narration' },
      { speaker: '히로인', text: '선생님... 내일이에요. 드디어 그랑프리.', type: 'dialogue' },
      { speaker: '트레이너', text: '긴장돼?', type: 'dialogue' },
      { speaker: '히로인', text: '아니요. 이상하게 차분해요. 선생님이 옆에 있으니까.', type: 'dialogue' },
      { text: '히로인이 내 손을 잡았다. 처음 만났을 때 떨리던 그 손이 이제는 단단하다.', type: 'narration' },
      { speaker: '히로인', text: '전부 선생님 덕분이에요. 몸도, 마음도, 전부 선생님이 만들어 준 거예요. 내일... 반드시 보답할게요.', type: 'dialogue' },
    ],
    choices: [
      {
        text: '"내일은 모든 걸 보여 줘."',
        statEffects: { charm: 45, endurance: 35 },
        conditionEffects: { mental: 15 },
        followUpScript: [
          { speaker: '트레이너', text: '네가 지금까지 쌓아온 모든 걸 내일 무대에서 터뜨려. 전국이 보는 앞에서.', type: 'dialogue' },
          { speaker: '히로인', text: '네...♡ 선생님의 최고 걸작이 된다는 걸 온 세상에 증명할게요.', type: 'dialogue' },
          { text: '히로인이 활짝 웃었다. 이 미소를 볼 수 있는 건 나뿐이다.', type: 'narration' },
        ],
      },
      {
        text: '마지막 리허설 — 몸의 최종 확인',
        statEffects: { libido: 40, technique: 30 },
        conditionEffects: { stamina: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아. 그 전에 마지막으로 몸 상태를 확인하자. 옷 벗어.', type: 'dialogue' },
          { text: '히로인이 망설임 없이 옷을 벗었다. 예전의 수줍음은 완전히 사라졌다.', type: 'narration' },
          { speaker: '히로인', text: '선생님... 확인해 주세요. 이 몸은 선생님이 만든 거예요. 어디든 마음대로 해 주세요♡', type: 'dialogue' },
          { text: '결전 전야. 나는 히로인의 몸 구석구석을 빠짐없이 점검했다. 완벽하다. 내일이 기대된다.', type: 'narration' },
        ],
      },
    ],
  },

  // 메스이키 그랑프리 — 최종전
  {
    id: 'grandprix-final',
    title: '메스이키 그랑프리 — 여신의 탄생',
    trigger: { type: 'turn', turn: 46 },
    script: [
      { text: '전 국민이 지켜보는 콜로세움. 결승 무대의 조명이 눈부시다.', type: 'narration' },
      { text: '결승 상대는 "퀸 오브 섹스" — 전대 우승자. 관중석에서 환호성이 쏟아진다.', type: 'narration' },
      { speaker: '실황', text: '메스이키 그랑프리 결승! Phase 1 — 펠라치오 대결! Phase 2 — 기승위 내구 레이스! Phase 3 — 트레이너와의 합체기! 모든 것을 건 총력전입니다!', type: 'dialogue' },
      { speaker: '히로인', text: '선생님... 갈게요. 지금까지 배운 것 전부.', type: 'dialogue' },
      { speaker: '트레이너', text: '이기고 와. 네가 최고라는 걸 증명해.', type: 'dialogue' },
      { text: '히로인이 무대에 올라간다. 그녀의 등이 너무 당당해서 가슴이 뜨거워진다.', type: 'narration' },
      { text: 'Phase 1 — 펠라치오 대결. 히로인이 여름 합숙에서 갈고닦은 딥스로트를 완벽하게 시전한다. 상대가 흔들리기 시작했다.', type: 'narration' },
      { text: 'Phase 2 — 기승위 내구 레이스. 히로인의 체력과 인내가 빛을 발한다. 상대가 먼저 한계에 도달한다.', type: 'narration' },
      { text: 'Phase 3 — 트레이너와의 합체기. 내가 무대에 올라간다. 마지막은 둘이 함께.', type: 'narration' },
    ],
    choices: [
      {
        text: '전력 투구 — 모든 스킬을 쏟아 붓는다',
        statEffects: { libido: 60, technique: 60, capacity: 40, endurance: 40, charm: 40 },
        conditionEffects: { stamina: -25, mental: -10 },
        followUpScript: [
          { text: '무대 위에서 히로인과 하나가 됐다. 관중의 환호성이 귀를 찢을 듯하다.', type: 'action' },
          { speaker: '히로인', text: '선생님...♡ 느껴져요... 안에서 전부 맞물려...♡ 이게 우리가 만든 최고의 합체기예요...!', type: 'dialogue' },
          { text: '히로인의 몸이 빛나는 것 같았다. 쾌락의 정점에서 아름다움이 폭발한다. 관중이 숨을 멈추고 지켜본다.', type: 'narration' },
          { speaker: '히로인', text: '아아아...♡♡ 선생님... 해냈어요... 우리가... 해냈어요...!♡', type: 'dialogue' },
          { text: '심사위원 전원 만점. 기립 박수. 히로인이 내 품에 안겨 울고 있다. 행복한 눈물이다.', type: 'narration' },
        ],
      },
      {
        text: '히로인에게 맡긴다 — "네가 주인공이야."',
        statEffects: { charm: 80, endurance: 50 },
        conditionEffects: { mental: 10, stamina: -15 },
        followUpScript: [
          { speaker: '트레이너', text: '마지막은 네가 리드해. 네가 배운 모든 걸 보여 줘.', type: 'dialogue' },
          { text: '히로인이 고개를 끄덕이고, 처음으로 스스로 주도했다. 내가 가르친 모든 기술이 완벽하게 하나로 연결된다.', type: 'narration' },
          { speaker: '히로인', text: '봐 주세요, 선생님...♡ 이게 선생님이 만든 저예요...!♡', type: 'dialogue' },
          { text: '압도적인 승리. 히로인이 무대 위에서 내게 달려와 안겼다. 관중석이 떠나가라 환호한다.', type: 'narration' },
          { speaker: '히로인', text: '선생님... 제가... 선생님의 최고 걸작이 된 거죠...?♡', type: 'dialogue' },
        ],
      },
    ],
  },

  // 스탯 기반 이벤트들
  {
    id: 'endurance-milestone',
    title: '한계를 넘어서',
    trigger: { type: 'stat', stat: 'endurance', threshold: 700, direction: 'above' },
    script: [
      { text: '심야 훈련실. 히로인이 5시간째 훈련을 멈추지 않고 있다.', type: 'narration' },
      { speaker: '트레이너', text: '그만해. 오늘은 충분히 했어.', type: 'dialogue' },
      { speaker: '히로인', text: '아직... 더 할 수 있어요. 선생님이 만족할 때까지 멈추지 않을 거예요.', type: 'dialogue' },
      { text: '히로인의 눈에 광기에 가까운 집념이 보인다. 내가 만든 열정이기도 하지만, 이건 좀 위험하다.', type: 'narration' },
    ],
    choices: [
      {
        text: '강제로 멈춘다 — "네 몸은 네 거기도 하다."',
        statEffects: { endurance: 40, charm: 30 },
        conditionEffects: { mental: 10, stamina: 15 },
        followUpScript: [
          { text: '히로인의 손목을 잡고 멈추게 했다. 그녀가 놀란 눈으로 올려다본다.', type: 'action' },
          { speaker: '트레이너', text: '무리하면 내일 못 움직여. 그랑프리에서 써야 할 체력까지 여기서 쓰면 안 돼.', type: 'dialogue' },
          { speaker: '히로인', text: '...네. 선생님 말이 맞아요. 미안해요, 너무 욕심부렸어요.', type: 'dialogue' },
        ],
      },
      {
        text: '끝까지 함께한다 — "좋아. 그럼 같이 지옥 가자."',
        statEffects: { endurance: 70, libido: 35 },
        conditionEffects: { stamina: -20, mental: -8 },
        followUpScript: [
          { speaker: '트레이너', text: '좋아, 대신 나도 같이 한다. 한계가 어딘지 같이 확인하자.', type: 'dialogue' },
          { text: '새벽 4시까지 함께 훈련했다. 히로인이 결국 내 가슴에 기대어 쓰러졌다.', type: 'narration' },
          { speaker: '히로인', text: '선생님... 같이 있으니까... 어디까지든 갈 수 있을 것 같아요...♡', type: 'dialogue' },
        ],
      },
    ],
  },
]
