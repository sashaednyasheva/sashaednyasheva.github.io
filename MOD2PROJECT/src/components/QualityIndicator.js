import React from 'react';

class QualityIndicator extends React.Component {
    render() {
        return (
            <div className="qualityIndicatorBox">
              <div>
                <h6 style={{ margin: 0 }}>{this.props.indicatorName}</h6>
                <div style={{ height: "8px" }} />
                <p
                  style={
                    this.props.score > 5
                      ? { color: "#76ff03", margin: 0 }
                      : { color: "#ff8a65", margin: 0 }
                  }
                >
                  {this.props.score}
                </p>
              </div> 
                
            </div>
        );
    }
}

export default QualityIndicator;
