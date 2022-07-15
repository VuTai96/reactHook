import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
    state = {
        count: 6
    }

    /* re render() when call this.setState*/
    /* run one time after render mouting*/
    componentDidMount() {
        //console.log('didmount')
        this.timmer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);

    }
    /*Run when state change (after render)*/
    componentDidUpdate(preProps, preState) {
        //console.log('didupdate')
        if (this.state.count === 0) {
            if (this.timmer) {

                clearInterval(this.timmer);
                this.props.timeup();
            }
        }
    }
    componentWillUnmount() {
        if (this.timmer) {
            clearInterval(this.timmer);
            console.log('>>> exit count class');
        }
    }

    render() {
        return (
            <>
                {/* {console.log('render')} */}
                < div > {this.state.count} class</div >
            </>
        )
    }
}

/* re render <=> call setCount ...?*/
/* useEffect(f,[]) <=> componentDidMount */
/* useEffect(f,[count]) <=> componentDidMount + componentDidUpdate */
/* useEffect(()=>{return (f-return)},[count]): 
khi gọi lại hàm useEffect nhờ biens count thay đổi
hoặc điều hướng sang navigator khác ( <=> companentWillUnmount) thì thực hiện ngay hàm f-return */

const NewCountDown = (props) => {
    const [count, setCount] = useState(6);

    useEffect(() => {
        if (count === 0) {
            props.timeup()
            return;
        }

        let timer = setInterval(() => {
            // console.log('runme')
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
            console.log('>>> exit count hooks')
        }
        // thêm comment sau để abort lỗi react-hooks/exhaustive-deps
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return (
        <>
            {/* {console.log('render')} */}
            <div>{count} hooks</div>
        </>
    )
}
export { CountDown, NewCountDown };