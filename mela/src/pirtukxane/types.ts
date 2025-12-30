// Bismillahirahmanirahim
// Elhamdulillahirabbilalemin
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Süphanallah, Elhamdulillah, Allahu Ekber

import { Prisma } from "@prisma/client";

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

export function getWebInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.WebInclude;
}

export type WebData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getWebInclude>;
}>;

export interface WebsPage {
  webs: WebData[];
  nextCursor: string | null;

}export function getJiriyaSuniInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.JiriyaSuniInclude;
}

export type JiriyaSuniData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getJiriyaSuniInclude>;
}>;

export interface JiriyaSunisPage {
  jiriyaSunis: JiriyaSuniData[];
  nextCursor: string | null;
}

export function getMobilInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MobilInclude;
}

export type MobilData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getMobilInclude>;
}>;

export interface MobilsPage {
  mobils: MobilData[];
  nextCursor: string | null;
}





export function getPesdebirInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.PesdebirInclude;
}

export type PesdebirData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPesdebirInclude>;
}>;

export interface PesdebirsPage {
  pesdebirs: PesdebirData[];
  nextCursor: string | null;
}












export function getPerwerdeInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.PerwerdeInclude;
}

export type PerwerdeData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPerwerdeInclude>;
}>;

export interface PerwerdesPage {
  perwerdes: PerwerdeData[];
  nextCursor: string | null;
}
// Yorum (Comment) ile ilgili tüm tip ve fonksiyonları kaldırın

// export function getCommentDataInclude(loggedInUserId: string) {
//   return {
//     // user alanı kaldırıldı, yorumlar anonim olacak
//   } satisfies Prisma.CommentInclude;
// }

// export type CommentData = Prisma.CommentGetPayload<{
//   include: ReturnType<typeof getCommentDataInclude>;
// }>;

// export interface CommentsPage {
//   comments: CommentData[];
//   previousCursor: string | null;
// }

// Bildirim (Notification) ile ilgili tüm tip ve fonksiyonları kaldırın

// export const notificationsInclude = {
//   issuer: {
//     select: {
//       username: true,
//       displayName: true,
//       avatarUrl: true,
//     },
//   },
//   post: {
//     select: {
//       content: true, // content artık string[] olacak
//     },
//   },
// } satisfies Prisma.NotificationInclude;

// export type NotificationData = Prisma.NotificationGetPayload<{
//   include: typeof notificationsInclude;
// }>;

// export interface NotificationsPage {
//   notifications: NotificationData[];
//   nextCursor: string | null;
// }

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}

export interface Attachment {
  file: File;
  mediaId?: string;
  url?: string;
  type?: string;
  isUploading: boolean;
}
export function getRobotikInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.RobotikInclude;
}

export type RobotikData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getRobotikInclude>;
}>;

export interface RobotiksPage {
  robotiks: RobotikData[];
  nextCursor: string | null;
}