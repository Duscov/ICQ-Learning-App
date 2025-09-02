import Avatar from "./Avatar.tsx";
import {useState} from "react";

const Stats = () => {
    // заводим два состояния — followers и following
    // useState возвращает массив: [значение, функция для обновления]
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
                    onClick={() => setFollowers(followers +1)} // ЛКМ — увеличиваем followers на 1
                    // ПКМ  — уменьшаем followers на 1
                    // e.preventDefault() — чтобы не вылезало стандартное контекстное меню браузера
                    onContextMenu={(e) => {e.preventDefault();
                    setFollowers(Math.max(0, followers -1));}}> // Math.max не даёт уйти в минус
                    Followers: {followers}  {/* отображаем текущий followers */}
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