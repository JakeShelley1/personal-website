type GrainyGradientProps = {
  width: string;
  height: string;
  linearGradient: string;
};

export const GrainyGradient = ({
  width,
  height,
  linearGradient
}: GrainyGradientProps) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height, background: linearGradient }}
    >
      <img
        alt=""
        src="/noise.svg"
        className="top-0 bottom-0 right-0 left-0 absolute w-full h-full opacity-40"
      />
    </div>
  );
};
