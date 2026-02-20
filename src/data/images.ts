/** 캐릭터 ID → 이미지 경로 매핑 */

/** 히로인 스탠딩 이미지 */
export const heroineStanding: Record<string, string | null> = {
  leona: '/image/reona_standing.png',
  sakura: '/image/sakura_standing.png',
  saya: null,
}

/** 서포트 카드 초상화 이미지 */
export const supportPortrait: Record<string, string | null> = {
  'leona-support': '/image/reona_support.png',
  'ran-support': '/image/ran_support.png',
  'nanashi-support': '/image/nanashi_support.png',
  'rika-support': '/image/rika_support.png',
  'sakura-support': '/image/sakura_support.png',
  'momo-support': '/image/momo_support.png',
}

/** 서포트 캐릭터 스탠딩 이미지 */
export const supportStanding: Record<string, string | null> = {
  'ran-support': '/image/ran_standing.png',
  'rika-support': '/image/rika_standing.png',
  'nanashi-support': '/image/nanashi_standing.png',
  'momo-support': '/image/momo_standing.png',
}

/** 캐릭터 이름 → 스탠딩 이미지 (이벤트용) */
export const characterStanding: Record<string, string> = {
  '사이온지 레오나': '/image/reona_standing.png',
  '오니즈카 란': '/image/ran_standing.png',
  'Unit-774 나나시': '/image/nanashi_standing.png',
  '죠가사키 리카': '/image/rika_standing.png',
  '아마미야 사쿠라': '/image/sakura_standing.png',
  '코히나타 모모': '/image/momo_standing.png',
}
