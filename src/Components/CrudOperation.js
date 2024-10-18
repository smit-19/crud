import React, { Component } from 'react'

export default class CrudOperation extends Component {
    constructor() {
        super();
        this.state = {
          userDetails: {
            fname: "",
            lname: "",
            city: "",
          },
          userData: [],
          editIndex: null,
        };
      }

      handleChange = (e) => {
        this.setState({
          userDetails: {
            ...this.state.userDetails,
            [e.target.name]: e.target.value,
          },
        });
      };
    
      handleEdit = (item, index) => {
        this.setState({
          userDetails: item,
          editIndex: index,
        });
      };
    
      handleDelete = (index) => {
        const arr = this.state.userData;
        arr.splice(index, 1);
        console.log(arr, "index");
        this.setState({
          userData: arr,
        });
      };
    
      handleSubmit = () => {
        const arr = this.state.userData;
        if (this.state.editIndex !== null) {
          arr[this.state.editIndex] = this.state.userDetails;
        } else {
          arr.push(this.state.userDetails);
        }
        this.setState({
          userData: arr,
          editIndex: null,
        });
        this.handleReset();
      };
    
      handleReset = () => {
        this.setState({
          userDetails: {
            fname: "",
            lname: "",
            city: "",
          },
        });
      };
    
      render() {
        return (
          <>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            />
    
            <div>
              <div className="container">
                <h2>Contact Form</h2>
    
                <form>
                  <label htmlFor="fname" className="Form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={this.state.userDetails.fname}
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    id="fname"
                    name="fname"
                    placeholder="Your name.."
                  />
    
                  <label htmlFor="lname" className="Form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    value={this.state.userDetails.lname}
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                    name="lname"
                    placeholder="Your last name.."
                  />
    
                  <label htmlFor="city" className="Form-label">
                    city
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={this.state.userDetails.city}
                    className="form-control"
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="">Select city</option>
                    <option>surat</option>
                    <option>dang</option>
                    <option>bharuch</option>
                    <option>amreli</option>
                    <option>navsari</option>  
                    <option>ahemdabad</option>
                    <option>gandhinagar</option>
                    <option>rajkot</option>
                  </select>
                  <br />
                  <button
                    type="button"
                    value="Submit"
                    style={{ background: "chocolate" }}
                    onClick={() => this.handleSubmit()}
                  >
                    submit
                  </button>
                </form>
              </div>
              <br />
            </div>
    
            <div className="container">
              <table className='table table-danger'>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>city</th>
                  <th>Actions</th>
                </tr>
                {this.state.userData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.city}</td>
                    <td>
                      <button
                        style={{ background: "green" }}
                        type="button"
                        value="Edit"
                        onClick={() => this.handleEdit(item, index)}
                      >
                        Edit
                      </button>
                      <button
                        style={{ background: "red", marginLeft: 5 }}
                        type="button"
                        value="Delete"
                        onClick={() => this.handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </>
        );
      }
    }
    
