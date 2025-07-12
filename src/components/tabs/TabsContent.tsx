const TabsContent = ({ children, value, activeTab }: any) =>
  activeTab === value ? (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {children}
    </div>
  ) : null;

export default TabsContent;
