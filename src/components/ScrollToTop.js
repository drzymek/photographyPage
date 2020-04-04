import React from 'react';
import classnames from 'classnames';

const scrollToTop = () => {
    const appTop = document.querySelector('.app').offsetTop;
    window.scroll({
        top: appTop,
        behavior: 'smooth'
    })
}


class ScrollToTop extends React.Component {
    state = {
        prevScrollPos: window.pageYOffset,
        isScrollToTopBtnVisible: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        })
    }

    showBtn
    render() {
        return (
            <>
                <button className={classnames("scrollToTopBtn ", { "on": !this.state.visible })} onClick={scrollToTop}>
                    <i className="fas fa-angle-up"></i>
                </button>
            </>
        );
    }
}

export default ScrollToTop;