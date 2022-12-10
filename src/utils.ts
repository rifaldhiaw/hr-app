import dayjs from "dayjs";
import PocketBase from "pocketbase";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const formatDate = (s: string) =>
  dayjs("2019-01-25").format("DD/MM/YYYY");

export const getImageUrl = (params: {
  collectionId: string;
  recordId: string;
  fileName: String;
}) =>
  `${import.meta.env.VITE_PB_URL}/api/files/${params.collectionId}/${
    params.recordId
  }/${params.fileName}`;

export const getEmployeeAvatarUrl = (params: { id: string; avatar: String }) =>
  getImageUrl({
    collectionId: "employees",
    recordId: params.id,
    fileName: params.avatar,
  });

export const pb = new PocketBase(import.meta.env.VITE_PB_URL);
