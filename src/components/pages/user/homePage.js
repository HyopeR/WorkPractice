import React, {useEffect} from 'react';
import {AppBar} from '../../commons/AppBar';
import Block from '../../commons/Block';
import {IconButton} from '../../commons/IconButton';
import {useSelector} from 'react-redux';
import {CustomText} from '../../commons/CustomText';
import {CustomPageBack} from '../../commons/CustomPageBack';

const HomePage = ({navigation}) => {
  const userRepo = useSelector((state) => state.user);

  useEffect(() => {}, []);

  return (
    <CustomPageBack
      header={
        <AppBar
          title={'Home'}
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
      <Block middle flex={1} column>
        <Block center>
          <CustomText style={{fontSize: 16}}>
            User Email: {userRepo.data.email}
          </CustomText>

          <CustomText style={{fontSize: 16}}>
            User Type: {userRepo.data.type}
          </CustomText>
          <CustomText
            onPress={() => {
              navigation.push('Other');
            }}>
            Go to a different page.
          </CustomText>
        </Block>
      </Block>
    </CustomPageBack>
  );
};

export default HomePage;
