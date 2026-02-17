import { Ending } from '../types/game'

export const endings: Ending[] = [
  // ── S Rank ──────────────────────────────────────────────
  {
    rank: 'S',
    title: '완전 조교 — S랭크 암컷 인증',
    condition: (stats) =>
      stats.libido >= 750 &&
      stats.technique >= 750 &&
      stats.capacity >= 600 &&
      stats.endurance >= 600 &&
      stats.charm >= 600,
    script: [
      { text: '메스 그랑프리 결승. 전국 생중계 카메라가 일제히 무대를 비춘다. 수만 관중 앞에서 나는 녀석의 양 다리를 어깨 위로 걸쳤다.', type: 'narration' },
      { speaker: '트레이너', text: '마지막이다. 전국에 보여줘... 네가 뭔지.', type: 'dialogue' },
      { text: '쿵, 하고 허리를 내리꽂자 자궁구가 벌어지며 끝까지 삼킨다. 종마 프레스. 관객석에서 비명이 터졌다.', type: 'action' },
      { speaker: '히로인', text: '히이잇♡♡ 안, 안돼... 전국에서 보고 있는데... 자궁이, 또 물어뜯어... ♡♡♡', type: 'dialogue' },
      { text: '5라운드, 6라운드... 녀석의 보지는 절정할 때마다 더 조여왔고, 10라운드를 넘길 무렵에는 심사위원조차 할 말을 잃었다.', type: 'narration' },
      { speaker: '트레이너', text: '받아. 전부 다 — 자궁 안에 쏟아줄게.', type: 'dialogue' },
      { text: '쫀... 쫀득... ♡ 뱃속이 정액으로 불룩해질 때까지 마지막 사정을 쏟아부었다. 녀석의 눈이 완전히 하트로 물들었다.', type: 'action' },
      { speaker: '히로인', text: '트레이너님의... 암컷이에요... ♡ 저는 트레이너님만의 거예요... 전국에, 인증할게요... ♡♡♡', type: 'dialogue' },
      { text: '무대 위에서 정액을 흘리면서도 행복한 표정으로 웃는 녀석을 보며 — 나는 확신했다. 완벽한 조교라는 게 뭔지.', type: 'narration' },
      { speaker: '키리시마 레이카', text: '만점 통과. S랭크 암컷 인증 — 합격이야. 축하해, 트레이너.', type: 'dialogue' },
      { text: '관중이 터뜨린 환호 속에서, 녀석은 내 품에 안겨 씰룩씰룩 웃었다. 배 안에 가득한 정액이 꿈틀거리는 걸 느끼면서.', type: 'narration' },
      { text: '【 S랭크 클리어 — 완전 조교 달성 】', type: 'narration' },
    ],
  },

  // ── A Rank ──────────────────────────────────────────────
  {
    rank: 'A',
    title: '깊은 유대 — 충실한 정액 변기',
    condition: (stats, cond) =>
      (stats.libido >= 600 || stats.charm >= 600) &&
      (stats.technique >= 500 || stats.endurance >= 500) &&
      cond.mental >= 30,
    script: [
      { text: '조교 마지막 날 아침. 임신 검사봉에 두 줄이 선명하게 떠올랐다.', type: 'narration' },
      { speaker: '히로인', text: '트레이너님... 들어왔어요. 트레이너님의 아기... ♡', type: 'dialogue' },
      { text: '녀석이 내 손을 잡아 아랫배에 가져다 댔다. 아직 평평한 배 아래, 내 씨가 뿌리를 내리고 있었다.', type: 'narration' },
      { speaker: '트레이너', text: '잘했어. 네 자궁은 내 정액 받는 게 천직이니까.', type: 'dialogue' },
      { speaker: '히로인', text: '네... ♡ 정액 변기니까요, 저는. 트레이너님 거 전부 받을게요... 아기 낳고도 또 넣어주세요... ♡♡', type: 'dialogue' },
      { text: '울면서 웃는 얼굴로 녀석이 다리를 벌렸다. 임신한 몸에 다시 삽입하자 자궁이 반갑다는 듯 쪼물딱 조여왔다.', type: 'action' },
      { speaker: '히로인', text: '아앗♡ 배 안에 아기 있는데... 또 자궁에 싸주는 거예요...? 행복해... ♡♡♡', type: 'dialogue' },
      { text: '녀석은 내 아이를 밴 채로 또 절정했다. 충실한 정액 변기 — 내가 만든 최고의 작품.', type: 'narration' },
    ],
  },

  // ── B Rank ──────────────────────────────────────────────
  {
    rank: 'B',
    title: '쾌락의 노예 — 보지의 각성',
    condition: (stats) =>
      stats.libido >= 600 &&
      (stats.capacity >= 400 || stats.technique >= 400),
    script: [
      { text: '마지막 시험. 녀석은 이를 악물고 나를 노려보았지만 — 몸은 이미 정직했다.', type: 'narration' },
      { speaker: '히로인', text: '나는... 절대 굴복 안 해... 으읏...!', type: 'dialogue' },
      { text: '삽입하자마자 보지가 꿀렁꿀렁 꿈틀거리며 저절로 빨아들였다. 쩝, 쭈욱... ♡', type: 'action' },
      { speaker: '트레이너', text: '입으론 싫다면서, 보지는 벌써 물고 빠는데?', type: 'dialogue' },
      { speaker: '히로인', text: '거짓말...! 이건 내 의지가 아니라... 아앗♡♡ 안돼, 또 이거... 보지가 멋대로... ♡♡♡', type: 'dialogue' },
      { text: '결국 녀석은 울면서 절정했다. 머리로는 거부하면서 자궁은 정액을 꿀꺽꿀꺽 삼키고 있었다.', type: 'narration' },
      { text: '마음은 아직 내 것이 아니다. 하지만 이 보지는 — 완전히 길들여졌다.', type: 'narration' },
    ],
  },

  // ── C Rank ──────────────────────────────────────────────
  {
    rank: 'C',
    title: '미완의 조교 — 남은 불씨',
    condition: (stats) =>
      stats.libido >= 250 ||
      stats.technique >= 250 ||
      stats.capacity >= 250 ||
      stats.endurance >= 250 ||
      stats.charm >= 250,
    script: [
      { text: '조교 기간이 끝났다. 녀석은 옷매무새를 고치며 문 앞에 섰다.', type: 'narration' },
      { speaker: '히로인', text: '...끝이네. 다신 보지 말자.', type: 'dialogue' },
      { speaker: '트레이너', text: '그래, 잘 가. — 다리 떨리는 건 숨기고 가라.', type: 'dialogue' },
      { text: '녀석이 흠칫 멈칫했다. 허벅지 안쪽이 미세하게 떨리고 있었다. 몸은 기억하고 있다 — 내 자지의 형태를.', type: 'narration' },
      { speaker: '히로인', text: '...상관없어. 이 정도는 곧 잊어.', type: 'dialogue' },
      { text: '녀석은 돌아보지 않고 걸어갔다. 하지만 나는 알고 있다. 불씨는 꺼지지 않았다는 것을.', type: 'narration' },
    ],
  },

  // ── D Rank ──────────────────────────────────────────────
  {
    rank: 'D',
    title: '조교 실패 — 얼음의 미소',
    condition: () => true,
    script: [
      { speaker: '키리시마 레이카', text: '...유감이야. 이번 프로젝트는 실패로 판정할게.', type: 'dialogue' },
      { text: '레이카의 냉담한 선고가 떨어졌다. 녀석은 처음과 똑같은 차가운 눈으로 나를 내려다보고 있었다.', type: 'narration' },
      { speaker: '히로인', text: '그러니까 말했잖아. 당신 따위한텐 절대 안 진다고.', type: 'dialogue' },
      { text: '녀석이 얼음장 같은 미소를 짓고 돌아섰다. 스커트 자락이 펄럭이며 사라져갔다.', type: 'action' },
      { speaker: '트레이너', text: '...좋아. 기억해 둬. 반드시 다시 온다.', type: 'dialogue' },
      { text: '트레이너 자격은 박탈당했지만 — 이 치욕은 잊지 않는다. 다음엔 반드시.', type: 'narration' },
    ],
  },
]
