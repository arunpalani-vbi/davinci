import React from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: new Animated.Value(0),
            incompletePercentage: new Animated.Value(100),
        };
    }

    componentDidMount() {
        this.update(this.props.progress);
    }

    componentWillReceiveProps(newProps) {
        this.update(newProps.progress);
    }

    update(progress) {
        const percentage = progress;
        const incompletePercentage = Math.abs(percentage - 100);
        Animated.timing(this.state.percentage, {
            easing: Easing.inOut(Easing.ease),
            duration: 500,
            toValue: percentage
        }).start();
        Animated.timing(this.state.incompletePercentage, {
            easing: Easing.inOut(Easing.ease),
            duration: 500,
            toValue: incompletePercentage
        }).start();

    }

    render() {
        const progress = this.props.progress;
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                flex: 1,
                paddingTop: 5,
                paddingBottom: 15,
                paddingRight: 5,
                paddingLeft: 5
            },
            complete: {
                height: 10,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderTopRightRadius: progress === 100 ? 5 : 0,
                borderBottomRightRadius: progress === 100 ? 5 : 0,
            },
            incomplete: {
                height: 10,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: progress === 0 ? 5 : 0,
                borderBottomLeftRadius: progress === 0 ? 5 : 0,
            }
        });
        const interpolatedPercentage = this.state.percentage.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
        });
        const interpolatedIncompletePercentage = this.state.incompletePercentage.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
        });
        return (
            <View style={[styles.container, this.props.backgroundStyle]}>
                <Animated.View
                    style={[styles.complete, this.props.progressStyle, {flex: interpolatedPercentage}]}></Animated.View>
                <Animated.View
                    style={[styles.incomplete, this.props.incompleteStyle, {flex: interpolatedIncompletePercentage}]}></Animated.View>
            </View>
        );
    }
}

module.exports = ProgressBar;