export interface IcqInterface {
    user: UserInterface,
    changeAvatar: (url: string) => void,
    stats: StatsInterface
    setStats:  React.Dispatch<React.SetStateAction<StatsInterface>>
}

export interface UserInterface {
    name: string,
    avatar: string
}

export interface StatsInterface {
    followers: number,
    following: number
}