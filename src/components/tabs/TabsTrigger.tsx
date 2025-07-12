const TabsTrigger = ({ children, value, activeTab, setActiveTab }: any) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
      activeTab === value
        ? "bg-background text-foreground shadow-sm"
        : "hover:bg-background/50"
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

export default TabsTrigger;
