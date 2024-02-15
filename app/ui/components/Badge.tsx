import React from "react";

type Props = {
  label: string;
};

export default function Badge({ label }: Props) {
  return (
    <span className="full-rounded mr-1 mt-1 rounded-full border border-[#21434e]/30 bg-teal-400/5 px-4 py-1 font-semibold text-teal-300">
      {label}
    </span>
  );
}
