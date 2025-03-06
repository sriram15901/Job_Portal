// // script.js

// // Submit Applicant Form
// document.getElementById("applicantForm")?.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let skills = Array.from(document.getElementById("skills").selectedOptions).map(option => option.value);
//   let experience = document.getElementById("experience").value;
//   let education = document.getElementById("education").value;
//   let resume = document.getElementById("resume").value.split("\\").pop();

//   let applicant = { name, email, phone, skills, experience, education, resume, status: "Pending" };
//   let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
//   applicants.push(applicant);
//   localStorage.setItem("applicants", JSON.stringify(applicants));

//   alert("Application Submitted Successfully!");
//   document.getElementById("applicantForm").reset();
// });

// // Display Applicants on HR Dashboard
// if (window.location.pathname.includes("hr_dashboard.html")) {
//   window.onload = function () {
//       let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
//       let applicantTable = document.getElementById("applicantTable");

//       applicants.forEach((applicant, index) => {
//           let row = `<tr>
//                       <td>${applicant.name}</td>
//                       <td>${applicant.email}</td>
//                       <td>${applicant.phone}</td>
//                       <td>${applicant.skills.join(", ")}</td>
//                       <td>${applicant.experience}</td>
//                       <td>${applicant.status}</td>
//                       <td>
//                           <button class="btn btn-primary btn-sm" onclick="scheduleInterview(${index})">Schedule</button>
//                       </td>
//                   </tr>`;
//           applicantTable.innerHTML += row;
//       });
//   };
// }

// // Schedule Interview Function
// function scheduleInterview(index) {
//   let applicants = JSON.parse(localStorage.getItem("applicants"));
//   applicants[index].status = "Interview Scheduled";
//   localStorage.setItem("applicants", JSON.stringify(applicants));
//   alert("Interview Scheduled Successfully!");
//   location.reload();
// }

// // Display Scheduled Candidates on Interviewer Page
// if (window.location.pathname.includes("interviewer.html")) {
//   window.onload = function () {
//       let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
//       let interviewTable = document.getElementById("interviewTable");

//       applicants.filter(applicant => applicant.status === "Interview Scheduled")
//                 .forEach((applicant, index) => {
//                     let row = `<tr>
//                                   <td>${applicant.name}</td>
//                                   <td>${applicant.email}</td>
//                                   <td>${applicant.skills.join(", ")}</td>
//                                   <td><button class="btn btn-success btn-sm" onclick="submitFeedback(${index})">Submit Feedback</button></td>
//                               </tr>`;
//                     interviewTable.innerHTML += row;
//                 });
//   };
// }

// // Submit Feedback Function
// function submitFeedback(index) {
//   let feedback = prompt("Enter Feedback (Recommend / Not Recommend):");
//   if (feedback) {
//       let applicants = JSON.parse(localStorage.getItem("applicants"));
//       applicants[index].status = feedback === "Recommend" ? "Recommended" : "Not Recommended";
//       localStorage.setItem("applicants", JSON.stringify(applicants));
//       alert("Feedback Submitted!");
//       location.reload();
//   }
// }

// // Display Final Decision on HR Final Page
// if (window.location.pathname.includes("hr_final.html")) {
//   window.onload = function () {
//       let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
//       let finalTable = document.getElementById("finalTable");

//       applicants.filter(applicant => applicant.status === "Recommended" || applicant.status === "Not Recommended")
//                 .forEach((applicant, index) => {
//                     let row = `<tr>
//                                   <td>${applicant.name}</td>
//                                   <td>${applicant.email}</td>
//                                   <td>${applicant.skills.join(", ")}</td>
//                                   <td>${applicant.status}</td>
//                                   <td>
//                                       <button class="btn btn-primary btn-sm" onclick="finalDecision(${index}, 'Hired')">Hire</button>
//                                       <button class="btn btn-danger btn-sm" onclick="finalDecision(${index}, 'Rejected')">Reject</button>
//                                   </td>
//                               </tr>`;
//                     finalTable.innerHTML += row;
//                 });
//   };
// }

// // Final Decision Function
// function finalDecision(index, decision) {
//   let applicants = JSON.parse(localStorage.getItem("applicants"));
//   applicants[index].status = decision;
//   localStorage.setItem("applicants", JSON.stringify(applicants));
//   alert(`Candidate ${decision} Successfully!`);
//   location.reload();
// }
