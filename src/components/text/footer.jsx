import React from "react";
import Typography from "@material-ui/core/Typography";

export default function FooterTextComponent() {
  return (
    <div className="App-footer">
      <Typography
        variant="caption"
        display="block"
        color="inherit"
        gutterBottom
        style={{ color: "#bdb0b0" }}
      >
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </Typography>
    </div>
  );
}
