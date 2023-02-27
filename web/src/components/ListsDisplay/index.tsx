import React, { ReactNode } from "react";
import styled from "styled-components";

import { Card } from "@kleros/ui-components-library";
import ListRow from "./ListRow";
import { useIPFSQuery } from "../../hooks/useIPFSQuery";

export interface IItemInfo {
  itemId: string;
  label: string;
  status: string;
  itemsCount?: number | string;
  chainName?: string;
  url?: string;
  logoURI?: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
interface ListDisplayProps {
  data: any[];
}

const ListsDisplay: React.FC<ListDisplayProps> = ({ data }) => {
  return (
    <StyledCard>
      {data?.map((registry) => {
        console.log({ registry });
        return (
          <DataFetcher
            key={registry.id}
            url={registry?.registrationMetaEvidence?.URI}
          >
            {(data) => {
              if (!data) return <div>loading...</div>;
              console.log("metadata", data?.metadata);
              console.log("metadata logo", data?.metadata?.logoURI);
              return (
                <ListRow
                  itemId={registry.id}
                  label={data?.metadata?.tcrTitle}
                  logoURI={data?.metadata?.logoURI}
                  status="Included"
                  itemsCount={registry?.numberOfRegistered}
                  chainName={registry?.chainName}
                />
              );
            }}
          </DataFetcher>
        );
      })}
      {/*  {data &&
        data.map(({ Icon, label, url, itemsCount, status }, index) => (
          <ListRow key={index} {...{ Icon, label, url, itemsCount, status }} />
        ))} */}
    </StyledCard>
  );
};

export default ListsDisplay;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  font-size: 14px;
`;

interface DataFetcherProps {
  children: (data: any) => ReactNode;
  url: string;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, children }) => {
  const { data } = useIPFSQuery(url);

  return <>{children(data)}</>;
};
