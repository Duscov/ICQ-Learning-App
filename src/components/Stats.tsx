import Avatar from "./Avatar.tsx";
import {useState} from "react";

const Stats = () => {

    const [followers, setFollowers] = useState(1000);
    const [following, setFollowing] = useState(1000);

    return (
        <div className="user-stats">
            <div>
                <Avatar/>
                <p>Name:</p>
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => setFollowers(followers +1)}
                    onContextMenu={(e) => {e.preventDefault();
                    setFollowers(Math.max(0, followers -1));}}>
                    Followers: {followers}
                </div>
                <div
                    onClick={() => setFollowing(following + 1)}
                    onContextMenu={(e) => {e.preventDefault();
                    setFollowing(Math.max(0, following -1));}}>
                    Following: {following}
                </div>
            </div>
        </div>
    );
};

export default Stats;