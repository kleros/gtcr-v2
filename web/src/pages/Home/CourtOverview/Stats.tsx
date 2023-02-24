import React from "react";
import styled from "styled-components";
import { utils, BigNumber } from "ethers";
import { Card } from "@kleros/ui-components-library";
import StatDisplay, { IStatDisplay } from "components/StatDisplay";
import PNKIcon from "svgs/icons/pnk.svg";
import EthereumIcon from "svgs/icons/ethereum.svg";
import PNKRedistributedIcon from "svgs/icons/redistributed-pnk.svg";
import JurorIcon from "svgs/icons/user.svg";
import BalanceIcon from "svgs/icons/law-balance.svg";

const StyledCard = styled(Card)`
  width: auto;
  height: fit-content;
  padding: 16px;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const getLastOrZero = (src: HomePageQueryDataPoints) =>
  src.length > 0 ? src.at(-1)?.value : BigNumber.from(0).toString();

interface IStat {
  title: string;
  getText: (data: HomePageQuery) => string;
  getSubtext: (data: HomePageQuery) => string;
  color: IStatDisplay["color"];
  icon: React.FC<React.SVGAttributes<SVGElement>>;
}

const stats: IStat[] = [
  {
    title: "Total",
    getText: ({ pnkstakedDataPoints }) =>
      utils.commify(utils.formatUnits(getLastOrZero(pnkstakedDataPoints), 18)),
    getSubtext: () => "in 3 Networks",
    color: "purple",
    icon: BalanceIcon,
  },
  {
    title: "Total",
    getText: ({ ethpaidDataPoints }) =>
      utils.commify(utils.formatEther(getLastOrZero(ethpaidDataPoints))),
    getSubtext: () => "Curated",
    color: "blue",
    icon: EthereumIcon,
  },
  {
    title: "All time deposit",
    getText: ({ pnkredistributedDataPoints }) =>
      utils.commify(
        utils.formatUnits(getLastOrZero(pnkredistributedDataPoints), 18)
      ),
    getSubtext: () => "100 ETH",
    color: "green",
    icon: PNKRedistributedIcon,
  },
  {
    title: "Curators",
    getText: ({ activeJurorsDataPoints }) =>
      getLastOrZero(activeJurorsDataPoints),
    getSubtext: () => "36 active",
    color: "orange",
    icon: JurorIcon,
  },
];

const Stats = () => {
  return (
    <StyledCard>
      {/*  {stats.map(({ title, getText, getSubtext, color, icon }, i) => {
        return (
          <StatDisplay
            key={i}
            {...{ title, color, icon }}
            text={data ? getText(data) : "Fetching..."}
            subtext={data ? getSubtext(data) : "Fetching..."}
          />
        );
      })} */}
    </StyledCard>
  );
};

export default Stats;
