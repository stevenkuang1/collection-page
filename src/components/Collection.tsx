import Banner from "./Banner";
import Grid from "./Grid";
import { getCollectionSlug } from "./helpers/api";
import { CollectionDetail } from "./helpers/types";
import { useEffect, useState } from "react";

function Collection() {
  const [collection, setCollection] = useState<CollectionDetail | undefined>();
  const [isLoadingCollection, setIsLoadingCollection] = useState<boolean>(true);
  const [errorLoading, setErrorLoading] = useState<boolean>(false);

  useEffect(() => {
    getCollectionSlug()
      .then((data) => {
        setCollection(data);
        setIsLoadingCollection(false);
      })
      .catch(() => setErrorLoading(true));
  }, []);

  return (
    <>
      <Banner
        error={errorLoading}
        collection={collection}
        isLoadingCollection={isLoadingCollection}
      />
      <Grid attributes={collection?.attributes} />
    </>
  );
}

export default Collection;
