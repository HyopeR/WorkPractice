import React from 'react';
import Block from '../../commons/Block';
import {AppBar} from '../../commons/AppBar';
import {IconButton} from '../../commons/IconButton';
import {CustomText} from '../../commons/CustomText';
import {CustomPageBack} from '../../commons/CustomPageBack';

const ManagePage = ({navigation}) => {
  return (
    <CustomPageBack
      header={
        <AppBar
          title={'Manage Page'}
          leftChildren={
            <IconButton
              iconName={'arrow-left'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() => navigation.openDrawer()}
            />
          }
        />
      }>
      <Block middle center flex={1}>
        <CustomText>Other Page</CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default ManagePage;
