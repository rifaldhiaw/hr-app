import { Record } from "pocketbase";

export type Employee = {
  id: string;
  avatar: string;
  joinDate: string;
  birthDate: string;
  collectionId: string;
  collectionName: string;
  companyId: string;
  departmentId: string;
  gender: string;
  name: string;
  phoneNumber: string;
  created: string;
  updated: string;
};

export type EmployeeRecord = Record & Employee;
