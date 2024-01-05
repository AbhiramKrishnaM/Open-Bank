import React from "react";
import { Icon } from "@iconify/react";

function RightArrow() {
  return (
    <div className="h-40 flex  items-center ml-3">
      <Icon
        icon="material-symbols:arrow-forward-ios"
        width="30"
        height="30"
        color="gray"
      />
    </div>
  );
}

export default RightArrow;
