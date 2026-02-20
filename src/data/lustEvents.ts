import { GameEvent } from '../types/game'

/**
 * LP >= 90 폭주 시 발동하는 전용 VN 이벤트
 * 선택지에 따라 LP 리셋 + 스탯 보너스
 */

export const lustEventGeneric: GameEvent = {
  id: 'lust-burst-generic',
  title: '성욕 폭주 — 참을 수 없는 몸',
  trigger: { type: 'turn', turn: 0 }, // 동적 트리거
  script: [
    { text: '히로인의 숨이 거칠어진다. 뺨이 상기되고, 허벅지가 소리 없이 비비적거린다.', type: 'narration' },
    { text: '쿳… 쿳… 자궁 안쪽이 간질간질… 참을 수가 없어요…', type: 'thought' },
    { text: '히로인이 참지 못하고 교실 구석으로 달려간다. 치마를 걷어올리고 팬티를 한쪽으로 젖힌다.', type: 'action' },
    { text: '쑤욱쑤욱… 손가락 두 개가 젖은 보지 안으로 빨려 들어간다. 쩔걱… 쩔걱… 애액이 손바닥을 적신다.', type: 'narration' },
    { speaker: '히로인', text: '하아앙… 안 돼… 손가락으로는 부족해… 선생님 자지가 필요해요…♡', type: 'dialogue' },
    { text: '클리토리스가 부어올라 콩알만 해졌다. 세 번째 손가락이 들어가자 보지가 쥬루룩 소리를 낸다.', type: 'narration' },
    { speaker: '히로인', text: '쥬루루♡ 아아… 자궁이 간질간질… 애액이 허벅지 타고 철벅철벅 흘러내려요…♡', type: 'dialogue' },
  ],
  choices: [
    {
      text: '지켜본다 — "끝까지 혼자 해 봐."',
      statEffects: { charm: 20 },
      conditionEffects: {},
      followUpScript: [
        { text: '히로인이 울먹이며 손가락을 더 빠르게 움직인다. 보지에서 쩔걱쩔걱 음란한 소리가 교실에 울린다.', type: 'narration' },
        { speaker: '히로인', text: '이쿠… 이쿠우우♡♡ 선생님이 보고 있으니까… 더 느껴져요오♡♡', type: 'dialogue' },
        { text: '시오후키가 바닥에 웅덩이를 만든다. 히로인은 힘없이 주저앉으며 어깨를 떤다.', type: 'narration' },
        { text: '— LP가 안정되었다.', type: 'narration' },
      ],
    },
    {
      text: '도와준다 — "내 손가락으로 해줄게."',
      statEffects: { technique: 20 },
      conditionEffects: {},
      followUpScript: [
        { text: '히로인의 손을 빼고 대신 손가락 세 개를 보지 안에 쑤욱 밀어넣는다.', type: 'action' },
        { speaker: '히로인', text: '히이잇♡♡ 선생님 손가락… 안쪽까지 닿아… G스팟 쿡쿡 눌러요오♡♡', type: 'dialogue' },
        { text: '손가락이 G스팟을 찾아 리드미컬하게 쿡쿡 누른다. 보지 안쪽이 뜨거워지며 경련한다.', type: 'narration' },
        { speaker: '히로인', text: '이쿠! 이쿠우우♡♡ 시오후키… 나와요… 쌰아아아♡♡♡', type: 'dialogue' },
        { text: '투명한 액체가 분수처럼 뿜어진다. 히로인의 보지가 손가락을 꽉 물며 경련한다.', type: 'narration' },
        { text: '— LP가 크게 안정되었다.', type: 'narration' },
      ],
    },
    {
      text: '자지로 박아준다',
      statEffects: { libido: 30, technique: 15, capacity: 15 },
      conditionEffects: { stamina: -15 },
      followUpScript: [
        { text: '바지를 내리자 발기한 자지가 튀어나온다. 히로인의 눈이 하트 모양으로 변한다.', type: 'action' },
        { speaker: '히로인', text: '자지…♡♡ 자지다아♡♡ 빨리… 빨리 넣어주세요♡♡♡', type: 'dialogue' },
        { text: '즈뿌우우♡ 한 번에 끝까지 삽입. 자궁구에 귀두가 키스한다.', type: 'narration' },
        { speaker: '히로인', text: '오호오오♡♡ 자궁구 뚫려… 배 안쪽까지 자지가♡♡ 보지가 미쳐가요♡♡♡', type: 'dialogue' },
        { text: '피스톤이 시작된다. 팡팡팡♡ 살이 부딪치는 소리가 교실에 울려퍼진다.', type: 'narration' },
        { speaker: '히로인', text: '이쿠♡ 이쿠♡ 이쿠우우♡♡♡ 시오후키 멈출 수 없어요♡♡♡', type: 'dialogue' },
        { text: '연속 시오후키 3회. 바닥이 애액 웅덩이로 변한다. 마지막에 자궁 안에 뷰루루♡ 정액 주입.', type: 'narration' },
        { speaker: '히로인', text: '자궁 안에… 뜨거운 게… 뷰루루루♡♡ 정액으로 가득 차요… 배가 볼록…♡♡♡', type: 'dialogue' },
        { text: '히로인이 아헤가오 상태로 경련하며 기절한다.', type: 'narration' },
        { text: '— LP가 완전히 안정되었다.', type: 'narration' },
      ],
    },
  ],
}

export const lustEventLeona: GameEvent = {
  id: 'lust-burst-leona',
  title: '성욕 폭주 — 레오나의 한계',
  trigger: { type: 'turn', turn: 0 },
  heroineId: 'leona',
  script: [
    { text: '레오나의 몸이 미세하게 떨리고 있다. 평소의 당당한 태도가 무너져가고 있다.', type: 'narration' },
    { text: '또… 이 느낌… 항문까지 전류가 퍼져… 참을 수 없어…', type: 'thought' },
    { text: '레오나가 벽에 기대며 한 손을 치마 안으로 넣는다. 팬티 위로 보지를 문지르기 시작한다.', type: 'action' },
    { speaker: '레오나', text: '쿳… 쿳… 안 돼… 몸이 멋대로… 항문까지 전류♡ 보지가 쥬루쥬루…', type: 'dialogue' },
    { text: '팬티를 옆으로 젖히자 애액이 실을 끌며 늘어진다. 클리토리스가 빳빳하게 서 있다.', type: 'narration' },
    { speaker: '레오나', text: '선생님… 보지 말아요… 하지만… 하아앙♡ 멈출 수가 없어…♡', type: 'dialogue' },
  ],
  choices: [
    {
      text: '지켜본다 — "끝까지 혼자 해 봐, 레오나."',
      statEffects: { charm: 20 },
      conditionEffects: {},
      followUpScript: [
        { speaker: '레오나', text: '비겁한 사람… 하아앙♡ 보면서… 흥분하고 있잖아…♡', type: 'dialogue' },
        { text: '레오나가 손가락 세 개를 보지에 찔러넣고 격하게 움직인다. 쩔걱쩔걱 소리와 함께 애액이 튄다.', type: 'narration' },
        { speaker: '레오나', text: '이쿠… 이쿠우♡♡ 항문까지 전류♡♡ 시오후키 샤와아아♡♡♡', type: 'dialogue' },
        { text: '레오나의 시오후키가 아치를 그리며 분출된다.', type: 'narration' },
      ],
    },
    {
      text: '도와준다 — "내가 해줄게."',
      statEffects: { technique: 20 },
      conditionEffects: {},
      followUpScript: [
        { text: '레오나의 보지에 손가락을 밀어넣는다. 항문에도 엄지를 살짝 대자 온몸이 경직된다.', type: 'action' },
        { speaker: '레오나', text: '히잇♡♡ 보지랑 항문 동시에…♡♡ 항문까지 전류 퍼져요♡♡♡', type: 'dialogue' },
        { text: '보지 안쪽과 항문을 동시에 자극한다. 레오나의 몸이 활처럼 젖혀진다.', type: 'narration' },
        { speaker: '레오나', text: '이쿠♡♡ 두 구멍 다 이쿠♡♡♡ 시오후키 샤와아아♡♡♡', type: 'dialogue' },
      ],
    },
    {
      text: '자지로 박아준다',
      statEffects: { libido: 30, technique: 15, capacity: 15 },
      conditionEffects: { stamina: -15 },
      followUpScript: [
        { speaker: '레오나', text: '자지♡♡ 빨리… 항문이든 보지든 아무데나 넣어줘♡♡♡', type: 'dialogue' },
        { text: '즈뿌우♡ 보지에 한 번에 끝까지. 레오나의 등이 활처럼 젖혀진다.', type: 'narration' },
        { speaker: '레오나', text: '오호오♡♡ 자궁구까지… 항문까지 전류♡♡ 전신이 메스이키♡♡♡', type: 'dialogue' },
        { text: '맹렬한 피스톤. 레오나의 보지와 항문이 동시에 경련한다.', type: 'narration' },
        { speaker: '레오나', text: '이쿠이쿠이쿠♡♡♡ 시오후키 멈출 수 없어♡♡♡ 자궁에 정액 쏴줘♡♡♡', type: 'dialogue' },
        { text: '뷰루루루♡ 자궁 안에 대량 사정. 레오나가 아헤가오로 경련하며 연속 시오후키.', type: 'narration' },
      ],
    },
  ],
}

export const lustEventKirara: GameEvent = {
  id: 'lust-burst-kirara',
  title: '성욕 폭주 — 키라라의 절규',
  trigger: { type: 'turn', turn: 0 },
  heroineId: 'kirara',
  script: [
    { text: '키라라의 눈이 촉촉하게 젖어 있다. 허벅지 사이로 애액이 흘러내리고 있다.', type: 'narration' },
    { text: '안 돼… 몸이 뜨거워… 보지가 자꾸 쥬루쥬루 소리 내요…', type: 'thought' },
    { text: '키라라가 주저앉으며 양다리를 벌린다. 치마 사이로 젖은 팬티가 보인다.', type: 'action' },
    { speaker: '키라라', text: '선생니임… 도와주세요… 보지가 미쳐요… 쑤욱쑤욱 손가락 넣어도 부족해요…♡', type: 'dialogue' },
    { text: '키라라가 팬티 위로 보지를 비비적거린다. 투명한 애액이 팬티를 흠뻑 적시고 있다.', type: 'narration' },
    { speaker: '키라라', text: '선생님 자지… 필요해요… 더 세게 박아주세요 선생니임♡♡', type: 'dialogue' },
  ],
  choices: [
    {
      text: '지켜본다 — "혼자 해 봐, 키라라."',
      statEffects: { charm: 20 },
      conditionEffects: {},
      followUpScript: [
        { speaker: '키라라', text: '으응… 선생님 나빠요… 하지만… 보고 있으니까 더 흥분돼요…♡', type: 'dialogue' },
        { text: '키라라가 팬티를 벗고 세 손가락을 쑤욱 넣는다. 쩔걱쩔걱 애액 소리가 울린다.', type: 'narration' },
        { speaker: '키라라', text: '이쿠♡♡ 시오후키 샤와아아♡♡ 선생니임 봐주세요♡♡♡', type: 'dialogue' },
        { text: '키라라의 시오후키가 뿜어져 나온다. 달콤한 향기가 퍼진다.', type: 'narration' },
      ],
    },
    {
      text: '도와준다 — "내가 해줄게, 키라라."',
      statEffects: { technique: 20 },
      conditionEffects: {},
      followUpScript: [
        { text: '키라라의 팬티를 옆으로 젖히고 손가락 세 개를 부드럽게 밀어넣는다.', type: 'action' },
        { speaker: '키라라', text: '하아앙♡♡ 선생님 손가락… 안쪽 G스팟 콕콕♡♡ 너무 좋아요♡♡', type: 'dialogue' },
        { text: 'G스팟을 정확하게 자극한다. 키라라의 보지가 꿈틀꿈틀 손가락을 감싼다.', type: 'narration' },
        { speaker: '키라라', text: '이쿠♡♡ 시오후키 터져요♡♡♡ 쌰아아아♡♡♡', type: 'dialogue' },
      ],
    },
    {
      text: '자지로 박아준다',
      statEffects: { libido: 30, technique: 15, capacity: 15 },
      conditionEffects: { stamina: -15 },
      followUpScript: [
        { speaker: '키라라', text: '자지♡♡ 선생님 자지♡♡ 빨리 보지에 넣어주세요 선생니임♡♡♡', type: 'dialogue' },
        { text: '즈뿌우우♡ 키라라의 보지에 끝까지 삽입. 자궁구에 딱 맞닿는다.', type: 'narration' },
        { speaker: '키라라', text: '오호오오♡♡ 더 세게 박아주세요 선생니임♡♡ 자궁 뻥 뚫어주세요♡♡♡', type: 'dialogue' },
        { text: '팡팡팡♡ 격렬한 피스톤. 키라라의 보지에서 애액이 쏟아진다.', type: 'narration' },
        { speaker: '키라라', text: '이쿠이쿠이쿠♡♡♡ 시오후키 연속♡♡♡ 자궁에 정액 가득 넣어주세요♡♡♡', type: 'dialogue' },
        { text: '뷰루루♡ 자궁에 대량 사정. 키라라가 행복한 아헤가오로 경련한다. 배가 살짝 볼록해졌다.', type: 'narration' },
      ],
    },
  ],
}

/** 히로인 ID에 따라 적절한 LP 폭주 이벤트를 반환 */
export function getLustEvent(heroineId?: string): GameEvent {
  if (heroineId === 'leona') return lustEventLeona
  if (heroineId === 'kirara') return lustEventKirara
  return lustEventGeneric
}
