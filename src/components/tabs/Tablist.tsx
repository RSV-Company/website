"use client";

import React from "react";

const TabsList = ({ children, activeTab, setActiveTab }: any) => (
  <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

export default TabsList;
