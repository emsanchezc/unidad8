import React, { useState } from "react";
import TabsContexto from "./TabsContexto";
import { Tabs as BoostrapTabs, Tab as BootstrapTab } from "react-bootstrap";

const Tabs = ({ children }) => {

    const [ activeKey, setActiveKey ] = useState("login");

    return (
        <TabsContexto.Provider value={{ activeKey, setActiveKey }}>
            <BoostrapTabs id="controlled-tab-example" activeKey={activeKey} onSelect={setActiveKey} className="mb-3">
                {children}
            </BoostrapTabs>
        </TabsContexto.Provider>
    );

};

const Tab = ({ children, eventKey, title }) => {
    
    return (
        <BootstrapTab eventKey={eventKey} title={title}>
            {children}
        </BootstrapTab>
    );
    
}

const TabPanel = ({ children }) => {        
    return (
        <div>
            {children}
        </div>
    );    
}

export { Tabs, Tab, TabPanel };