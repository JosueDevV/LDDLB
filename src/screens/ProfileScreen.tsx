import { ProfileCard } from "../components/ProfileCard";
import type { UserProfile } from "../interfaces/UserProfile";

export const ProfileScreen = () => {
    const user: UserProfile = {
        id: 1,
        name: "Jonathan Hernandez",
        email: "jonathan@email.com",
        phone: "5551234567",
        avatar: "https://i.pravatar.cc/150?img=12",
        bio: "Desarrollador Frontend con React y TypeScript.",
        fullName: "",
        profileImage: "",
        role: ""
    };

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <ProfileCard user={user} />
        </div>
    );
};