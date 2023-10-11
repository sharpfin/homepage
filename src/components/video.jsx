import React from "react";
import LayoutContainer from './layout-container';
import { LangContext } from './context'

export default function () {
    const { t } = React.useContext(LangContext);

    return (
        <LayoutContainer
            title={t.video.title}
            titleColorClass="text-white"
            bgColorClass="bg-sharpfin-blue"
        >
            <div style={{ padding: "30%", position: "relative" }} >
                <iframe src="https://player.vimeo.com/video/872538354?h=d9cbea2fcb&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} title="See Sharpfin Wealth Management System - in Action"></iframe>
            </div>
        </LayoutContainer>
    )
}