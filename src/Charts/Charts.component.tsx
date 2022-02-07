import { FC } from 'react';
import {
  ChartContainer,
  HelmetContainer,
  HelmetLeft,
  HelmetRight,
  HelmetTitle,
  MusicStickContainer,
  MusicStickList,
  SongImg,
  TodayChartContainer,
  TodayChartSubTitle,
  TodayChartTitle,
} from './Charts.styled';
import { song1PNG, song2PNG, song3PNG, song4PNG, song5PNG } from './mock/songs';

const ChartsComponent: FC = () => {
  return (
    <ChartContainer>
      <HelmetContainer>
        <HelmetLeft>{'<'}</HelmetLeft>
        <HelmetTitle>Charts</HelmetTitle>
        <HelmetRight>{'>'}</HelmetRight>
      </HelmetContainer>
      <TodayChartContainer>
        <TodayChartTitle>오늘 Top 100</TodayChartTitle>
        <TodayChartSubTitle>2월 7일 오전 7시 업데이트</TodayChartSubTitle>
        <MusicStickList>
          <MusicStickContainer>
            <SongImg src={song1PNG} alt="song1" />
          </MusicStickContainer>
          <MusicStickContainer>
            <SongImg src={song2PNG} alt="song2" />
          </MusicStickContainer>
          <MusicStickContainer>
            <SongImg src={song3PNG} alt="song3" />
          </MusicStickContainer>
          <MusicStickContainer>
            <SongImg src={song4PNG} alt="song4" />
          </MusicStickContainer>
          <MusicStickContainer>
            <SongImg src={song5PNG} alt="song5" />
          </MusicStickContainer>
        </MusicStickList>
      </TodayChartContainer>
    </ChartContainer>
  );
};

export { ChartsComponent };
