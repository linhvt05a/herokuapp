import React from "react";
import { Block01, Block02, Block03, Block04, Block05 } from "./index";

class IntroducePage extends React.Component {
    render() {
        return (
            <div className="introducePage">
                <Block01 />
                <Block02 />
                <Block03 />
                <Block04 />
                <Block05 />
            </div>
        );
    }
}
export default IntroducePage;
