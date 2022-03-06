import theme from '../../../assets/theme/theme';
import { selectIsDark } from '../../../store/slices/themSlice';
import { SCREEN_WIDTH } from '../../../utils/scaling';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSelector } from 'react-redux';
import { PageView } from '..';

export const Skelton = () => {
  const isDark = useSelector(selectIsDark);

  return (
    <PageView>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonPlaceholder
          key={index}
          backgroundColor={
            isDark ? theme.colors.background.dark : theme.colors.lightGray
          }>
          <SkeletonPlaceholder.Item
            marginTop={15}
            flexDirection="row"
            alignItems="center">
            <SkeletonPlaceholder.Item
              width={100}
              height={100}
              borderRadius={15}
            />
            <SkeletonPlaceholder.Item
              width={SCREEN_WIDTH * 0.7}
              height={100}
              borderRadius={6}
              marginLeft={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ))}
    </PageView>
  );
};
