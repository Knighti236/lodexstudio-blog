import React from "react";

function SectionTitle({ title, subtitle, align = "center" }) {
  const alignment = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`space-y-2 ${alignment[align]}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
