import { Divider, Stack } from "@mui/material";
import * as React from "react";

import Typography from "@mui/material/Typography";

import FilterInsights from "./FilterInsights";
import InsightGrid from "./InsightsGrid";
import { useTranslation } from "react-i18next";

import Loader from "../loader";

import useUrlParams from "../../hooks/useUrlParams";

export default function Insights() {
  const { t } = useTranslation();

  const [filterState, setFilterState] = useUrlParams(
    {
      barcode: "",
      valueTag: "",
      insightType: "",
      annotationStatus: "",
    },
    {
      valueTag: ["value", "value_tag"],
    }
  );

  return (
    <React.Suspense fallback={<Loader />}>
      <Stack spacing={2} sx={{ padding: 2 }}>
        <Typography>{t("insights.insights")}</Typography>
        <FilterInsights
          filterState={filterState}
          setFilterState={setFilterState}
        />
        <Divider />
        <div style={{ height: "250px" }}>
          <InsightGrid
            filterState={filterState}
            setFilterState={setFilterState}
          />
        </div>
      </Stack>
    </React.Suspense>
  );
}
