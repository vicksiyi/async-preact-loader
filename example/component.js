window.__PREACT_COMPONENT__ = (h, Component) => {
    class Main extends Component {
        render() {
            return h('div', {}, ["Hello World"]);
        }
    }
    return Main;
};