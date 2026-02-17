import { Ending } from '../types/game'

export const endings: Ending[] = [
  {
    rank: 'S',
    title: '완전 조교 — S랭크 암컷 인증',
    description:
      '히로인은 완벽하게 당신의 것이 되었다. 연심, 기교, 수용, 인내, 매혹 — 5대 능력치 모두 극한까지 개발된 최고의 명기.\n\n메스 그랑프리 우승. 관중 앞에서 보지를 벌리며 선언한다.\n\n"저는 선생님 전용 S랭크 암컷이에요♡ 이 보지도 자궁도 항문도 전부 선생님이 만들어 주신 명기예요♡ 정액 가득 채워주세요♡ 오호오오♡"\n\n눈에 하트가 완전히 떠오르고, 자궁에서 정액이 넘쳐흐른다. 최고의 엔딩.',
    condition: (stats) =>
      stats.libido >= 750 && stats.technique >= 750 && stats.capacity >= 600 &&
      stats.endurance >= 600 && stats.charm >= 600,
  },
  {
    rank: 'A',
    title: '깊은 유대 — 충실한 정액 변기',
    description:
      '히로인은 당신에게 깊은 충성을 맹세했다. 두려움이 아닌 애정에서 비롯된 복종.\n\n"선생님 곁에 있게 해주세요♡ 매일 보지로 봉사할게요♡ 자궁에 정액 채워주는 것만으로 행복해요♡"\n\n완벽한 S랭크에는 못 미치지만, 깊이 있는 관계. 보지가 자지를 놓지 않으려고 쫙쫙 조여든다.',
    condition: (stats, cond) =>
      (stats.libido >= 600 || stats.charm >= 600) &&
      (stats.technique >= 500 || stats.endurance >= 500) &&
      cond.mental >= 30,
  },
  {
    rank: 'B',
    title: '쾌락의 노예 — 보지의 각성',
    description:
      '히로인의 보지는 완전히 개발되었다. 이성으로는 저항하고 싶지만, 보지가 자지를 갈망한다.\n\n"이런 건... 제가 아니야... 그런데 보지가 멈춰주지 않아... 자지 없으면 애액이 멈추지 않아요..."\n\n아직 갈등하지만, 보지가 이미 답을 알고 있다.',
    condition: (stats) =>
      stats.libido >= 600 && (stats.capacity >= 400 || stats.technique >= 400),
  },
  {
    rank: 'C',
    title: '미완의 조교 — 남은 불씨',
    description:
      '훈련은 일정한 성과를 거뒀지만, 히로인의 마음은 완전히 꺾이지 않았다.\n\n"...다음엔 지지 않을 거야. 이 보지가... 당신 자지에 진 건 아니니까."\n\n떠나며 남긴 말에 아직 투지가 남아 있다. 하지만 허벅지 안쪽의 애액 자국은 숨기지 못했다.',
    condition: (stats) =>
      stats.libido >= 250 || stats.technique >= 250 || stats.capacity >= 250 ||
      stats.endurance >= 250 || stats.charm >= 250,
  },
  {
    rank: 'D',
    title: '조교 실패 — 얼음의 미소',
    description:
      '히로인은 끝까지 굴복하지 않았다. 차가운 미소를 띤 채 떠나갔다.\n\n"당신 자지로는 제 보지를 열 수 없었네요. ...아쉽군요."\n\n자존심을 지켜낸 히로인은 마치 아무 일도 없었다는 듯 일상으로 돌아간다.\n\n완전한 실패. 다른 전략이 필요하다.',
    condition: () => true,
  },
]
