import { useState, useEffect, useCallback } from "react";
import {
  GridDiv,
  GridContainer,
  SelectSort,
  SearchSort,
  CompletedLoadingText,
} from "../style/GridStyle";
import { getCollectionItems } from "./helpers/api";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { Flex } from "../style/FlexStyle";
import Filter from "./Filter";
import { BackgroundDiv } from "../style/BackgroundStyle";
import { theme } from "../style/Theme";
import { Container } from "../style/ContainerStyle";
import { SORT_OPTIONS } from "./helpers/constants";
import Searchbar from "./SearchBar";
import Error from "./Error";
import { GridProps, CollectionItem, SearchAttributes } from "./helpers/types";

//Grid fir displaying NFT along with filters
function Grid({ attributes }: GridProps) {
  const [isLoadingItems, setIsLoadingItems] = useState<boolean>(true);
  const [errorLoading, setErrorLoading] = useState<boolean>(false);
  const [items, setItems] = useState<CollectionItem[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("price_asc");
  const [query, setQuery] = useState<string>("");
  const [attr, setAttr] = useState<SearchAttributes[]>([]);

  // reload/load Cards on param updates
  useEffect(() => {
    getCollectionItems({
      page: activePage,
      sortBy: sortBy,
      query: query,
      attr: attr,
    })
      .then((data) => {
        setIsLoadingItems(false);
        setItems((items) => items.concat(data));
        if (data === undefined || data.length === 0) {
          setHasMore(false);
        }
      })
      .catch(() => setErrorLoading(true));
  }, [activePage, sortBy, query, attr]);

  // reset Cards on any changes to params
  const reset = () => {
    setItems([]);
    setActivePage(1);
    setHasMore(true);
  };

  const updateSortBy = (e: any) => {
    reset();
    setSortBy(e.target.value);
  };

  function updateQuery(value: string) {
    reset();
    setQuery(value);
  }

  const updateAttr = useCallback(
    (value: { traitType: string; values: string[] }) => {
      reset();
      if (attr.length === 0 && value.values.length > 0) {
        // add attribute if none are stated
        setAttr(attr.concat([value]));
      } else {
        let processed: boolean = false;
        attr.filter((element, index) => {
          if (element.traitType === value.traitType) {
            // if attribute is found in the filter set already, then remove it
            attr[index].values = value.values;
            if (attr[index].values.length === 0) {
              attr.splice(index, 1);
            }
            processed = true;
            setAttr(attr.concat([]));
          }
          return null;
        });
        if (!processed && value.values.length > 0) {
          // if attribute was not found in the filter set, then add it
          setAttr(attr.concat([value]));
        }
      }
    },
    [attr]
  );

  return (
    <BackgroundDiv color={theme.white}>
      <Container>
        <GridContainer>
          <SearchSort show={!isLoadingItems}>
            <Searchbar updateQuery={updateQuery} />
            <SelectSort value={sortBy} onChange={updateSortBy}>
              {SORT_OPTIONS.map((sortType, index) => (
                <option key={index} value={sortType.value}>
                  {sortType.name}
                </option>
              ))}
            </SelectSort>
          </SearchSort>
          <Flex direction="row">
            <Filter
              show={!isLoadingItems}
              updateAttr={updateAttr}
              attributes={attributes}
            />
            <InfiniteScroll
              dataLength={items.length!}
              next={() => setActivePage(activePage + 1)}
              hasMore={hasMore}
              scrollThreshold={0}
              loader={
                <CompletedLoadingText show={!isLoadingItems}>
                  Loading...
                </CompletedLoadingText>
              }
            >
              <GridDiv>
                {items.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </GridDiv>
              <Error error={errorLoading} content={"Collection"} />
            </InfiniteScroll>
          </Flex>
        </GridContainer>
      </Container>
    </BackgroundDiv>
  );
}

export default Grid;
