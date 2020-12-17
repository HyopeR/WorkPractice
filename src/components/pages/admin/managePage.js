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
          title={'Manage'}
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
        <CustomText>Manage Page</CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default ManagePage;
