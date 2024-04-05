import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "../App.css";
import React, { useState } from "react";
import Count from "./Count";
import Register from "./Register";
import Update from "./Update";

function ResizeCom() {
  // State to track the count of updates
  const [updateCount1, setUpdateCount1] = useState(0);

  // Function to increment the count of updates
  const incrementUpdateCount = () => {
    setUpdateCount1(updateCount1 + 1);
  };
  return (
    <>
      {" "}
      {/* Main PanelGroup component */}
      <PanelGroup
        direction="vertical"
        style={{ height: "670px", overflow: "auto" }}
        className="mt-1"
      >
        {/* Panel for Register component */}
        <Panel>
          <PanelGroup direction="horizontal">
            <Panel>
              <PanelGroup direction="vertical">
                {/* Spacer Panel */}
                <Panel defaultSize={0}></Panel>
                <PanelResizeHandle />
                <Panel>
                  <PanelGroup direction="horizontal">
                    <Panel defaultSize={0}></Panel>
                    <PanelResizeHandle />
                    {/* Register component */}
                    <Panel className="panel" style={{ overflow: "auto" }}>
                      <Register incrementUpdateCount={incrementUpdateCount} />
                    </Panel>
                  </PanelGroup>
                </Panel>
              </PanelGroup>
            </Panel>
            <PanelResizeHandle />
            {/* Spacer Panel */}
            <Panel>
              <PanelGroup direction="vertical">
                <Panel defaultSize={0}></Panel>
                <PanelResizeHandle />
                <Panel>
                  <PanelGroup direction="horizontal">
                    {/* Update component */}
                    <Panel className="panel" style={{ overflow: "auto" }}>
                      {/* Show the update page, can update name or password of the user, email cannnot me updated.*/}
                      {/* Email has to be provided for which the update has to take place. */}
                      <Update incrementUpdateCount={incrementUpdateCount} />
                    </Panel>
                    <PanelResizeHandle />
                    <Panel defaultSize={0}></Panel>
                  </PanelGroup>
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        {/* Panel for displaying counts */}
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <PanelGroup direction="horizontal">
                <Panel defaultSize={0}></Panel>
                <PanelResizeHandle />
                <Panel className="panel" style={{ overflow: "auto" }}>
                  {/* Show count of add and update */}
                  <Count updateCount1={updateCount1} />
                </Panel>
                <PanelResizeHandle />
                <Panel defaultSize={0}></Panel>
              </PanelGroup>
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={0}></Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
}

export default ResizeCom;
