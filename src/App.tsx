import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import type {StatsInterface, UserInterface} from "./utils/constants.ts";
import {IcqContext} from "./utils/context.ts";

const App = () => {
    const [user, setUser] = useState<UserInterface>({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });
    //https://gravatar.com/avatar/444?d=robohash
    // monsterid
    // wavatar
    // retro
    // robohash
    // identicon

    const [stats, setStats] = useState<StatsInterface>({
        followers: 1000,
        following: 1000
    })

    const changeAvatar = (url: string) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    return (
        <div className={'app'}>
            <IcqContext value={{user, changeAvatar, stats, setStats}}>
                <Header/>
                <Body/>
            </IcqContext>
        </div>
    );
};

export default App;