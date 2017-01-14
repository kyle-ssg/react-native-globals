*** react-native-globals ***
Speeds development up for ***project specific*** component development as you don't have to worry/diagnose imported react native components.
This assigns every cross platform react native component and api to the global scope
***Usage***

 ```
import 'react-native-globals'
const TheComponent = class extends React.Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <View>
                <Text>Hi I didn't have to import anything to start making this component</Text>
            </View>
        );
    }
};

module.exports = TheComponent;

```