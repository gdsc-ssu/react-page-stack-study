import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const HelmetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid white;
`;

const HelmetTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const HelmetLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 3rem;
  color: white;
  cursor: pointer;
`;

const HelmetRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 3rem;
  color: white;
  cursor: pointer;
`;

const TodayChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
`;

const TodayChartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const TodayChartSubTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 400;
  color: gray;
`;

const MusicStickList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 20rem;
`;

const MusicStickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const SongImg = styled.img`
  object-fit: contain;
  height: 3rem;
`;

export {
  ChartContainer,
  HelmetContainer,
  HelmetTitle,
  HelmetLeft,
  HelmetRight,
  TodayChartContainer,
  TodayChartTitle,
  TodayChartSubTitle,
  MusicStickList,
  MusicStickContainer,
  SongImg,
};
