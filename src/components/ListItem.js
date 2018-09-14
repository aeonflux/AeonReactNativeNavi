import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './EmployeeCreate';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee

        return (
            <CardSection>
                <Text>
                    {name}
                </Text>
            </CardSection>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeftL: 15
    }
}
export default ListItem;