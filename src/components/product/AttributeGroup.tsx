import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type AttributeGroup = {
  title: string;
  values: Record<string, string>;
};

export default function AttributeGroupCard({ title, values }: AttributeGroup) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full border rounded-md overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 font-semibold text-left text-md"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="divide-y text-sm">
          {Object.entries(values).length === 0 ? (
            <div className="px-4 py-2 text-gray-500 font-semibold">
              No data available.
            </div>
          ) : (
            Object.entries(values).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-2 gap-2 px-4 py-2 even:bg-gray-50"
              >
                <span className="text-gray-700 font-semibold">{key}</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
