import React, { Component } from "react";
class Counter extends React.Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
    };

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <span
                    // style={{ fontWeight: "bold", fontSize: 20 }}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.handleIncrement({ id: 1 })} //use arrow function when you need to pass an argument
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
