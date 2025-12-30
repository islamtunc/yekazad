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

export function getPostDataInclude(loggedInUserId: string) {
  // Generic include used across different post-like models (web, mobil, etc.)
  // Return type is `any` to keep it compatible with each model's specific Include type.
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as any;
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

/* BookmarkInfo removed because bookmarks were removed from the schema */

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