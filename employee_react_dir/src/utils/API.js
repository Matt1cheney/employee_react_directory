import axios from "axios";

export default {
  // Gets all posts
  getEmployees: function() {
    return axios.get("/api/employees");
  },
  // Gets the Employee with the given id
  getEmployeeByEmail: function(email) {
    return axios.get("/api/employees/" + email);
  },
  getEmployeeByFullName: function(fullName) {
    return axios.get("/api/employees/" + fullName);
  },
  // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/employee/" + id);
  // },
  //  Saves a post to the database
  // savePost: function(postData) {
  //   return axios.post("/api/employee", postData);
  // }
};
