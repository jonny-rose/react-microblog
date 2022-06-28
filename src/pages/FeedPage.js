import Posts from "../Components/Posts";
import Body from "../Components/Body";

export default function FeedPage() {
    return(
        <Body sidebar>
            <Posts write={true} />
        </Body>
    )
}