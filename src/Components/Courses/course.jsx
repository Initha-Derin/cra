import React from "react";


class Course extends React.Component {
    render() {
        return (
            <div className="col-md-3">
            <div className="card mt-3 mb-3">
                    <img src={this.props.coursedetails.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.coursedetails.title}</h5>
                        <p className="card-text">Price: ₹ {this.props.coursedetails.price}</p>
                        <p className="card-text">Rating: 🌟{this.props.coursedetails.rating}</p>
                        <p className="card-text">Likes: ❤️{this.props.coursedetails.likes}</p>
                        
                    </div>
            </div>
            </div>
        );
    }
}

export default Course;