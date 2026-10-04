export interface DocumentData {
  childName: string;
  childAge: number;
  city: string;
  behaviorNote: string;
  avatarUrl?: string;
  toyRoomScore: number;
  bedtimeSpeed: 'Rapide' | 'Moyen' | 'Discutable';
  serialNumber: string;
  backMessage: string;
}

export interface CreateOrderRequest {
  customerEmail: string;
  documentData: DocumentData;
}