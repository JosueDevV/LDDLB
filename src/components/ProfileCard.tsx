import type { UserProfile } from "../interfaces/UserProfile";
interface ProfileCardProps {
    user: UserProfile;
}

export const ProfileCard = ({ user }: ProfileCardProps) => {
    return (
        <div className="profile-card">
            <img
                src={user.profileImage}
                alt={user.fullName}
                width={150}
                height={150}
            />

            <h2>{user.fullName}</h2>

            <p>
                <strong>Correo:</strong> {user.email}
            </p>

            <p>
                <strong>Teléfono:</strong> {user.phone}
            </p>

            <p>{user.bio}</p>
        </div>
    );
};