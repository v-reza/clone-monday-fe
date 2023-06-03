"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type HyperlinkTextProps = {
  text: string;
  href: string;
  className?: string;
  classText?: string;
};

export const HyperlinkText = (props: HyperlinkTextProps) => {
  const { text, href, className, classText } = props;
  return (
    <div className={clsx("", className)}>
      <Link href={href}>
        <span
          className={clsx(
            "hover:underline text-blue-500 cursor-pointer text-sm",
            classText
          )}
        >
          {text}
        </span>
      </Link>
    </div>
  );
};

export default HyperlinkText;
