***react-native-globals***
Speeds development up for ***project specific*** components, it assigns react native apis and components to the global scope so you don't have to worry/diagnose several imports for every page/widget.


 ```
import 'react-native-globals';
const TheComponent = class extends React.Component {
    displayName: 'TheComponent';

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

*note: this is part of the 1% where I feel using global scope is fine and helps development.*
