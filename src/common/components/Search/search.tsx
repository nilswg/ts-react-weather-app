import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import reqLocations from "../../../api/reqLocations";
import { setLocations } from "../../../app/AppSlice";
import { useDebouncedInput, useClickOutside, useDispatch } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import LocationData from "../../interfaces/locationData";
import LocationItem from "./LocationItem/locationItem";
import "./search.css";

const Search = () => {
  const locations = useSelector((state: RootState) => state.app.locations);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const ref_DebounceTimer = useRef<any>(null);
  const ref_SearchResult = useRef<any>(null);
  const dispatch = useDispatch();

  const debouncedInputChanged = useDebouncedInput(ref_DebounceTimer, 200, setSearchInput)

  const hiddenSearchResult = () => setSearchResultVisible(false);
  useClickOutside(ref_SearchResult, hiddenSearchResult);

  useEffect(() => {
    if (!searchInput) {
      return;
    }
    setSearchResultVisible(true);
    reqLocations(searchInput).then(
      (res: LocationData[]) => {
        dispatch(setLocations({ locations: res }));
        // console.log(res);
      },
      (err) => {
        dispatch(setLocations({ locations: [] }));
        // throw Error(err);
        console.error(err);
      }
    );
  }, [dispatch, searchInput]);

  return (
    <SearchContainer>
      <input
        type="text"
        className="search-container-input"
        placeholder="Type your location (๑•̀ㅂ•́)و✧ "
        onChange={debouncedInputChanged}
      />
      {/* <Locations/> */}
      {searchResultVisible && (
        <div className="search-result" ref = {ref_SearchResult}>
          {locations?.map((loc: LocationData, i) => {
            const { woeid, title, location_type } = loc;
            const key = `${woeid}`;
            return (
              <LocationItem
                key={key}
                id={key}
                cityName={`${title} ${location_type}`}
                hiddenSearchResult={hiddenSearchResult}
              />
            );
          })}
        </div>
      )}
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  --searchBgColor: ${({ theme }) => theme.search.bgColor};
  --searchInputColor: ${({ theme }) => theme.search.input.color};
  --searchInputPlaceHolderColor: ${({ theme }) => theme.search.input.placeHolderColor};
  --resultBgColor:  ${({ theme }) => theme.search.result.bgColor};
  --resultItemColor: ${({ theme }) => theme.search.result.item.color};
  --resultItemHoverBgColor: ${({ theme }) => theme.search.result.item.hoverBgColor};
  --seperatorColor: ${({ theme }) => theme.search.result.seperator.color};
  
  position: relative; // search-result locate
`;
