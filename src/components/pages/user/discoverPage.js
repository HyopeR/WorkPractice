import React from 'react';
import {AppBar} from '../../commons/AppBar';
import Block from '../../commons/Block';
import {IconButton} from '../../commons/IconButton';
import {CustomPageBack} from '../../commons/CustomPageBack';
import {CustomText} from '../../commons/CustomText';

const DiscoverPage = ({navigation}) => {
  return (
    <CustomPageBack
      header={
        <AppBar
          title={'Discover'}
          leftChildren={
            <IconButton
              iconName={'th-list'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() => navigation.openDrawer()}
            />
          }
        />
      }>
      <Block middle center flex={1}>
        <CustomText>Discover Page</CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default DiscoverPage;
