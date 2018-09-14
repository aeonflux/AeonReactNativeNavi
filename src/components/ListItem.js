import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

    onRowPress() {
        //  Navigate to Employee Edit
        // Only by tapping on the row should pass a prop of an employee
        this.props.navigation.navigate("EmployeeEdit", { employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>

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