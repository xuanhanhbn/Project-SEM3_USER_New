export interface UserInfo {
  id: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  profilePictureId: string;
  roles: string[];
}

export interface Program {
  programId: string;
  name: string;
  target: number;
  endDate: string;
  isClosed: boolean;
  closedReason: string;
  partnerId: string;
  partner: {
    partnerId: string;
    name: string;
    partnerThumbnail: {
      attachmentId: string;
      path: string;
      size: number;
      name: string;
      contentType: string;
      modifiedAt: string;
      modifiedById: string;
      modifiedByName: string;
      createdAt: string;
      createdById: string;
      createdByName: string;
    };
  };
  programThumbnail: {
    attachmentId: string;
    path: string;
    size: number;
    name: string;
    contentType: string;
    modifiedAt: string;
    modifiedById: string;
    modifiedByName: string;
    createdAt: string;
    createdById: string;
    createdByName: string;
  };
}

export interface Partner {
  partnerId: string;
  name: string;
  partnerThumbnail: {
    attachmentId: string;
    path: string;
    size: number;
    name: string;
    contentType: string;
    modifiedAt: string;
    modifiedById: string;
    modifiedByName: string;
    createdAt: string;
    createdById: string;
    createdByName: string;
  };
}

export interface PartnerDetail {
  partnerId: string;
  name: string;
  email: string;
  description: string;
  page: {
    pageId: string;
    pageType: string;
    content: string;
    programId: string;
    partnerId: string;
    modifiedAt: string;
    modifiedById: string;
    modifiedByName: string;
    createdAt: string;
    createdById: string;
    createdByName: string;
  };
  partnerThumbnail: {
    attachmentId: string;
    path: string;
    size: number;
    name: string;
    contentType: string;
    modifiedAt: string;
    modifiedById: string;
    modifiedByName: string;
    createdAt: string;
    createdById: string;
    createdByName: string;
  };
  programs: [
    {
      programId: string;
      name: string;
      target: number;
      description: string;
      endDate: string;
      isClosed: true;
      closedReason: string;
      partnerId: string;
      partner: {
        partnerId: string;
        name: string;
        partnerThumbnail: {
          attachmentId: string;
          path: string;
          size: number;
          name: string;
          contentType: string;
          modifiedAt: string;
          modifiedById: string;
          modifiedByName: string;
          createdAt: string;
          createdById: string;
          createdByName: string;
        };
      };
      programThumbnail: {
        attachmentId: string;
        path: string;
        size: number;
        name: string;
        contentType: string;
        modifiedAt: string;
        modifiedById: string;
        modifiedByName: string;
        createdAt: string;
        createdById: string;
        createdByName: string;
      };
    }
  ];
  modifiedAt: string;
  modifiedById: string;
  modifiedByName: string;
  createdAt: string;
  createdById: string;
  createdByName: string;
}
