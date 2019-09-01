//Parent globals
global.React = require('react');
global.ReactNative = require('react-native');
global.React.PropTypes = require("prop-types");

//React native components
global.ActivityIndicator = ReactNative.ActivityIndicator;
global.Button = ReactNative.Button;
global.FlatList = ReactNative.FlatList;
global.Image = ReactNative.Image;
global.KeyboardAvoidingView  = ReactNative.KeyboardAvoidingView;
global.Modal = ReactNative.Modal;
global.Picker = ReactNative.Picker;
global.RefreshControl = ReactNative.RefreshControl;
global.ScrollView = ReactNative.ScrollView;
global.SectionList = ReactNative.SectionList;
global.StatusBar = ReactNative.StatusBar;
global.StyleSheet = ReactNative.StyleSheet;
global.Switch = ReactNative.Switch;
global.Text = ReactNative.Text;
global.TextInput = ReactNative.TextInput;
global.TouchableHighlight = ReactNative.TouchableHighlight;
global.TouchableNativeFeedback = ReactNative.TouchableNativeFeedback;
global.TouchableOpacity = ReactNative.TouchableOpacity;
global.TouchableWithoutFeedback = ReactNative.TouchableWithoutFeedback;
global.View = ReactNative.View;
global.VirtualizedList = ReactNative.VirtualizedList;

// APIS
global.AccessibilityInfo = ReactNative.AccessibilityInfo;
global.Alert = ReactNative.Alert;
global.Animated = ReactNative.Animated;
global.AppRegistry = ReactNative.AppRegistry;
global.AppState = ReactNative.AppState;
global.BackHandler = ReactNative.BackHandler;
global.Clipboard = ReactNative.Clipboard;
global.DeviceEventEmitter = ReactNative.DeviceEventEmitter;
global.Dimensions = ReactNative.Dimensions;
global.Easing = ReactNative.Easing;
global.InteractionManager = ReactNative.InteractionManager;
global.Keyboard = ReactNative.Keyboard;
global.LayoutAnimation = ReactNative.LayoutAnimation;
global.Linking = ReactNative.Linking;
global.NativeAppEventEmitter = ReactNative.NativeAppEventEmitter;
global.NativeMethodsMixin = ReactNative.NativeMethodsMixin;
global.NativeModules = ReactNative.NativeModules;
global.PanResponder = ReactNative.PanResponder;
global.PixelRatio = ReactNative.PixelRatio;
global.Platform = ReactNative.Platform;
global.Settings = ReactNative.Settings;
global.Share = ReactNative.Share;
global.StyleSheet = ReactNative.StyleSheet;
global.Systrace = ReactNative.Systrace;
global.Vibration = ReactNative.Vibration;

//Device info
global.DeviceHeight = Dimensions.get("window").height;
global.DeviceWidth = Dimensions.get("window").width;

