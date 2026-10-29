
import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name, description, picture}) => {
    return (
        <View>
            <Text style={{
                fontSize: 22,
                color: 'blue',
                textTransform: 'uppercase'
            }}>
                <FontAwesome6 name="ship" size={22} color="blue" />
                {' '}{name}
            </Text>

            <Text>
                {description}
            </Text>

            <Image
                source={picture}
                style={{width: 400, height: 250}}
            />

            <Text></Text>
        </View>
    );
};

export default Boat;
