import {useContext} from "react";
import {IcqContext} from "../utils/context.ts";

interface Props {
    size?: string
}

const Avatar = ({size}: Props) => {
    const {user, changeAvatar} = useContext(IcqContext);

    return (
        <img
            onClick={() => {
                const url = prompt("Enter new avatar url");
                changeAvatar(url!);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;