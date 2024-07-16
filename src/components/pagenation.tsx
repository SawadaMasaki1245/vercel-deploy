import Link from "next/link";
import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Props = {
  prevText?: string;
  prevUrl?: string;
  nextText?: string;
  nextUrl?: string;
};

const Pagenation: FC<Props> = ({ prevText, prevUrl, nextText, nextUrl }) => {
  return (
    <div className="flex justify-center items-center py-16">
      <ul className="container flex flex-row justify-between items-center max-w-5xl px-4">
        {prevText && prevUrl ? (
          <li>
            <Link
              href={prevUrl}
              className="flex flex-row justify-center items-center gap-2"
            >
              <ChevronLeftIcon />
              <span>{prevText}</span>
            </Link>
          </li>
        ) : (
          <div></div>
        )}

        {nextText && nextUrl ? (
          <li>
            <Link
              href={nextUrl}
              className="flex flex-row justify-center items-center gap-2"
            >
              <span>{nextText}</span>
              <ChevronRightIcon />
            </Link>
          </li>
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default Pagenation;
