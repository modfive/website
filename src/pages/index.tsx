import * as React from "react";
import Helmet from "react-helmet";

import { Intro } from "components/intro/Intro";
import { Highlight } from "components/intro/Highlight";
import { BlockText } from "components/block-text/BlockText";

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      We make your data personal. Using key metrics and a thoughtful design
      process, <Highlight>Modfive</Highlight> produces visual results to help
      bring clarity to your business needs 🤪.
    </Intro>

    <BlockText
      heading="Who we are"
      description={
        <>
          Modfive is a full-service data + design agency, busy making data
          beautiful and simplified for small business across the US.
        </>
      }
    />
  </>
);
