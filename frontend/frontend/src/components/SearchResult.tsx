import "./SearchResult.css";

export const SearchResult = ({result} : any) => {
  return (
    <div className="search-result" key={result.pilotage_imo}>
      <p><strong>Vessel Name</strong>: {result.pilotage_name}</p>
      <p><strong>IMO</strong>: {result.pilotage_imo}</p>
      <p><strong>Request Date/Time</strong>: {result.pilotage_cst_dt_time.split('T')[0]} {result.pilotage_cst_dt_time.split('T')[1].split('.')[0]}</p>
      <p><strong>Source Port</strong>: {result.pilotage_loc_from_code}</p>
      <p><strong>Destination Port</strong>: {result.pilotage_loc_to_code}</p>
      <p><strong>Service Start Date/Time</strong>: {result.pilotage_start_dt_time.split('T')[0]} {result.pilotage_start_dt_time.split('T')[1].split('.')[0]}</p>
      <p><strong>Service End Date/Time</strong>: {result.pilotage_end_dt_time.split('T')[0]} {result.pilotage_end_dt_time.split('T')[1].split('.')[0]}</p>
      <p><strong>Pilot Boarding Location Arrival Date/Time</strong>: {result.pilotage_arrival_dt_time.split('T')[0]} {result.pilotage_arrival_dt_time.split('T')[1].split('.')[0]}</p>
      <p><strong>Pilot Boarding Date/Time</strong>: {result.pilotage_onboard_dt_time.split('T')[0]} {result.pilotage_onboard_dt_time.split('T')[1].split('.')[0]}</p>
      <p><strong>Last Updated Date/Time</strong>: {result.pilotage_snapshot_dt.split('T')[0]} {result.pilotage_snapshot_dt.split('T')[1].split('.')[0]}</p>
    </div>
  );
};
