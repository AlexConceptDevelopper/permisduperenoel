export interface DocumentData {
  childName: string;
  childAge: number;
  childGender?: 'M' | 'F';
  city: string;
  behaviorNote: string;
  avatarUrl?: string;
  toyRoomScore: number;
  bedtimeSpeed: 'Rapide' | 'Moyen' | 'Discutable';
  serialNumber: string;
  backMessage: string;
  santaLetter?: string;
}

export interface CreateOrderRequest {
  customerEmail: string;
  documentData: DocumentData;
}