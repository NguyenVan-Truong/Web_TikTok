export const IconWaveSine = () => {
  return (
    <svg width="15" height="40" viewBox="0 0 20 20">
      <rect x="2" y="5" width="2" height="10" fill="white">
        <animate
          attributeName="height"
          values="5;15;5"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="10;2;10"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="9" y="5" width="2" height="10" fill="white">
        <animate
          attributeName="height"
          values="5;15;5"
          dur="1s"
          begin="0.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="10;2;10"
          dur="1s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="16" y="5" width="2" height="10" fill="white">
        <animate
          attributeName="height"
          values="5;15;5"
          dur="1s"
          begin="0.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="10;2;10"
          dur="1s"
          begin="0.4s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
