'use client';
import { useState } from 'react';
import { PERMISSIONS } from '@/lib/permissions';

export default function PermissionCalculatorTool() {
  const [selected, setSelected] = useState<bigint>(0n);

  const togglePermission = (bit: bigint) => {
    setSelected(prev => prev ^ bit);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
      <div className="mb-8 p-6 bg-[#F8F9FF] rounded-xl border border-[#5865F2]/20 text-center">
        <h3 className="text-sm font-semibold text-[#5b6282] uppercase tracking-wider">Calculated Permission Integer</h3>
        <p className="text-4xl font-extrabold text-[#1a1d2e] mt-2">{selected.toString()}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Object.entries(PERMISSIONS).map(([name, bit]) => (
          <label key={name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F8F9FF] cursor-pointer border border-[#E3E6F0]">
            <input
              type="checkbox"
              checked={(selected & bit) === bit}
              onChange={() => togglePermission(bit)}
              className="w-4 h-4 rounded border-gray-300 text-[#5865F2] focus:ring-[#5865F2]"
            />
            <span className="text-sm text-[#373b4d] font-medium">{name.replace(/_/g, ' ')}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
