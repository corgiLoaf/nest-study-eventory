export const EventStatus = {
    PENDING: 'PENDING' // 시작 전
    ONGOING: 'ONGOING' // 진행 중
    COMPETED: 'COMPLETED' // 종료
  };
  
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];