import Image from "next/image";

type Props = {
  featureIcon: string;
  symbol: string;
  text: string;
};

export function FeatureItem({ featureIcon, symbol, text }: Props) {
  return (
    <div className="flex items-start justify-between px-8 mb-5 gap-4">
      <div className="flex items-start gap-3">
        <Image src={featureIcon} alt="feature" width={18} height={18} />
        <span className="md:text-xs text-[12px] text-gray-600 leading-relaxed">
          {text}
        </span>
      </div>
      <Image src={symbol} alt="symbol" width={14} height={14} />
    </div>
  );
}