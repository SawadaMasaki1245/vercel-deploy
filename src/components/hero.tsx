import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  subtitle: string;
  isImage?: boolean;
};

/**
 * ヒーローのコンポーネント
 * @param {string} title タイトル
 * @param {string} subtitle サブタイトル
 * @param {boolean|undefined} isImage 画像を表示するかどうか
 * @returns {JSX}
 */
const Hero: FC<Props> = ({ title, subtitle, isImage = false }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="container flex flex-col lg:flex-row justify-between items-center max-w-5xl">
        {/* ↑↑修正↑↑ */}
        <div className="flex flex-col justify-center items-center pt-16 pb-24">
          <h1 className="text-9xl font-black">{title}</h1>
          <p className="text-2xl">{subtitle}</p>
        </div>
        {isImage && (
          <figure className="w-full lg:w-1/2">
            {/* ↑↑追加↑↑ */}
            <Image
              src={"/images/cube.jpg"}
              alt=""
              width={576}
              height={288}
              className="w-full"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default Hero;
