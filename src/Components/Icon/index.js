import React from "react";

function url(url) {
  return {
    background: `transparent url(https://staticv2-4.rottentomatoes.com/static/images/icons/${url}) no-repeat`,
    backgroundSize: "cover"
  };
}

const icons = {
  tiny: {
    size: 16,
    styles: {
      certified: url("CF_16x16.png"),
      fresh: url("fresh-16.png"),
      upright: url("popcorn-16.png"),
      rotten: url("splat-16.png"),
      spilled: url("badpopcorn-16.png"),
      wts: url("wts-16.png")
    }
  }
};

export default function Icon({ type }) {
  type = type.toLowerCase().replace(/[^a-z]+/g, "");
  if (type === "certifiedfresh") type = "certified";
  if (type === "popcorn") type = "upright";
  if (type === "anticipated") type = "wts";
  const { styles, size: sizePx } = icons["tiny"];
  return (
    <div
      style={Object.assign(
        {
          width: sizePx,
          height: sizePx,
          display: "inline-block",
          verticalAlign: "middle"
        },
        styles[type]
      )}
    />
  );
}
