import React from 'react';
import Block from '../../commons/Block';
import {AppBar} from '../../commons/AppBar';
import {IconButton} from '../../commons/IconButton';
import {CustomText} from '../../commons/CustomText';
import {CustomPageBack} from '../../commons/CustomPageBack';

const AboutUsPage = ({navigation}) => {
  return (
    <CustomPageBack
      header={
        <AppBar
          title={'About Us'}
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
        <CustomText>About Us Page</CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default AboutUsPage;
