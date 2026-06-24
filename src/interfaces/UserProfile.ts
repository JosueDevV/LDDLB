import type { ReactNode } from "react";

export interface UserProfile {
    [x: string]: ReactNode;
    id: number;
    fullName: string;
    email: string;
    phone: string;
    profileImage: string;
    role: string;
}