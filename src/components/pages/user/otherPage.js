import React from 'react';
import Block from '../../commons/Block';
import {AppBar} from '../../commons/AppBar';
import {IconButton} from '../../commons/IconButton';
import {CustomPageBack} from '../../commons/CustomPageBack';
import {CustomText} from '../../commons/CustomText';

const OtherPage = ({navigation}) => {
  return (
    <CustomPageBack
      header={
        <AppBar
          title={'Other Page'}
          leftChildren={
            <IconButton
              iconName={'arrow-left'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() => navigation.pop()}
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

export default OtherPage;
