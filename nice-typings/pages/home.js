import LandingPage from "../components/lolo-ui/masterPage/masterPage";
import TypingField from "../components/lolo-ui/typings/typing-test";
import UserInfo from "../components/userInfo";

export default function HomePage(){
    return(
        <LandingPage>
            <UserInfo></UserInfo>
            <TypingField></TypingField>
        </LandingPage>
    )
}