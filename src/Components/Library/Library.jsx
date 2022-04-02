import { useState } from "react";
import HistoryNav from "./HistoryNav";
import { LibNav } from "./LibNav";

export function Library() {
    const [currentTab, setCurrentTab] = useState('overview')

    function handleTabChange(tab) {
        setCurrentTab(tab)
    }

    return (
        <>
            <LibNav currentTab={currentTab} onTabChange={handleTabChange} />
            {
                currentTab === 'history' && <HistoryNav />
            }

        </>
    )

}