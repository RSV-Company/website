"use client";

import React, {
  useState,
  ReactElement,
  ReactNode,
  isValidElement,
} from "react";

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
};

type TabChildProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Tabs = ({ children, defaultValue, className = "" }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        isValidElement(child)
          ? React.cloneElement(child as ReactElement<TabChildProps>, {
              activeTab,
              setActiveTab,
            })
          : child
      )}
    </div>
  );
};

export default Tabs;
