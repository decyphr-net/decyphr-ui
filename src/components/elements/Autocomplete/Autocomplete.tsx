import React from "react";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      matches: [],
      query: "",
      selected: false
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  handleKeyPress(event) {
    const { activeIndex, matches } = this.state;

    switch (event.which) {
      case 13: // Enter key
        if (matches.length) {
          this.setState({
            activeIndex: 0,
            matches: [],
            query: matches[activeIndex],
            selected: true
          });
        }
        break;
      case 38: // Up arrow
        this.setState({
          activeIndex: activeIndex >= 1 ? activeIndex - 1 : 0
        });
        break;
      case 40: // Down arrow
        this.setState({
          activeIndex:
            activeIndex < matches.length - 1
              ? activeIndex + 1
              : matches.length - 1
        });
        break;
      default:
        break;
    }
  }

  handleSelection(event, selection) {
    event.preventDefault();

    this.setState({
      activeIndex: 0,
      query: selection,
      matches: [],
      selected: true
    });
  }

  updateQuery(e) {
    const { data } = this.props;

    if (!this.state.selected) {
      const query = e.target.value;
      this.setState({
        matches:
          query.length >= 2
            ? data.filter(
              item => item.toUpperCase().indexOf(query.toUpperCase()) >= 0
            )
            : [],
        query
      });
    } else {
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        this.setState({
          matches: [],
          query: "",
          selected: false
        });
      }
    }
  }

  render() {
    const { label, name, placeholder } = this.props;
    const { activeIndex, matches, query } = this.state;

    return (
      <div className="field" style={{ width: "100%" }}>
        {label && <label className="label has-text-left">{label}</label>}
        <div className="control" style={{ width: "100%" }}>
          <div className={`dropdown ${matches.length > 0 ? "is-active" : ""}`} style={{ width: "100%" }}>
            <div className="dropdown-trigger" style={{ width: "100%" }}>
              <input
                type="text"
                className="input"
                name={name}
                value={query}
                onChange={this.updateQuery}
                onKeyDown={this.handleKeyPress}
                placeholder={placeholder}
                style={{ width: "1000%" }}
              />
            </div>
            <div className="dropdown-menu" style={{ width: "100%" }}>
              {matches.length > 0 && (
                <div className="dropdown-content" style={{ width: "100%" }}>
                  {matches.map((match, index) => (
                    <div className={`media dropdown-item`}
                      key={match}
                      onClick={event => this.handleSelection(event, match)}
                    >
                      <div className="media-left" style={{ display: "inline" }}>
                        <img src="https://via.placeholder.com/100" />
                      </div>
                      <div className={`media-content`} style={{ display: "inline", width: "100%" }}>
                        <p
                          style={{ position: "absolute", top: "0", display: "inline", fontSize: "2rem" }}
                        >
                          {match}
                        </p>
                        <p
                          style={{ position: "absolute", top: "75px", display: "inline-block", fontSize: "1rem" }}
                        >
                          {" "}- Written by JRR Tolkin in 1930
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
