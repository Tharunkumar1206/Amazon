import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 p-4 hidden md:block">
      <h3 className="font-semibold mb-2">Customize</h3>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Customizable</span>
        </label>
      </div>

      {["Ideal For", "Occasion", "Work", "Fabric", "Segment", "Suitable For", "Raw Materials", "Pattern"].map((filter) => (
        <div className="mb-4" key={filter}>
          <h3 className="font-semibold mb-2">{filter}</h3>
          <select className="w-full p-2 border rounded">
            <option>All</option>
          </select>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
