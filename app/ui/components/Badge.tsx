import React from "react";

type Props = {
  label: string;
};

export default function Badge({ label }: Props) {
  return (
    <span className="full-rounded mr-1 mt-1 rounded-full border border-[#333] bg-[#dcdbd1] px-4 py-1 font-semibold text-[#333]">
      {label}
    </span>
  );
}
