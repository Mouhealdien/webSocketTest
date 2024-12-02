import React, { ReactNode } from "react";
import "./styles/DashboardTableWrapper.css";
type propsType = {
  children: ReactNode;
};
const DashboardTableWrapper = ({ children }: propsType) => {
  return <div className="dashboard-table-wrapper">{children}</div>;
};

export default DashboardTableWrapper;
