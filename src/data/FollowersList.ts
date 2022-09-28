import follower1 from '../assets/images/follower1.png'
import follower2 from '../assets/images/follower2.png'
import follower3 from '../assets/images/follower3.png'
import follower4 from '../assets/images/follower4.jpg'

export interface FollowerType {
    name: string
    username: string
    img: string
}

export const FollowersList:Array <FollowerType> = [
    { name: "Andrew Thomas", username: "AndrewThomas", img: follower1 },
    { name: "Hulk Buster", username: "HulkBuster", img: follower2 },
    { name: "Thor", username: "ThunderMaster", img: follower3 },
    { name: "Natasha", username: "Natasha", img: follower4 },
]