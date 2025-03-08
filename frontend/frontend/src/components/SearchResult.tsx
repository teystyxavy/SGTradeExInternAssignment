import "./SearchResult.css";

export const SearchResult = ({result} : any) => {
  return (
    <div className="search-result" key={result.pilotage_imo}>
          <p>IMO: {result.pilotage_imo}</p>
          <p>CST_DT_TIME: {result.pilotage_cst_dt_time}</p>
          <p>END_DT_TIME: {result.pilotage_end_dt_time}</p>
          <p>LOC_TO_CODE: {result.pilotage_loc_to_code}</p>
          <p>SNAPSHOT_DT: {result.pilotage_snapshot_dt}</p>
          <p>LOC_FROM_CODE: {result.pilotage_loc_from_code}</p>
          <p>START_DT_TIME: {result.pilotage_start_dt_time}</p>
          <p>ARRIVAL_DT_TIME: {result.pilotage_arrival_dt_time}</p>
          <p>ONBOARD_DT_TIME: {result.pilotage_onboard_dt_time}</p>
    </div>
  );
};
